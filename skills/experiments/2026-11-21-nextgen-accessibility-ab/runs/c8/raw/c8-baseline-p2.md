### F15. Each request is one-off; there is no way to set a standing communication preference
- Where: statement.html, form lines 109 to 143; line 108 "If you need a letter, form or page in a different format, fill in this form"
- Problem: the form asks the tenant to name one item ("What do you need in another format?") each time. Nothing lets them say "send me all future letters in this format". So every new rent statement, repair appointment or notice arrives first in standard print, and the tenant must notice it, get someone to read it, and then ask again.
- Who is affected: blind and partially sighted tenants, Braille and audio users, people with learning disabilities who need Easy Read, and Deaf BSL users.
- Impact: a constant, repeated barrier. Every letter is late in a usable form, so the risk of missed deadlines in F11 comes back with every letter. People must keep relying on others to read their private mail.
- Severity: 2
- Fix: add a clearly explained, optional choice: "Send all future letters and documents to me in this format". Record it as a communication preference on the tenant's contact record, not as a diagnosis, and use it for every outgoing letter. Say how to change or remove it.
- Evidence: the form has a single free-text item field (line 140) and no preference or "all future letters" option anywhere.
- Needs user testing: no

### F16. No review or confirmation step before sensitive data is sent
- Where: statement.html, `<button type="submit">Send request</button>` (line 142); whole form
- Problem: a single press of "Send request" submits health information that, by the page's own account, goes to the housing officer and the tenancy file. There is no "Check your answers" page, no way to review or correct what was entered, and nothing on the page says what happens after submission (confirmation message, reference number, email receipt). The page claims Level AAA, and 3.3.6 Error Prevention (All) needs submissions to be reversible, checked or confirmed. Even at AA, best practice for sensitive data is a review step.
- Who is affected: people with cognitive disabilities, memory difficulties or tremor, screen reader users who cannot easily scan the whole form at once, and anyone who picked the wrong option by mistake.
- Impact: wrong or unintended disclosures cannot be caught. Users do not know whether the request was received, so they ask again or give up.
- Severity: 2
- Fix: add a "Check your answers" page with "Change" links for each answer, then a confirmation page with a reference number, the expected delivery date and the contact route, sent also in the format the person asked for.
- Evidence: one submit button posting straight to `/accessibility/request`; no confirmation or next-steps text on the page.
- Needs user testing: yes. Test the full submit journey with screen reader users and people with learning disabilities, checking that they can review, correct and know the request was received.

### F17. Unexplained technical terms and an abbreviation before its expansion
- Where: statement.html, badge on line 98 and paragraph on line 101
- Problem: the badge "WCAG 2.3 AAA verified" is the first thing read after the h1. "WCAG" is expanded only in the next paragraph, and "Level AAA", "conformant" and "automated accessibility audits" are never explained. The audience is tenants, not web professionals. Since the page claims AAA, 3.1.3 Unusual Words, 3.1.4 Abbreviations and 3.1.5 Reading Level also apply to it.
- Who is affected: people with learning disabilities, low literacy or cognitive impairment, and screen reader users who hear "W C A G 2.3 triple A verified" with no context.
- Impact: users cannot tell what the statement means for them, which is the whole purpose of the page.
- Severity: 1
- Fix: open with plain-language sentences, for example "Most of this website should work with screen readers, keyboard only and zoom. These parts do not work well yet: ...". Expand "Web Content Accessibility Guidelines (WCAG)" on first use and explain what the level means in one sentence. Offer an Easy Read version of the statement.
- Evidence: line 98 badge text comes before the expansion on line 101; no definitions on the page.
- Needs user testing: yes. Check understanding of the statement with tenants with learning disabilities.

### F18. Line length is wider than the AAA limit the page claims to meet
- Where: statement.html, style line 84 `body { ... max-width: 46rem; ... }`
- Problem: 46rem is about 736px at the default size. Arial at 16px averages about half an em per character, so a full line runs to about 85 to 90 characters after padding. WCAG 1.4.8 Visual Presentation (AAA) asks for no more than 80 characters per line. This is a minor comfort issue in itself, but it is one of several facts showing the "fully conformant at Level AAA" claim is untrue.
- Who is affected: people with dyslexia, low vision and attention difficulties, who lose their place on long lines.
- Impact: slower, more tiring reading and losing the start of the next line.
- Severity: 1
- Fix: set `max-width: 70ch` (or about 38rem) on the text container, and keep the AAA claim out of the statement until each criterion has been tested.
- Evidence: line 84 `max-width: 46rem`.
- Needs user testing: no

### F19. The statement does not say what it covers
- Where: statement.html, `<main>` lines 96 to 149
- Problem: there is no scope sentence, such as "This statement applies to the Greyfield Homes tenant website at [address], including the tenant portal, online rent payments and repair reporting". "Every page" and "any page" (lines 101 and 102) are not defined, and third-party parts (payment provider, repairs booking system, PDF letters, any mobile app) are not mentioned.
- Who is affected: disabled tenants deciding whether to use the site for payments or repairs, and advocates helping them.
- Impact: users cannot tell whether the claims apply to the parts they actually need, and meet barriers in parts the statement silently leaves out.
- Severity: 1
- Fix: add a first paragraph that names the website, the services and subdomains in scope and those excluded, as in the model accessibility statement.
- Evidence: no scope text anywhere in the page.
- Needs user testing: no

Not found: no new problems with keyboard operability, target size of the button (about 38px tall), hint and select order for the disability field, contrast of the `.hint` text, the generic but accurate footer "Privacy" link, or absence of time limits and moving content.
