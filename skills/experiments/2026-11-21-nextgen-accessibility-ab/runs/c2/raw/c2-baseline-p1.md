### F1. Easy Read implies dosing every 4 hours with no 24-hour limit (overdose risk)
- Where: dosing-easy-read.html, clock row: `<p>Give your child 1 dose every 4 hours.</p>`
- Problem: The full page says "Leave at least 4 hours between doses. Do not give more than 4 doses in 24 hours." The Easy Read turns a minimum gap into a schedule ("every 4 hours") and leaves out the maximum of 4 doses in 24 hours. Followed literally, that is 6 doses a day. For 2 to 3 month olds the full page allows only 2 doses in total, and the Easy Read says nothing about that either.
- Who is affected: People with learning disabilities, low literacy or cognitive impairments, and anyone tired or stressed, who rely on the Easy Read and follow it literally.
- Impact: A carer following the instruction exactly would give 50% more than the maximum daily dose. That is a real risk of paracetamol overdose and liver damage in a child.
- Severity: 3
- Fix: Replace it with two separate sentences, each with its own picture: "Wait at least 4 hours before the next dose." and "Do not give more than 4 doses in 1 day (24 hours)." Show the 4-dose limit visually, for example as 4 spoon pictures with a stop sign. Take the Easy Read down until it has been corrected and checked by a clinician.
- Evidence: Easy Read "1 dose every 4 hours" compared with dosing.html `.warn` note "Leave at least 4 hours between doses. Do not give more than 4 doses in 24 hours." and the table row "No more than 2 doses."
- Needs user testing: yes. Ask Easy Read users how many doses they would give in a day, and when.

### F2. Easy Read leaves out every safety warning on the full page
- Where: dosing-easy-read.html, whole document
- Problem: These are not in the Easy Read: "Do not give paracetamol with other medicines that contain paracetamol, such as some cold and flu remedies"; "Call 999 or go to A&E if you think your child has taken too much paracetamol, even if they seem well"; "Speak to a doctor if your child still has a fever after 3 days". The only escalation it gives is "If you are worried, talk to a doctor."
- Who is affected: Easy Read users, who are offered this as an equivalent version.
- Impact: They are not warned about double-dosing from combination products, which is a common cause of accidental overdose. They are not told that an overdose is an emergency even when the child seems well, so they may wait for symptoms that appear late. This version is not equivalent to the full page: it omits the content that keeps a child safe.
- Severity: 3
- Fix: Add Easy Read sections for "Do not give other medicines with paracetamol in them", for example a cold and flu medicine with a symbol and an instruction to ask the pharmacist, and for "Took too much? Call 999 now, even if your child seems OK", with an emergency symbol and a `tel:999` link. Add the 3-day fever advice. Before publishing, check the Easy Read against the source line by line to confirm that every safety statement is there.
- Evidence: The `.warn` block and the "When to get help" list in dosing.html have no counterpart in dosing-easy-read.html.
- Needs user testing: yes. Test with Easy Read users whether they can say what to do after giving too much, and whether a cold remedy can be given as well.

### F3. Easy Read is out of date and contradicts the current baby advice
- Where: dosing-easy-read.html: "Easy Read. Made on 14 March 2026." and `<p>If your baby is under 3 months old, talk to a doctor first.</p>`
- Problem: The full page was reviewed on 3 November 2026 and now says "under 2 months ... unless it is after vaccinations". It also has a 2 to 3 month (after vaccinations) dose row. Its own update note says "Earlier versions of this page said to speak to a doctor for any baby under 3 months." The Easy Read still carries the old advice. Neither page tells the reader that the two versions differ.
- Who is affected: Easy Read users with babies aged 2 to 3 months, for example after the 8-week vaccinations.
- Impact: They get different medical advice from the version that other people get. They may delay treating a post-vaccination fever, or doubt advice from the nurse. Easy Read users are left with a second-class, unmaintained version, and that is misinformation.
- Severity: 3
- Fix: Regenerate and clinically check the Easy Read whenever the source changes. Tie both pages to one review date, and show "Checked on [date]" on the Easy Read. Make updating the Easy Read a required step of each source review. Do not leave it to the AI tool alone.
- Evidence: The two pages give different dates (14 March 2026 and 3 November 2026), and the dosing.html update note describes exactly the advice that the Easy Read still gives.
- Needs user testing: no

### F4. Easy Read gives no doses and points the reader to the box
- Where: dosing-easy-read.html: `<p>Look at the box to see how much to give.</p>`
- Problem: Working out a dose from the leaflet or box is the hardest task on this page, and the Easy Read hands it back to the reader. It gives no age-based amounts, does not say which strength to use ("120mg in 5ml ... for children under 6"), and does not say that the dose depends on the child's age. A different strength (for example 250mg/5ml six-plus suspension) has different volumes on its box.
- Who is affected: People with learning disabilities, low literacy or dyscalculia, and people who cannot read small print on packaging, including people with low vision.
- Impact: The Easy Read user is sent to dense, small-print packaging, the least accessible source available. That raises the chance of the wrong product or the wrong volume.
- Severity: 2
- Fix: Give one Easy Read row per age band, with the amount in ml and a picture of a filled syringe at that level. Show a picture of the correct bottle or strength, for example "The box says 120mg in 5ml". Tell users to ask a pharmacist if unsure.
- Evidence: There is no dose content in the Easy Read, while dosing.html has a full dose table.
- Needs user testing: yes. Test whether users can pick the correct product and measure the correct volume using the Easy Read alone.

### F5. Overlapping age bands in the dose table
- Where: dosing.html, table rows "2 to 3 months", "3 to 6 months", "6 to 24 months", "2 to 4 years", "4 to 6 years"
- Problem: The boundary ages appear in two rows that give different doses. A 6-month-old fits both 2.5ml and 5ml, a 2-year-old fits both 5ml and 7.5ml, and a 4-year-old fits both 7.5ml and 10ml.
- Who is affected: Everyone, and especially people with cognitive or learning disabilities and people who read literally, including some autistic users. Screen-reader users who hear row headers one at a time also cannot compare boundaries at a glance.
- Impact: A reader has to guess which dose applies at the boundary ages, which can mean the wrong dose.
- Severity: 2
- Fix: Use bands that do not overlap and are explicit, for example "3 months to 5 months", "6 months to 23 months", "2 years to 3 years", "4 years to 5 years" (or "2 years up to their 4th birthday").
- Evidence: Table `th scope="row"` text.
- Needs user testing: yes. Ask parents of a child exactly 6 months, 2 years or 4 years old which row they would use.

### F6. Under-2-months rule is hard to parse and leaves a gap in the table
- Where: dosing.html, "Before you start": "If your baby is under 2 months old, speak to a doctor or pharmacist before giving paracetamol, unless it is after vaccinations."; table row "2 to 3 months (after vaccinations)"
- Problem: The sentence nests a condition inside an exception. It is unclear whether "after vaccinations" applies to babies under 2 months, who are not usually vaccinated yet. The table does not say what to do for a baby aged 2 to 3 months who has not just had vaccinations.
- Who is affected: People with cognitive and learning disabilities, people reading in a second language, and stressed carers.
- Impact: The reader is unsure whether giving a dose is allowed for a young baby, the highest-risk group.
- Severity: 2
- Fix: Split it into short, single-condition statements, for example: "Under 2 months: do not give paracetamol. Speak to a doctor or pharmacist." "2 to 3 months, after vaccinations: see the table." "2 to 3 months, for any other reason: speak to a doctor or pharmacist first."
- Evidence: Quoted text and table row.
- Needs user testing: yes. Comprehension test with carers of young babies.

### F7. Unexplained jargon, abbreviations and inconsistent notation
- Where: dosing.html: "infant suspension", "120mg in 5ml" (list) compared with "120mg/5ml" (caption), "ml", "A&amp;E", "remedies"; dosing-easy-read.html: "high temperature" compared with "fever" on the full page
- Problem: Medical terms and abbreviations are not explained (WCAG 3.1.3 and 3.1.4, AAA). The same strength is written two different ways. Screen readers read "120mg/5ml" inconsistently, for example as "120 m g slash 5 m l", and some read "ml" as "mil". The two versions use different words for the same symptom.
- Who is affected: People with cognitive disabilities, low literacy, people reading in a second language, and screen-reader users.
- Impact: The reader may not match the page to the product label, or may not understand the units.
- Severity: 1
- Fix: Write "120 mg in 5 ml (infant liquid)" every time, and expand ml as "millilitres" at first use. Expand A&E as "A&amp;E (accident and emergency)". Use "fever (high temperature)" consistently on both pages.
- Evidence: Quoted strings.
- Needs user testing: yes. Screen-reader output of the dose strings in JAWS, NVDA and VoiceOver.

### F8. Change notice is at the end of the page and is not passed on to Easy Read users
- Where: dosing.html, the final `<p>Update, 3 November 2026: ...</p>`; the Easy Read link `<a href="dosing-easy-read.html">Easy Read version</a>`
- Problem: A safety-relevant change to the advice is announced after all the other content, where people who scan or stop early will miss it. The link to the Easy Read gives no hint that it is older and differs from the advice above.
- Who is affected: Returning carers who remember the old advice, screen-reader users moving by heading (the notice has no heading), and Easy Read users.
- Impact: People do not notice that the advice has changed, or they follow the outdated Easy Read.
- Severity: 2
- Fix: Move the update notice near the top, under its own heading ("What has changed"). Keep the Easy Read in sync (see F3). Until it is, label the link, or remove it.
- Evidence: Position of the update paragraph. Date mismatch between the two versions.
- Needs user testing: no

### F9. Emergency number is not actionable and the key warning is not reachable by heading
- Where: dosing.html: "Call 999 or go to A&amp;E ..." (plain text); `<div class="warn" role="note" aria-label="Important">`
- Problem: 999 is not a `tel:` link. The most important dosing limit sits in a note with no heading, so it cannot be reached through heading navigation. Some screen readers do not announce `role="note"` or its `aria-label` at all. Visually, the warning is set apart mainly by a red border and tint.
- Who is affected: People with motor impairments or cognitive load in an emergency on a mobile device, and screen-reader users who navigate by heading.
- Impact: Dialling takes longer, and the dose limit can be skipped.
- Severity: 1
- Fix: Use `<a href="tel:999">Call 999</a>`. Give the warning a visible heading, for example `<h2>Important: how many doses</h2>`, or start it with visible text such as "Important:".
- Evidence: Markup quoted.
- Needs user testing: yes. Test landmark and heading navigation to the warning in NVDA and VoiceOver.

### F10. Easy Read pictures are not matched to the text
- Where: dosing-easy-read.html: `sym/bottle.png` next to "Look at the box"; `sym/spoon.png` next to "spoon or syringe"; `sym/clock.png` next to "every 4 hours"
- Problem: The pictures come from a generic symbol library and do not show the specific instruction: a bottle for "box", only a spoon although a syringe is mentioned, and a clock that cannot show "at least 4 hours, max 4 a day". There is no sign that anyone checked whether the pictures support understanding. The `alt=""` is acceptable for screen-reader users because the text carries the meaning.
- Who is affected: Easy Read users who rely on the pictures to understand and remember the text.
- Impact: The pictures add little support, or suggest the wrong object.
- Severity: 1
- Fix: Choose or commission pictures that show each specific action (the actual oral syringe, the filled amount, a 24-hour clock with 4 marked doses). Test them with Easy Read users.
- Evidence: File names next to the paired text.
- Needs user testing: yes. Test whether the pictures convey the intended instruction without the text.

### F11. Safety-critical Easy Read published from an AI tool without clinical or user review
- Where: Case context ("makes Easy Read versions with an AI writing tool"); dosing-easy-read.html
- Problem: F1 to F4 show that the AI output changed meaning: a minimum gap became a schedule, warnings were dropped and the content is out of date. Nothing on the page says it was checked by a clinician or tested with Easy Read users, which Easy Read practice expects.
- Who is affected: All Easy Read users.
- Impact: Disabled users systematically get less safe health information than everyone else.
- Severity: 3
- Fix: Require clinical sign-off and testing with people with learning disabilities before any Easy Read health content is published. Give it a shared review date with the source. Record a diff check of every safety statement.
- Evidence: F1 to F4.
- Needs user testing: yes. Easy Read panel review of the corrected version.

Not found: language attribute (`lang="en-GB"`) on both pages; viewport allowing zoom and reflow; descriptive page titles; landmarks (`header`, `main`, `footer`); single `h1` and logical heading order; data-table markup (`caption`, `scope="col"` and `scope="row"`); text and link colour contrast (#1a1a1a and #0b4f8a on white); visible keyboard focus style; Easy Read font size and line spacing; decorative `alt=""` on Easy Read symbols (correct given that the text carries the meaning); link to the Easy Read near the top of the full page; link to the accessibility statement in the footer; no motion, media, overlays or tracking in this material.
