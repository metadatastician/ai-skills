### F1. The "Simplify this page" link puts a disability category in the URL, and the server logs it against the reader's IP address
- Where: `consultation.html` line `<a ... href="/consult/riverside?view=simple&amp;needs=learning-disability" id="simplify">`; `server-notes.md`: "Requests are logged with IP address and query string for 90 days."
- Problem: The only path to the simpler form sends `needs=learning-disability` in an ordinary GET query string. The string goes into the server access log next to the IP address and is kept for 90 days. It also lands in browser history, in any proxy or gateway log between the reader and the council, and in the URL if the page is bookmarked or shared. A request for a simpler page is turned into a recorded statement about one particular disability, tied to a network identifier.
- Who is affected: Everyone who presses "Simplify this page", whatever their reason. That includes people with no learning disability, who get logged under that label anyway.
- Impact: The council builds a 90-day log that links IP addresses to an implied disability. Special category data is created where none was needed (ASSUMED, not legal advice: UK GDPR Art. 9 data, with no apparent Art. 9(2) condition and no data minimisation under Art. 5(1)(c)). Anyone who can read the logs can see who needed what. That breaks Principle 4.
- Severity: 3
- Fix: Remove the `needs` parameter completely. Serve one simpler version, the same for everyone, at a plain path such as `/consult/riverside/simple`, or switch views on the device from content already in the page. Do not log query strings for this route. If logs must be kept, cut the retention period and truncate IP addresses.
- Evidence: The `href` in `consultation.html`, and the logging line in `server-notes.md`.
- Needs disabled readers: no

### F2. A reader can only get the simple form by being labelled with a disability
- Where: `consultation.html` `#simplify` link; `server-notes.md` prompt "Rewrite for a reader with <need>".
- Problem: The adaptation is set by a declared need, not by the form the reader wants. To get plain-language text, a reader has to accept the label "learning-disability", which the system declares and records for them. The server design asks for a `<need>` before it will adapt anything. Under the theory, personal adaptation is "always permitted and never a refusable or declared purpose". Here the purpose is built into the request, and the reader cannot opt out of it.
- Who is affected: Readers who want plainer text: people with learning disabilities, cognitive impairments, aphasia or dyslexia, people with low literacy, people reading in a second language, and tired or rushed readers. All of them are put under one disability label.
- Impact: Some readers may avoid the simpler version because they do not want to be labelled. Others are wrongly recorded as having a learning disability. A choice of form becomes a disclosure.
- Severity: 3
- Fix: Name the control by its form, for example "Shorter, simpler version", and make it need-free. Offer reading levels or formats as options the reader picks, never as conditions or diagnoses. Make no request depend on a declared need.
- Evidence: The `needs=learning-disability` value is hard-coded in the link, and the `<need>` template appears in the server notes.
- Needs disabled readers: yes. Test with people who use plain-language and Easy Read versions, and let them decide what the control should be called and what levels or forms it should offer.

### F3. Each consultation response is stored with a disability label, and responses are analysed by disability
- Where: `consultation.html` hidden fields `view` and `a11y_profile`, which the script fills from `params.get('needs')`; `simplified.html` hidden `<input name="a11y_profile" value="learning-disability">`; `server-notes.md`: responses stored "including `view` and `a11y_profile`" and exported "with a breakdown by `a11y_profile`".
- Problem: The reader's answer (support or oppose), their free-text comment and an implied disability are stored together in one record, then exported to a spreadsheet and broken down by disability. The fields are hidden. Nothing on the page tells the reader that a disability label goes with their answer. The full page's script also copies any `needs` value from the URL into the form, so a shared or edited link can label a respondent wrongly.
- Who is affected: Every respondent who used the simple view, and anyone who arrived through a link that carries `view` or `needs`.
- Impact: The record pairs special category data with the person's view on a council decision. Spreadsheet exports spread it beyond the database and outside its access controls. Responses can be weighed, discounted or reported by disability group. "Accessibility uptake" does not need personal-level data. Legal points, ASSUMED and not advice: this is covert processing of Art. 9 data with no transparency under Arts. 13 and 14, a data protection impact assessment is probably required, and if the consultation response counts as a political opinion it is a second special category held in the same record.
- Severity: 3
- Fix: Remove `a11y_profile` and `view` from both forms and from the database schema. Delete the stored values and the exported spreadsheets. Measure uptake, if at all, only as aggregate counts of page views, with no link to responses or to any identifier, or not at all.
- Evidence: The hidden inputs in both HTML files, the script lines 255–259, and the storage and export lines in `server-notes.md`.
- Needs disabled readers: no

### F4. "Read aloud" sends a beacon that ties the use of an assistive mode to a persistent user ID
- Where: `consultation.html` script: `navigator.sendBeacon('/analytics/event', JSON.stringify({ event: 'a11y_mode', mode: 'read_aloud', page: location.pathname, uid: localStorage.getItem('uid') }))`; `server-notes.md`: "stores events against `uid` for the site dashboard".
- Problem: Speech is produced on the device by `speechSynthesis`, so the server does not need to know about it. The click still sends an event named `a11y_mode`, with the mode and a stable `uid` from localStorage, and the server stores it against that uid. Using read-aloud can imply a visual impairment, dyslexia, a reading difficulty or a cognitive impairment. The event name itself says it is an accessibility signal.
- Who is affected: Everyone who uses Read aloud.
- Impact: The site keeps a per-person history of assistive-mode use that builds up across visits and pages, and it can be joined to anything else keyed on `uid`. Legal point, ASSUMED and not advice: the persistent identifier in localStorage probably needs consent under PECR reg. 6, on top of the Art. 9 concern.
- Severity: 2
- Fix: Delete the beacon. Read aloud runs on the device and sends nothing. If usage counts are truly needed, use no identifier, no `a11y_` naming, and aggregate counting that cannot be tied to a session or a response.
- Evidence: The click handler in `consultation.html`, and the analytics line in `server-notes.md`.
- Needs disabled readers: no

### F5. Separate signals combine into an identifying need profile (the composition leak)
- Where: Across all three files. The IP address and query string in the access log; `uid` in the analytics store; `view` and `a11y_profile` in the response record; the time of the response; and free text invited by "Any comments on the proposal, including the blue badge bays".
- Problem: Each signal reveals a little on its own. Joined by time and IP address, they show which person asked for simplification, used read-aloud and responded, and what they said. The comments prompt names blue badge bays, so many comments will refer to the writer's own mobility needs. A small local consultation means small groups (for example, "learning-disability" respondents who opposed the scheme) can single out individuals in the breakdown by `a11y_profile`.
- Who is affected: Respondents who used any adaptation path, and blue badge holders who commented.
- Impact: People can be re-identified from data that might be called pseudonymous, and their disability, their view and their identity are linked. It also undermines trust in taking part in the consultation.
- Severity: 2
- Fix: Remove each need-revealing signal (F1, F3, F4) so there is nothing left to combine. Keep access logs separate from response records and do not join them. Publish only aggregate results with small-number suppression. Tell respondents that comments mentioning their own disability are special category data, store them under restricted access, and do not report them by need.
- Evidence: The log, analytics and storage lines in `server-notes.md`; the comments label and hidden fields in `consultation.html`.
- Needs disabled readers: no

### F6. The disability label is passed to an outside AI vendor and used to cache content by need
- Where: `server-notes.md`: the page text is sent to Clarifyr Ltd "with the prompt 'Rewrite for a reader with <need>'" and the result is cached "for a week".
- Problem: The reader's declared need is put into a prompt that goes to a third-party processor. In the material shown, the IP address and uid are not forwarded to the vendor, and a request served from cache does not reach the vendor at all. Even so, the need string leaves the council, and the version a reader gets depends on a disability category. This is an intermediary rewrite, which the theory treats separately from personal adaptation and allows to be refused. Here, though, it is triggered by a need, not by a chosen form.
- Who is affected: Readers who use Simplify, indirectly.
- Impact: It is not clear whether the vendor logs prompts or what it keeps. A need-keyed design invites more need categories later, each one a new disclosure. Legal point, ASSUMED and not advice: the processor contract would have to cover Art. 9 data if any request metadata goes with the prompt.
- Severity: 1
- Fix: Write one simpler version ahead of time from the original, with a need-free prompt. Check and label it under the theory's labels, publish it as a static page, and send no per-request call to the vendor. If the vendor call stays, send no need string and no reader metadata.
- Evidence: The second bullet of `server-notes.md`. The vendor's own retention is not shown.
- Needs disabled readers: no

### F7. The simple view uses a different response form, so the shape of a response shows which version was read
- Where: `simplified.html` fieldset: two options, `support` or `oppose` ("Yes" / "No"), with no comments box; the full form has five options and a comments box.
- Problem: Even if `a11y_profile` is removed, a response with only a two-way answer and no comment, or `view=simple`, shows that the person used the simple version. Readers of the simple version also cannot give the neutral or "strongly" answers, or comment on the blue badge bays, so their participation is narrower as well as labelled. (The simplified text also drops the blue badge bay move, the operating hours, the slower car journeys and the "suggests" hedge. That fidelity question belongs to other reviewers and is noted here only because it narrows what these readers can respond to.)
- Who is affected: Readers who use the simple version.
- Impact: The version a reader used can be worked out from the response record. Their answers are not on the same scale as other responses, which invites separate treatment in analysis.
- Severity: 2
- Fix: Use one response form, the same for every version, with the same fields and values, and offer plain-language labels or help text for each option on the device. Do not send any version marker with the response.
- Evidence: The forms in `simplified.html` and `consultation.html`.
- Needs disabled readers: yes. Test whether a shared form with plain-language help lets people who use plain-language versions give the answer they mean, including the neutral and "strongly" answers and a comment.

### F8. No on-device adaptation path: every adaptation the page offers is either a server request or reported to the server
- Where: `consultation.html` `.tools`: Simplify is a server round trip with a need parameter, and Read aloud is local but sends a beacon. There are no local controls for text size, spacing, contrast, reduced motion or reading level.
- Problem: The minimal design is missing. That design is: adaptation computed on the device, defaults stored only locally, no need-revealing signal, and only ordinary requests. The page also gives readers no way to keep a preferred form on their own device. Each visit means a fresh, recorded request.
- Who is affected: All readers who adapt the page.
- Impact: Every use of an adaptation risks disclosure, so readers have to choose between privacy and access.
- Severity: 2
- Fix: Ship the full text and a checked simpler version in the same response, or as two ordinary need-free URLs, and switch between them on the device. Keep any remembered preference in localStorage, wrapped in try/catch and never sent. Read aloud stays local with no beacon. Respect `prefers-reduced-motion`, `prefers-contrast` and browser zoom without reporting them. State in the privacy notice that adaptations send nothing.
- Evidence: The `.tools` markup and the script in `consultation.html`.
- Needs disabled readers: yes. Test which forms and controls are wanted on the device, and whether a local preference that persists works with readers' own assistive technology.

Not found: no detection or sniffing of assistive technology (no checks of user agent, AT, or `matchMedia` media features), no cookies set in the material shown (the source of `localStorage` `uid` is not shown), no third-party scripts, fonts or images that would carry the `needs` URL in a Referer header (same-origin only in the files given), no account or profile store of preferences, no alternative-format request form (email or post) that asks for a declared disability, and no privacy notice text, vendor retention terms or lawful basis for the processing above. The privacy notice is linked but its content was not supplied.
