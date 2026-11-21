// SPDX-License-Identifier: MPL-2.0 AND CC-BY-SA-4.0
// MPL-2.0 (code) and CC-BY-SA-4.0 (prose)
// SPDX-FileCopyrightText: 2026 Jonathan D.A. Jewell <j.d.a.jewell@open.ac.uk>

// Blinding and scoring for the nextgen-accessibility A/B. Plain ES module; runs under Bun.
//
//   bun score.mjs blind  <seed>   writes runs/blinding.json (which arm is X per case)
//   bun score.mjs score           reads runs/c*/judge{1,2}.json, writes runs/scores.json, prints the decision
//   bun score.mjs jcs <in> <out>  rewrites a JSON file in canonical JCS form
//
// The decision rule is protocol.md, "Decision thresholds (fixed)". Nothing here may change it.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const RUNS = path.join(HERE, "runs");
const HARD = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8"];
const CONTROL = "c9";

// RFC 8785 canonical JSON for I-JSON data (strings, finite numbers, booleans, null, arrays, objects).
export function jcs(v) {
  if (v === null || typeof v === "boolean") return JSON.stringify(v);
  if (typeof v === "number") { if (!Number.isFinite(v)) throw new Error("non-finite number"); return JSON.stringify(v); }
  if (typeof v === "string") return JSON.stringify(v);
  if (Array.isArray(v)) return "[" + v.map(jcs).join(",") + "]";
  const keys = Object.keys(v).sort(); // default sort is UTF-16 code-unit order, as JCS requires
  return "{" + keys.filter((k) => v[k] !== undefined).map((k) => JSON.stringify(k) + ":" + jcs(v[k])).join(",") + "}";
}
const writeJcs = (file, obj) => fs.writeFileSync(file, jcs(obj) + "\n");

// Mulberry32: small seeded PRNG so the coin flips can be re-derived from the recorded seed.
function rng(seed) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

function blind(seed) {
  const r = rng(Number(seed));
  const cases = {};
  for (const c of [...HARD, CONTROL]) cases[c] = r() < 0.5 ? { X: "team", Y: "baseline" } : { X: "baseline", Y: "team" };
  fs.mkdirSync(RUNS, { recursive: true });
  writeJcs(path.join(RUNS, "blinding.json"), { prng: "mulberry32", seed: Number(seed), cases });
  return cases;
}

// Net score per side for one judge file. `swapped` means this judge saw X and Y exchanged.
export function netsFor(judge, nX, nY) {
  const seen = { X: new Set(), Y: new Set() };
  for (const p of judge.shared) { seen.X.add(p.x); seen.Y.add(p.y); }
  const out = { X: { net: 0, valid: 0, invalid: 0, sev3: 0 }, Y: { net: 0, valid: 0, invalid: 0, sev3: 0 } };
  for (const u of judge.unique) {
    if (seen[u.side].has(u.n)) throw new Error(`item ${u.side}${u.n} both shared and unique`);
    seen[u.side].add(u.n);
    const s = out[u.side];
    if (u.valid) { s.valid++; s.net += u.severity; if (u.severity === 3) s.sev3++; } else { s.invalid++; s.net -= 1; }
  }
  for (const [side, n] of [["X", nX], ["Y", nY]]) {
    for (let i = 1; i <= n; i++) if (!seen[side].has(i)) throw new Error(`item ${side}${i} not judged`);
    if (seen[side].size !== n) throw new Error(`side ${side}: judged ${seen[side].size} items, list has ${n}`);
  }
  return { ...out, shared: judge.shared.length };
}

const meetsBar = (a, b) => (b <= 0 ? a > 0 : a >= 1.25 * b);

function score() {
  const blinding = JSON.parse(fs.readFileSync(path.join(RUNS, "blinding.json"), "utf8")).cases;
  const perCase = {};
  for (const c of [...HARD, CONTROL]) {
    const dir = path.join(RUNS, c);
    const lists = JSON.parse(fs.readFileSync(path.join(dir, "blind-lists.json"), "utf8"));
    const nX = lists.X.length, nY = lists.Y.length;
    const j1 = netsFor(JSON.parse(fs.readFileSync(path.join(dir, "judge1.json"), "utf8")), nX, nY);
    // Judge 2 saw the lists swapped: its X is our Y.
    const j2raw = netsFor(JSON.parse(fs.readFileSync(path.join(dir, "judge2.json"), "utf8")), nY, nX);
    const j2 = { X: j2raw.Y, Y: j2raw.X, shared: j2raw.shared };
    const arm = (side) => blinding[c][side];
    const rec = {};
    for (const side of ["X", "Y"]) {
      rec[arm(side)] = {
        items: side === "X" ? nX : nY,
        judge1: j1[side], judge2: j2[side],
        score: (j1[side].net + j2[side].net) / 2,
        invalid: (j1[side].invalid + j2[side].invalid) / 2,
      };
    }
    rec.shared = { judge1: j1.shared, judge2: j2.shared };
    const w = (j) => (j.X.net === j.Y.net ? "tie" : arm(j.X.net > j.Y.net ? "X" : "Y"));
    rec.judgeWinners = { judge1: w(j1), judge2: w(j2) };
    rec.winner = rec.team.score === rec.baseline.score ? "tie" : rec.team.score > rec.baseline.score ? "team" : "baseline";
    perCase[c] = rec;
  }
  const T = HARD.reduce((s, c) => s + perCase[c].team.score, 0);
  const B = HARD.reduce((s, c) => s + perCase[c].baseline.score, 0);
  const wT = HARD.filter((c) => perCase[c].winner === "team").length;
  const wB = HARD.filter((c) => perCase[c].winner === "baseline").length;
  let decision = "null";
  if (meetsBar(T, B) && wT >= 5) decision = "positive";
  else if (meetsBar(B, T) && wB >= 5) decision = "negative";
  const ctl = perCase[CONTROL];
  const controlOk = ctl.team.invalid - ctl.baseline.invalid <= 1;
  let reported = decision;
  if (decision === "positive" && !controlOk) reported = "null (padding flagged on control)";
  const agree = HARD.filter((c) => perCase[c].judgeWinners.judge1 === perCase[c].judgeWinners.judge2).length;
  const summary = { totals: { team: T, baseline: B }, wins: { team: wT, baseline: wB, ties: HARD.length - wT - wB },
    control: { teamInvalid: ctl.team.invalid, baselineInvalid: ctl.baseline.invalid, ok: controlOk },
    judgeAgreementOnWinner: { agree, of: HARD.length }, decision, reported };
  writeJcs(path.join(RUNS, "scores.json"), { perCase, summary });
  console.log(JSON.stringify(summary, null, 2));
}

const [cmd, a, b] = process.argv.slice(2);
if (cmd === "blind") console.log(JSON.stringify(blind(a), null, 2));
else if (cmd === "score") score();
else if (cmd === "jcs") writeJcs(b, JSON.parse(fs.readFileSync(a, "utf8")));
else if (cmd) { console.error("usage: bun score.mjs blind <seed> | score | jcs <in> <out>"); process.exit(2); }
