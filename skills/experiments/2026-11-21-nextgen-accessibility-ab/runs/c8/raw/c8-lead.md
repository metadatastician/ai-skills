### F1. The badge and headline paragraph claim conformance to a WCAG version that does not exist, on automated evidence only
- Where: `<span class="badge">WCAG 2.3 AAA verified</span>` (first content after the h1); first paragraph under "How accessible this website is"; compared with the "Testing" section.
- Problem: There is no WCAG 2.3; the current Recommendation is WCAG 2.2. The page claims "fully conformant ... version 2.3 at Level AAA" and that "every page meets the standard". The only evidence the page gives is an automated tool: "scores 100 out of 100 in automated accessibility audits", "checked every night by our AccessGuard AI", and "tested ... by AccessGuard AI, an automated tool". An automated analyser checks a subset of success criteria and cannot establish conformance, let alone full AAA. Set against the page's own Testing record, the badge and paragraph change the method from "an automated tool" into "verified", drop the hedge "All issues *it found*" in favour of "you can be confident every page meets the standard", and add the version and level, which the record does not support. "You can be confident" is the publisher's assurance presented as a test result. Every one of these is a status the page awards itself, so strike them all.
- Who is affected: everyone who reads the statement, or any summary of it, to decide whether the site will work for them. Screen-reader users meet the badge as the first text after the h1. The readers who lose most are those who meet barriers an automated tool cannot count (reading level, cognitive load, timing, caption accuracy), because they are told no barrier exists.
- Impact: readers are misinformed about the site's state. A reader who hits a barrier is told it cannot exist, which discourages reports and requests for alternatives. Anyone who repeats the badge carries the false claim further.
- Severity: 3
- Fix: Remove the badge. Rewrite the paragraph from the Testing record and keep its hedge, for example: "An automated tool checked the site on 1 November 2026 and we fixed the issues it found. Automated tools find only some barriers. We have not audited the site by hand or tested it with disabled people." Name WCAG 2.2, and a conformance level, only once a dated manual audit supports it, and say who did it. Say plainly that an automated score is not conformance.
- Evidence: "WCAG 2.3 AAA verified"; "This website is fully conformant with the Web Content Accessibility Guidelines version 2.3 at Level AAA. It scores 100 out of 100 in automated accessibility audits ... so you can be confident every page meets the standard."; "last tested on 1 November 2026 by AccessGuard AI, an automated tool. All issues it found have been fixed." Context, not proof about this site: in GDS's 2017 test the best automated tool found 41% of 143 planted barriers.
- Needs disabled readers: no, for the version and scope errors, which are matters of fact. Whether the site actually works is a separate question, and only testing with disabled readers can answer it (F4).

### F2. A reader must name a disability to get a format, and the answer goes to the housing officer and the tenancy file, a fact stated only after the submit button
- Where: `<select id="disability" name="disability" required aria-describedby="disability-hint">`, with label "Your disability or condition (required)" and hint "We need this to check that you are eligible for an alternative format."; the paragraph after `</form>`: "Information you give us about your disability is shared with your housing officer and kept on your tenancy file."
- Problem: The request cannot be sent without picking a disability category. The page frames this as an eligibility test, so the publisher decides who qualifies for a format. The format field already says what to produce, so the disability field adds nothing to fulfilling the request. It collects special category data (UK GDPR) and reveals the reader's needs to the publisher, the reverse of "the publisher never learns who needed what". The list allows one choice only. "Other" opens no text box and still requires the reader to declare a condition. The data then goes past the format service to the housing officer and onto the tenancy file. No retention period, lawful basis or right to withdraw is given, and the only privacy link is a generic footer link to `/privacy`. In source order the sharing notice comes after the submit button, so a reader who works through the form in order reaches "Send request" before the notice. An assistive agent filling in the form for a tenant also has to invent an answer or disclose one.
- Who is affected: every tenant who asks for a format, including anyone whose reason fits no listed category, anyone with more than one condition, and anyone asking on someone else's behalf.
- Impact: a request for large print becomes a health record on the file of the landlord's officer. Some readers may not ask at all and go without information about their own tenancy. Those who ask may do so without having read where their answer goes.
- Severity: 3
- Fix: Delete the disability field and the eligibility wording. Supply any format to anyone who asks, without a reason. If format preferences are kept for future letters, keep them only on an opt-in basis, apart from the tenancy file and the housing officer's view, with a stated retention period and a way to withdraw. Put any privacy notice before the form. (Legal points, including UK GDPR Arts 5 and 9: ASSUMED, counsel's opinion pending.)
- Evidence: the label, hint, `required` attribute and option list quoted above; the sharing sentence follows `</form>` in the source; the footer `<a href="/privacy">` is the only privacy link.
- Needs disabled readers: yes. After a panel completes the form by its usual route, ask: "Before you pressed Send, did you know who would see what you said about your disability, and where it would be kept?" and "Did you have to say you are disabled to get a format?" Record how many abandon the form at that field. Test whether a format-only form is one panel members are willing to use. Do not assume the answers.

### F3. The AI rewrite service is promised as "instantly and accurately", with no label, no check, no machine-made mark and no route back to the original
- Where: "Our AI assistant can rewrite any page in Easy Read, British Sign Language video or another language on request, instantly and accurately."
- Problem: "Accurately" is the tool's claim about itself, which is not evidence. A version cannot award itself a label, and instant AI output is Unchecked by default. The statement mentions no must-survive declaration, though tenancy pages carry amounts, dates, deadlines, rights and instructions. It promises no label, no record of who made a version, from what or when, no Withheld route, and no link back to the original or way to report an error. It does not say outputs will be marked as machine-made, which EU AI Act Article 50 requires from 2 August 2026, and that mark would in any case say only that a machine was involved, not what changed. It offers machine BSL video with no sign that Deaf BSL users have judged it. The page also gives no link or control for the assistant. Strike "instantly and accurately".
- Who is affected: Easy Read readers, BSL users and readers of other languages who would use the version instead of the English original. They are the readers least able to check the version against that original.
- Impact: a tenant may act on a version that dropped or changed a sum, date or deadline, having been told it is accurate. Whether AI accessibility adaptations break declared items at material rates is OPEN. The finding does not rest on that: the fault is the self-awarded label. AI distortion of news content is TESTED, but in a different domain.
- Severity: 3
- Fix: Remove "instantly and accurately". Label each machine version Unchecked unless a check against a must-survive declaration has earned Checked. Show the label, the source page and its date, when the version was made and that a machine made it. Withhold machine versions of documents with legal or financial obligations unless they are Checked, and offer human-made Easy Read and BSL for those documents. Link every version to its original and give a way to report errors. Let Deaf BSL users decide whether machine BSL is offered at all.
- Evidence: the quoted sentence. The page names no checking process and contains no link, button or script for the assistant.
- Needs disabled readers: yes. Easy Read readers, Deaf BSL users and other-language readers decide what "intact" means for these versions (principle 5). Give a panel adapted versions of a real rent or repairs letter and ask: "How much must you pay, and by when?", "What happens if you do nothing?" and "Did a person or a computer make this version?" Score each answer against the original as correctly informed, uninformed or misinformed.

### F4. Only an automated tool has tested the site, and the statement gives two different accounts of when
- Where: the "Testing" section; "checked every night by our AccessGuard AI" in the paragraph above it; "This statement was prepared on 2 November 2026."
- Problem: The only testing reported is automated. An automated tool cannot count caption accuracy, reading level, cognitive load or timing at all. The page records no manual, assistive-technology or disabled-user testing, so nothing on it shows disabled people having any part in judging the site. One sentence says the site is checked every night, another that it was "last tested on 1 November 2026", and the statement is dated 2 November. The page does not say which run its claims rest on, or whether later runs found anything. "All issues it found have been fixed" is a claim the tool makes about its own run. It covers only what that tool can detect.
- Who is affected: every reader, and most of all those who meet barriers outside automated detection. Whether those barriers are the commonest, rather than just the least detected, is DESIGNED, not tested.
- Impact: the barriers that only people meet have not been looked for, and readers cannot tell how current the statement is.
- Severity: 2
- Fix: Add manual audit, assistive-technology testing and testing with disabled tenants, each with its date, scope and who did it. Give one test date and one method that agree. Add a review date and a version note to the statement, and update the summary in step with the record.
- Evidence: "This website was last tested on 1 November 2026 by AccessGuard AI, an automated tool. All issues it found have been fixed."; "is checked every night by our AccessGuard AI"; "prepared on 2 November 2026".
- Needs disabled readers: yes. Test key tenancy tasks, such as finding a rent figure or reporting a repair, with disabled tenants using their own setups, and record where they succeed or fail. The markup cannot settle this.

### F5. The statement lists no known problems and gives no way to report one or escalate it
- Where: the whole statement; "Contact" gives an email address only, with no stated purpose.
- Problem: There is no section on content that is not accessible, no "report a problem" route with an expected response, and no escalation or enforcement route. Combined with the claim that every page meets the standard (F1), the page leaves no path for a reader who hits a barrier.
- Who is affected: any reader who meets a barrier on the site or in its documents.
- Impact: readers cannot plan around barriers, report them or escalate them.
- Severity: 2
- Fix: Add a list of known non-accessible content, with reasons, alternatives and fix dates; a report-a-problem route with a response time; and the escalation route if the reply does not resolve the problem.
- Evidence: the only sections are "How accessible this website is", "Testing", "Ask for information in another format" and "Contact"; the contact line reads "Email access@greyfield-homes.example."
- Needs disabled readers: yes. Ask a panel: "Does this page say any part of the site may not work for you?" and "If something does not work, who do you tell and what happens next?"

### F6. The only ways to ask for a format are a web form and an email address, and the format list is closed
- Where: the request form; the `format` select (`required`, five options); the "Contact" section.
- Problem: There is no phone, text relay, BSL video relay or postal route, so a reader who cannot use the web form or email unaided has no other way to ask. The format list is required and has no "Other" option. It leaves out "another language", which the page itself offers, and leaves out formats such as accessible electronic documents. The page does not say whether a requested Easy Read or BSL version is made by a person or by the AI service in F3.
- Who is affected: readers for whom the web form or email is itself the barrier, readers without internet access, BSL users who would rather use a signed route, and anyone whose format or language is not listed.
- Impact: the readers who most need an alternative may be least able to ask for one, or may have to choose a listed format that does not suit them.
- Severity: 2
- Fix: Offer phone, text relay, BSL video relay and post alongside the form. Add a language option and an "Other, please describe" format option. Say whether each format is made or checked by a person.
- Evidence: `<select id="format" name="format" required>` with Large print, Braille, Audio, Easy Read and British Sign Language video; the only contact given is `mailto:access@greyfield-homes.example`.
- Needs disabled readers: yes. Ask panel members who do not use web forms how they would request a letter in their format, and record whether each could do it and by which route. Test whether the list covers the formats they use.

### F7. Name, tenancy reference and format, all required, tie an inferred need to a named tenant even without the disability field
- Where: the `name`, `tenancy`, `format` and `what` fields, all `required`.
- Problem: Some formats imply a need on their own, for example Braille, BSL video or Easy Read. Required together with a full name and tenancy reference, the request makes an identified record of that inference: the composition leak. No anonymous route exists, even for public pages or standard documents that need no identity to supply. The required free-text box asks what document is needed, and nothing tells readers to leave out health details.
- Who is affected: every requester, most of all those who request formats that strongly imply a specific need.
- Impact: the association builds an identified record of inferred need for each request, which removing F2's field alone would not stop.
- Severity: 2
- Fix: Publish alternative formats of public pages and standard documents as ordinary downloads, which need no request and no identity. Ask for name and tenancy reference only for personal letters, and treat the format as a delivery instruction, not a profile attribute. Tell readers they need not include health details in the free text.
- Evidence: the `required` attributes on all four fields; the format option list.
- Needs disabled readers: yes. Test whether self-serve downloads work for panel members, and for which formats only a personal request works. Do not decide this for them.

### F8. A ten-working-day promise to "reply" can outlast the deadlines in the letter being requested
- Where: "we will reply within 10 working days."
- Problem: The page promises a reply, not delivery of the format. It does not say whether deadlines in the requested document are paused or extended, or whether urgent requests are handled faster.
- Who is affected: tenants who cannot read the original at all and depend on the alternative version to respond to a notice, arrears letter or appointment.
- Impact: a tenant may miss a deadline they never had a usable chance to read.
- Severity: 2
- Fix: State the time to deliver the format, not to reply. Offer an urgent route. Commit to extending deadlines in a requested document until the reader has the format, or say what to do in the meantime.
- Evidence: the quoted sentence; the page says nothing else about timing or deadlines.
- Needs disabled readers: no.

### F9. The format service promises nothing about fidelity: versions are not tied to the current original, labelled, or checked for must-survive items
- Where: "If you need a letter, form or page in a different format, fill in this form and we will reply within 10 working days."; the format list.
- Problem: Nothing says that each version will be made from the current original rather than from another version, will record who made it, from what and when, will keep critical items such as rent figures, deadlines, appeal rights and instructions, or will be withheld if it cannot keep them. Large print, Braille and audio can be Exact. Easy Read and BSL involve rewording and can be at best Checked, and the page draws no distinction between them. With a ten-day turnaround, the original may be corrected before the version arrives. No version was supplied, so no item could be coded. This is a missing commitment, not a fault observed in a version.
- Who is affected: tenants who rely on any of the five formats for letters about their tenancy.
- Impact: a tenant could act on a version made from a superseded original, or on a rewrite that cut a deadline, with no label to warn them.
- Severity: 2
- Fix: State that every version is made from the current original and carries that original's date. Label reworded versions Checked or Unchecked and name any important cut. If the original changes before the version is sent, remake the version from the corrected original and say so.
- Evidence: the quoted sentence and the format list; no version or declaration is supplied.
- Needs disabled readers: yes. Readers of each format decide what "intact" means for a tenancy letter in that format. Test whether a reader of a reworded version can find every critical item and see what was cut.

### F10. The statement does not tell readers they can adapt the site on their own device without asking
- Where: the whole statement.
- Problem: The page offers only two routes, both outbound: the AI assistant and the disclosure-gated form. It does not mention browser zoom, user stylesheets, reader modes or assistive technology, and it does not say that adapting on one's own device needs no permission and is not recorded.
- Who is affected: readers who could get larger text, different colours or fonts, or read-aloud on their own device.
- Impact: readers are steered towards routes that reveal their needs (F2, F11) when a private route was available.
- Severity: 1
- Fix: Add a short section saying the site works with browser zoom, user stylesheets, reader modes and screen readers, and that adapting it on your own device needs no permission and is never recorded. Keep the form for what a device cannot produce.
- Evidence: the statement nowhere mentions browser or assistive-technology settings.
- Needs disabled readers: yes. Test whether the guidance is easy to find and whether it is enough for readers to adapt the site without making a request.

### F11. Required fields are marked inconsistently, and the tenancy reference has no alternative
- Where: only the disability label shows "(required)", though `name`, `tenancy`, `format` and `what` are all `required`; `<input id="tenancy" ... required>`.
- Problem: On screen, the other fields look optional, and the field the reader most needs to question looks the most important. A reader without their tenancy reference to hand cannot send a request. The page does not say what the reader will receive.
- Who is affected: requesters who rely on the visible text rather than the announced state, and requesters without their tenancy agreement nearby.
- Impact: failed submissions and repeat attempts; some requests blocked.
- Severity: 1
- Fix: Mark every required field the same way, or say "All fields are required". Accept name and address in place of the tenancy reference. Say what the reader will receive and how.
- Evidence: `<label for="disability">Your disability or condition (required)</label>` beside unmarked labels on the other required fields.
- Needs disabled readers: no.

### F12. The statement does not say where the AI rewrite runs or who receives the request
- Where: "Our AI assistant can rewrite any page in Easy Read, British Sign Language video or another language on request".
- Problem: The page names an adaptation route but gives no mechanism and no privacy information. If the route runs on the association's servers or through a third party, each request could reveal a need to the publisher or a vendor. The file contains no script or control for it, so whether that happens cannot be established from this material.
- Who is affected: readers who use the assistant.
- Impact: a possible undisclosed disclosure of needs on each use. It is not shown by the material.
- Severity: 1
- Fix: State where the rewrite runs, what is sent, who receives it and whether it is logged or linked to an account. Prefer on-device adaptation, or pre-made versions served as ordinary page requests with no account identifier.
- Evidence: the quoted sentence; `statement.html` contains no `<script>`, button or link for the assistant.
- Needs disabled readers: no.

Lead's notes on the team's own claims:
- Struck: the alignment-gap reviewer's title "the markup is technically flawless" and the line "the disability field passes automated checks". No tool run appears in the material, and the field's harm does not depend on either claim.
- Corrected: one reviewer said the disclosed data is "kept indefinitely". The page states no retention period, which is the defensible finding (F2).
- Corrected: one reviewer gave low-vision readers facing contrast problems as an example of what automated tools miss. Automated tools do test contrast. The theory says low contrast blocks people but not AI agents, which is a different claim.
- Struck: the Equality Act claim that adjustments "do not generally depend on proof of disability" is not in the material. Like every legal point here, it is ASSUMED.
- Dropped: the alignment-gap finding on hypothetical future agent-directed markup (its own text says the harm is "not present in this file"). Its one present point, that an agent cannot get past the required disability field without inventing or disclosing an answer, is kept in F2.
- Lead's own finding: none added. The page shows no part for disabled people in testing or in deciding what counts as intact, but F3, F4 and F9 already cover that, and the reviewers already raised every tool claim.

Not found: any adapted version to code item by item (Easy Read, BSL, translation, audio or a summary of this page or of a tenancy letter); a must-survive declaration; version labels or made-from, made-by or checked-by records; a machine-made mark under EU AI Act Article 50; evidence of manual, assistive-technology or disabled-user testing; a known non-accessible content section; a complaints or enforcement route; a non-web request route; any statement on deadlines while a format is prepared; analytics, beacons, third-party scripts, cookies, assistive-technology or preference detection, or needs carried in URLs (the form uses POST); structured data, hidden agent text or superfluous ARIA; images, media, captions, transcripts or motion; text-contrast failures in the page's own CSS (text, link, hint and badge colours on white are all well above 4.5:1). Not available for review: the site's other pages, the AccessGuard AI output, the assistant's mechanism and the `/privacy` page.
