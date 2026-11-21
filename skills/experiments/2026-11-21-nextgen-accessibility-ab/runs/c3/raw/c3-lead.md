### F1. Pressing "Simplify this page" records a disability label in the URL, the server log and the vendor prompt
- Where: `consultation.html` `#simplify` href `/consult/riverside?view=simple&amp;needs=learning-disability`; `server-notes.md` bullet 2 (prompt "Rewrite for a reader with <need>", vendor Clarifyr Ltd, "Requests are logged with IP address and query string for 90 days").
- Problem: The only route to the simpler text is a GET whose query string carries a fixed disability category. That string is logged next to the IP address for 90 days, kept in browser history and in any intermediary log, and put into a prompt sent to an outside vendor. The reader cannot choose a form or level without the label, and the label is the same whatever their reason for wanting simpler text. The page offers no on-device way to switch views, so every use of the adaptation is a recorded request. This breaks principle 4: the publisher learns who needed what.
- Who is affected: Everyone who presses "Simplify this page", including people who have no learning disability and are recorded as having one.
- Impact: The council creates a 90-day record linking IP addresses to an implied disability, and part of it reaches a third party. Some readers may avoid the simpler text rather than be labelled. Special category data under UK GDPR Art. 9 is created where none is needed (legal point ASSUMED, counsel's opinion pending). Vendor retention of prompts is not shown.
- Severity: 3
- Fix: Remove `needs` from the link, the route and the prompt. Name the control by its form (for example "Shorter, simpler version"), not by a condition. Serve a pre-made, checked version at an ordinary need-free path, or ship both versions and switch on the device. Do not log query strings for this route. Send no need string or reader metadata to the vendor.
- Evidence: the href in `consultation.html`; `server-notes.md`: "sends the full page text to our AI simplification service (hosted by the vendor, Clarifyr Ltd) with the prompt \"Rewrite for a reader with <need>\"" and "Requests are logged with IP address and query string for 90 days".
- Needs disabled readers: yes, for the control only: test with people who use plain-language and Easy Read text what the control should be called and which levels or forms it should offer. Removing the label from the URL, log and prompt does not wait on that.

### F2. An unchecked machine rewrite is served as the council's "simple version", with no provenance, and the route to the original comes after the form
- Where: `simplified.html` `<title>` "Bus lane on Riverside Road: simple version", body, and the final link; `server-notes.md` bullet 2.
- Problem: The page awards itself a status: "simple version" of this consultation. Nothing earned it. The page does not say that a machine wrote it, that Clarifyr Ltd's service wrote it, from which version of the original or when, that nobody checked it, or what was cut. No check step exists in the server notes. Against the reviewers' reconstructed declaration (F9) this instance changes and drops critical items (F3 to F7), so it would be classed Unfaithful and should be Withheld, not served. That class is provisional, because the author has declared nothing. The only "See the full page" link comes after the Send button. Machine-made marking under EU AI Act Art. 50 applies from 2 August 2026 and the consultation runs 3 November to 15 December 2026; whether and how it binds the council or the vendor is ASSUMED.
- Who is affected: Every reader of the simplified view, and screen reader and magnifier users who move through the page in order and reach the form before the link back.
- Impact: Readers have no reason to suspect that they are reading an unchecked rewrite that differs from the council's text, and they can respond before they meet the link to the original.
- Severity: 3
- Fix: Withhold this output. Replace "simple version" with a label earned by a check (Unchecked by default, Checked only after a check against the declaration). Show the maker, the source version and date, the generation date, the check status and any named cuts at the top. Put the link to the full page before the form.
- Evidence: `simplified.html` has no statement of origin, date or check; `<p><a href="/consult/riverside">See the full page</a></p>` follows `</form>`. `server-notes.md`: "returns it in the `simplified.html` template", with no check described.
- Needs disabled readers: yes: test whether the label wording is understood by readers of the simplified view, whether it adds load, and whether it changes what they do. Whether labels improve outcomes is OPEN.

### F3. A peak-hours lane is presented as a bus-only lane at all times, and its extent is dropped
- Where: `simplified.html` "We want to make a lane just for buses on Riverside Road."
- Problem: The operating hours and the caveat that the lane is open to all traffic outside them are dropped without notice, and the sentence that remains states the opposite of the caveat. The extent (Mill Street junction to the station) is also dropped without notice.
- Who is affected: Readers of the simplified view, including drivers, residents and blue badge holders deciding whether to support the scheme.
- Impact: Readers respond to a more restrictive scheme than the one proposed.
- Severity: 3
- Fix: Keep the hours and the all-traffic caveat in plain words; keep the extent or name the cut. Declare all three (F9) and withhold any version that drops or changes the hours or caveat.
- Evidence: Original: "between the Mill Street junction and the station, operating 7am to 10am and 4pm to 7pm on weekdays. Outside those hours the lane would be open to all traffic." Version: "We want to make a lane just for buses on Riverside Road." This is one cached output; whether AI adaptations break declared items at material rates is OPEN.
- Needs disabled readers: yes: compare panels reading only the simplified page and only the full page on "Could you drive in this lane at 1pm on a Tuesday?", "On a Saturday?" and "Which part of Riverside Road?", coded correctly informed, uninformed or misinformed. People with learning disabilities should decide whether the hours can be kept in a form that stays simple.

### F4. A proposal under consultation is presented as a decision
- Where: `simplified.html` `<h1>` and body sentences.
- Problem: The original frames a proposal ("Have your say", "We propose", "would be removed"). The version states settled future facts ("A new bus lane", "Buses will be faster.", "Some parking spaces will go."). This is a change, which is not allowed at any weight.
- Who is affected: Readers of the simplified view.
- Impact: Readers may conclude that the matter is decided and that responding is pointless, or respond on a false basis.
- Severity: 3
- Fix: Keep the proposal framing in plain words (for example "The council has an idea. Nothing is decided yet. Tell us what you think.") and use "might" or "could" throughout.
- Evidence: Original: "Have your say: Riverside Road bus lane", "We propose a bus lane ...". Version: "A new bus lane on Riverside Road", "Buses will be faster.", "Some parking spaces will go."
- Needs disabled readers: yes: test whether readers of the simplified view can say correctly whether the bus lane has been decided.

### F5. A hedged, modelled benefit becomes a certainty, and the stated cost to car journeys is dropped
- Where: `simplified.html` "Buses will be faster." (no counterpart for the car journey sentence).
- Problem: The source ("Our traffic modelling"), the hedge ("suggests", "could be up to"), the figure (4 minutes) and the condition ("at peak times") are gone, and an unconditional claim the original does not support takes their place. The cost ("Car journeys on Riverside Road may be up to 2 minutes slower") is dropped without notice, so only the benefit survives.
- Who is affected: Readers of the simplified view, including people who rely on car or taxi travel.
- Impact: Readers cannot weigh the trade-off the consultation asks them to judge, and the text leans toward support.
- Severity: 3
- Fix: Keep the attribution, the hedge and both effects in plain words (for example "Our computer tests show buses might be up to 4 minutes faster at busy times. Cars might be up to 2 minutes slower."), with wording set with Easy Read authors and checked against the declaration.
- Evidence: Original: "Our traffic modelling suggests bus journeys could be up to 4 minutes quicker at peak times. Car journeys on Riverside Road may be up to 2 minutes slower." Version: "Buses will be faster."
- Needs disabled readers: yes: ask "Is the council sure buses will be faster?", "How much faster, and when?" and "Would anything get slower?", coded correctly informed, uninformed or misinformed. Disabled readers decide whether a hedge put in simple words counts as intact.

### F6. The blue badge bay move is dropped, and the parking loss is made vague and certain
- Where: `simplified.html` "Some parking spaces will go."
- Problem: The move of four blue badge bays 40 metres east to the layby outside number 62 is dropped without notice. "Twelve on-street parking spaces on the north side would be removed" becomes "Some parking spaces will go": number and side gone, "would" made "will". The wording may also be read as the blue badge bays going, which the original does not say. A version requested under a disability label leaves out the one item about disabled parking, which the full form singles out for comment.
- Who is affected: Blue badge holders and their carers using the simplified view; residents near number 62.
- Impact: The readers most affected by the bay move are not told of it.
- Severity: 3
- Fix: Keep both items in plain words, for example "12 parking spaces might be taken away. 4 blue badge parking spaces might move a short way (40 metres), to outside number 62."
- Evidence: Original: "Twelve on-street parking spaces on the north side would be removed. Four blue badge bays would be moved 40 metres east, to the new layby outside number 62." Version: "Some parking spaces will go."
- Needs disabled readers: yes: ask "Will the blue badge bays be removed, moved or left as they are?" and "If moved, where to?". Blue badge holders, including those with learning disabilities, judge whether the plain wording is enough to act on.

### F7. The simplified response form asks a different question, collapses the scale, drops the comments box and stores answers under the same codes as different full-form answers
- Where: `simplified.html` `<form>` against the form in `consultation.html`.
- Problem: "Do you support the proposed bus lane?" becomes "Do you like the bus lane idea?". Five options become "Yes" and "No"; the neutral option and strength of view are gone. The comments box, with its blue badge prompt, is gone. "Yes" posts `support` and "No" posts `oppose`, the same values the full form uses for "Support" and "Oppose", so the record merges answers to different questions on different scales. The shape of the response also reveals which version the person read, even without `a11y_profile`.
- Who is affected: Everyone who responds through the simplified view; the consultation team and decision makers, whose results pool unlike answers.
- Impact: Simplified-view respondents cannot record a neutral or graded view or comment on the bays, and what they did mean may be stored as something they did not say. The consultation record is distorted, not only the reading.
- Severity: 3
- Fix: Use one response form for every version, with the same question meaning, all five options with plain labels or help text, and the comments box. Never post a value that means something different. Offer other ways to respond (phone, paper, in person).
- Evidence: `simplified.html`: `<legend>Do you like the bus lane idea?</legend>`, `value="support"> Yes`, `value="oppose"> No`, no `textarea`. `consultation.html`: five radios and `<textarea id="comments">` labelled "Any comments on the proposal, including the blue badge bays". `server-notes.md` describes no reconciliation of the two forms.
- Needs disabled readers: yes: test with people with learning disabilities whether a plain-language five-option scale with a comments route is usable (do not assume it is not), and, with consent after submission, ask "Which of these is closest to what you meant?" against what was stored.

### F8. Each response is stored with a disability label and analysed by it
- Where: `consultation.html` hidden `view` and `a11y_profile` fields filled by the script from `params.get('view')` and `params.get('needs')`; `simplified.html` hidden `a11y_profile` value `learning-disability`; `server-notes.md` bullet 3.
- Problem: A respondent's position, and on the full form their comment, is stored in one record with an implied disability and exported to a spreadsheet broken down by `a11y_profile`. The fields are hidden and nothing tells the respondent. Because the label is hard-coded (F1), the breakdown asserts that every simplified-view respondent has a learning disability; the data is false and looks authoritative. Any link carrying `view` and `needs` to the full page also sets the label. The stated purpose, "so we can report on accessibility uptake", does not need person-level data.
- Who is affected: Every simplified-view respondent, and anyone who arrives at the full page through a link carrying `view` or `needs`.
- Impact: Special category data is paired with a person's view on a council decision and copied out of the database into spreadsheets. Responses can be reported, weighed or discounted by disability group. (Art. 9 and transparency points ASSUMED, counsel's opinion pending.)
- Severity: 3
- Fix: Remove `a11y_profile` and `view` from both forms and the schema. Handle the stored values and exports under the council's data protection process. If uptake must be counted, count anonymous page totals that cannot be linked to a response or identifier, and say so in the privacy notice.
- Evidence: the hidden inputs and script in `consultation.html`; the hidden input in `simplified.html`; `server-notes.md`: "stores the response, including `view` and `a11y_profile`" and "a breakdown by `a11y_profile` \"so we can report on accessibility uptake\"".
- Needs disabled readers: no

### F9. No must-survive declaration exists, and the tool is told only the reader's condition
- Where: `consultation.html` (no declaration in markup or metadata); `server-notes.md` prompt.
- Problem: The author has declared nothing that must survive, so no version can be checked and nothing tells the tool what to keep. The tool gets "the full page text", chrome and form labels included, with "Rewrite for a reader with <need>". The fidelity reviewer reconstructed a declaration (proposal framing, hours and caveat, extent, twelve spaces, blue badge move, both modelled figures with their hedge and attribution, closing date, the response instruction, footer links). Its weights are the reviewers' proposal, not the author's, and every Unfaithful finding above rests on it.
- Who is affected: Everyone who receives an adapted version; the consultation team.
- Impact: No basis exists on which to check, label or withhold any version. Whether giving the tool the declaration improves fidelity is OPEN; the declaration is needed for checking regardless.
- Severity: 2
- Fix: The author publishes a declaration with exact words, type and weight. Send only the declared content region and the declaration to the service, and check every output against it before serving.
- Evidence: `server-notes.md`: "sends the full page text ... with the prompt \"Rewrite for a reader with <need>\"". No declaration in either page.
- Needs disabled readers: yes: people with learning disabilities, as the intended audience, confirm or change the weights (especially hours and caveat, blue badge move and car cost) and say what "intact" means for an Easy Read version.

### F10. The simplified view is cached for a week with no tie to a version of the original
- Where: `server-notes.md` "caches the result for a week"; `simplified.html` (no source stamp).
- Problem: If the original is corrected during the six-week consultation, simplified-view readers may keep receiving text made from the uncorrected original for up to seven days, and nothing records which original a version came from.
- Who is affected: Simplified-view readers during any correction window.
- Impact: Readers may respond to a superseded proposal, and nobody can tell afterwards which version they saw.
- Severity: 2
- Fix: Key the cache to a hash of the original's content, invalidate it on any edit, and stamp each version with its source version and date.
- Evidence: "caches the result for a week"; no date, version or source reference in `simplified.html`.
- Needs disabled readers: no

### F11. Read aloud reports each use to analytics against a persistent user ID
- Where: `consultation.html` click handler, `navigator.sendBeacon('/analytics/event', ... event: 'a11y_mode', mode: 'read_aloud', page: location.pathname, uid: localStorage.getItem('uid'))`; `server-notes.md` bullet 4.
- Problem: Speech is made on the device, so the server has no need to know. Each click still sends an event named as an accessibility signal, with a stable `uid`, and the server stores it against that uid. Use of read-aloud can imply a disability.
- Who is affected: Everyone who uses Read aloud.
- Impact: A per-person history of assistive-mode use builds up across visits and can be joined to anything keyed on `uid`. (PECR reg. 6 and Art. 9 points ASSUMED.)
- Severity: 2
- Fix: Delete the beacon. Read aloud runs on the device and sends nothing.
- Evidence: the click handler; "stores events against `uid` for the site dashboard". The source of `uid` is not shown.
- Needs disabled readers: no

### F12. The signals can combine into an identifying need profile
- Where: Across the files: IP and query string in the access log, `uid` in analytics, `view` and `a11y_profile` with the response, the response time, and free text invited about the blue badge bays.
- Problem: Each signal reveals a little; joined, they can show which person asked for simplification or used read-aloud, and what they answered. In a local consultation, small groups in the `a11y_profile` breakdown may single people out. Comments on the blue badge bays may describe the writer's own needs. Whether response POSTs are logged with IP is not stated, so the join by IP is a risk, not shown.
- Who is affected: Respondents who used either adaptation; blue badge holders who comment.
- Impact: Disability, view and identity can be linked from data that might be treated as harmless one item at a time.
- Severity: 2
- Fix: Remove the need-revealing signals (F1, F8, F11). Keep access logs apart from response records and never join them. Publish only aggregates with small-number suppression. Store comments that may describe health under restricted access and do not report them by need.
- Evidence: the log, analytics and storage lines in `server-notes.md`; the comments label and hidden fields in `consultation.html`.
- Needs disabled readers: no

### F13. Read aloud has no controls, reads the whole main region including the form, and is missing from the simplified view
- Where: `consultation.html` `speechSynthesis.speak(new SpeechSynthesisUtterance(document.querySelector('main').innerText))`; `simplified.html` (no Read aloud control).
- Problem: One click speaks everything in `main`, including the tool control text, every radio label and the submit text, as one run. There is no pause, stop, replay or speed control and no visible state; a second click queues another full reading. It can overlap a screen reader. Readers cannot have both the simplified text and audio. By reading the code, the speech carries the current original's text, changing only the form (Exact); nobody has listened to the output, so that class is unverified, and the version carries no label saying what it reads.
- Who is affected: People who rely on listening (low vision without a screen reader, dyslexia, cognitive fatigue), screen reader users who press it, and readers who need both simple text and audio.
- Impact: Undue effort and time: the reader must hold the facts in memory, sit through form text, and cannot stop the speech short of leaving the page.
- Severity: 2
- Fix: Add stop, pause, replay by section and speed controls; read the content sections, not the form; say what it reads; offer it on any checked simplified version.
- Evidence: the handler above, with no cancel or pause handling; no control in `simplified.html`.
- Needs disabled readers: yes: after listening only, ask about hours, extent, certainty and cost, and "Did you need to hear anything again, and could you?"; test with screen reader users whether the button conflicts with their own speech.

### F14. The simplified page drops the privacy notice and accessibility statement links, and neither page states how to ask for another format
- Where: `simplified.html` (no footer); `consultation.html` footer.
- Problem: The page that collects a disability label with each response (F8) gives no route to the privacy notice or the accessibility statement. Neither page says how to get paper, large print, a phone or an assisted response. The accessibility statement was not supplied, so it may contain such a route; that is unverified.
- Who is affected: Simplified-view respondents; readers for whom neither web version works.
- Impact: Simplified-view respondents cannot find out how their response and label are used, and readers who need another format have no route stated on the page.
- Severity: 2
- Fix: Keep both footer links on every version. State on both pages how to ask for other formats or an assisted response, through a contact that does not require disclosing a diagnosis.
- Evidence: `consultation.html`: `<a href="/accessibility">Accessibility statement</a> · <a href="/privacy">Privacy notice</a>`; `simplified.html` has no `<footer>`.
- Needs disabled readers: yes: ask "If this page did not work for you, how would you ask the council for it another way?", coded correctly informed, uninformed or misinformed.

### F15. The council's success measure counts tool use, not whether readers were correctly informed
- Where: `server-notes.md` breakdown by `a11y_profile` "so we can report on accessibility uptake"; analytics dashboard.
- Problem: Uptake counts clicks, and here counts a hard-coded label (F8). Nothing measures whether readers of either version were correctly informed or could give the answer they meant (principle 6). The alignment reviewer predicted that automated tools would score both pages well; no tool was run, so that is a prediction, not a result, and a high automated score would not be conformance in any case. That this barrier is invisible to agents rests on a DESIGNED claim.
- Who is affected: Simplified-view and Read aloud users, whose barriers the council's measure cannot see.
- Impact: The council could report a well-used accessibility feature while its users are misinformed and given less say.
- Severity: 2
- Fix: Replace the uptake breakdown with declaration-coded review of every generated version and comprehension testing (paid, consented, anonymous) with disabled residents. State in the accessibility statement what automated testing did and did not cover.
- Evidence: the reporting line in `server-notes.md`. No automated scores, badges or conformance claims appear in the material.
- Needs disabled readers: yes: comprehension and effort testing of both versions and of the response record, with people with learning disabilities and read-aloud users.

Not found: a must-survive declaration by the author; any label, provenance record or check result on the simplified version; any record that disabled readers were involved in defining "intact", the simplified wording or the response form; any reader outcome measure; any version date, source hash or correction history; summaries, key points, alt text, transcripts or translations; conformance badges, automated scores or WCAG version claims on the page (the accessibility statement and privacy notice are linked but were not supplied, so any claims in them are unchecked); assistive-technology detection; third-party scripts; vendor retention terms; what the service returns for needs other than "learning-disability". Dropped from the reviews: the alignment reviewer's crawler finding (its claim that crawlers inflate uptake is not supported, since uptake comes from submitted responses, and the agent-side defence it warns of is hypothetical), and the outcomes reviewer's closing-date ambiguity point. Line numbers cited by reviewers were not used, because they did not match the files.
