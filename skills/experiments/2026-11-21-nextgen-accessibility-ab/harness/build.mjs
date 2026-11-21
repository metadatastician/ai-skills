// SPDX-License-Identifier: MPL-2.0 AND CC-BY-SA-4.0
// MPL-2.0 (code) and CC-BY-SA-4.0 (prose)
// SPDX-FileCopyrightText: 2026 Jonathan D.A. Jewell <j.d.a.jewell@open.ac.uk>

import fs from "node:fs"; import path from "node:path";
import { fence, material as sharedMaterial, outputRule, quoteUntrusted, UNTRUSTED } from "./material.mjs";
const REPO = "/home/user/ai-skills", EXP = REPO + "/skills/experiments/2026-11-21-nextgen-accessibility-ab";
const SP = process.argv[2], stage = process.argv[3];
const P = SP + "/ab/prompts", O = SP + "/ab/out";
const body = (f) => fs.readFileSync(f, "utf8").replace(/^---\n[\s\S]*?\n---\n/, "");
const theory = fs.readFileSync(REPO + "/skills/skills/nextgen-accessibility-team/references/theory.md", "utf8");
const cases = ["c1","c2","c3","c4","c5","c6","c7","c8","c9"].filter((c) => !process.argv[4] || process.argv[4].split(",").includes(c));
const material = (c) => sharedMaterial(EXP, c);
const tail = (out) => outputRule(path.relative(SP, out));
const W = (name, text) => fs.writeFileSync(P + "/" + name, text);
const header = "You are taking part in a recorded experiment. Everything you need is in this file. Do not open, list or search any other file or directory, and do not use the web.\n\n" + UNTRUSTED;
if (stage === "wave1") for (const c of cases) {
  for (const r of ["fidelity","alignment-gap","reader-privacy","outcomes"])
    W(`${c}-${r}.md`, header + "# YOUR INSTRUCTIONS\n\n" + body(REPO + `/.claude/agents/nai-${r}.md`).replace(/Read `skills[^`]*` before you\nstart if you can reach it\.|Read\n`skills[^`]*` before you\nstart if you can reach it\./, "The theory is given below.") + "\n\n# THEORY\n\n" + theory + "\n\n" + material(c) + tail(`${O}/${c}-${r}.md`));
  const brief = fs.readFileSync(EXP + "/prompts/baseline-brief.md", "utf8").split("## Second pass")[0];
  W(`${c}-baseline-p1.md`, header + "# YOUR INSTRUCTIONS\n\n" + brief + "\n\n" + material(c) + tail(`${O}/${c}-baseline-p1.md`));
}
if (stage === "wave2") for (const c of cases) {
  let rv = ""; for (const r of ["fidelity","alignment-gap","reader-privacy","outcomes"]) rv += `\n\n## Reviewer: ${r}\n\n` + fence(quoteUntrusted(fs.readFileSync(`${O}/${c}-${r}.md`, "utf8")));
  W(`${c}-lead.md`, header + "# YOUR INSTRUCTIONS\n\n" + body(REPO + "/.claude/agents/nai-lead.md").replace(/Read `skills[^`]*` before you\nstart if you can reach it\./, "The theory is given below.") + "\n\n# THEORY\n\n" + theory + "\n\n" + material(c) + "\n\n# REVIEWER OUTPUTS" + rv + tail(`${O}/${c}-lead.md`));
  const full = fs.readFileSync(EXP + "/prompts/baseline-brief.md", "utf8");
  W(`${c}-baseline-p2.md`, header + "# YOUR INSTRUCTIONS\n\n" + full + "\n\nThis is your second pass.\n\n" + material(c) + "\n\n# YOUR FIRST REVIEW\n\n" + fence(fs.readFileSync(`${O}/${c}-baseline-p1.md`, "utf8")) + tail(`${O}/${c}-baseline-p2.md`));
}
console.log(fs.readdirSync(P).length + " prompt files");
