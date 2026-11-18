// Finding 9: the destination must lie inside the tools root (skills/, DEFAULT_ROOT). The importer reads
// that root from its own location, so the paste file lives in a scratch directory inside it, removed afterwards.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { SKILLS, run, tmp, rm } from "./util.mjs";

const PASTE = ["# comment", "A description. Use when testing.", "Instructions", "Title", "Subtitle", "SECTION 1: Modes", "Some text.", ""].join("\n");

function scratch() {
  const dir = fs.mkdtempSync(path.join(SKILLS, ".import-test-"));
  const paste = path.join(dir, "paste.txt");
  fs.writeFileSync(paste, PASTE);
  return { dir, paste };
}

test("F9 a destination outside the tools root is refused and nothing is written", () => {
  const s = scratch(), outside = tmp("import-out-");
  try {
    const dst = path.join(outside, "seam");
    const r = run("import-seam.mjs", [s.paste, dst]);
    assert.notEqual(r.status, 0, r.out);
    assert.match(r.out, /destination must lie inside/);
    assert.ok(!fs.existsSync(dst), "files were written outside the repository");
  } finally { rm(s.dir); rm(outside); }
});

test("F9 a destination inside the tools root that reaches outside through a symlink is refused", () => {
  const s = scratch(), outside = tmp("import-out-");
  try {
    fs.symlinkSync(outside, path.join(s.dir, "link"));
    const r = run("import-seam.mjs", [s.paste, path.join(s.dir, "link", "seam")]);
    assert.notEqual(r.status, 0, r.out);
    assert.deepEqual(fs.readdirSync(outside), [], "files were written through the symlink");
  } finally { rm(s.dir); rm(outside); }
});

test("F9 a destination inside the tools root is accepted", () => {
  const s = scratch();
  try {
    const dst = path.join(s.dir, "out", "seam");
    const r = run("import-seam.mjs", [s.paste, dst]);
    assert.equal(r.status, 0, r.out);
    assert.ok(fs.existsSync(path.join(dst, "manifest.json")));
  } finally { rm(s.dir); }
});
