### F1. Easy Read changes the dosing interval into an overdose instruction
- Where: dosing-easy-read.html, clock row: "Give your child 1 dose every 4 hours."
- Problem: The original says "Leave at least 4 hours between doses. Do not give more than 4 doses in 24 hours." The Easy Read turns a minimum gap into a fixed schedule. Followed literally, that is 6 doses in 24 hours. The 4-in-24-hours limit is not there. Outcome codes: the interval hedge is *changed*, and the daily maximum is *dropped (silent)*. Both are critical number/instruction items, so the version is Unfaithful and should be Withheld. The clock symbol next to the text backs up the wrong reading.
- Who is affected: Parents and carers who rely on Easy Read, such as people with learning disabilities, low literacy or cognitive impairment, or people reading in a second language. These are the readers least likely to check against the dense full page.
- Impact: Risk of paracetamol overdose in a child.
- Severity: 3
- Fix: Take the Easy Read version down now (Withheld). Write the author's must-survive declaration: minimum 4-hour gap and maximum 4 doses in 24 hours, both critical. Regenerate the version from the current original and have a person check it against that declaration before it carries any label other than Unchecked.
- Evidence: dosing.html `.warn` block, first paragraph, against dosing-easy-read.html clock row.
- Needs disabled readers: yes. Test whether Easy Read users can correctly say the minimum gap and the daily maximum after reading the revised version, alone and with the symbols. Only they can settle whether the wording and symbols carry the limit.

### F2. Easy Read was made from an out-of-date original (chain fault) and carries the superseded advice
- Where: dosing-easy-read.html "Made on 14 March 2026" and baby row "under 3 months old, talk to a doctor first", compared with dosing.html "Page last reviewed: 3 November 2026" and the Update note.
- Problem: The full page was corrected on 3 November 2026. Its own update note says earlier versions said "speak to a doctor for any baby under 3 months", which is the exact advice the Easy Read still gives. The 2 to 3 months after-vaccinations row (2.5ml, no more than 2 doses) and the correction notice are both missing from the Easy Read version. Principle 1 says a version made from an older original is a chain fault. Nothing on either page says the two versions have diverged.
- Who is affected: Easy Read readers with a 2 to 3 month old baby who has just been vaccinated. They get different advice from readers of the full page.
- Impact: Two audiences get inconsistent medical advice from the same trust. The correction is never delivered to the readers who most need it to be clear.
- Severity: 3
- Fix: Record which original revision each version was made from, and withdraw or flag versions automatically when the original changes. Regenerate the Easy Read from the 3 November 2026 original, with the correction as a declared critical item.
- Evidence: dates and update note quoted above. The Easy Read text matches the pre-correction wording described in the update note.
- Needs disabled readers: no for the chain fault itself. Yes, to test how a correction notice should be worded in Easy Read.

### F3. Overdose emergency action is dropped and replaced with a weaker instruction
- Where: dosing-easy-read.html doctor row: "If you are worried, talk to a doctor."
- Problem: The original says to call 999 or go to A&E if the child may have taken too much, "even if they seem well". The Easy Read drops this, and its closing line suggests talking to a doctor is the step to take for any worry. The urgency and the "even if they seem well" hedge are lost. The "fever after 3 days" trigger is also dropped silently.
- Who is affected: Easy Read readers in an overdose situation.
- Impact: Delayed emergency care. Paracetamol overdose can look symptom-free at first.
- Severity: 3
- Fix: Declare the 999/A&E instruction, including "even if they seem well", as critical. Mark the 3-day fever trigger as important, and name the cut if it is left out.
- Evidence: dosing.html "When to get help" list compared with the Easy Read final row.
- Needs disabled readers: yes. Test whether readers act correctly on an overdose scenario using the revised wording.

### F4. Strength, per-age doses and the "no other paracetamol" warning are dropped, and a new instruction is added
- Where: dosing-easy-read.html bottle row: "Look at the box to see how much to give."; the spoon row.
- Problem: The strength (120mg in 5ml, infant suspension, under 6) is dropped silently, and so is the whole dose table. The warning against combining with other paracetamol-containing medicines, such as cold and flu remedies, is also dropped silently. "Look at the box" is guidance the original does not give, so it should be logged as an added claim. It sends readers to the dense small print that Easy Read exists to replace. If the box is a different strength, the dose will be wrong.
- Who is affected: Easy Read readers and anyone with low literacy. Carers who hold several cold remedies at once face a double-dosing risk.
- Impact: Wrong-strength or doubled dosing. The reader burden moves back onto packaging.
- Severity: 3
- Fix: Keep the strength and the per-age doses as critical items. If a format choice leaves them out, name the cut and say where to find them. Keep the "no other paracetamol" warning as critical. Remove or justify the new box instruction.
- Evidence: dosing.html "Before you start" list, table and `.warn` second paragraph, compared with the Easy Read rows.
- Needs disabled readers: yes. Test whether a per-age dose presentation, such as one row per age with a symbol, is usable in Easy Read, or whether readers do better being sent elsewhere.

### F5. Machine-made version has no Unchecked or machine-made label, and the link presents it as equivalent
- Where: dosing-easy-read.html "Easy Read. Made on 14 March 2026."; dosing.html link text "Easy Read version".
- Problem: The case material says the Easy Read was written with an AI tool. The page says only "Easy Read", which reads as a trusted, equivalent format. There is no Unchecked label, no machine-made mark, no record of who made it or from which original revision, and no list of what was cut. A machine-made mark under EU AI Act Art. 50 would apply from 2 August 2026 if the trust is in scope; that is a legal point, ASSUMED. Even with the mark, the page would still not say what changed.
- Who is affected: Easy Read readers, who have no way to tell this is an unchecked AI paraphrase.
- Impact: Misplaced trust in a version that is unfaithful (F1 to F4).
- Severity: 2
- Fix: Add a plain, visible line saying this version was written by a computer, whether a person has checked it, the date of the full page it came from, and what was left out. Put the same label next to the link on dosing.html. Do not use hidden metadata for this (see F8).
- Evidence: the case statement about the AI writing tool. The label text on the page.
- Needs disabled readers: yes. Test the wording of a label that Easy Read readers can understand and act on (principle 5). Whether labels improve outcomes is OPEN.

### F6. An automated audit would pass both pages while the Easy Read is dangerous
- Where: both files.
- Problem: Both pages carry the signals automated tools reward: `lang`, a viewport that allows zoom, `alt` present on every image, table `caption` and `scope`, visible focus styles, and dark-on-white text. None of the faults in F1 to F4 can be found by code or screenshot inspection: the changed dose interval, the stale chain, the dropped emergency step and the added claim. No score or badge is shown on these pages. However, the accessibility statement linked from both pages could cite an automated result, and that would treat the automated slice as the whole. The statement was not provided, so this is not established.
- Who is affected: everyone who relies on the Easy Read version.
- Impact: The page can be reported as accessible while it misinforms.
- Severity: 2
- Fix: Treat version fidelity against a declaration as part of accessibility sign-off. Do not let an automated pass support a conformance claim, or any claim, about the Easy Read.
- Evidence: the markup as listed. The finding that the faults are invisible to automated tools rests on the theory ("automated tools cannot count ... reading level, cognitive load"). The general claim that the commonest barriers block people but not agents is DESIGNED, not tested.
- Needs disabled readers: no for the detection gap. The fixes need them (see above).

### F7. The original's own vaccination wording is ambiguous, so no faithful plain version can exist yet
- Where: dosing.html "If your baby is under 2 months old, speak to a doctor or pharmacist before giving paracetamol, unless it is after vaccinations." Table row "2 to 3 months (after vaccinations)".
- Problem: The bullet suggests a baby under 2 months may be given paracetamol after vaccinations, but the table has no dose for under 2 months. The bullet also packs a condition and an exception into one sentence. An agent may parse this without trouble while a person with cognitive or reading difficulties struggles, a people-not-agents barrier (DESIGNED). Any plain-language version will either guess or carry the ambiguity forward.
- Who is affected: all readers, and most of all those with cognitive or literacy barriers. Also anyone producing adapted versions.
- Impact: Uncertainty about whether to dose a very young baby.
- Severity: 2
- Fix: The author should settle the wording at source, then declare it as a critical instruction before any version is made (principle 14, fix at source).
- Evidence: the bullet and table row quoted above.
- Needs disabled readers: yes. Test whether readers can say, after reading, what to do for a 7-week-old baby before and after vaccination.

### F8. Barriers to agents whose agent-aimed fix would harm people
- Where: Easy Read symbol images `alt=""`; the lack of a machine-readable link from the Easy Read to its source revision.
- Problem: An agent cannot tell what the symbols mean, or which original revision the version came from. The tempting agent-aimed fixes cause harm to people. Keyword-rich alt text such as "paracetamol medicine bottle dose child" would duplicate every row for screen-reader users and lengthen it. Hidden provenance metadata would hide from people the information they need (F5). With the symbols kept decorative, screen-reader and sighted readers get the same message. Whether the symbols themselves carry the right meaning, such as the clock showing "every 4 hours", can't be checked by any tool.
- Who is affected: screen-reader users and Easy Read readers.
- Impact: Possible noise and duplication if the page is "fixed for AI".
- Severity: 1
- Fix: Keep `alt=""` while the text says the same thing. Put provenance in visible text that both people and agents can read. If machine-readable provenance is added, it must match the visible label exactly.
- Evidence: markup as listed.
- Needs disabled readers: yes. Test whether the symbols help or mislead Easy Read readers, especially the clock symbol on the dosing interval.

### F9. Warning box: what is announced differs from what is seen
- Where: dosing.html `<div class="warn" role="note" aria-label="Important">`.
- Problem: Screen-reader users may hear "Important", depending on the screen reader, because `aria-label` on `role="note"` is not announced consistently. Sighted readers get only a red border and tint, with no visible word. Visual cue, spoken cue and the reliability of the spoken cue all differ. Voice-control users cannot target a label they cannot see. The ARIA serves the markup more than the reader.
- Who is affected: screen-reader, voice-control and colour-blind users, and cognitive-access users who benefit from an explicit visible word.
- Impact: Low. The bold text carries most of the weight.
- Severity: 1
- Fix: Put a visible heading or text "Important" inside the box and drop the `aria-label`, so seen and announced match.
- Evidence: markup and CSS as listed.
- Needs disabled readers: no.

### F10. A separate Easy Read URL can reveal a reader's needs
- Where: dosing.html link to `dosing-easy-read.html`.
- Problem: Requesting a distinct Easy Read URL tells the server, and any analytics, that this reader picked a cognitive-access format. That is likely special category data under UK GDPR (legal point, ASSUMED). Principle 4 says the publisher should never learn who needed what. No analytics are visible in the files, so actual collection is not established.
- Who is affected: Easy Read readers.
- Impact: Possible disclosure or profiling of disability.
- Severity: 1
- Fix: Do not log or analyse per-reader access to adapted versions. Where possible, serve the reading level as a reader-side choice that is not separately requested.
- Evidence: link markup. Analytics status unknown.
- Needs disabled readers: no.

Not found: structured data (JSON-LD, microdata), hidden text aimed at agents or search, keyword-stuffed accessible names, ARIA added for "AI readiness", live regions, automated scores or badges on these pages, captions, transcripts, audio, motion or timing behaviour, and a declared must-survive list for this guidance.
