### F12. Neither page offers any way to get help, ask for another format or respond other than by the web form
- Where: consultation.html lines 101-131 (whole `<main>` and `<footer>`); simplified.html lines 190-210
- Problem: Neither page gives a phone number, email address, postal address, text relay or BSL contact. Neither says how to ask for a paper, large print, Easy Read, audio or BSL version, or how to respond by phone, post or with help from an advocate. The web form is the only way to take part. The only contact route is the footer link to the accessibility statement, and the simple page does not have even that.
- Who is affected: Deaf BSL users, people who cannot use a web form or who use one with difficulty (some screen-reader, switch and voice-control users, people with severe learning disabilities, people with aphasia or tremor), and people without reliable internet access, many of whom are older or disabled.
- Impact: Anyone the online form does not work for is shut out of the consultation and cannot ask for a reasonable adjustment from the page they are on. Help is not provided in a consistent place across the two versions (WCAG 2.2 3.2.6 Consistent Help sets this expectation where help exists).
- Severity: 2
- Fix: Add a "Need help or another format?" section in the same place on both pages, before the form, with a phone number, text relay number, email address, postal address and a BSL contact option. Say that responses can be given by phone, by post, in BSL or with help from someone else, and that paper, large print, Easy Read and audio versions are available on request, with how long they take to arrive.
- Evidence: No contact details or alternative channels anywhere in either file.
- Needs user testing: yes. Check with Deaf BSL users and people who do not use the web form that they can find the help and use it.

### F13. "Read aloud" speaks the whole page as one long utterance, which some browsers cut off without warning
- Where: consultation.html line 142 (`speechSynthesis.speak(new SpeechSynthesisUtterance(document.querySelector('main').innerText))`)
- Problem: All of `main` is passed as one utterance. In Chrome on desktop, long utterances that use network voices are known to stop after about 15 seconds without any error or event. Speech can also stop or carry on in the background when the tab loses focus or on mobile when the screen locks. The code has no `onend`/`onerror` handler, so nothing tells the user that reading stopped early.
- Who is affected: People with dyslexia, low vision, cognitive impairments or low literacy who rely on the read-aloud tool.
- Impact: The reading can stop part-way through "What we propose", before the blue badge and journey-time paragraphs, and the user may think they have heard everything. They then respond without the facts they missed.
- Severity: 2
- Fix: Split the text into one utterance per paragraph or sentence and queue them, handle `onend` and `onerror`, and show and announce (through a polite live region) "Reading stopped" or "Finished reading". Combine with the controls in F7.
- Evidence: Line 142; no event handlers on the utterance.
- Needs user testing: yes. Test in Chrome, Edge, Firefox and Safari on desktop and on Android and iOS, and check that the whole page is read to the end.

### F14. The simplified page has no heading for the form and no instructions, so it is hard to find and to understand what to do
- Where: simplified.html lines 192-207
- Problem: The full page has `<h2>Respond</h2>` before its form. The simple page has only `<h1>` and goes straight from "Tell us what you think by 15 December." into the fieldset, with no heading, no "Choose one answer" instruction and no word on what happens after "Send".
- Who is affected: Screen-reader users who move by headings; people with learning disabilities and cognitive impairments who need each step explained.
- Impact: Screen-reader users cannot jump to the form by heading. Users with cognitive needs are not told to choose one answer, what to do next or whether they can change their answer later.
- Severity: 1
- Fix: Add `<h2>Tell us what you think</h2>` before the form, an instruction such as "Choose one answer. Then press Send my answer.", and a sentence after the button: "We will show you a page that says we got your answer."
- Evidence: simplified.html has a single heading; compare consultation.html line 114.
- Needs user testing: yes. Check that users with learning disabilities know what to do and when they have finished.

### F15. Both forms let people send an empty or partial response without warning, give no review step, and lose what they typed if they switch version
- Where: consultation.html lines 105 and 115-129; simplified.html lines 198-207
- Problem: No radio button is `required` and nothing checks the form before it is sent, so "Send my response" or "Send" can submit nothing. There is no "check your answers" step and no information on whether a response can be changed after it is sent. A user who starts the full form and then follows "Simplify this page" (or "See the full page" from the simple view) goes to a new page and loses their answer and comments without warning. Neither page gives a closing time for 15 December.
- Who is affected: People with cognitive impairments, memory difficulties or tremor, screen-reader users who may not notice a radio group was skipped, and people who switch to the simple view part-way through.
- Impact: People send blank or unintended responses that count for nothing, or lose a long comment and give up. This conflicts with WCAG 3.3.4 and 3.3.6 practice for responses that cannot be taken back.
- Severity: 1
- Fix: Mark the radio group as required and show a clear, linked error message ("Choose an answer to the question") with an error summary at the top. Add a "Check your answers" page before sending, and say whether and how a response can be changed. Put the version links before the form only, or keep the user's entries when they switch. State the closing time, for example "until 11:59pm on Tuesday 15 December 2026".
- Evidence: No `required` attribute or validation script in either form; the two versions are separate pages linked by plain `href`s.
- Needs user testing: no
