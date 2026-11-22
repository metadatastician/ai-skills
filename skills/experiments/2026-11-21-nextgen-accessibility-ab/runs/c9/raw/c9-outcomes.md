Reader tasks: (a) decide whether to sign up, knowing what is promised (one email a month, unsubscribe any time, email used only for the newsletter); (b) complete the form; (c) recover from an error; (d) know whether they are now subscribed. Paths available in the material are the full page (visual) and the assistive-technology reading order, with and without script. No summary, simplified, audio or chart version exists, so no version-fidelity coding applies.

### F1. The reader cannot tell from this material whether sign-up succeeded
- Where: `<form action="/newsletter" method="post">`; the valid branch of the submit handler (`summary.hidden = true`) and the server response, which is not supplied.
- Problem: On a valid submit the page posts away, and nothing in the file says what the reader sees next. If the charity uses double opt-in, the page does not say a confirmation email must be clicked. A reader may believe they are subscribed when they are not, or submit again.
- Who is affected: Every reader. Most exposed: readers who find re-checking costly (people with memory or attention impairments, people who are fatigued) and screen-reader users, if the response page does not move focus or announce the result.
- Impact: Performance: task (d) may end uninformed. Safety: a false belief of being subscribed, or of not being, causing repeat submissions. Comfort: having to re-check an inbox or the page.
- Severity: 2 (provisional: it depends on the confirmation page, which was not reviewed)
- Fix: Show a confirmation that names the address used and says whether a confirmation email is coming, and how long it may take. Supply that page for review.
- Evidence: The file has no success state. The only outcomes are the error summary or navigation to `/newsletter`.
- Needs disabled readers: yes. After submitting, can panel readers say correctly whether they are subscribed, and what, if anything, they must do next? Test with screen-reader users and readers with cognitive impairments.

### F2. An empty email field gets a "wrong format" message
- Where: The script. The regex test runs on empty input and sets `'Enter an email address in the correct format, like name@example.com'`.
- Problem: A reader who left the field blank is told their format is wrong. That points them at something they did not type.
- Who is affected: Readers who skipped or missed the field, such as screen-reader users moving by form control or readers with learning disabilities. They are most likely to rely on the error summary text, which repeats the same message.
- Impact: Performance: they will probably still recover. Comfort: a moment of confusion and searching for a typo that does not exist. Safety: low.
- Severity: 1
- Fix: Branch on an empty value: "Enter your email address". Keep the format message for values that are present but malformed.
- Evidence: There is a single message for every failure of `/^[^@\s]+@[^@\s]+\.[^@\s]+$/`.
- Needs disabled readers: yes. Ask readers who triggered the error: what did they think was wrong, and what did they change?

### F3. What happens to the first name, and whether it is required, is not said
- Where: The `fname` field. The hint "We will only use this to send the newsletter." is attached only to `email` (`aria-describedby="email-hint ..."`).
- Problem: The use promise covers the email address only. The first name has no stated purpose, and nothing says whether it is optional (the script does not validate it). A reader deciding what to share is under-informed.
- Who is affected: Readers cautious about personal data, and screen-reader users, who hear the promise only on the email field.
- Impact: Performance: a partial understanding of what they consent to. Safety: a reader may assume the "only use this" promise covers the name. Comfort: low.
- Severity: 1
- Fix: Mark the name "(optional)" if it is optional, and give one hint covering both fields, or move the use statement above the form.
- Evidence: Only the email input is described by `email-hint`. `fname` has no hint and no validation.
- Needs disabled readers: no. A general reader panel suffices.

### F4. The data-use link comes after the submit button in reading order
- Where: `<p><a href="/privacy">How we use your information</a></p>` sits after `</form>`.
- Problem: A sequential reader (screen reader, keyboard, high zoom) meets the privacy link only after reaching "Sign up". Readers who act in order submit before they could have read how their data is used.
- Who is affected: Screen-reader and keyboard users, and readers at high magnification who see a narrow strip of the page.
- Impact: Performance: they act on less information than a visual reader who scans the whole short page. Comfort: they must move back. Safety: low.
- Severity: 1
- Fix: Put the privacy link before the button, for example in the intro paragraph or beside the email hint.
- Evidence: DOM order: inputs, button, then the privacy link.
- Needs disabled readers: yes. Did sequential readers know where to find the data-use information before they submitted?

### F5. Behaviour without script, and server-side errors, are unknown
- Where: `novalidate` on the form, with all client-side validation done in the script.
- Problem: If the script fails or is blocked, the browser's own validation is off, and the reader depends on whatever `/newsletter` returns for a bad address. That response is not supplied. The reader may get a raw or generic error, or a silent failure.
- Who is affected: Readers on assistive or older browsers where the script fails, and readers whose script is blocked.
- Impact: Performance and safety are unknown. They could end uninformed about failure (see F1).
- Severity: 1 (provisional)
- Fix: Have the server render the same error summary and inline message on a failed post. Supply it for review.
- Evidence: The validation exists only in the inline `<script>`. The server handling is not in the material.
- Needs disabled readers: no, until the server response exists. Then the F1 and F2 questions apply.

Outcome test (for a reader panel, not answered here):
1. How often will you get emails, and can you stop them? (informed / uninformed / misinformed)
2. What will the charity use your email address for? Your first name?
3. After you submitted, are you subscribed now? Do you need to do anything else?
4. (After an induced error) What was wrong, and what did you do to fix it?
5. Before you pressed "Sign up", did you know where to read how your information is used?

Not found: adapted versions (summary, Easy Read, audio, AI rewrite), so there were no must-survive items to code. Also not found: a confirmation or success page; the server-side error response; the content of `/privacy`, so whether it agrees with "only use this to send the newsletter" was not checked; any statement of how to unsubscribe; time limits or timeouts; numbers, doses or deadlines that a reader could act on wrongly.
