### F1. The simplified version changes and drops the substance of the proposal
- Where: `simplified.html`, `<main>` paragraphs, compared with the "What we propose" section of `consultation.html`.
- Problem: The machine version is Unfaithful under the outcome codes. Items are changed: the hedge "Our traffic modelling suggests bus journeys could be up to 4 minutes quicker" becomes the certainty "Buses will be faster", and "a lane just for buses" drops the condition that the lane runs only 7–10am and 4–7pm on weekdays and is open to all traffic at other times, so the scope reads as permanent. Items are dropped silently: the number "Twelve" becomes "Some parking spaces", the four blue badge bays moving 40 metres east to the layby outside number 62 are left out, and so are the cost that car journeys may be up to 2 minutes slower and the opening date. The page keeps the benefit and drops the cost, so the reader gets a one-sided picture of a matter they are being asked to vote on. No must-survive declaration exists, so nothing tells the tool what to keep.
- Who is affected: People who use "Simplify this page": people with learning disabilities (the need the link sends), and anyone else who wants plainer text, such as people with cognitive fatigue or brain injury, or people reading in a second language. Blue badge holders who use the simplified view are never told that their bays move.
- Impact: Readers answer a public consultation on a proposal that has been altered for them. They are misled without seeing any sign of it, and their responses count as informed when they are not.
- Severity: 3
- Fix: Write a must-survive declaration for the page: the operating hours (critical), the lane being open to all traffic outside those hours (critical), the twelve spaces (critical), the blue badge bay move and new location (critical), both modelled journey-time figures with their hedge (critical), and the closing date (critical). Code every generated version against it. Withhold any version that changes, drops or merges a critical item. Better still, offer a human-written Easy Read version, checked against the declaration, in place of an instant rewrite.
- Evidence: `consultation.html` lines "operating 7am to 10am and 4pm to 7pm on weekdays", "Outside those hours the lane would be open to all traffic", "Twelve on-street parking spaces", "Four blue badge bays would be moved 40 metres east", "Our traffic modelling suggests ... could be up to 4 minutes quicker", "Car journeys ... may be up to 2 minutes slower". `simplified.html`: "We want to make a lane just for buses", "Buses will be faster.", "Some parking spaces will go." (The theory's claim that AI adaptations break declared items at material rates is OPEN; this finding is one observed case, not a rate.)
- Needs disabled readers: yes. People with learning disabilities should decide which items "intact" requires for them, and test whether a checked Easy Read version leaves them correctly informed about hours, parking and the blue badge bays.

### F2. The simplified response form gives a smaller voice and changes the question
- Where: `simplified.html` form, compared with the form in `consultation.html`.
- Problem: The five-point scale becomes Yes/No. "Neither support nor oppose" and the strength of a view are gone. The question changes from "Do you support the proposed bus lane?" to "Do you like the bus lane idea?". The comments textarea is removed, although the full page invites comments "including the blue badge bays". Both forms post the same `support` field to the same endpoint, so the two sets of answers are pooled even though the questions differ.
- Who is affected: People who answer from the simplified view, including blue badge holders who use it.
- Impact: These people cannot record a neutral or qualified view, and cannot raise the issue that most affects disabled residents. Their answers to a different question are mixed into the main count, which distorts the consultation result as well as their own say.
- Severity: 3
- Fix: Keep the same question and the same response options in every version, and change only the wording around them (for example, add plain explanations next to the five options). Keep a free-text field, with an option to answer in other ways (phone, in person, audio). Do not let the simplified view reduce what a respondent can say.
- Evidence: `simplified.html`: `<legend>Do you like the bus lane idea?</legend>` with only `support`/`oppose` radios and no textarea. `consultation.html`: five radios and `<textarea id="comments">` labelled "Any comments on the proposal, including the blue badge bays".
- Needs disabled readers: yes. Test with people with learning disabilities whether a plain-language five-option scale and a comments route are usable, and which forms of response they would choose.

### F3. The page gathers and stores readers' disability information for the council's records, not for the reader
- Where: `consultation.html` `#simplify` href (`needs=learning-disability`), the hidden `a11y_profile` and `view` fields, and the Read aloud `sendBeacon`. `server-notes.md`: vendor prompt, 90-day log of IP address and query string, response export "with a breakdown by `a11y_profile`", and analytics events stored against `uid`.
- Problem: Using an access feature reveals a disability label. The label travels in the URL, goes to a third party (Clarifyr Ltd) in the prompt "Rewrite for a reader with <need>", sits in server logs next to the IP address for 90 days, is stored with the person's consultation answer, and is broken down in a spreadsheet. Read aloud sends an `a11y_mode` event tied to a persistent `uid` from localStorage. The IP, uid, mode and profile fields together make a composition leak, linking one person's needs to their political response. All of this serves dashboards and "accessibility uptake" reporting, not the reader. This breaks principle 4 (the publisher never learns who needed what) and touches special category data (UK GDPR; legal points ASSUMED).
- Who is affected: Everyone who presses "Simplify this page" or "Read aloud".
- Impact: People may avoid the tools they need once they know, or suspect, that using them is recorded against their answer. Those who use them have health data stored without being asked and without a clear purpose, linked to their opinion on a council decision.
- Severity: 3
- Fix: Remove `needs` from the URL and the prompt. Request a reading level or form, never a condition. Remove the `a11y_profile` field and the `view` field from responses. Remove the Read aloud beacon, or at least drop `uid` and the `a11y_mode` naming. Do not log query strings for this route. Do adaptation on the reader's device where possible. If uptake must be counted, use aggregate counts with no link to identity or answers, and say so in the privacy notice.
- Evidence: `href="/consult/riverside?view=simple&amp;needs=learning-disability"`. `<input type="hidden" name="a11y_profile" ...>`. Script sets `a11y-field` from `params.get('needs')`. `navigator.sendBeacon('/analytics/event', ... event: 'a11y_mode', mode: 'read_aloud', ... uid: localStorage.getItem('uid'))`. Server notes: "Requests are logged with IP address and query string for 90 days", "breakdown by `a11y_profile`", "stores events against `uid`".
- Needs disabled readers: yes. Ask disabled residents whether knowing this data is kept would stop them using the tools. Do not assume the answer.

### F4. One hard-coded disability label is attached to everyone who presses the button
- Where: `consultation.html` `#simplify` link. `server-notes.md` prompt "Rewrite for a reader with <need>".
- Problem: The only route to the simple view sends `needs=learning-disability`, whatever the reader's reason. The version is chosen by diagnosis, not by the reader setting a level or form. The same label then reaches the response record and the uptake breakdown, so the council's data says that every user of the simple view has a learning disability. The data is false, and it looks authoritative.
- Who is affected: Anyone who uses the simple view for another reason (second-language readers, people with fatigue, people with dyslexia, older readers) is wrongly recorded. People with learning disabilities get one version written for a stereotype, not one they can tune.
- Impact: The reader has no choice of level or format. The records misreport disability, and decisions on accessibility rest on a false count.
- Severity: 2
- Fix: Offer reader-side choices (for example "shorter", "plain English", "Easy Read with pictures", "larger text") without naming a condition. Record nothing about the choice against the person.
- Evidence: Static href with fixed `needs=learning-disability`. The script copies `needs` into `a11y_profile`. `simplified.html` hard-codes `value="learning-disability"`.
- Needs disabled readers: yes. Test which choices of level and form people with learning disabilities, dyslexia and cognitive fatigue actually want.

### F5. The simplified version is unlabelled, and the route back to the full page is hard to find
- Where: `simplified.html` `<title>`, `<h1>` and the final link.
- Problem: The page calls itself "simple version" but does not say that a machine wrote it (EU AI Act Article 50 marking, from 2 August 2026), that nobody checked it (Unchecked), who made it (Clarifyr Ltd), from which version of the original, or when. It does not name what was left out. The only link to the full page comes after the Send button, so a reader meets it after they could already have responded. The simple page also has no footer links to the accessibility statement or privacy notice, so its readers cannot find out what happens to the data in F3.
- Who is affected: Simple-view readers, and screen reader and magnifier users who move through the page in order and reach the form before the link.
- Impact: Readers trust a rewrite they have no reason to know is unchecked and incomplete, and they are less likely to see the original before responding.
- Severity: 2
- Fix: Put a plain label at the top, for example: "A computer wrote this short version. Nobody has checked it. It leaves out: the hours, the number of parking spaces, the blue badge bays." Add the source date and a link to the full page before the form. Keep the footer links.
- Evidence: `simplified.html` has no provenance text. `<p><a href="/consult/riverside">See the full page</a></p>` comes after `</form>`. There is no `<footer>`.
- Needs disabled readers: yes. Test with people with learning disabilities whether the label wording is understood and whether it changes what they do.

### F6. A week-long cache creates a chain fault if the original is corrected
- Where: `server-notes.md`: "caches the result for a week".
- Problem: The simple version is made from whatever the page said at generation time and is served for up to seven days. If the council corrects the proposal during the consultation (hours, bay location, closing date), simple-view readers may get an older version made from the uncorrected original. Nothing records which original it came from.
- Who is affected: Simple-view readers.
- Impact: Readers respond to a superseded proposal, and nobody can tell afterwards which version they saw.
- Severity: 2
- Fix: Tie each version to a hash of its source text, and regenerate or withdraw it whenever the original changes. Store the source hash in the version label.
- Evidence: "caches the result for a week". There is no versioning in the template.
- Needs disabled readers: no

### F7. Read aloud has no controls and can talk over a screen reader
- Where: `consultation.html` Read aloud handler.
- Problem: One click speaks all of `main.innerText` (heading, the "Simplify this page" and "Read aloud" control text, the proposal, then every form label and radio option) as a single run of speech. There is no pause, stop, speed control or way to skip, and no visible state. A second click queues another full reading. For someone already using a screen reader, the speech can overlap and duplicate it. Nothing visible marks what is being read, so a reader cannot follow along.
- Who is affected: People with dyslexia or low vision who use read-aloud, people with cognitive disabilities who need to control pace, and screen reader users who press it.
- Impact: Readers cannot control the timing, sit through form noise, and cannot stop the speech without leaving the page.
- Severity: 2
- Fix: Add stop and pause controls and a speed setting, read only the content section, and highlight the sentence being read. Better, rely on the reader's own read-aloud tools and drop the analytics beacon (F3).
- Evidence: `speechSynthesis.speak(new SpeechSynthesisUtterance(document.querySelector('main').innerText))` with no cancel or pause handling.
- Needs disabled readers: yes. Test with read-aloud users and screen reader users whether the controls and the reading scope work for them.

### F8. Automated checks would pass both pages and miss everything above
- Where: Both pages, and the "accessibility uptake" breakdown in `server-notes.md`.
- Problem: Both pages have clean markup: `lang`, labelled fields, fieldsets and legends, focus styles, and colours that pass contrast. An automated tool would likely score them well, and the simplified page's larger font and short lines look like an improvement. No automated tool can establish what matters here: whether the rewrite is faithful (F1), whether the two forms ask the same question (F2), the reading level and cognitive load of the full text (numbers, the hedges "suggests ... up to", "blue badge", "layby"), whether Read aloud's timing is usable (F7), or the privacy harm (F3). The council's planned success measure, uptake by `a11y_profile`, counts clicks on the tools. It is an output measure, not whether anyone was correctly informed (principle 6). This finding leans on the claim that the commonest barriers block people but not agents, which is DESIGNED, not tested.
- Who is affected: Simple-view users and Read aloud users, whose barriers are invisible to the measures the council uses.
- Impact: The council can report a working, well-used accessibility feature while its users are misinformed and given less say.
- Severity: 2
- Fix: Replace the uptake breakdown with outcome checks: declaration-coded review of every generated version, and comprehension testing (paid, consented, anonymous) with disabled residents. State in the accessibility statement what automated testing did and did not cover.
- Evidence: No automated scores or badges appear in the material, but the reporting plan "so we can report on accessibility uptake" treats usage as success. The accessibility statement is linked but not supplied, so its claims cannot be checked.
- Needs disabled readers: yes. Comprehension and effort testing of both versions with people with learning disabilities and read-aloud users.

### F9. The simplify route is a GET that crawlers can trigger, and an agent-side fix could burden people
- Where: `server-notes.md` `GET /consult/riverside?view=simple&needs=<need>`.
- Problem: The barrier here falls on agents and on data, not on people. Any crawler or agent that follows the link starts a paid vendor rewrite, writes an IP and disability label to the log, and inflates the uptake figures. The likely fix aimed at agents (a CAPTCHA, JavaScript-only loading, or a bot challenge on the simplify route) would put a timed or visual barrier in front of exactly the people who need the simple view.
- Who is affected: People with learning or cognitive disabilities, and screen reader users, if bot defences are added.
- Impact: Misleading usage data now, and a risk of new barriers to people later.
- Severity: 1
- Fix: Mark the link `rel="nofollow"` and disallow the route in robots.txt. Serve checked versions as pre-generated static pages rather than generating them per request. Do not put a challenge in front of the access route.
- Evidence: Generation is triggered on GET with a cache, and requests are logged per query string.
- Needs disabled readers: no

Not found: structured data, JSON-LD or schema markup; hidden text for agents or search; ARIA of any kind, including roles added for "AI readiness"; live regions; keyword-stuffed or verbose accessible names; generated alt text (there are no images); captions, transcripts or media; automated scores, badges or conformance claims on the page (the accessibility statement is linked but not supplied); WCAG version claims; motion or animation; session timeouts on the form.
