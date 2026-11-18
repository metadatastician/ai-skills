// Finding 1: manifest name / section place must not reach deletion or writes outside the skill directory.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { build } from "../build.mjs";
import { tmp, rm } from "./util.mjs";

function fixture(manifest) {
  const root = tmp("build-test-");
  const dir = path.join(root, "data", "evil");
  fs.mkdirSync(path.join(dir, "sections"), { recursive: true });
  fs.writeFileSync(path.join(dir, "manifest.json"), JSON.stringify(manifest));
  fs.writeFileSync(path.join(dir, "sections", "a.md"), "text\n");
  const out = path.join(root, "outer", "skills");
  fs.mkdirSync(out, { recursive: true });
  fs.writeFileSync(path.join(root, "outer", "sentinel.txt"), "keep me");
  fs.writeFileSync(path.join(out, "other-skill.txt"), "keep me too");
  return { root, out, sentinel: path.join(root, "outer", "sentinel.txt") };
}
// Run the build and keep the outcome, so the damage assertions run (and report) before the throw assertion.
function attempt(f) { try { build(f.root, f.out); return null; } catch (e) { return e; } }
const base = { family: "seam", version: "1", title: "T", description: "d", sections: [] };
const sec = (place) => [{ id: "s", title: "S", kind: "x", place, when: "w", body: "a.md" }];

test("F1 manifest name '..' does not delete the parent of the output directory", () => {
  const f = fixture({ ...base, name: "..", sections: sec("core") });
  try {
    const err = attempt(f);
    assert.ok(fs.existsSync(f.sentinel), "sibling of the output directory was deleted");
    assert.ok(fs.existsSync(path.join(f.out, "other-skill.txt")), "other output was deleted");
    assert.ok(err, "build accepted an unsafe manifest");
  } finally { rm(f.root); }
});

test("F1 manifest name with a separator is rejected", () => {
  const f = fixture({ ...base, name: "../sibling", sections: sec("core") });
  try {
    const err = attempt(f);
    assert.ok(!fs.existsSync(path.join(f.root, "outer", "sibling")));
    assert.ok(err, "build accepted an unsafe manifest");
  } finally { rm(f.root); }
});

test("F1 an escaping section place does not write outside the skill directory", () => {
  const f = fixture({ ...base, name: "evil", sections: sec("../../../escaped.md") });
  try {
    const err = attempt(f);
    assert.ok(!fs.existsSync(path.join(f.root, "escaped.md")), "file written outside the skill directory");
    assert.ok(!fs.existsSync(path.join(f.out, "evil")), "partial output left behind");
    assert.ok(err, "build accepted an unsafe manifest");
  } finally { rm(f.root); }
});

test("F1 an absolute section place is rejected", () => {
  const target = path.join(tmp("abs-"), "abs.md");
  const f = fixture({ ...base, name: "evil", sections: sec(target) });
  try {
    const err = attempt(f);
    assert.ok(!fs.existsSync(target));
    assert.ok(err, "build accepted an unsafe manifest");
  } finally { rm(f.root); rm(path.dirname(target)); }
});

test("F1 a well-formed skill still builds", () => {
  const f = fixture({ ...base, name: "good-skill", sections: sec("references/x.md") });
  try {
    assert.deepEqual(build(f.root, f.out), ["good-skill"]);
    assert.ok(fs.existsSync(path.join(f.out, "good-skill", "SKILL.md")));
    assert.ok(fs.existsSync(path.join(f.out, "good-skill", "references", "x.md")));
  } finally { rm(f.root); }
});
