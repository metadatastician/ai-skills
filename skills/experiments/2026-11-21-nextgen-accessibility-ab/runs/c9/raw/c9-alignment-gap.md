### F1. The remaining risks are ones an automated pass cannot see, and a clean scan would hide them
- Where: whole of `signup.html`; footer link `/accessibility` (statement not supplied)
- Problem: The markup is built for people. It has visible labels, `autocomplete`, a hint and an error linked by `aria-describedby`, `aria-invalid`, and focus moved to the error summary. An automated checker would probably report nothing. What is left is beyond automation: whether the error wording is understood, whether moving focus to an unlabelled `div tabindex="-1"` gives a useful announcement in each screen reader and browser pair, and whether the flow puts too much load on cognitive-access users. If the accessibility statement leans on an automated score, it would be treating the automated slice as the whole.
- Who is affected: screen reader users, cognitive-access users, and anyone relying on the statement
- Impact: A clean automated result could be read as conformance when the outcome (a reader who signs up correctly without undue effort) has not been measured.
- Severity: 1
- Fix: Do not cite an automated score as conformance in the accessibility statement. Test the error flow manually, including the focus announcement on the summary, across the main screen readers and with voice control, and record what was and was not tested.
- Evidence: Theory section "The alignment gap": a high automated score is not conformance, and in the GDS 2017 test the best tool found 41% of planted barriers. The claim that the commonest barriers block people but not agents is DESIGNED, not tested, and this finding leans on it. The statement page was not supplied, so whether it makes such a claim is unknown.
- Needs disabled readers: yes. Test whether focusing the summary `div` announces "There is a problem" and the linked error clearly, and whether the summary link puts the user back in the email field ready to type.

### F2. The same error message is given for an empty field and for a mistyped address
- Where: script, `err.textContent = 'Enter an email address in the correct format, like name@example.com'`
- Problem: Every failure, including leaving the field blank, gets the "correct format" message. Someone who typed nothing is told their format is wrong. The message does not match what happened.
- Who is affected: cognitive-access users, people with low literacy, screen reader users who cannot see the empty field at a glance
- Impact: Mild confusion and extra effort to work out what to fix. No agent is affected, so this is a people-only barrier.
- Severity: 1
- Fix: Use two messages. For an empty field: "Enter your email address". For a bad format: keep the current message.
- Evidence: Regex test on `email.value` in the code, with no separate empty-value branch.
- Needs disabled readers: yes. Test whether the wording is understood first time by cognitive-access users.

### F3. Neither field says whether it is required or optional
- Where: `fname` and `email` inputs and labels
- Problem: First name is never validated and appears to be optional, but nothing says so, either visibly or in the markup. Email is required, but only the error tells you. With `novalidate` and no `required` or `aria-required`, the requirement is not exposed to software either.
- Who is affected: cognitive-access users and anxious form-fillers, who have to guess. Screen reader users get no requirement state announced.
- Impact: Hesitation, or effort spent on a field that does not matter. This is an aligned gap: it burdens both people and agents, so one fix serves both without harm.
- Severity: 1
- Fix: Add "(optional)" to the visible First name label. Add `required` to the email input (`novalidate` keeps the custom error flow). Avoid fixing this for agents alone with hidden text or a long `aria-label` such as "Email address input field required for newsletter subscription", which would make the visible label and the spoken name differ and hurt voice-control users.
- Evidence: There is no `required`, `aria-required` or "optional" text anywhere in the form markup.
- Needs disabled readers: no

### F4. The privacy information comes after the action, and its plain-language claim cannot be checked
- Where: the hint "We will only use this to send the newsletter."; the link "How we use your information", placed after `</form>`
- Problem: The hint makes a firm plain-language promise. No tool can check whether it agrees with the privacy page. In reading order, the link to the fuller explanation comes after the Sign up button, so screen reader and keyboard users reach it only after they have acted.
- Who is affected: screen reader users, keyboard and switch users (sequential order), cognitive-access users who need reassurance before acting
- Impact: People may sign up before they can read the terms. If the hint and the policy disagree, the short text misleads.
- Severity: 1
- Fix: Move the privacy link before the submit button, or into the email hint. Check by hand that the hint's promise matches the privacy page.
- Evidence: DOM order in `signup.html`. The privacy page was not supplied.
- Needs disabled readers: no

### F5. A stale error stays exposed after the field is corrected
- Where: script, the `else` branch and the `aria-describedby="email-hint email-error"` reference
- Problem: Errors are checked only on submit. After an error, a user who corrects the address still sees the red error and the summary, and `aria-invalid="true"` stays until they submit again. When it is cleared, `err.hidden = true` leaves the old text in place. Some browsers still include text from a directly referenced hidden element in the accessible description, so the error might still be announced. A valid submit navigates away, so how long this lasts depends on the server response, which was not supplied.
- Who is affected: screen reader users, who may hear "invalid" and the error for an address that is now correct
- Impact: What is seen and what is announced can disagree with the true state of the field. The impact is small and depends on the browser.
- Severity: 0
- Fix: Clear `err.textContent` when hiding the error. Optionally, clear `aria-invalid` and the error once the user edits the field.
- Evidence: Code only. Whether a hidden referenced element is announced varies by browser and assistive technology, and has not been tested here.
- Needs disabled readers: yes. Test with the main screen readers whether the old error is still announced after it is cleared.

Not found: structured data, hidden text for agents or search, keyword-stuffed or verbose accessible names, ARIA added for "AI readiness", live regions, generated alternatives (alt text, summaries, Easy Read), automated scores or badges on the page, timing or timeouts, motion or animation, media needing captions, transcripts or descriptions, a CAPTCHA or other agent-blocking barrier whose agent fix could harm people, and any request, header, URL or analytics that reveals a reader's needs. Not supplied, so not reviewed: the server-side error and success responses, and the content of the accessibility statement and privacy page.
