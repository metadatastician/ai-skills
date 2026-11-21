### F1. The conformance claim is to a standard that does not exist, and a badge says it is "verified"
- Where: statement.html, line 90 `.badge` span; line 93 first paragraph of "How accessible this website is"
- Problem: `<span class="badge">WCAG 2.3 AAA verified</span>` and "This website is fully conformant with the Web Content Accessibility Guidelines version 2.3 at Level AAA". There is no published WCAG 2.3. The current W3C Recommendation is WCAG 2.2 (WCAG 3 is a working draft). "Verified" suggests an independent check, but the only testing described is an automated tool. W3C also advises against requiring Level AAA conformance for whole sites, because some AAA criteria cannot be met for all content (for example 1.2.6 sign language for every prerecorded video, and 3.1.5 reading level for tenancy and legal text). A full AAA claim is therefore very unlikely to be true.
- Who is affected: all disabled tenants, advocates and support workers who rely on the statement to decide whether the site will work for them; staff who handle complaints.
- Impact: users are told that any barrier they meet cannot exist, so they may blame themselves, give up, or not complain. The organisation loses credibility and is exposed if a regulator or a court tests the claim.
- Severity: 3
- Fix: remove the badge. State conformance against WCAG 2.2 Level AA as "fully", "partially" or "not" compliant, based on a real audit. List AAA criteria met only as extras. Do not use "verified" unless an independent auditor is named with a date and scope.
- Evidence: lines 90 and 93 name "version 2.3" and "AAA"; line 97 says the only test was by "an automated tool".
- Needs user testing: no

### F2. "Fully conformant" rests only on automated testing and an automated score
- Where: statement.html, line 93 ("scores 100 out of 100 in automated accessibility audits ... checked every night by our AccessGuard AI, so you can be confident every page meets the standard") and line 97 (Testing section)
- Problem: automated tools reliably detect only a minority of WCAG failures, roughly 30 to 40 percent at best. They cannot judge whether alt text is meaningful, whether reading order and focus order make sense, whether captions are accurate, whether language is plain, or how assistive technology actually behaves. "100 out of 100" is a tool score, not conformance. "All issues it found have been fixed" says nothing about issues it cannot find. No manual testing, screen reader testing or testing with disabled people is described.
- Who is affected: screen reader, keyboard, switch, voice control and magnification users, and people with cognitive disabilities, whose barriers are the ones automated tools miss.
- Impact: real barriers stay unfound and unreported. The statement misinforms users, which is the opposite of its purpose.
- Severity: 3
- Fix: commission a manual audit against WCAG 2.2 AA on a representative sample of pages and templates, including the tenant portal, rent payment and repairs journeys and PDF letters, with assistive technology testing. Describe in the Testing section who tested, when, what sample, and the method. Present automated monitoring as a supplement only, and drop the "100 out of 100" and "you can be confident" wording.
- Evidence: line 97 "by AccessGuard AI, an automated tool"; no other testing named.
- Needs user testing: yes. Test the main tenant journeys with disabled tenants who use screen readers, magnification, voice control and Easy Read, to find the barriers the tool missed.

### F3. The AI assistant is said to produce Easy Read, British Sign Language and translations "instantly and accurately"
- Where: statement.html, line 94
- Problem: "Our AI assistant can rewrite any page in Easy Read, British Sign Language video or another language on request, instantly and accurately." Automated BSL avatars and machine translation into BSL are not accurate enough to rely on and are widely rejected by Deaf communities: BSL is a separate language with its own grammar, facial expression and spatial structure. Good Easy Read needs human writing, chosen images and testing with people with learning disabilities. Machine translation of tenancy, rent and legal information can change meaning. The statement also does not say how to reach the assistant, whether it works with assistive technology, or what data it collects. If it is an overlay-type product it may detect and record assistive technology use, and it can interfere with screen readers.
- Who is affected: Deaf BSL users, people with learning disabilities, people whose first language is not English, and screen reader users if the assistant is an overlay.
- Impact: users may act on wrong information about rent, arrears, repairs or tenancy rights, with serious consequences. Promising an instant AI version may also be used to turn down requests for human-produced formats, which contradicts the form lower on the page.
- Severity: 3
- Fix: remove the claim. Offer human-produced BSL (or a BSL video relay service), professionally written and user-tested Easy Read, and professional translation through the request route. If an AI tool is kept, label its output as automated and unchecked, never present it as a substitute for a requested format, and state what data it collects.
- Evidence: line 94; the form (lines 121 to 129) offers Easy Read and BSL video as formats to request, which contradicts an instant AI equivalent.
- Needs user testing: yes. Have Deaf BSL users and people with learning disabilities judge the AI output against human-produced versions, and test whether the assistant interferes with screen readers and other assistive technology.

### F4. The statement leaves out the content a model accessibility statement requires
- Where: statement.html, whole `<main>` (lines 88 to 141)
- Problem: there is no compliance status worded as in the model statement, no "Non-accessible content" section (known failures, disproportionate burden, content outside scope such as PDFs and third-party portals), no "Enforcement procedure" section (Equality and Human Rights Commission, Equality Advisory and Support Service, or ECNI in Northern Ireland), no way to report a problem other than one email address, no review date, and no statement of what the organisation is doing to improve. "This statement was prepared on 2 November 2026" is given, but no date of last review. The model statement and the Public Sector Bodies Accessibility Regulations 2018 require these sections where they apply. Even if this housing association is not a public sector body in scope, the model statement is the recognised best practice for this kind of page.
- Who is affected: disabled tenants who need to know which parts of the site will not work, and how to escalate if the organisation does not respond.
- Impact: users cannot plan around known barriers, and do not know their route to complain or enforce.
- Severity: 2
- Fix: rewrite to the GOV.UK model accessibility statement structure: compliance status; non-accessible content split into non-compliance, disproportionate burden and out of scope, each with the WCAG criterion and a date for the fix; preparation and review dates; how the site was tested; feedback and contact details; enforcement procedure; and what the organisation is doing to improve.
- Evidence: section headings on lines 92, 96, 99 and 138 are the only sections.
- Needs user testing: no

### F5. The form demands a disability or diagnosis as a condition of getting an accessible format
- Where: statement.html, lines 109 to 119 (`#disability` select and `#disability-hint`)
- Problem: "Your disability or condition (required)" and "We need this to check that you are eligible for an alternative format." Under the Equality Act 2010, reasonable adjustments such as accessible formats should be given on request. Making them depend on disclosure and an eligibility check is a barrier. A person may need large print, audio or Easy Read without a diagnosis or a disability on the list: older tenants with failing sight, people with low literacy, people with an undiagnosed condition, or a carer or advocate asking on someone's behalf. The single-choice select also cannot record more than one condition and turns a person into a category. This is special category health data under UK GDPR Article 9 and is not needed for the purpose.
- Who is affected: all disabled tenants, particularly people with mental health conditions or learning disabilities who may not want to disclose, people with more than one condition, and people without a formal diagnosis.
- Impact: people are deterred from asking, or are refused, and so do not receive rent, repair or tenancy letters they can read. That can lead to missed payments, missed appointments and tenancy risk.
- Severity: 3
- Fix: delete the disability field and the eligibility wording. Ask only what format the person needs. If the organisation wants to record a support need so that future letters arrive in the right format, make that a separate, optional, clearly explained consent with its own privacy notice, worded as a communication preference rather than a diagnosis.
- Evidence: line 109 label includes "(required)"; line 111 `required`; line 110 hint text.
- Needs user testing: no

### F6. Disability information is shared with the housing officer and kept on the tenancy file, and users are told only after the submit button
- Where: statement.html, line 136, placed after `</form>`
- Problem: "Information you give us about your disability is shared with your housing officer and kept on your tenancy file." This is given after the submit button, so users who complete the form top to bottom, including screen reader users in forms or focus mode and keyboard users tabbing through, reach it only after they have sent the data, or not at all. No lawful basis, retention period, purpose limit or right to object is given, and there is no consent step. Keeping health data on a tenancy file, seen by the person who manages the tenancy, can lead to discrimination or a fear of it.
- Who is affected: disabled tenants, particularly people with mental health conditions or stigmatised conditions; screen reader and keyboard users, who are least likely to see the text before they submit.
- Impact: sensitive data is disclosed without informed consent, and trust is lost. Some people will stop asking for formats they need.
- Severity: 3
- Fix: stop collecting the data (see F5). If any personal data is kept, put a short privacy summary before the first field, and link to a full privacy notice giving purpose, lawful basis, who sees it, how long it is kept, and how to withdraw it. Do not put health data on the tenancy file by default.
- Evidence: line 136 comes after line 135 `</form>`; the footer "Privacy" link (line 142) is generic.
- Needs user testing: no

### F7. There is no field for how to reply, or in what format to send the reply
- Where: statement.html, form lines 101 to 135; line 100 "we will reply within 10 working days"
- Problem: the form collects name, tenancy reference, disability, format and a description, but no email, phone or postal address and no preferred contact method. The organisation promises a reply but gives the user no way to say how they want it, or that the reply itself must be in their format (for example an audio or Braille reply rather than a standard printed letter).
- Who is affected: everyone who uses the form, especially blind, Deaf and learning-disabled tenants whose replies must also be accessible.
- Impact: the reply goes by the default channel in an inaccessible format, or is not delivered at all, and the request fails.
- Severity: 2
- Fix: add a "How should we contact you?" choice (email, phone, text message, letter, BSL video call, Relay UK) with the matching contact field and the right `autocomplete` values (`email`, `tel`, `street-address`). State that the reply will be sent in the format requested.
- Evidence: no contact fields between lines 101 and 135.
- Needs user testing: no

### F8. The web form and an email address are the only ways to ask for an accessible format
- Where: statement.html, lines 99 to 100 and 138 to 139
- Problem: someone who cannot use this website is the person most likely to need another format, yet the only routes are this web form and "Email access@greyfield-homes.example". There is no phone number, no Relay UK or textphone number, no BSL video relay service, no postal address and no in-person option. The statement itself is not offered in another format.
- Who is affected: Deaf BSL users, blind people who do not use computers, people with learning disabilities, older tenants and people without internet access.
- Impact: the people who most need the service cannot reach it.
- Severity: 3
- Fix: add a phone number with opening hours, Relay UK, a BSL video relay service, a postal address and an in-person option. Say that the statement itself is available in other formats.
- Evidence: line 139 is the only contact channel apart from the form.
- Needs user testing: yes. Check with Deaf, blind and digitally excluded tenants that each channel works end to end.

### F9. The format list is short, has no "Other" choice and allows only one format
- Where: statement.html, lines 121 to 129 (`#format` select)
- Problem: the options are "Large print", "Braille", "Audio", "Easy Read", "British Sign Language video", with no "Other", no free text, and only one choice. Missing are, for example, an accessible electronic document (tagged Word or HTML), plain text, coloured paper or a chosen font size, Moon, other spoken languages and Welsh, and a phone call to explain the content. Many people need a combination, for example Easy Read plus large print, or audio plus a BSL summary.
- Who is affected: people with dyslexia, low vision, deafblind people, people with more than one need, and users of other languages.
- Impact: users must choose a format that does not fully meet their need, or give up.
- Severity: 2
- Fix: use a checkbox group in a `<fieldset>` with a `<legend>`, add the missing formats and an "Other (tell us)" option with a text field.
- Evidence: lines 122 to 129.
- Needs user testing: yes. Ask tenants with a range of needs whether the options cover what they actually use.

### F10. A tenancy reference is required, which blocks people who do not know it and people asking on someone's behalf
- Where: statement.html, lines 105 to 107 (`#tenancy`, `required`)
- Problem: the field is required, and the hint points to a document ("This is on your tenancy agreement") that the person may not be able to read, which is the reason they are asking for another format. There is no way to say "I don't know it", and no way for a carer, advocate or family member to ask on the tenant's behalf. Applicants and non-tenants who need information in another format cannot use the form at all.
- Who is affected: blind and partially sighted tenants, people with learning disabilities or memory problems, advocates and carers, and housing applicants.
- Impact: the form cannot be submitted, so the request is never made.
- Severity: 2
- Fix: make the reference optional, with "If you don't know it, leave this blank and give your address". Add "Are you asking for someone else?" with fields for the advocate's details.
- Evidence: line 106 `required`; line 107 hint text.
- Needs user testing: no

### F11. A 10 working day reply is too slow for time-sensitive letters, and there is no urgent route
- Where: statement.html, line 100
- Problem: "we will reply within 10 working days". Housing letters often carry deadlines: arrears, notices seeking possession, repair or gas safety appointments, and rent changes. Ten working days is two weeks for the reply alone, before any format is produced. No faster route is offered, and the page does not say that deadlines will be paused while the format is produced.
- Who is affected: disabled tenants who receive deadline letters they cannot read.
- Impact: missed deadlines with serious consequences, up to losing the tenancy.
- Severity: 3
- Fix: give separate times for acknowledgement and delivery. Add an urgent option ("This letter has a deadline") with a short response time and a phone route. State that the organisation will extend or pause any deadline until the person has the information in a form they can use.
- Evidence: line 100; no urgency field in the form.
- Needs user testing: no

### F12. Required fields are marked inconsistently
- Where: statement.html, labels on lines 102, 105, 109, 121 and 131
- Problem: only the disability label says "(required)"; the other four fields are also `required` but say nothing. Sighted users get the cue for one field only. Screen readers announce "required" for all five, so what is seen and what is heard differ.
- Who is affected: sighted users with cognitive disabilities, and screen magnifier users.
- Impact: users submit, meet errors, and have to find and fix fields they did not know were needed.
- Severity: 1
- Fix: state "All fields are required unless marked optional" before the form, and mark optional fields "(optional)", in line with the GOV.UK pattern. Remove the field-specific "(required)" once the disability field is removed (F5).
- Evidence: line 109 versus lines 102, 105, 121 and 131.
- Needs user testing: no

### F13. Error handling relies only on the browser's built-in validation messages
- Where: statement.html, form lines 101 to 135 (HTML `required`, no `novalidate`, no error summary)
- Problem: there is no error summary, no inline error text and no `aria-invalid`. Native validation bubbles disappear after a short time, ignore page zoom and user styles, are worded by the browser rather than in plain language ("Please fill in this field"), and some screen reader and browser pairs announce them poorly. What the server does if it rejects the form is unknown.
- Who is affected: screen reader users, screen magnifier users, and people with cognitive disabilities or memory problems.
- Impact: users cannot easily find or understand what to fix, and may abandon the request.
- Severity: 1
- Fix: add `novalidate`. Validate on submit, then show an error summary at the top with links to each field (move focus to it), inline error messages linked with `aria-describedby`, `aria-invalid="true"` on invalid fields, and "Error:" in the page `<title>`. Keep the text already entered.
- Evidence: no error markup anywhere in the file.
- Needs user testing: yes. Test with NVDA, JAWS, VoiceOver and TalkBack, and at 400% zoom, when submitting an empty or partly completed form.

### F14. The free-text question gives no guidance on what to write
- Where: statement.html, lines 131 to 132 (`#what` textarea)
- Problem: "What do you need in another format?" has no hint or example. Users do not know whether to give the letter's date, its reference, the page address or a description.
- Who is affected: people with learning disabilities, memory difficulties or low literacy.
- Impact: vague requests, follow-up contact and delays.
- Severity: 1
- Fix: add a hint linked with `aria-describedby`, for example "Tell us which letter, form or page. If you can, give the date or reference number at the top of the letter."
- Evidence: line 132 has no `aria-describedby`.
- Needs user testing: no

Not found: language (`lang="en-GB"`), page title, viewport (no zoom block), landmarks (`header`, `main`, `footer`), heading hierarchy (one h1, h2 sections), explicit label and `for`/`id` associations on all fields, hint association with `aria-describedby` for tenancy and disability, `autocomplete="name"`, native `<button type="submit">`, visible focus style (3px `#0b4f8a` with an offset), colour contrast of body text, links, hints (#3d3d3d), badge (#1c5e2e), input borders (#4a4a4a) and focus ring against white (all above 4.5:1 for text and 3:1 for non-text), links that are underlined by default and named meaningfully, responsive single-column layout, and no media, images or ARIA misuse.
