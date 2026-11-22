---
name: nextgen-accessibility-team
description: "Runs a next-generation accessibility review as a team of four perspective reviewers (Fidelity, Alignment gap, Reader privacy, Outcomes) and a lead, from the Adaptation Integrity v0.1 theory. Use when a page, app or document already meets WCAG 2.2 AA and you want to know whether the versions readers actually receive (AI summaries, key points, Easy Read, alt text, audio, read-aloud, personalisation) stay faithful, private and usable."
metadata:
  version: '0.1'
  status: experimental
---

# Next-generation accessibility team (v0.1, experimental)

This skill runs a review team. It does not replace a WCAG audit. It starts
where a good WCAG 2.2 AA audit stops: at the versions of the content that
software makes for readers, and at what readers are told, asked and exposed to.

Read `references/theory.md` first. It is the condensed theory (Adaptation
Integrity v0.1, a DRAFT proposal). The source text wins where they differ.

## The team

Four reviewers each hold one perspective. They work independently, on the same
material, and do not see each other's findings. A lead then merges them.

| Agent file | Perspective | Asks |
|---|---|---|
| `agents/nai-fidelity.md` | Fidelity (principles 1 to 3) | Does every version say what the original says? What does it drop, change, misattribute or merge? Is it made from the original? Is it labelled honestly? |
| `agents/nai-alignment-gap.md` | Alignment gap | What blocks people but not agents, and agents but not people? Is markup written for software hurting assistive technology? What can no automated tool establish here? |
| `agents/nai-reader-privacy.md` | Reader privacy (principle 4) | Does getting an adaptation reveal a need, through a URL, header, profile, analytics event, form field or a combination of preferences? |
| `agents/nai-outcomes.md` | Outcomes (principle 6) | Is a reader correctly informed, without undue effort, and without being misled? Where could they act on something wrong? |
| `agents/nai-lead.md` | Lead (principle 5, evidence honesty) | Merges, de-duplicates and ranks. Marks what only disabled readers can settle. Strikes self-awarded claims and overclaims, including the team's own. |

## How to run it

1. Give every reviewer the same material: the original, every version or
   adaptation surface, and any code that handles preferences or requests.
2. Run the four reviewers in parallel. Each returns findings in the format
   below and nothing else.
3. Give the lead the four outputs and the same material. The lead returns the
   final review in the same format.
4. Report the lead's review. Keep the four reviewer outputs as the record.

The agent files live in this skill's `agents/` folder. In Claude Code, copy
them to your project's `.claude/agents/` so they load as subagents. Elsewhere,
use each file's body as the system prompt of a separate call.

## Finding format (every agent)

```
### F<n>. <one-line title>
- Where: <file, element, line or version>
- Problem: <what is wrong, with the exact words or code quoted>
- Who is affected: <readers, and how>
- Impact: <what goes wrong for them>
- Severity: <0 trivial | 1 minor | 2 significant | 3 blocks, harms or misinforms>
- Fix: <a concrete change>
- Evidence: <what in the material shows it; say if it rests on an OPEN or DESIGNED claim>
- Needs disabled readers: <yes, and what to test | no>
```

End with a line `Not found: <perspectives with nothing real to report>` rather
than filling a section. Do not pad. A finding that is not about this material
is an error.

## Rules for the whole team

- WCAG conformance is assumed to have been checked elsewhere. Report a WCAG
  failure only if you see one plainly; do not re-audit.
- Quote the original and the version side by side for every fidelity finding.
- A tool's claim about itself is not evidence. A label is earned by a check.
- Never claim what disabled readers think, find or need. Say what to test with
  them instead.
- Mark every legal point as an assumption, not advice.

## Status

Experimental. The first blind A/B test against a best-practice expert review
is in `skills/experiments/2026-11-21-nextgen-accessibility-ab/`. Read its
RESULTS before relying on this team.

That test came out **null**, by the thresholds fixed before it ran. On 8 hard
cases the team and the baseline won 4 cases each, and the baseline scored more
in total. The team found more of the most severe problems the baseline missed,
but it also reported more items the judges ruled invalid: process advice and
speculation not grounded in the material. All judging was simulated by AI
agents. No disabled readers took part.
