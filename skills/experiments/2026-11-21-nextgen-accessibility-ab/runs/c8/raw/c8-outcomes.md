### F1. The headline conformance claim would leave readers misinformed about whether the site will work for them
- Where: badge `WCAG 2.3 AAA verified` (first content after the h1); "How accessible this website is" paragraph; "Testing" section.
- Problem: The page names a version that does not exist (there is no WCAG 2.3; the current recommendation is WCAG 2.2). It claims "fully conformant ... at Level AAA" and "every page meets the standard". The only evidence offered is an automated score of 100/100 and a nightly automated tool. An automated analyser checks a subset of success criteria and cannot establish conformance, let alone full AAA. The reader task here is "decide whether I can rely on this site, and what to do if I can't". On every path (full page, a screen reader reading in order, where the badge is announced first, and any third-party or AI summary, which will lift the badge and the first sentence) the reader is told there is nothing to work around.
- Who is affected: Every reader of the statement. The most exposed are readers who meet a barrier the tool cannot detect: low vision readers facing contrast or zoom problems, cognitive or learning-disabled readers facing reading level and load, and Deaf readers facing caption accuracy. They are the most likely to rely on the badge or a summary of it.
- Impact: Safety: a reader who hits a barrier is told it cannot exist. They may conclude the fault is theirs, may not report it, and may not ask for an alternative they are entitled to. A summary or agent repeating "WCAG AAA verified" spreads the false claim further. Performance: no reader can learn the site's real state from this page.
- Severity: 3
- Fix: Remove the badge. State conformance against WCAG 2.2 at the level actually assessed ("partially conformant" unless a full manual audit supports more). Say what was tested, how (manual and with disabled testers, not automated only), by whom and when. Say plainly that an automated score is not conformance.
- Evidence: `<span class="badge">WCAG 2.3 AAA verified</span>`; "fully conformant with ... version 2.3 at Level AAA. It scores 100 out of 100 in automated accessibility audits"; "last tested ... by AccessGuard AI, an automated tool. All issues it found have been fixed." The theory notes that the best automated tool in GDS's 2017 test found 41% of planted barriers.
- Needs disabled readers: yes. Outcome test, with questions for a panel that includes screen-reader, low vision and cognitive-disability readers, put once they have used the statement and its likely summaries: "Which version of the accessibility guidelines does this site meet?" "Has a person checked this site, or only software?" "If part of the site does not work for you, does this page say that might happen?" Score each answer as correctly informed, uninformed or misinformed.

### F2. Readers must disclose a disability to get a format, and learn who it is shared with only after the submit button
- Where: the `disability` select (required) with the hint "We need this to check that you are eligible"; the paragraph after `</form>`: "Information you give us about your disability is shared with your housing officer and kept on your tenancy file."
- Problem: The task "ask for a format" is gated on naming a condition from a fixed list. The consequence of disclosure (shared with the housing officer, kept on the tenancy file) sits after the submit button. A reader moving through the form in order, by keyboard or screen reader, reaches the submit button before the disclosure notice and is likely to submit without it. Disability information is special category data (UK GDPR). The reader's needs are revealed to the publisher and logged against their tenancy, contrary to the principle that the publisher never learns who needed what. Asking for a format implies an eligibility test that the statement does not explain.
- Who is affected: Every requester. The most exposed are screen-reader and keyboard users (reading order puts the notice after the action), readers with mental health conditions or learning disabilities who may not want the condition on the file their landlord holds, and readers whose need fits no listed category (they are forced to choose "Other").
- Impact: Safety: readers act (submit) without being informed of a lasting consequence, and a sensitive fact goes onto a file used in tenancy management. Performance: some readers will abandon the request rather than disclose, so they go without the format. Comfort: a request for large print becomes a declaration of disability.
- Severity: 3
- Fix: Remove the disability field. A format request needs only the format and the content. If any data is retained, state before the form what is kept, who sees it, why and for how long, with a link to the privacy notice. Do not record format requests as disability data on the tenancy file. (Legal points: ASSUMED, counsel's opinion pending.)
- Evidence: `<select id="disability" name="disability" required ...>`; hint id `disability-hint`; the sharing paragraph follows `</form>` in source order.
- Needs disabled readers: yes. Outcome test, run after a panel completes the form by its normal route: "Before you pressed Send, did you know who would see what you said about your disability?" "Where will it be kept?" "Did you have to say you are disabled to get a format?" Also record how many abandon the form at that field. Only disabled readers can say whether the eligibility framing deters them.

### F3. "Instantly and accurately" AI adaptations are offered with no label, no check and no route back to the original
- Where: "Our AI assistant can rewrite any page in Easy Read, British Sign Language video or another language on request, instantly and accurately."
- Problem: The statement promises machine adaptations of tenant information (rent, repairs, notices) as accurate, with no label (Exact / Checked / Unchecked), no statement of what is checked, and no sign that a person reviews them. "Accurately" is the tool's claim about itself, which is not evidence. Whether AI accessibility adaptations break critical items at material rates is OPEN, and AI distortion of news content is TESTED. Machine-made BSL video is claimed with no sign that Deaf people have judged it. Nothing says the original remains the authority, or how to report a wrong adaptation.
- Who is affected: Readers who rely on the adapted version instead of the original, because the original is not usable for them: Easy Read readers (learning disability), BSL users, and readers in another language. They are the readers least able to cross-check against the original.
- Impact: Safety: a changed amount, date, deadline or obligation in an Easy Read or translated version of a tenancy letter could lead a tenant to act wrongly (pay the wrong sum, miss a notice period). The word "accurately" removes the reader's reason to doubt. Performance: readers cannot tell an adapted page from a checked one.
- Severity: 3
- Fix: Withdraw "instantly and accurately". Label each machine version as Unchecked unless a person has checked it against a must-survive declaration (amounts, dates, deadlines, instructions, rights), and mark it as machine-made. Withhold machine versions of documents carrying legal or financial obligations unless they are Checked. Link every version to its original and give a way to report errors. Let Deaf BSL users decide whether machine BSL is offered at all.
- Evidence: the quoted sentence. The page names no checking process. The format form offers neither "another language" nor any label.
- Needs disabled readers: yes. Outcome test: give a panel of Easy Read users, BSL users and other-language readers the adapted versions of a real rent or repairs letter, then ask "How much must you pay, and by when?" "What happens if you do nothing?" "Who wrote this version: a person or a computer?" Score each answer as correctly informed, uninformed or misinformed against the original. Whether the BSL or Easy Read is intact is for those readers to judge (principle 5).

### F4. The statement gives readers no list of known problems and no way to report one
- Where: the whole statement. "Testing" says "All issues it found have been fixed"; "Contact" gives only an email address.
- Problem: The reader tasks "know which parts will not work for me" and "complain if something does not work" have no path. There is no non-accessible content section (for example PDFs, letters, third-party payment or repairs systems) and no feedback or complaints and enforcement route. The contact line does not say what to write to it about.
- Who is affected: Any reader who hits a barrier, especially those using older PDFs or tenancy documents, which this kind of page usually leaves unlisted.
- Impact: Performance: readers cannot plan around barriers or escalate them. Comfort: readers have to discover failures by trial.
- Severity: 2
- Fix: Add known non-accessible content with reasons and dates for fixes; a "report a problem" route with an expected response time; and the escalation route if the reply is unsatisfactory.
- Evidence: the page has only the sections "How accessible this website is", "Testing", "Ask for information in another format" and "Contact".
- Needs disabled readers: yes. Outcome test: "Is there any part of this website that this page says may not work for you?" "If something does not work, who do you tell and what happens next?"

### F5. The only way to request a format is a web form plus an email address, and the form leaves out formats the page offers
- Where: the form and the "Contact" section; the `format` select.
- Problem: A reader who cannot use this web page cannot easily request a format without it. There is no phone, text relay, BSL video relay or postal route. The format list is closed and required. It omits "another language", which the page itself offers, and needs such as accessible PDF, coloured paper or a specific font size, and has no "Other" option.
- Who is affected: Readers for whom the web form is the barrier (some blind, learning-disabled and older readers, and readers without internet access); BSL users who prefer a signed contact route; readers needing an unlisted format or a language.
- Impact: Performance: the readers most in need of an alternative are least able to ask for it. Comfort: they have to approximate their need with a listed option, so they may receive a format that does not work for them.
- Severity: 2
- Fix: Offer phone, text relay, video relay and post alongside the form. Add an "Other, please describe" format option and a language option, or make the field free text.
- Evidence: `<select id="format" name="format" required>` with five options; the only contact given is `mailto:access@greyfield-homes.example`.
- Needs disabled readers: yes. Outcome test: ask a panel whose members do not use web forms "How would you ask Greyfield Homes for this letter in your format?" and record whether each could do so, and by which route.

### F6. A ten-working-day reply can outlast the deadlines in the letters being requested
- Where: "we will reply within 10 working days."
- Problem: Tenants request formats for letters and forms that may carry deadlines (notices, rent arrears, consultations, appointment times). The statement does not say whether deadlines are paused or extended while a format is prepared, or whether urgent requests are handled faster. It promises "reply", not delivery of the format.
- Who is affected: Readers who cannot read the original at all and so depend on the alternative version: blind readers needing Braille or audio, and learning-disabled readers needing Easy Read.
- Impact: Safety: a reader may miss a deadline they never had a usable chance to read, and may not know they can ask for more time. Performance: "reply" may be read as "receive the format".
- Severity: 2
- Fix: State the time to deliver the format, not to reply. Offer an urgent route. State that deadlines in a requested document are extended until the reader has the format, or say what the reader should do meanwhile.
- Evidence: the quoted sentence. There is no other mention of timing or deadlines.
- Needs disabled readers: yes. Outcome test: "If your letter says you must reply in 7 days, and you ask for it in Braille today, what should you do, and will you be penalised for replying late?"

### F7. Required fields are marked inconsistently on screen, and the form gives no prior sign of what happens next
- Where: only the disability label shows "(required)", though all five fields carry `required`; no text before or after the form says what the reader will receive.
- Problem: Sighted readers who do not hear the `required` state may take the other fields as optional, or read the disability field as the one that matters most. The tenancy reference is required with no route for a reader who does not have it to hand.
- Who is affected: Sighted cognitive-disability and low-literacy readers; readers without their tenancy agreement nearby.
- Impact: Comfort: validation failures and repeat attempts. Performance: some readers will be blocked by the tenancy reference.
- Severity: 1
- Fix: Mark all required fields the same way, or state "All fields are required". Allow a request without the tenancy reference (name and address instead). Say what the reader will receive and how.
- Evidence: `<label for="disability">Your disability or condition (required)</label>` beside unmarked labels on other `required` inputs; `<input id="tenancy" ... required>`.
- Needs disabled readers: no.

Not found: a dated must-survive declaration or labels on any adapted version; a known non-accessible content section; a feedback, complaints or enforcement route; a non-web or non-written request route (phone, relay, post); any statement that deadlines pause while a format is prepared; a summary or simplified version of the statement itself to walk; evidence of testing with disabled people; a chart or audio path (none present).
