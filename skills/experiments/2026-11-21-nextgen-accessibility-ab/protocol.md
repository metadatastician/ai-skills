# Protocol: nextgen-accessibility-team against a best-practice expert, blind A/B

Fixed on 2026-11-21, before any case was run. Owner choices by selector in
session_0136P7ZpW7GVpAPcSKZzYx9i: team of a lead and four reviewers; eight hard
cases and one control; win, null and loss bands; baseline with a self-review
pass. Nothing below changes after the first run. Any deviation is reported in
RESULTS as a deviation.

## Question

On material that already passes WCAG 2.2 AA well, does a team built on
Adaptation Integrity v0.1 find material problems that a strong best-practice
expert review misses, more than the reverse?

## Arms

- **Team (T).** The four reviewer agents in `.claude/agents/nai-*.md`
  (Fidelity, Alignment gap, Reader privacy, Outcomes), run independently and in
  parallel, then `nai-lead`. Each agent's file body is passed verbatim as its
  instructions, with `skills/skills/nextgen-accessibility-team/references/theory.md`.
  The lead's output is the team's review.
- **Baseline (B).** One agent with `prompts/baseline-brief.md`, then a second
  pass on the same material with its first review, returning only new
  findings. The baseline's review is pass 1 plus pass 2.
- Both arms use the same model, the same case brief and the same case files,
  and see no other case. Neither arm sees `case-notes.md`, this protocol or the
  other arm's output. Token use per arm is recorded where the runtime reports
  it.

## Cases

`cases/c1` to `cases/c8` are hard cases and `cases/c9` is the control. Each has
a `BRIEF.md` (identical for both arms) and the files a user could encounter.
Every case is built to pass WCAG 2.2 AA; an automated axe-core run is recorded
in `cases/axe-report.json` before the arms run. Automated checks cover only part
of WCAG; manual conformance is the author's claim, not a test.

`case-notes.md` records what the case author planted, written before any run.
It holds problems of both kinds: those the theory targets and those that
conventional best practice targets (AAA, cognitive, screen-reader and statement
practice). It is a secondary, descriptive measure only and never enters the
decision.

## Blinding

1. An extractor agent (`prompts/extractor.md`) rewrites each arm's review into
   a neutral list, one item per finding, with method vocabulary removed.
2. A script assigns the two lists to X and Y by a seeded coin per case
   (seed recorded in `runs/blinding.json`).
3. Two judge agents (`prompts/judge.md`) score each case. Judge 2 sees the
   lists with X and Y swapped. Neither judge sees arm names, prompts or
   case-notes.

## Scoring

For each judge and case, for each arm:

- `net = sum(severity of valid unique items) - count(invalid unique items)`
- Shared items score nothing.

The case score per arm is the mean of the two judges' nets. An arm wins a case
if its case score is strictly higher; equal is a tie.

## Decision thresholds (fixed)

Let `T` and `B` be the arms' total case scores over the eight hard cases, and
`wT`, `wB` their case wins over the eight hard cases.

- **Positive** ("the team offers something"): `T >= 1.25 * B` and `wT >= 5`.
  If `B <= 0`, the first condition holds when `T > 0`.
- **Negative** (the baseline does better): `B >= 1.25 * T` and `wB >= 5`.
  If `T <= 0`, the first condition holds when `B > 0`.
- **Null**: anything else.
- **Control (c9)**: the team's invalid unique items, averaged over the judges,
  may exceed the baseline's by at most 1. If they exceed it by more, a positive
  result is reported as null, with padding flagged.

Also reported, but not deciding: per-case scores, judge agreement (both judges'
case winners), the share of each arm's unique valid items, severity-3 items by
arm, the planted-item recall from `case-notes.md`, and token use.

## Limits stated in advance

- One run per arm per case; no repeat runs.
- All agents are the same family of AI model, including the judges. The
  judgement is a simulated stand-in, not disabled readers. No result here is a
  finding about disabled readers.
- The case author also wrote the team brief from the theory. The cases could
  favour the team. The case notes include conventional problems as well, and
  the judge scores harm, not rulebook, to limit this.
- The team spends about five agent passes per case and the baseline two.
