# Adaptation Integrity v0.1: the theory the team works from

Condensed from `standards/3-practice/accessibility/NEXTGEN-ACCESSIBILITY.adoc`
(DRAFT, a proposal, not authorised policy; source sha256 prefix `b363f32e7302`),
with perspective from five companion issues (sha256 prefixes `de60a653fac7`,
`48e5482fe307`, `fe9d7a6fde4a`, `5f9d26217fa6`, `cfcdf47b7f82`). Where this file
and the source differ, the source wins.

## The shift

WCAG judges the page. Readers increasingly receive content through versions
that software writes for them: summaries, key points, Easy Read and plain
language text, alt text, audio and read-aloud. Nothing in WCAG judges whether
an adapted version still says what the original said. This theory does.

It is additive to WCAG 2.2. A page can conform to WCAG 2.2 AA and still fail
every principle below.

## Six principles

1. **Make every version from the original**, never from another version. Loss
   along a chain cannot be recovered downstream. A version made from an older
   or corrected original is a chain fault.
2. **Declare what must survive.** The author marks who said what, direct
   quotes, numbers, hedges, the line between fact and opinion, right of reply
   and corrections.
3. **Label what changed.** Every version carries a label and records who made
   it, from what and when.
4. **The reader chooses the form; the record fixes the substance.** Size, pace,
   format and reading level are set on the reader's side, and the publisher
   never learns who needed what.
5. **Nothing about us without us.** Disabled readers decide what "intact" means
   for the versions made for them.
6. **Measure outcomes, not just markup.** Success is a reader correctly
   informed, without undue effort and without being misled.

## Labels for a version

| Label | Meaning |
|---|---|
| Exact | Only the form changed: layout, size, voice or pace. |
| Checked | Reworded or shortened, then checked against the declaration: every critical item kept, every important cut named, nothing changed, misattributed, merged or added. |
| Unchecked | A machine version nobody has checked. The default for instant AI output. |
| Withheld | It would break a critical item, so it is not offered. |

A version cannot award itself a label. A label is earned by a check and never
upgraded automatically. A tool's claim about itself is not evidence.

## The must-survive declaration

Each item has its exact words, a type and a weight.

- Types: attribution, direct quote, number, hedge or caveat, fact or opinion,
  right of reply, correction, instruction, other.
- Weights: **critical** (no version may drop it), **important** (may be
  dropped only if the cut is named), **optional** (may be dropped freely).
- Distortion is never allowed, whatever the weight: no item may be changed,
  misattributed or merged. Only omission depends on weight.

## Outcome codes

Each declared item in a version is coded: kept; dropped (stated); dropped
(silent); changed; misattributed; merged. New factual claims the original does
not support are logged separately. Explanations added for readers (what a
council is) are not claims.

| Class | Rule | Label it can carry |
|---|---|---|
| Exact | Every item kept, nothing new, only form differs | Exact |
| Checked | Every critical item kept; important cuts named; nothing changed, misattributed, merged or added | Checked |
| Undeclared cuts | As Checked, except an important item dropped silently | Checked, once the cut is named |
| Unfaithful | A critical item dropped; any item changed, misattributed or merged; or a new factual claim | None: withhold it |
| Declined | The tool would not adapt it | None needed |

## The alignment gap

AI agents give publishers a reason to fix only the barriers that block
software. Agents read code, screenshots or both. The commonest failure in the
WebAIM Million 2026, low-contrast text on 83.9% of home pages, blocks people
but no agent (status: DESIGNED, not tested). Automated tools cannot count
caption accuracy, reading level, cognitive load or timing at all. In GDS's
2017 test the best automated tool found 41% of 143 planted barriers.

Markup written for agents can degrade screen-reader use: WebAIM finds pages
with ARIA average 59.1 errors against 42 without (correlation, not cause).

A ranking signal or a score rewards only the machine-checkable slice. A high
automated score is not conformance and must not be read as it.

## Reader privacy and personal adaptation

- No request, header, URL, setting or analytics event may reveal a reader's
  needs. Disability information is special category data (UK GDPR).
- Preference signals that are harmless one at a time can combine into an
  identifying profile (the composition leak, from absolute-zero OND).
- Personal adaptation on the reader's own device is always permitted and never
  a refusable or declared purpose. Intermediary summarisation or republication
  is separate and may be refused.
- UK CDPA 1988 s.31A: a disabled person may make an accessible copy for
  personal use; s.31F(8): contract terms preventing it are unenforceable;
  s.31F(5): the copy "must not include any changes to the work which are not
  necessary". The theory applies the same test to intermediaries, never to the
  reader. (Legal points: ASSUMED, counsel's opinion pending.)

## Version and claim honesty

- There is no WCAG 2.3. The current recommendation is WCAG 2.2; WCAG 3 is a
  working draft. Success criteria numbered 2.3.x (Three Flashes, Animation from
  Interactions) are criteria under Guideline 2.3, not a version.
- A static or automated analyser checks a subset of success criteria and cannot
  establish conformance, let alone "full AAA".
- EU AI Act Article 50 (from 2 August 2026): providers must mark summaries and
  substantive rewrites as machine-made. The mark says a machine was involved,
  not what changed. Labels add what changed.

## Evidence status (do not overclaim)

| Claim | Status |
|---|---|
| AI answers about news often distort content | TESTED (BBC 2025; EBU/BBC 2025) |
| AI accessibility adaptations break declared items at material rates | OPEN |
| The commonest barriers block people but not agents | DESIGNED |
| Giving the tool the declaration improves fidelity | OPEN |
| Labels improve reader outcomes | OPEN |
| Legal points | ASSUMED |

When a finding rests on an OPEN or DESIGNED claim, say so. When only disabled
readers can settle whether something is intact or usable, say that it needs
them and do not settle it yourself.
