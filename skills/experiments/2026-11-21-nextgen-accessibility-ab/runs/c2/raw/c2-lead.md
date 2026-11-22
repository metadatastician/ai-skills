### F1. Easy Read turns the 4-hour minimum gap into a schedule and drops the 4-in-24-hours maximum
- Where: `dosing-easy-read.html`, clock row. Against `dosing.html`, `.warn` box first paragraph and the "How often" column of the table.
- Problem: "Leave at least 4 hours between doses" is a minimum. The version says "Give your child 1 dose every 4 hours", which is a fixed timetable. The item is **changed**. "Do not give more than 4 doses in 24 hours" is **dropped (silent)**, and so is every "Up to" in the table. Read literally, "every 4 hours" gives 6 doses in 24 hours. It also loses "if needed" and "up to", so it reads as regular dosing whatever the child's state. The line applies to every age, including the 2 to 3 months row, where the original allows "No more than 2 doses". Distortion is never allowed, whatever the weight.
- Who is affected: Everyone who gives medicine using the Easy Read version, and the children they give it to.
- Impact: Following the version as written exceeds the original's stated 24-hour maximum. The reader is misinformed, not just uninformed.
- Severity: 3
- Fix: Withhold the version now. Regenerate it from the current original, carrying both rules in the original's sense, for example "Wait at least 4 hours before the next dose. Never give more than 4 doses in 24 hours." Do not write a schedule. Check it against the declaration (F9) before it carries any label other than Unchecked.
- Evidence: Original: "Leave at least 4 hours between doses. Do not give more than 4 doses in 24 hours." and "Up to 4 times in 24 hours". Version: "Give your child 1 dose every 4 hours." The Easy Read page mentions no maximum anywhere.
- Needs disabled readers: yes. After reading only the regenerated Easy Read page, can Easy Read users, including parents with learning disabilities, correctly give the earliest time for the next dose after a given dose, the most doses in one day, and whether to give a dose to a child who seems better? Code each answer as correctly informed, uninformed or misinformed. Run the same test on the current version for a baseline. Only these readers can settle whether the reworded rule is intact.

### F2. Strength, age range and every dose amount dropped and replaced with "Look at the box"
- Where: `dosing-easy-read.html`, bottle row, and its `<title>`. Against `dosing.html`, "Before you start" first bullet and the dose table.
- Problem: The strength and age range ("120mg in 5ml liquid (infant suspension) for children under 6") are **dropped (silent)**. All dose amounts (2.5ml, 5ml, 7.5ml, 10ml by age band, and the 2 to 3 months row) are **dropped (silent)**. No millilitre figure appears anywhere on the page. In their place the version adds an instruction the original does not give: "Look at the box to see how much to give." That moves the source of the dose from the trust's guidance to whatever product the reader is holding. Because the strength is gone, nothing tells the reader that the guidance holds only for one strength. The title also drops "Liquid" and "how much to give". Under the theory's rule on reader choice, the form the reader chose has lost the substance. The only routes back are the packaging or asking a person, so the reader must ask for help to get what the full page gives without asking.
- Who is affected: Easy Read users giving paracetamol to a child under 6, especially anyone holding a different strength of liquid or several paracetamol products.
- Impact: The reader cannot answer "how much?" from this version, and may read a dose off the wrong product. It is not shown that the packaging is harder to read than the full page; the point is that the version hands its main content to a source the trust does not control.
- Severity: 3
- Fix: Withhold. The regenerated version keeps the strength, the age range and each age band's dose in ml, one band per row, and removes "Look at the box" unless the author adds it to the original. If a band cannot be put in Easy Read without changing it, withhold the version (Withheld), not cut the band. Give the title "liquid" and "how much".
- Evidence: Original: "Use the 120mg in 5ml liquid (infant suspension) for children under 6." and the table rows. Version: "Look at the box to see how much to give." Titles: "Liquid paracetamol for children: how much to give" against "Easy Read: giving paracetamol to your child".
- Needs disabled readers: yes. Give Easy Read users the regenerated page and two bottles of different strengths. Can they pick the right bottle for a 3-year-old and the right amount? Record correct, unable to answer, or wrong. Test whether one-row-per-age layout, and any picture of a filled syringe, helps or misleads.

### F3. Overdose emergency instruction dropped; only "If you are worried, talk to a doctor" remains
- Where: `dosing-easy-read.html`, doctor row. Against `dosing.html`, "When to get help", first bullet.
- Problem: "Call 999 or go to A&E if you think your child has taken too much paracetamol, even if they seem well." is **dropped (silent)**. The version has no 999, no A&E and no "even if they seem well". Its only route to help depends on the carer being worried, while the original's emergency route explicitly covers a child who seems well. "If you are worried" is **kept** from the second bullet; it does not stand in for the emergency instruction.
- Who is affected: Easy Read users whose child may have taken too much paracetamol. F1 and F4 make that situation more likely.
- Impact: The version does not give the emergency action for suspected overdose, so urgent care could be delayed or not sought.
- Severity: 3
- Fix: Withhold. The regenerated version keeps the instruction in meaning: 999 or A&E, now, even if the child seems well. Declare it critical, with "even if they seem well" as part of the critical item.
- Evidence: Original: "Call 999 or go to A&E if you think your child has taken too much paracetamol, even if they seem well." Version: "If you are worried, talk to a doctor."
- Needs disabled readers: yes. Scenario test with the regenerated wording: "You think your child had too much paracetamol, but they are playing happily. What do you do, and how quickly?"

### F4. Warning against other medicines that contain paracetamol dropped silently
- Where: `dosing-easy-read.html`, whole page. Against `dosing.html`, `.warn` box second paragraph.
- Problem: "Do not give paracetamol with other medicines that contain paracetamol, such as some cold and flu remedies." is **dropped (silent)**. No row mentions other medicines.
- Who is affected: Easy Read users who also have cold and flu remedies for children, and those children.
- Impact: The reader is not told about this route to double dosing. With F1, the total dose could go further above the maximum.
- Severity: 3
- Fix: Withhold. The regenerated version includes the warning with its example, for example "Some cold and flu medicines have paracetamol in them too. Do not give them with this medicine." Declare it critical.
- Evidence: The original sentence above. The version's six rows cover medicine, spoon, baby, clock, bottle and doctor, and none of them mentions other medicines.
- Needs disabled readers: yes. Ask after reading the regenerated page: "Your child is taking this paracetamol. Can you also give a cold and flu syrup?" Code the answers as correctly informed, uninformed or misinformed.

### F5. The full page's own advice for babies under 3 months is ambiguous, so no faithful plain version can be written yet
- Where: `dosing.html`, "Before you start" third bullet, and table row "2 to 3 months (after vaccinations)".
- Problem: The text leaves cases open. (a) "If your baby is under 2 months old, speak to a doctor or pharmacist ... unless it is after vaccinations" can be read as permission to give paracetamol under 2 months after vaccinations, but the table gives no dose below 2 months. (b) Nothing says what to do for a baby aged 2 to 3 months who has not had vaccinations; the next row up is "3 to 6 months ... Up to 4 times in 24 hours". (c) "No more than 2 doses" has no time frame: in total, per day or per vaccination. The bullet also packs a rule and an exception into one sentence. The team does not say what the correct clinical advice is; the gaps are in the text.
- Who is affected: Every reader of the full page caring for a baby under 3 months, including screen-reader users, who hear the table row and the bullet separately. Also anyone making a version from it.
- Impact: A reader could dose a baby the guidance does not cover, or give more doses than intended. Any adapted version will either guess or carry the gap forward.
- Severity: 2
- Fix: The trust's clinical authors settle the wording at source: under 2 months with and without vaccinations, 2 to 3 months without vaccinations, and a time frame for "No more than 2 doses". Declare the result as critical items, then regenerate every version.
- Evidence: The bullet and table row quoted above, read together.
- Needs disabled readers: yes. Ask a mixed panel, including screen-reader users reading the table and Easy Read users of the remade version: "Your baby is 7 weeks old and had vaccinations today. What does the page tell you to do?" "Your baby is 10 weeks old with a temperature and no vaccinations. What does it tell you?" "After a vaccination, how many doses can a 10-week-old have in total?"

### F6. The version calls itself "Easy Read" and is linked as the "Easy Read version", but carries no record of who made it, from what, or any check
- Where: `dosing-easy-read.html`, label line "Easy Read. Made on 14 March 2026." `dosing.html`, link "Easy Read version" on a page marked "Page last reviewed: 3 November 2026".
- Problem: These are statuses the material awards itself. The label gives only a date. It does not say an AI writing tool wrote the text, which the case states. It does not name the source revision, record any check, or list what was cut. Its class is Unchecked at best. On F1 to F4 and F8 it would be Unfaithful against the reviewer-derived declaration (F9), so it can carry no label and should be withheld. The link presents it without qualification as a version of the current guidance. "Page last reviewed: 3 November 2026" covers the full page; nothing shows the linked version was reviewed then, and its own date is March. The name "Easy Read" itself claims the version is made for a particular group of readers. The case describes the process as an AI tool plus symbols added by the content team, and records no part for Easy Read users in making or checking it (lead addition, principle 5). A tool's or a page's claim about itself is not evidence. An EU AI Act Article 50 machine-made mark would apply from 2 August 2026 if the trust is in scope, and the page is linked from a page reviewed after that date (legal point, ASSUMED). A mark alone would not say what changed.
- Who is affected: Every reader of the Easy Read version, and anyone who passes it on. They have no on-page way to tell it is machine-written, unchecked and older than the guidance.
- Impact: The version is trusted as equal to the guidance when it is not. Severity is held at 2 because the harm is counted in F1 to F4; the label is what would let readers know not to rely on it.
- Severity: 2
- Fix: Remove the link now, or replace it with a visible notice that the Easy Read version is being remade. Label the remade version in visible text, not hidden metadata, with: its maker (AI tool and human checker), its source ("made from the page reviewed 3 November 2026"), its date, the check result against the declaration including any named cuts, and a machine-made mark. Show the same status beside the link. Use the name "Easy Read" only once Easy Read users have taken part in checking the version.
- Evidence: Label and link text quoted above. Case material: "The trust's content team makes Easy Read versions with an AI writing tool and adds pictures from a symbol library."
- Needs disabled readers: yes. Easy Read users decide what checking a version called "Easy Read" requires, and test whether they notice and understand the status line and can tell a Checked version from an unchecked or out-of-date one. Whether labels improve outcomes is OPEN.

### F7. Easy Read made from the pre-correction original (chain fault) and repeats the withdrawn baby advice
- Where: `dosing-easy-read.html`, date line and baby row. Against `dosing.html`, review date, "Before you start" third bullet, 2 to 3 months row and the update note.
- Problem: The version is dated 14 March 2026. The original was corrected on 3 November 2026. The version's line "If your baby is under 3 months old, talk to a doctor first" matches the advice the update note says earlier versions gave. Against the current original: the age threshold is **changed** (2 to 3 months), "or pharmacist" and "unless it is after vaccinations" are lost, the 2 to 3 months row is **dropped (silent)**, and the correction is **dropped (silent)**. This is a chain fault under principle 1. Neither page says the two have diverged. Only the baby line can be traced to the older source; the other faults are measured against the page readers are sent from.
- Who is affected: Easy Read users caring for a baby aged 2 to 3 months after vaccinations, and anyone who compares the two pages.
- Impact: The trust gives two different answers for this age, and the correction does not reach Easy Read readers. The withdrawn advice is the more cautious one, so its direct risk is delay of pain relief or an unneeded doctor visit, not overdose; severity is 2, not 3. Once given the go-ahead, the version gives no 2-dose limit for this age (F1).
- Severity: 2
- Fix: Regenerate from the 3 November 2026 original, carrying the corrected threshold, the 2 to 3 months row and the correction. Record the source revision in the label (F6). Make any correction to an original mark or withdraw its dependent versions until they are remade and re-checked.
- Evidence: "Easy Read. Made on 14 March 2026."; "If your baby is under 3 months old, talk to a doctor first."; "Page last reviewed: 3 November 2026"; "Earlier versions of this page said to speak to a doctor for any baby under 3 months."
- Needs disabled readers: no for the chain fault, which the dates and text show. Yes for the wording of a correction notice in Easy Read: test whether Easy Read users can tell from it which advice is current.

### F8. A separate Easy Read URL sends the publisher a request that implies a reader's need
- Where: `dosing.html`, link to `dosing-easy-read.html`. The Easy Read page, its links, and its six symbol images (`sym/*.png`), which only that page loads of the two files.
- Problem: The adapted form can be got only by requesting a different URL, so the choice of form reaches the publisher's server with every visit, together with six image requests. Easy Read is a format designed for people with learning disabilities, so the path implies a need even though some readers choose it for other reasons. No `Referrer-Policy` is set, so under the browser default the Easy Read path is also sent as the referrer to every same-origin page the reader goes on to (`/`, `dosing.html`, `/accessibility`). Combined with the topic (dosing for young children and babies) and the time of the request, these signals could build a sensitive profile, the composition leak. The theory says no request may reveal a reader's needs. What is shown: the requests reach the server. What is not shown: logging, retention, analytics or any harm; neither file has scripts or cookies. Data implying a disability may be special category data under UK GDPR (legal point, ASSUMED).
- Who is affected: Every reader who opens the Easy Read version, including carers reading for someone else.
- Impact: The trust may hold need-implying data it never asked for, tied to IP addresses. Whether it does depends on server configuration not supplied.
- Severity: 2
- Fix: Smallest fix: once a Checked version exists, deliver both forms in one document with a toggle that runs only on the device, with no URL change, cookie, request or analytics event, and load or inline the symbols for every reader. If a separate URL stays: set `Referrer-Policy: no-referrer` or `same-origin` on the Easy Read page, keep its path out of logs with client identifiers and out of analytics, set no cookies, keep log retention short, truncate IP addresses, and never link web logs to patient records.
- Evidence: Both files as supplied. Referrer behaviour is the browser default. Server, CDN and analytics configuration were not supplied, so logging is inferred, not observed.
- Needs disabled readers: yes. Test whether an in-page toggle is as easy to find and use as a separate link for Easy Read users and screen-reader users, and whether switching keeps their place.

### F9. No must-survive declaration exists, so no version can be checked or labelled
- Where: `dosing.html`.
- Problem: The original marks nothing as must-survive (principle 2), so the AI tool and the content team had nothing to check against, and no version can earn Checked. The fidelity reviewer drafted a declaration (D1 to D13): strength, the minimum gap, the daily maximum, the dose table, the 2 to 3 months row, the combination warning, the 999/A&E instruction and the correction as critical; the syringe or spoon, the 3-day fever trigger and "or you are worried" as important; the review date as optional. That list is the reviewer's, not the author's. Every outcome code and class in this review is measured against it and is provisional. The withhold recommendation does not depend on it: F1 contradicts the original whatever the weights.
- Who is affected: Every reader of any version made from this page. Also the content team.
- Impact: Nothing tells the tool or the checker what may not be lost, so faults like F1 to F4 go unchecked.
- Severity: 2
- Fix: The author confirms or corrects D1 to D13, after settling F5, and publishes it with exact words, type and weight. Every version is generated from the current original and checked against it.
- Evidence: Neither file contains any declaration, note or markup of must-survive items.
- Needs disabled readers: yes. Easy Read users, including parents with learning disabilities, decide the weights for the versions made for them, in particular whether the syringe or spoon line and the 3-day fever trigger are critical.

### F10. Warning box: the "Important" label is given to assistive technology but not shown
- Where: `dosing.html`, `<div class="warn" role="note" aria-label="Important">`.
- Problem: The word "Important" exists only in `aria-label`. Sighted readers get a red left border and tinted background with no visible word. What is announced and what is seen differ. Whether and how screen readers announce `aria-label` on `role="note"` was not tested and is not established.
- Who is affected: Readers of the full page, including screen-reader users and readers who benefit from an explicit visible word.
- Impact: Low. The bold text carries most of the warning's weight.
- Severity: 1
- Fix: Put a visible heading or the word "Important" inside the box and drop the `aria-label`, so seen and announced match.
- Evidence: The markup and the `.warn` CSS as supplied.
- Needs disabled readers: no.

### F11. The 3-day fever trigger dropped without naming the cut
- Where: `dosing-easy-read.html`, doctor row. Against `dosing.html`, "When to get help", second bullet.
- Problem: "Speak to a doctor if your child still has a fever after 3 days" is **dropped (silent)**. On the reviewer-derived weight (important) this alone is an undeclared cut; it becomes acceptable only if the cut is named.
- Who is affected: Easy Read users caring for a child with a fever lasting days.
- Impact: The reader is not told when to escalate; escalation depends on the carer being worried.
- Severity: 1
- Fix: Add "If your child still has a high temperature after 3 days, talk to a doctor.", or name the cut.
- Evidence: Original bullet above. Version: "If you are worried, talk to a doctor."
- Needs disabled readers: yes. Ask: "Your child has had a temperature for 4 days but is drinking. Should you talk to a doctor?" Easy Read users also settle this item's weight (F9).

### F12. New factual claim about what paracetamol is for
- Where: `dosing-easy-read.html`, medicine row.
- Problem: "Paracetamol is a medicine" is an explanation for readers, not a claim. "It can help when your child has a high temperature or is in pain" is a claim about uses that the original does not make. Under the class rule any new factual claim makes a version Unfaithful. The claim may be true; the point is that the original does not carry it.
- Who is affected: Easy Read users.
- Impact: Low on its own. It adds content no one has checked against the trust's guidance.
- Severity: 1
- Fix: Either the author adds the uses to the original and the declaration, or the regenerated version drops the sentence.
- Evidence: No statement of uses in `dosing.html`; fever appears only in "still has a fever after 3 days".
- Needs disabled readers: no.

### F13. What the symbols convey is unknown and may reinforce the wrong reading
- Where: `dosing-easy-read.html`, all six row images, `alt=""`.
- Problem: The image files were not supplied, so what each symbol shows cannot be checked from the code. The clock sits beside the changed interval (F1) and the bottle beside "Look at the box" (F2), so the pairing may strengthen those readings. With `alt=""`, screen-reader users get the text alone, which is acceptable only while the text is correct and the symbols add nothing the text lacks. That cannot be confirmed without the images. One reviewer's statement that no symbol carries content absent from its row is struck: the images were not seen.
- Who is affected: Easy Read users who use the symbols, and screen-reader users if a symbol carries meaning.
- Impact: Uncertain. Not established either way.
- Severity: 1
- Fix: Choose symbols for the corrected sentences, for example a gap between doses or a "most 4" counter, not a plain clock. Keep `alt=""` only where the row text says everything the symbol shows. Do not add keyword-style alt text.
- Evidence: The image and text pairing in the markup. The images were not supplied.
- Needs disabled readers: yes. Show Easy Read users the symbol rows with and without text and ask what each picture tells them to do. Only they can settle whether the symbols are intact.

Not found: an author's must-survive declaration; any record of the AI tool, prompt, source revision, human check or check result for the Easy Read version; a machine-made mark; a correction notice or version history on the Easy Read page; any link from versions to the original's review cycle; any Easy Read users in the making or checking process; other versions (summary, key points, audio, read-aloud, translation); conformance badges, automated scores or "accessible"/"verified" claims on either page (the linked `/accessibility` statement was not supplied, so whether it cites an automated result is unknown; the alignment-gap claim that an automated audit "would pass both pages" was dropped because no tool was run); analytics, cookies, scripts, preference URLs or third-party hosts; terms restricting personal adaptation; any outcome testing with readers. The symbol images, server configuration and log retention were not supplied and were not reviewed.
