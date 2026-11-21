// SPDX-License-Identifier: MPL-2.0 AND CC-BY-SA-4.0
// MPL-2.0 (code) and CC-BY-SA-4.0 (prose)
// SPDX-FileCopyrightText: 2026 Jonathan D.A. Jewell <j.d.a.jewell@open.ac.uk>

// Extract, list and judge stages, kept apart from build.mjs so the waves stay as run.
//   bun stages.mjs <scratchpad> extract|lists|collect [c1,c2,...]
import fs from "node:fs";
import path from "node:path";
import { fence, material as sharedMaterial, outputRule, UNTRUSTED } from "./material.mjs";
// score.mjs runs its CLI on import, so JCS is copied here verbatim from it.
function jcs(v) {
  if (v === null || typeof v === "boolean") return JSON.stringify(v);
  if (typeof v === "number") { if (!Number.isFinite(v)) throw new Error("non-finite number"); return JSON.stringify(v); }
  if (typeof v === "string") return JSON.stringify(v);
  if (Array.isArray(v)) return "[" + v.map(jcs).join(",") + "]";
  const keys = Object.keys(v).sort();
  return "{" + keys.filter((k) => v[k] !== undefined).map((k) => JSON.stringify(k) + ":" + jcs(v[k])).join(",") + "}";
}
const REPO = "/home/user/ai-skills", EXP = REPO + "/skills/experiments/2026-11-21-nextgen-accessibility-ab";
const SP = process.argv[2], stage = process.argv[3];
const P = SP + "/ab/prompts", O = SP + "/ab/out";
const cases = ["c1","c2","c3","c4","c5","c6","c7","c8","c9"].filter((c) => !process.argv[4] || process.argv[4].split(",").includes(c));
const header = "You are taking part in a recorded experiment. Everything you need is in this file. Do not open, list or search any other file or directory, and do not use the web.\n\n" + UNTRUSTED;
const tail = (out) => outputRule(path.relative(SP, out), " It must be valid JSON.");
const material = (c) => sharedMaterial(EXP, c);
const src = { team: (c) => `${O}/${c}-lead.md`, baseline: (c) => [`${O}/${c}-baseline-p1.md`, `${O}/${c}-baseline-p2.md`] };
const readJson = (f) => JSON.parse(fs.readFileSync(f, "utf8").trim().replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, ""));
const items = (c, arm) => {
  const v = readJson(`${O}/${c}-${arm}-items.json`).items;
  v.forEach((it, i) => { if (it.n !== i + 1) throw new Error(`${c} ${arm}: item ${i + 1} numbered ${it.n}`); });
  return v;
};
const blinding = () => JSON.parse(fs.readFileSync(EXP + "/runs/blinding.json", "utf8")).cases;
for (const c of cases) {
  if (stage === "extract") for (const arm of ["team", "baseline"])
    fs.writeFileSync(`${P}/${c}-extract-${arm}.md`, header + "# YOUR INSTRUCTIONS\n\n" + fs.readFileSync(EXP + "/prompts/extractor.md", "utf8") + "\n\n# THE REVIEW\n\n" + fence([src[arm](c)].flat().map((f) => fs.readFileSync(f, "utf8")).join("\n\n")) + tail(`${O}/${c}-${arm}-items.json`));
  if (stage === "lists") {
    const b = blinding()[c], L = { X: items(c, b.X), Y: items(c, b.Y) };
    fs.mkdirSync(`${EXP}/runs/${c}`, { recursive: true });
    fs.writeFileSync(`${EXP}/runs/${c}/blind-lists.json`, jcs(L) + "\n");
    const show = (x, y) => header + "# YOUR INSTRUCTIONS\n\n" + fs.readFileSync(EXP + "/prompts/judge.md", "utf8") + "\n\n" + material(c) + "\n\n# LIST X\n\n" + fence(JSON.stringify(x, null, 1), "json") + "\n\n# LIST Y\n\n" + fence(JSON.stringify(y, null, 1), "json") + "\n";
    fs.writeFileSync(`${P}/${c}-judge1.md`, show(L.X, L.Y) + tail(`${O}/${c}-judge1.json`));
    fs.writeFileSync(`${P}/${c}-judge2.md`, show(L.Y, L.X) + tail(`${O}/${c}-judge2.json`));
    console.log(c, "X", L.X.length, "Y", L.Y.length);
  }
  if (stage === "collect") for (const j of ["judge1", "judge2"])
    fs.writeFileSync(`${EXP}/runs/${c}/${j}.json`, jcs(readJson(`${O}/${c}-${j}.json`)) + "\n");
}
