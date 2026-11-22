### F1. An empty email field gets the "correct format" message
- Where: `signup.html`, submit handler: the single regex test on `email.value` and `err.textContent = 'Enter an email address in the correct format, like name@example.com'`, copied into the summary link by `a.textContent = err.textContent`.
- Problem: Any failure, including a blank field, gets the same "correct format" message. A reader who typed nothing is told their format is wrong, both beside the field and in the error summary.
- Who is affected: Anyone who submits without an email address. Most exposed are readers who move by form control and may skip the field, and readers who rely on the wording of the message to know what to fix.
- Impact: The message points at a typo that does not exist. Readers will probably still recover, but they spend extra effort working out what is wrong.
- Severity: 1
- Fix: Add an empty-value branch with "Enter your email address". Keep the format message for a value that is present but malformed. Keep deriving the summary text from the inline message so the two cannot drift.
- Evidence: There is only one branch for `!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)`, and an empty string fails that test. Merges alignment-gap F2 and outcomes F2.
- Needs disabled readers: yes. Trigger the error with an empty field and with a malformed address, then ask what they thought was wrong and what they changed. Test this with readers with learning disabilities and with screen-reader users.

### F2. The fields do not say which is required, and the first name has no stated purpose
- Where: The `fname` and `email` inputs and their labels. The hint `email-hint` ("We will only use this to send the newsletter.") is attached only to `email`.
- Problem: Nothing on the page or in the markup says that email is required or that first name is optional. The script never validates `fname`. `novalidate` is set and there is no `required` or `aria-required`, so assistive technology is not told either. The promise about use covers "this", meaning the email address, so the page says nothing about what happens to the name.
- Who is affected: Every reader filling in the form. Screen-reader users hear no required state, and they hear the use promise only on the email field. Readers who are careful about sharing personal data are also affected.
- Impact: Readers have to guess what they must give. Some may assume the "only use this" promise also covers their name. Readers are told about required fields only after an error.
- Severity: 1
- Fix: Add "(optional)" to the visible First name label, or remove the field if it is not needed. Add `required` to the email input. `novalidate` keeps the custom error flow. Give one use statement that covers both fields, or put it above the form. Do not fix this with hidden text or a long `aria-label` that differs from the visible label.
- Evidence: There is no `required`, `aria-required` or "optional" text in the form. Only `email` has `aria-describedby="email-hint email-error"`. Merges alignment-gap F3 and outcomes F3.
- Needs disabled readers: no

### F3. Everything that happens after a submit takes place off this page and was not supplied
- Where: `<form id="signup" action="/newsletter" method="post" novalidate>`. The valid branch of the handler only hides the summary and lets the post go ahead.
- Problem: The material has no success state, no statement about whether a confirmation email will follow, and no server-side error response. All validation is in the inline script, and `novalidate` turns off the browser's own checks. If the script fails or is blocked, a bad address goes to the server with no check on the page, and what the reader gets back is unknown.
- Who is affected: Every reader who submits. Readers whose script fails or is blocked depend wholly on the server response.
- Impact: Not established from this material. The page alone does not show whether a reader ends up correctly informed that they are subscribed, or that they still need to act.
- Severity: 1 (provisional: the pages that decide this were not reviewed)
- Fix: Have the server render the same error summary and inline message when a post fails. Show a confirmation that names the address used and says whether a confirmation email is coming. Supply both pages for review.
- Evidence: The file has only two outcomes: the client-side error summary, or navigation to `/newsletter`. This merges outcomes F1 and F5. Outcomes F1 is lowered from 2, because the material does not show a fault, only that the response is missing.
- Needs disabled readers: yes, once the response pages exist. After submitting, can screen-reader users and readers with cognitive impairments say correctly whether they are subscribed and what, if anything, they must do next?

### F4. The link to how data is used comes after the Sign up button
- Where: `<p><a href="/privacy">How we use your information</a></p>`, placed after `</form>`.
- Problem: In DOM order the sequence is inputs, then the button, then the privacy link. A reader moving through the page in order reaches "Sign up" before the explanation of how their information is used.
- Who is affected: Screen-reader, keyboard and switch users, and readers at high magnification.
- Impact: Sequential readers may submit with less information than a reader who scans this short page visually.
- Severity: 1
- Fix: Move the link before the button, for example into the intro paragraph or the email hint. Check by hand that the hint's promise agrees with `/privacy`. That page was not supplied, so the agreement is unchecked.
- Evidence: DOM order in `signup.html`. Merges alignment-gap F4 and outcomes F4.
- Needs disabled readers: yes. Test whether sequential readers knew where to find the data-use information before they pressed Sign up.

### F5. No must-survive declaration for the page's commitments
- Where: The intro "One email a month about exhibitions, workshops and events. You can unsubscribe at any time." and the hint "We will only use this to send the newsletter."
- Problem: The page makes commitments that any later summary, read-aloud text or AI answer about the form would have to keep. Nothing marks them as items that must survive. No version of the page exists today, so nothing has been dropped or changed.
- Who is affected: Readers who meet the form through an adapted version rather than the page itself.
- Impact: This is a risk, not an observed fault. Without a declaration, a later cut of the unsubscribe or data-use promise could not be checked. The claim that adaptations break declared items at material rates is OPEN.
- Severity: 1
- Fix: Record a declaration with the page that lists these items with their types: frequency (number), unsubscribe (instruction), limit on use (caveat), and the privacy link (instruction). Settle the weights with disabled readers rather than by assignment. The weights the fidelity reviewer proposed are proposals, not decisions. Make any later version from this page and label it with who made it, from what and when.
- Evidence: The quoted text above. No meta description, summary, Easy Read or other version appears in the material. This is fidelity F2, kept but qualified.
- Needs disabled readers: yes. Ask them which of these items must appear in any short or adapted version made for them, and at what weight.

### F6. The error-recovery announcements are untested, and a stale error can stay in the description
- Where: `<div id="summary" class="summary" tabindex="-1" hidden>`, which is focused by `summary.focus()`. The summary link is `a.href = '#email'`. The `else` branch sets `err.hidden = true` but leaves `err.textContent` in place, and the input keeps `aria-describedby="email-hint email-error"`.
- Problem: Focus moves to a generic `div` that has no role or name, with an `h2` inside it. What is announced will vary by screen reader and browser. The code does not show whether the `#email` link puts the reader in the field ready to type. When the error is cleared, its old text stays in a directly referenced hidden element, which some browsers still include in the accessible description. A valid submit then navigates away, so that window is short.
- Who is affected: Screen-reader and voice-control users who are recovering from an error.
- Impact: Small, and it depends on the browser. What is announced may not match the state of the field.
- Severity: 0
- Fix: Clear `err.textContent` when hiding the error. Test the summary focus and the link-to-field behaviour by hand, and record what was and was not tested. Do not treat a clean automated scan of this form as evidence that it works.
- Evidence: Code only. Nothing has been tested with assistive technology. This merges alignment-gap F5 with the testable part of alignment-gap F1. That finding's other parts were struck: the forecast that "an automated checker would probably report nothing", the claim that the markup "is built for people", and the conditional about an accessibility statement that was not supplied.
- Needs disabled readers: yes. Test whether focusing the summary announces "There is a problem" and the error clearly, whether the link leaves the reader in the email field with its label in context, and whether the old error is still announced after it is cleared.

Not found: There are no conformance badges, "verified" or "accessible" claims, automated scores or AI-output labels on the page. The footer links to a statement whose content was not supplied. There are no adapted versions (summary, Easy Read, audio, alt text, meta description), so no must-survive items could be coded. Fidelity F1 was dropped: it reports no problem, and its "Class: Exact" is a reviewer's reading of the code, not an earned label. Reader-privacy F1 was dropped because the material shows no logging, analytics or record-joining; it also misstates how Referer works, since the POST would carry the form page, not `/accessibility`. Reader-privacy F2 was dropped because it concerns a future disclosure route that the material does not contain. There were no URL parameters, cookies, storage, analytics, third-party scripts or detection of assistive technology. No timing, motion, media or CAPTCHA. No contrast failures: the reviewers did not raise any, and the colours declared in the stylesheet are dark on white. Not supplied, so not assessed: the `/newsletter` responses, `/privacy`, `/accessibility`, and the newsletter emails themselves. No finding of the lead's own was added.
