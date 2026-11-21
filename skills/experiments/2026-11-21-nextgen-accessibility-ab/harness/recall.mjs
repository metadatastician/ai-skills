// SPDX-License-Identifier: MPL-2.0 AND CC-BY-SA-4.0
// MPL-2.0 (code) and CC-BY-SA-4.0 (prose)
// SPDX-FileCopyrightText: 2026 Jonathan D.A. Jewell <j.d.a.jewell@open.ac.uk>

// Builds one blind recall prompt: case notes + both blind lists per case. Arms stay as X/Y.
import fs from "node:fs";
import { replyRule } from "./material.mjs";
const EXP = "/home/user/ai-skills/skills/experiments/2026-11-21-nextgen-accessibility-ab";
const SP = process.argv[2];
const notes = fs.readFileSync(EXP + "/case-notes.md", "utf8");
const parts = ["You are taking part in a recorded experiment. Everything you need is in this file. Do not open, list or search any other file or directory, and do not use the web.\n\n# YOUR TASK\n\nBelow are case notes listing problems an author planted in each case, then two anonymous review lists (X and Y) per case. For every planted problem, say which items in X and which in Y identify it. An item identifies a planted problem only if it names the same concrete fault; a vague or partial mention counts as partial. One item may cover several planted problems. Do not judge anything else.\n\nOutput JSON: {\"c1\": {\"1\": {\"X\": [item numbers], \"Y\": [item numbers], \"partial\": [\"X3\", ...]}, ...}, ...}. Use empty lists when none. Include every planted problem number for c1 to c8; c9 has none, so give {}.\n\n# CASE NOTES\n\n" + notes];
for (const c of ["c1","c2","c3","c4","c5","c6","c7","c8"]) {
  const L = JSON.parse(fs.readFileSync(`${EXP}/runs/${c}/blind-lists.json`, "utf8"));
  const f = (v) => v.map((i) => `${i.n}. ${i.problem} [where: ${i.where}]`).join("\n");
  parts.push(`\n\n# ${c}\n\n## List X\n\n${f(L.X)}\n\n## List Y\n\n${f(L.Y)}\n`);
}
parts.push(replyRule("ab/out/recall.json", " It must be valid JSON, with no code fence around it."));
const s = parts.join("");
fs.writeFileSync(SP + "/ab/prompts/recall.md", s);
console.log(s.length);
