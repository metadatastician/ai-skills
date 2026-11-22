### F12. Generic region landmarks for a single image and a price add landmark noise, and "gallery" misdescribes one image
- Where: product.html, `<div class="gallery" role="region" aria-label="Product image gallery">` (line 101) and `<div class="price" role="region" aria-label="Price">` (line 105)
- Problem: Two small fragments are promoted to named `region` landmarks. The "gallery" contains one `<img>` and no controls, so "Product image gallery" suggests more images or a carousel that does not exist. With the banner, main and breadcrumb navigation, a short page now has five landmarks, three of them inside `main`.
- Who is affected: Screen-reader users who navigate by landmark (NVDA/JAWS D or R keys, the VoiceOver rotor)
- Impact: The landmark list fills with low-value entries. Users look for further images or gallery controls that are not there, and they hear "Product image gallery region" and "Price region" on entry and exit when reading through.
- Severity: 1 minor
- Fix: Remove `role="region"` and the `aria-label`s from both divs. If more images are added later, follow the APG carousel pattern then. Let the price be found by reading order, or give it a visible heading if it needs to be navigable.
- Evidence: Lines 101-103 contain a single `<img>`; lines 105-108
- Needs user testing: no

### F13. Fixed image width in rem can force horizontal scrolling with larger default text
- Where: product.html, CSS `.gallery img { width: 18rem; height: auto; }` (line 88)
- Problem: The width is fixed at 18rem with no `max-width: 100%`. At a 320 CSS px viewport with the default 16px font, 18rem (288px) plus 2rem body padding just fits. Users who set a larger default font size (for example 20px or 24px) get an image 360-432px wide in a 320px viewport.
- Who is affected: Low-vision users who raise the browser's default text size and zoom, and mobile users with large-text settings
- Impact: The page scrolls in two directions, and the image is cut off at the edge (WCAG 1.4.10 Reflow; 1.4.4 Resize text).
- Severity: 1 minor
- Fix: `.gallery img { width: 18rem; max-width: 100%; height: auto; }`
- Evidence: Line 88; body padding `1rem` (line 81)
- Needs user testing: yes, check at 320 CSS px width with the default font size set to 20px and 24px, and at 400% zoom

### F14. Line length can run well past 80 characters
- Where: product.html, CSS `body { ... max-width: 60rem; ... }` (line 81)
- Problem: At 16px, 60rem is 960px. In Helvetica or Arial that is about 110-120 characters per line for the Description and Safety paragraphs. WCAG 1.4.8 Visual Presentation (AAA) asks for no more than 80.
- Who is affected: People with dyslexia, low vision or attention difficulties, and screen-magnifier users who must pan along long lines
- Impact: It is harder to track from the end of one line to the start of the next, which matters most in the Safety text.
- Severity: 1 minor
- Fix: Limit text measure, for example `main p { max-width: 70ch; }`, while keeping the 60rem page width for layout.
- Evidence: Line 81
- Needs user testing: no

### F15. Unit abbreviations in the visible name and facts are read ambiguously
- Where: product.html, `<title>` and `h1` "Stellar 1.7L Rapid Boil Kettle" (lines 6, 99); hidden block "1.4 kg" (line 122)
- Problem: "1.7L" is written with no space and no expansion. Screen readers commonly say "one point seven L" or "one point seven el", and braille shows "1.7L". The Description spells out "1.7 litres", so the same quantity appears in two forms.
- Who is affected: Screen-reader and braille users; people with cognitive or learning disabilities who are unfamiliar with unit abbreviations (WCAG 3.1.4 Abbreviations, AAA)
- Impact: The capacity in the product name is unclear when heard, and it is not obviously the same as "1.7 litres" further down.
- Severity: 1 minor
- Fix: Write "1.7 litre" in the visible h1 and title, or use `<abbr title="litres">L</abbr>` with a space ("1.7 L") and give the expansion once in visible text.
- Evidence: Lines 6 and 99 `1.7L`; line 116 `1.7 litres`
- Needs user testing: yes, check how NVDA, JAWS, VoiceOver and TalkBack read "1.7L" with default verbosity
