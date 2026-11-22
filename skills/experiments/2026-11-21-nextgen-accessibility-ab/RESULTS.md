# Results: nextgen-accessibility-team against a best-practice expert, blind A/B

Run on 2026-11-21 under `protocol.md`, which was sealed before any case ran
(`SEAL.sha256`). Every judgement here was made by AI agents standing in for
expert judges. **No disabled readers took part. Nothing here is a finding
about disabled readers.**

## Decision: null

The decision rule fixed in advance gives **null**. The team did not show that
it offers more than a strong best-practice review. The baseline did not show
the reverse either.

| Measure (8 hard cases) | Team | Baseline |
|---|---|---|
| Total score (sum of case scores) | 37 | 55.5 |
| Case wins | 4 | 4 |
| Positive bar: T >= 1.25 B and wT >= 5 | not met | |
| Negative bar: B >= 1.25 T and wB >= 5 | | size met (55.5 >= 46.25), wins not met (4 < 5) |

The baseline scored about 1.5 times the team's total. That is enough for the
size half of the negative bar but not the wins half, so the result is null,
not negative. Most of the baseline's lead comes from one case (c8: 16.5 to 1).

**Control (c9):** the team averaged 2 invalid unique items and the baseline 0.
That is more than the allowed margin of 1, so **padding is flagged**. Under the
protocol this flag only changes a positive result. It is reported here anyway,
because it matches what the judges said across the hard cases (see below).

**Judge agreement:** in all 8 hard cases, both judges picked the same winner,
including judge 2, who saw the two lists with X and Y swapped.

## Per-case scores

Score = mean of the two judges' nets. Net = sum of severities of valid unique
items, minus 1 per invalid unique item. Items in common score nothing.

| Case | Team | Baseline | Winner | Items T / B | Shared pairs | Invalid T / B |
|---|---|---|---|---|---|---|
| c1 news article, generated key points | 8 | 4 | team | 12 / 11 | 6 | 1 / 1 |
| c2 medicine dosing, Easy Read | 2 | 6.5 | baseline | 13 / 14 | 8 | 3 / 0 |
| c3 consultation, "simplify" route | 14 | 11.5 | team | 15 / 15 | 7 | 0.5 / 0 |
| c4 reading settings, preference headers | 3.5 | 7.5 | baseline | 12 / 17 | 8 | 1 / 1.5 |
| c5 product page tuned for AI agents | -2 | 5 | baseline | 11 / 15 | 9 | 2 / 1 |
| c6 statistics release, AI summary and audio | 6 | 4.5 | team | 12 / 12 | 6 | 2 / 1.5 |
| c7 lecture, AI summary | 4.5 | 0 | team | 11 / 14 | 6 | 1.5 / 4 |
| c8 accessibility statement | 1 | 16.5 | baseline | 12 / 19 | 8 | 1.5 / 0 |
| c9 control (sign-up form) | -2 | 3 | baseline | 6 / 7 | 4 | 2 / 0 |

The full per-judge figures are in `runs/scores.json`.

## What the team did better, and worse

These are descriptive, not deciding.

| Across the 8 hard cases | Team | Baseline |
|---|---|---|
| Items listed | 98 | 117 |
| Unique items judged valid (mean of judges) | 27.5 | 50 |
| Unique items judged invalid (mean of judges) | 12.5 | 9 |
| Unique items judged severity 3 (mean of judges) | 6 | 0.5 |
| Shared pairs (mean of judges) | 58 | 58 |

- **More of the severe misses.** Both judges rated 6 of the team's unique
  findings at severity 3 (blocks, harms or misinforms). They rated at most 1 of
  the baseline's that way. Examples: a hedge dropped from "will protect 900
  homes" (c1); a missing warning about other paracetamol medicines in Easy Read
  (c2); a simplified text saying the opposite of the proposal, and a hidden
  learning-disability label stored with each response (c3); a headline figure
  changed from 4.4% unchanged to 4.6% rising (c6); and an invented "policy will
  be reversed" (c7). These are the theory's home ground: versions that do not
  say what the original says.
- **More invalid items.** The judges struck the team's items for three
  repeating reasons:
  - process advice, not a fault ("no must-keep list", "no user testing
    recorded");
  - speculation about server logs revealing who chose an adapted version, which
    the item itself admitted was not shown;
  - items that said outright that no defect was found.

  The baseline's invalid items were mostly trivial points, such as middle-dot
  separators, "1.7L", abbreviated month names and generic BSL advice.
- **Less breadth.** The baseline listed more items, and the judges found many
  more of its unique items valid (50 against 27.5). Its lead was largest on
  the accessibility statement (c8), where conventional statement practice
  applies directly.

## Planted-item recall (secondary)

`case-notes.md` lists 55 planted problems across c1 to c8. Each is tagged by
who should find it: the theory [N], conventional practice [C], or both [N+C].
One matcher agent saw the notes and the two blind lists (X and Y, no arm names)
and recorded which items found each problem.

| Planted problems | Team found | Baseline found |
|---|---|---|
| All (55) | 53, + 1 partial | 51, + 4 partial |
| Theory only [N] (17) | 17 | 13, + 4 partial |
| Both [N+C] (26) | 25, + 1 partial | 26 |
| Conventional only [C] (12) | 11 | 12 |

Both arms found almost everything the case author planted. The four [N]
problems that the baseline found only partly:
- c1, item 5: the right of reply and the correction are missing from the key
  points;
- c2, item 6: nothing says the text was AI-written or whether anyone checked
  it;
- c5, item 5: the safety text is missing from the facts given to agents;
- c7, item 5: one speaker's points are dropped from the summary.

The team found c6 item 3 (a false "lowest in two years") only partly, and
missed c3 item 7 (a noted-only point). The recall measure did not separate the arms much: the cases
were not hard enough for the baseline to miss planted problems outright. The
matches are in `runs/recall-matches.json`.

## Cost

Each agent's token use was taken from the runtime's completion notice.

| Role | Passes | Recorded | Tokens recorded |
|---|---|---|---|
| Team (4 reviewers + lead, per case) | 45 | 30 | 2,739,044 |
| Baseline (2 passes, per case) | 18 | 13 | 1,134,497 |
| Extraction (both arms, same model) | 18 | 18 | 1,560,605 |
| Judges | 18 | 18 | 1,602,937 |
| Recall matcher | 1 | 1 | 117,666 |
| Superseded extraction (see deviation 1) | 8 | 8 | 631,473 |

The usage of 20 passes was **not recorded**: 15 from the team arm and 5 from
the baseline. A container restart lost their completion notices. They are
logged as unrecorded in `runs/tokens.txt` and are not estimated here. Per
recorded pass, the two arms cost about the same (team about 91k, baseline about
87k). The team runs 5 passes per case and the baseline 2, so the team costs
about 2.5 times as much per case.

## Deviations from the protocol

1. **Extraction bug, caught and fixed before any judging.** The first baseline
   extraction used pass 2 only. Pass 2 returns only *new* findings, and the
   protocol says the baseline's review is pass 1 plus pass 2. Before any judge
   ran, all 8 hard-case baseline extractions were redone from pass 1 + pass 2.
   The wrong files are kept in `runs/superseded/`, and their cost is shown
   above. Every item count was then checked against the findings in the
   review it came from: they matched for every case and arm.
2. **Unrecorded usage** for 20 passes, as above.
3. **Extractor and matcher model.** The protocol does not name a model for the
   extractor. A smaller, cheaper model than the arms' was used, the same one for
   both arms. The planted-item matcher used the same smaller model. The
   protocol fixes neither the model nor the method for the matcher.
4. **Agent files moved after the run.** The team's agent files were run from
   `.claude/agents/` (as `protocol.md` says), and that folder is git-ignored. So
   that they ship with the skill, they were copied to
   `skills/skills/nextgen-accessibility-team/agents/`, with identical hashes.
   After the run, `SKILL.md` was changed only to point to the new paths and to
   report this result. See `SEAL-NOTE.md`.
5. **Security hardening after the run.** At the owner's decision, the agent files
   were narrowed to the Read tool and given a scope and untrusted-data
   paragraph. The harness now fences embedded text safely and marks it as
   data. The results describe the files as run (commit cd566ed), not these.
   See `SEAL-NOTE.md`, change 3.

## Limits

- One run per arm per case, and no repeat runs, so the variance is unknown.
  With 8 cases a 4 to 4 split is fragile. Moving one case would decide nothing,
  because both the size bar and the wins bar must hold.
- Every agent, including both arms, the extractor, the judges and the matcher,
  is from the same family of AI model. The judges may share the arms' blind
  spots and tastes.
- **Granularity confound.** The extractor keeps each arm's own split of its
  findings, and the arms split differently. For example, c1 baseline item 1
  covers four planted faults, which the team listed as separate items. A judge
  can pair a merged item with only one item on the other list, so the rest
  count as unique to the more granular arm. This can favour either arm, case by
  case. Overall the baseline listed more items (117 against 98). The net effect
  was not measured.
- The case author also wrote the team brief from the theory, so the cases
  could favour the team. The case notes include conventional problems as well.
- Simulated stand-in judgement only. Whether any of these findings matters to
  disabled readers needs testing with them.

## What this suggests (not tested)

- The theory's distinct value showed up in the **severity** of what it found,
  not the amount. It caught more meaning-changing faults in AI-made versions.
- The team's main loss was **noise**: process advice and unshown speculation.
  The lead is meant to strike these and did not.
- A next version should change the lead's brief to drop items without evidence
  in the material, then run again under a new sealed protocol. That is a new
  experiment, not a re-scoring of this one.

## Files

- `runs/blinding.json`: the seeded X/Y assignment (seed 20261121).
- `runs/<case>/raw/`: every arm's raw output (4 reviewers, lead, baseline
  pass 1 and pass 2).
- `runs/<case>/blind-lists.json`: the neutral lists the judges saw.
- `runs/<case>/judge1.json` and `judge2.json`: the judgements.
- `runs/scores.json`: the output of `bun score.mjs score`.
- `runs/recall-matches.json`, `runs/tokens.txt`, `runs/superseded/`.
- `harness/`: the scripts that built the prompts (run under Bun).
