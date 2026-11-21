### F13. No way to reset settings or delete the stored record of them
- Where: settings.html form (only one button, `<button type="submit">Save settings</button>`); integration.md bullet 5, "The account API stores the same settings against the library card number"
- Problem: There is no "Reset to standard settings" control and no way to delete the stored preferences. The panel does not say how long the settings are kept. Because the form does not load saved values (F5), the reader cannot even see what is stored.
- Who is affected: Readers who switched on a mode that changes content (screen reader mode, simplified text) and want to get out of it. Readers with cognitive disabilities who have lost track of which options they changed. Anyone who wants their disability-related settings removed from the library and vendor records.
- Impact: Getting back to a known good state means re-ticking every option by hand, from memory. A record that implies a disability stays against the card number with no visible retention period and no self-service way to erase it. This adds memory load (COGA) and denies the reader control over sensitive data.
- Severity: 2
- Fix: Add a "Reset all reading settings" button that confirms before acting and announces the result in the status region. Add "Delete my saved reading settings", which removes them from the account API, the `rp` cookie and the vendor's systems. State the retention period next to the settings.
- Evidence: There is a single submit button and no reset or delete code. integration.md describes storage against the card number.
- Needs user testing: yes. Test whether readers with cognitive disabilities can return to the standard settings without help.

### F14. Edge adaptation may also change the settings page, the accessibility statement and the privacy notice, and may be cached for other readers
- Where: integration.md bullet 1 (the cookie "is read at the edge on every request"), bullets 2 and 3; settings.html `<footer>` links `Accessibility` and `Privacy`
- Problem: Nothing limits the stripping of "decorative sidebars" (`sr=1`) or the rewriting (`level=simplified`) to book chapters. On "every request", the edge could strip the header and footer, which hold the account status and the Accessibility and Privacy links, or could rewrite the privacy notice and accessibility statement into simplified text. Nothing says whether pages adapted at the edge are cached by user or by header (`Vary`). If they are not, one reader's stripped or rewritten page could be served to another reader.
- Who is affected: Screen reader users and readers using simplified text. These are the readers who most need accurate accessibility and privacy information. Any reader could receive a cached version that was adapted for someone else.
- Impact: The people affected by the processing could be unable to reach, or could receive altered versions of, the documents that explain it. Readers who chose neither mode could receive a degraded page with no way of knowing why.
- Severity: 2 (pending confirmation of scope and caching)
- Fix: Limit any adaptation to book content by an explicit path allowlist. Never adapt service pages, the accessibility statement, the privacy notice, or sign-in and account pages. Personalised responses should be uncacheable, or keyed on the preference values, with `Vary` set.
- Evidence: integration.md says the edge processes "every request" and sets no scope limit. The footer links are the panel's only route to the statement and the notice.
- Needs user testing: yes. Turn on `sr=1` and `level=simplified`, load the settings page, /accessibility and /privacy, and compare them with the unadapted versions. Test caching with two accounts.

### F15. Settings apply only when signed in and only through the cookie, with no feedback when they do not apply
- Where: Case description ("Signed-in readers can set…"); settings.html header "Signed in as reader…"; integration.md bullet 1 (adaptation keyed on the `rp` cookie)
- Problem: A reader gets their text size, contrast and motion settings only after signing in, and only on a browser that holds the `rp` cookie. The sign-in page, catalogue browsing while signed out, and any browser that blocks or clears cookies get the defaults. Cookies are often cleared on library public PCs and in private browsing. Nothing tells the reader that their saved settings are not being applied.
- Who is affected: Low-vision readers, readers sensitive to motion, and dyslexic readers, especially on public or shared computers.
- Impact: Readers must get through the sign-in form and the navigation without the adjustments they need. Settings that are "saved to your library account" silently fail to apply, which contradicts the panel text.
- Severity: 2
- Fix: Apply settings from the account at sign-in, server side, not only from a device cookie. Honour OS preferences (F9) before sign-in. Offer a few session-only presentation controls, such as text size and contrast, on public pages including sign-in. When the saved settings are not active, say so, with a link to apply them.
- Evidence: Adaptation depends only on the cookie, which only the panel's script sets. The case limits the settings to signed-in readers.
- Needs user testing: yes. Test sign-in at 200% text with high contrast needed, on a browser with cookies cleared.

### F16. Rewritten and stripped chapters break bookmarks, highlights, page references and note markers
- Where: integration.md bullets 2 and 3
- Problem: Replacing a chapter with model output, or removing footnotes and notes, changes the text that bookmarks, highlights, reading position, search and page references depend on. When the notes are removed, the in-text note markers (superscript numbers or links) are probably left pointing at nothing. Nothing says how these features behave across versions or across devices where the setting differs.
- Who is affected: Students and readers with cognitive disabilities who rely on bookmarks and highlights to manage memory load. Screen reader users who follow note links.
- Impact: Saved places land in the wrong spot or are lost, quotes and page numbers do not match a classmate's copy or a citation, and note links go nowhere (2.4.4) or are announced with no target. Readers cannot tell whether the fault lies in the book, the service or their settings.
- Severity: 2
- Fix: Anchor bookmarks and highlights to the original text and keep the original's page and location markers in any alternative view. Never leave orphaned note markers. Keep notes as described in F2. Until locations can be mapped between versions, warn readers before they switch.
- Evidence: integration.md describes whole-chapter replacement and removal of footnotes with no handling of locations or references.
- Needs user testing: yes. Bookmark and highlight a chapter, switch modes and devices, and test note links with NVDA and VoiceOver.

### F17. The "·" separators may be read aloud as symbols
- Where: settings.html header `Ashby Libraries e-books</a> · Signed in as reader 20481193` and footer `Accessibility</a> · <a href="/privacy">`
- Problem: The middle dot is text, so some screen readers at some punctuation settings announce it as "middle dot" or "dot".
- Who is affected: Screen reader users.
- Impact: It adds a little noise to every page.
- Severity: 0
- Fix: Put the links in a list and draw the separators with CSS, or wrap them in `<span aria-hidden="true">`.
- Evidence: The literal "·" characters in the header and footer.
- Needs user testing: no

Not found: no further problems in the label wording for motion and font, the placement of the status region next to the submit button, focus retention after submitting, or the `lang`, heading and landmark structure already checked in the first pass.
