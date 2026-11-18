// Findings 7 and 8: YAML flow collections accepted as strings; AGENTSKILLS_BIN executed from the environment.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { formatProblems } from "../check.mjs";
import { REPO, run, tmp, rm } from "./util.mjs";

const md = (desc, metaVersion = "'1'") => `---\nname: demo\ndescription: ${desc}\nmetadata:\n  version: ${metaVersion}\n---\nbody\n`;

test("F7 a valid frontmatter has no problems", () => {
  assert.deepEqual(formatProblems(md("Use when testing."), "demo"), []);
  assert.deepEqual(formatProblems(md("'[quoted] is fine'"), "demo"), []);
});

for (const bad of ["[]", "[a, b]", "{}", "{a: b}", "[v2]"]) {
  test(`F7 description ${bad} is rejected`, () => {
    const p = formatProblems(md(bad), "demo");
    assert.ok(p.some((x) => /description is not a string/.test(x)), JSON.stringify(p));
  });
}
test("F7 metadata.version: [v2] is rejected", () => {
  const p = formatProblems(md("ok text", "[v2]"), "demo");
  assert.ok(p.some((x) => /metadata\.version/.test(x)), JSON.stringify(p));
});
test("F7 name: [] is rejected", () => {
  const p = formatProblems("---\nname: []\ndescription: ok\n---\n", "demo");
  assert.ok(p.some((x) => /name is not a string/.test(x)), JSON.stringify(p));
});

// ---- F8: build a throwaway root from the repo's own data, plus a "binary" that leaves a marker when run
function rootWithMarkerBinary() {
  const root = tmp("check-test-");
  fs.cpSync(path.join(REPO, "skills", "data"), path.join(root, "data"), { recursive: true });
  const b = run("build.mjs", ["--root", root]);
  assert.equal(b.status, 0, b.out);
  const marker = path.join(root, "MARKER");
  const bin = path.join(root, "fake-agentskills");
  fs.writeFileSync(bin, `#!/bin/sh\necho ran > "${marker}"\nexit 0\n`, { mode: 0o755 });
  return { root, marker, bin };
}

test("F8 an AGENTSKILLS_BIN in the environment is never executed", () => {
  const f = rootWithMarkerBinary();
  try {
    const r = run("check.mjs", ["--root", f.root], { env: { ...process.env, AGENTSKILLS_BIN: f.bin } });
    assert.ok(!fs.existsSync(f.marker), "binary from the environment was executed\n" + r.out);
  } finally { rm(f.root); }
});

test("F8 a binary named explicitly with --agentskills is run", () => {
  const f = rootWithMarkerBinary();
  try {
    const r = run("check.mjs", ["--root", f.root, "--agentskills", f.bin]);
    assert.ok(fs.existsSync(f.marker), r.out);
    assert.match(r.out, /agentskills cross-check: ran, exit 0/);
  } finally { rm(f.root); }
});

test("F8 a failing explicit binary fails the check; none given is reported as not run", () => {
  const f = rootWithMarkerBinary();
  try {
    fs.writeFileSync(f.bin, "#!/bin/sh\nexit 3\n", { mode: 0o755 });
    const bad = run("check.mjs", ["--root", f.root, "--agentskills", f.bin]);
    assert.equal(bad.status, 1, bad.out);
    const none = run("check.mjs", ["--root", f.root]);
    assert.match(none.out, /NOT AVAILABLE \(not run\)/);
  } finally { rm(f.root); }
});
