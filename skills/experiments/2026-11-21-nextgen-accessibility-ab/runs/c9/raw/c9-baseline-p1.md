### F1. Error summary receives focus but has no role or accessible name, so what is announced varies by screen reader
- Where: signup.html, `<div id="summary" class="summary" tabindex="-1" hidden>` (line 92) and `summary.focus()` in the submit handler (line 128)
- Problem: Focus is moved to a generic `div` with no `role`, no `aria-labelledby` and no live region. A focused generic element has no name of its own. JAWS and NVDA may announce nothing useful, read only the first line, or stay silent in browse mode. VoiceOver and TalkBack differ again. The error is not reliably announced as an alert when the user presses "Sign up".
- Who is affected: Screen-reader users on JAWS, NVDA, VoiceOver and TalkBack, and screen-magnifier users who rely on speech.
- Impact: After submitting, a user may hear nothing, or only "There is a problem" with no list, and not know the submission was blocked or why. They may think they have signed up.
- Severity: 2
- Fix: Give the summary a name and a role, for example `<div id="summary" class="summary" tabindex="-1" role="alert" aria-labelledby="summary-title" hidden>` with `<h2 id="summary-title">There is a problem</h2>`. Or use the GOV.UK Frontend error summary pattern: focus the container and put `role="alert"` on an inner wrapper. Keep the focus move.
- Evidence: Line 92 has only `tabindex="-1"`. Line 128 calls `summary.focus()`. No ARIA attribute on the container names it or announces it.
- Needs user testing: yes. Submit an empty or invalid email with JAWS + Chrome, NVDA + Firefox, VoiceOver + Safari (macOS and iOS) and TalkBack + Chrome, and check that the heading and the error text are both announced right away.

### F2. Error summary link puts the email label and hint out of view and may not move focus to the field
- Where: signup.html, submit handler, `a.href = '#email'` (line 126)
- Problem: The link is a plain fragment link to the input. When it is followed, browsers scroll the `<input>` to the top of the viewport. The label "Email address", the hint and the inline error sit above the input, so they scroll out of view. Fragment navigation also does not reliably move keyboard focus into the input. Some browser and screen-reader pairs only move the sequential-focus starting point, so the user is not placed in the field.
- Who is affected: Screen-magnifier and zoom users, sighted keyboard users, people with cognitive or memory impairments, and screen-reader users whose focus does not land in the field.
- Impact: Users arrive at an unlabelled-looking box with the error text out of sight, or do not arrive at the field at all and have to find it themselves.
- Severity: 2
- Fix: Handle the click in script. Call `preventDefault()`, then `email.focus({preventScroll: true})` and `document.querySelector('label[for=email]').scrollIntoView()`, as the GOV.UK Frontend error summary does. Keep `href="#email"` as the fallback when there is no script.
- Evidence: Line 126 sets only `href`. No click handler exists, and the label, hint and error (lines 101–103) come before the input (line 104).
- Needs user testing: yes. Activate the summary link with keyboard, mouse and touch at 200% and 400% zoom and with ZoomText or macOS Zoom. Check that the label and error are visible and that focus is in the field.

### F3. The page does not say which fields are required and which are optional
- Where: signup.html, the "First name" field (lines 98–99) and the "Email address" field (lines 101–104)
- Problem: Only the email is checked, so "First name" is in fact optional, but nothing says so. Email is required, but it has no visible marker and no `required` or `aria-required="true"`, so assistive technology does not announce it as required.
- Who is affected: People with cognitive or learning disabilities or anxiety, screen-reader users, and anyone who avoids giving personal data they do not need to give.
- Impact: Users cannot tell what they must enter. Some will give data they did not need to give, and some will hesitate or leave the form. Screen-reader users get no "required" announcement on the one field that must be filled in (WCAG 3.3.2).
- Severity: 1
- Fix: Change the label to "First name (optional)", or remove the field if it is not needed. Add `aria-required="true"` to the email input (or `required`, which still works with `novalidate` on the form).
- Evidence: There is no `required` or `aria-required` anywhere, and the label text is just "First name". The script validates only `email`.
- Needs user testing: no

### F4. An empty email field gets the "correct format" error message
- Where: signup.html, submit handler, line 121
- Problem: The same message, "Enter an email address in the correct format, like name@example.com", is shown when the field is left empty. The user has not entered a wrong format; they have entered nothing.
- Who is affected: People with cognitive or learning disabilities, people with memory impairments, and screen-reader users who submitted without noticing the field.
- Impact: The message misdescribes the problem. A user who left the field blank may look for a formatting mistake that is not there.
- Severity: 1
- Fix: Check for an empty value first and show "Enter your email address". Keep the format message for values that are present but invalid.
- Evidence: The single regex test on line 119 leads to the single message on line 121.
- Needs user testing: no

### F5. Error state is not reflected in the page title, and the inline error has no "Error:" prefix
- Where: signup.html, `<title>` (line 73), `#email-error` (line 103) and the submit handler
- Problem: When validation fails, `document.title` is left as "Sign up for our newsletter | Kestrel Arts". The inline error is read through `aria-describedby` straight after the hint ("We will only use this to send the newsletter. Enter an email address…") with no text that marks it as an error.
- Who is affected: Screen-reader users, especially those who check the title or move through the form field by field rather than through the summary.
- Impact: The error reads as more hint text. Users who miss the summary have only `aria-invalid` to tell them the field failed, and not every screen reader and verbosity setting announces it.
- Severity: 1
- Fix: On error, set `document.title = 'Error: Sign up for our newsletter | Kestrel Arts'` and restore the title when the errors clear. Put a visually hidden prefix inside `#email-error`, for example `<span class="visually-hidden">Error:</span>`, before the message text.
- Evidence: The script never changes `document.title`. Line 121 sets only the bare message as `textContent`.
- Needs user testing: no

### F6. "How we use your information" comes after the submit button
- Where: signup.html, line 108, `<p><a href="/privacy">How we use your information</a></p>`
- Problem: The privacy link comes after the form, so people who read or tab through the page in order reach the "Sign up" button before they reach the information they need to decide whether to sign up.
- Who is affected: Screen-reader and keyboard users who move through the page in order, and people with cognitive impairments who need information before they commit.
- Impact: Users decide without the privacy information, or have to move past the submit button and come back.
- Severity: 1
- Fix: Move the link next to the introduction or the email hint, before the submit button.
- Evidence: In the DOM, the link comes after the closing `</form>`.
- Needs user testing: no

Not found: language (`lang="en-GB"`), page title, viewport scaling not blocked, landmarks (header, main, footer) and heading structure, explicit labels with `for`/`id`, `autocomplete` tokens (given-name, email; 1.3.5), hint and error linked through `aria-describedby`, `aria-invalid` set and cleared, validation only on submit (no premature inline errors), error text naming the field and giving an example, colour contrast (text #1a1a1a, hint #3d3d3d, error #8a1c1c, link #0b4f8a, input border #4a4a4a, white-on-black button all above 7:1), error not shown by colour alone, visible `:focus-visible` outline, native button and link semantics with clear names, plain-language intro text, no time limits, no CAPTCHA, no motion or media.
