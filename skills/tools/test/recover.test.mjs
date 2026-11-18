// Findings 2-6: recover-skills.mjs containment, cache/version keys, entity decoding, malformed JSONL.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { run, tmp, rm, skillText, writeJson, snapshot } from "./util.mjs";

const STALE = "1-5w-nodate-aaaaaaaaaaaa.txt"; // matches the tool's own version-file name pattern
const env = { ...process.env, SKILLS_OVERLAY: "" };
const recover = (args) => run("recover-skills.mjs", ["--min-words", "20", ...args], { env });
const msg = (text) => ({ messages: [{ role: "assistant", content: text }] });
const versionFiles = (dir) => fs.readdirSync(dir).filter((f) => /^\d+-\d+w-/.test(f));

function world() {
  const w = tmp("recover-test-");
  const out = path.join(w, "out"), outside = path.join(w, "outside"), input = path.join(w, "export.json");
  fs.mkdirSync(out); fs.mkdirSync(outside);
  return { w, out, outside, input };
}

// ---- F2: symlinks
test("F2 a symlinked skill directory is not written through", () => {
  const t = world();
  try {
    writeJson(t.input, msg(skillText("example-skill")));
    fs.symlinkSync(t.outside, path.join(t.out, "example-skill"));
    const r = recover(["--out", t.out, t.input]);
    assert.notEqual(r.status, 0, r.out);
    assert.deepEqual(fs.readdirSync(t.outside), [], "recovered text was written outside --out");
  } finally { rm(t.w); }
});

test("F2 stale-file cleanup does not follow a symlinked skill directory", () => {
  const t = world();
  try {
    writeJson(t.input, msg(skillText("example-skill")));
    fs.writeFileSync(path.join(t.outside, STALE), "not ours to delete");
    fs.symlinkSync(t.outside, path.join(t.out, "example-skill"));
    recover(["--out", t.out, t.input]);
    assert.ok(fs.existsSync(path.join(t.outside, STALE)), "file outside --out was deleted through the symlink");
  } finally { rm(t.w); }
});

test("F2 a symlinked INDEX.md is not written through", () => {
  const t = world();
  try {
    writeJson(t.input, msg(skillText("example-skill")));
    const victim = path.join(t.outside, "victim.txt");
    fs.writeFileSync(victim, "original");
    fs.symlinkSync(victim, path.join(t.out, "INDEX.md"));
    recover(["--out", t.out, t.input]);
    assert.equal(fs.readFileSync(victim, "utf8"), "original", "file outside --out was overwritten through INDEX.md");
  } finally { rm(t.w); }
});

test("F2 an ordinary run still writes versions and INDEX.md", () => {
  const t = world();
  try {
    writeJson(t.input, msg(skillText("example-skill")));
    const r = recover(["--out", t.out, t.input]);
    assert.equal(r.status, 0, r.out);
    assert.equal(versionFiles(path.join(t.out, "example-skill")).length, 1);
    assert.ok(fs.existsSync(path.join(t.out, "INDEX.md")));
  } finally { rm(t.w); }
});

test("F2 a stale version from an earlier run is replaced", () => {
  const t = world();
  try {
    writeJson(t.input, msg(skillText("example-skill")));
    fs.mkdirSync(path.join(t.out, "example-skill"));
    fs.writeFileSync(path.join(t.out, "example-skill", STALE), "old");
    assert.equal(recover(["--out", t.out, t.input]).status, 0);
    assert.ok(!fs.existsSync(path.join(t.out, "example-skill", STALE)));
  } finally { rm(t.w); }
});

// ---- F3: names with separators / ".." reach cleanup
for (const bad of ["../archive", "a/b"]) {
  test(`F3 --name ${bad} deletes nothing outside --out`, () => {
    const t = world();
    try {
      const sibling = path.join(t.w, bad === "a/b" ? "out/a/b" : "archive");
      fs.mkdirSync(sibling, { recursive: true });
      fs.writeFileSync(path.join(sibling, STALE), "keep");
      writeJson(t.input, msg(`${bad}\nUse when you need to test it.\nInstructions\n` + "word ".repeat(40)));
      const r = recover(["--out", t.out, "--name", bad, t.input]);
      assert.ok(fs.existsSync(path.join(sibling, STALE)), "stale file was deleted before containment was checked\n" + r.out);
      assert.notEqual(r.status, 0, r.out);
    } finally { rm(t.w); }
  });
}

// ---- F4: keys must be the exact text
test("F4 a flattened copy seen first does not hide the formatted skill", () => {
  const t = world();
  try {
    const formatted = skillText("example-skill");
    const flattened = formatted.replace(/\n/g, " ");
    writeJson(t.input, { messages: [{ role: "user", content: flattened }, { role: "assistant", content: formatted }] });
    const r = recover(["--out", t.out, t.input]);
    assert.equal(r.status, 0, r.out);
    const files = fs.existsSync(path.join(t.out, "example-skill")) ? versionFiles(path.join(t.out, "example-skill")) : [];
    assert.equal(files.length, 1, "formatted skill was not recovered\n" + r.out);
    assert.equal(fs.readFileSync(path.join(t.out, "example-skill", files[0]), "utf8"), formatted);
  } finally { rm(t.w); }
});

test("F4 formatting-distinct texts stay distinct versions", () => {
  const t = world();
  try {
    const a = skillText("example-skill"), b = skillText("example-skill", "", "\n\n");
    writeJson(t.input, { messages: [{ role: "assistant", content: a }, { role: "assistant", content: b }] });
    const r = recover(["--out", t.out, t.input]);
    assert.equal(r.status, 0, r.out);
    const files = versionFiles(path.join(t.out, "example-skill"));
    assert.equal(files.length, 2, r.out);
    const bodies = files.map((f) => fs.readFileSync(path.join(t.out, "example-skill", f), "utf8")).sort();
    assert.deepEqual(bodies, [a, b].sort());
  } finally { rm(t.w); }
});

// ---- F5: literal entities
test("F5 literal &lt; &amp;lt; &quot; survive into the recovered text", () => {
  const t = world();
  try {
    const text = skillText("example-skill", "Write &lt;b&gt; and &amp;lt; and &quot;x&quot; literally.");
    writeJson(t.input, msg(text));
    const r = recover(["--out", t.out, t.input]);
    assert.equal(r.status, 0, r.out);
    const dir = path.join(t.out, "example-skill");
    assert.equal(fs.readFileSync(path.join(dir, versionFiles(dir)[0]), "utf8"), text);
  } finally { rm(t.w); }
});

// ---- F6: malformed JSONL
test("F6 a malformed JSONL line exits 2 and leaves the previous output untouched", () => {
  const t = world();
  try {
    const f = path.join(t.w, "export.jsonl");
    fs.writeFileSync(f, JSON.stringify(msg(skillText("example-skill"))) + "\n{this is not json\n");
    fs.mkdirSync(path.join(t.out, "example-skill"));
    fs.writeFileSync(path.join(t.out, "example-skill", STALE), "previous result");
    const before = snapshot(t.out);
    const r = recover(["--out", t.out, f]);
    assert.equal(r.status, 2, r.out);
    assert.match(r.out, /export\.jsonl.*line 2/);
    assert.deepEqual(snapshot(t.out), before, "output was modified");
  } finally { rm(t.w); }
});

test("F6 an entirely corrupt export does not exit 0", () => {
  const t = world();
  try {
    const f = path.join(t.w, "export.ndjson");
    fs.writeFileSync(f, "garbage\nmore garbage\n");
    const r = recover(["--out", t.out, f]);
    assert.equal(r.status, 2, r.out);
  } finally { rm(t.w); }
});

test("F6 a clean JSONL file (blank lines allowed) is still read", () => {
  const t = world();
  try {
    const f = path.join(t.w, "export.jsonl");
    fs.writeFileSync(f, JSON.stringify(msg(skillText("example-skill"))) + "\n\n");
    const r = recover(["--out", t.out, f]);
    assert.equal(r.status, 0, r.out);
    assert.equal(versionFiles(path.join(t.out, "example-skill")).length, 1);
  } finally { rm(t.w); }
});
