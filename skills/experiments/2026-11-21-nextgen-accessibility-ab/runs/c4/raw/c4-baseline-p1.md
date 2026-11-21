### F1. Reading settings are sent to third-party analytics and turned into disability profiles
- Where: integration.md, bullets 1 and 4; settings.html script line `document.cookie = 'rp=' + ...`
- Problem: The `rp` cookie is converted into `X-Reader-Prefs: size=200;contrast=high;motion=reduce;font=dyslexia;spacing=2;level=simplified;sr=1` and forwarded "with the reader's IP address and user agent, to the library origin and to Lumen Edge analytics". Analytics then builds "reader segments" such as "Accessibility: low vision" and "Accessibility: cognitive", which the library can view. `sr=1` directly says that the person uses a screen reader. The panel says only "Your settings are saved to your library account and follow you to any device". It does not mention a third party, analytics, profiling or the IP address.
- Who is affected: Everyone who changes a setting, and most of all screen reader users, people with low vision, and people with dyslexia or cognitive disabilities.
- Impact: Settings chosen to make reading possible are used to infer a disability, which is health data (special category data under UK GDPR, Article 9). The inference is tied to IP address and user agent, so the person can be identified, and it is shared with a vendor without notice or a lawful basis the user can see. Disabled readers have to give up privacy to get access. Many will refuse to use the settings once they find out, and lose access as a result. A library reading service should not be learning who among its users is disabled.
- Severity: 3
- Fix: Apply the settings on the client, or at the origin, and do not forward them to any third party. Strip `X-Reader-Prefs` before analytics, and contractually ban segmenting or storing it. Remove the "Accessibility: …" segments and delete any segments already built. If any processing remains, run a DPIA, state it plainly on the panel and in the privacy notice, and get explicit consent that is separate from using the settings. Do not send IP address or user agent with the settings.
- Evidence: integration.md: "forwards it, with the reader's IP address and user agent, to … Lumen Edge analytics" and "builds 'reader segments' … 'Accessibility: low vision' … 'Accessibility: cognitive'". The panel text has no disclosure.
- Needs user testing: no. This is a design and legal fault. Confirm with the DPO and the vendor contract.

### F2. "Screen reader mode" silently removes images, footnotes and publisher's notes
- Where: settings.html, fieldset "Screen reader mode", `<input type="checkbox" name="sr" value="1"> I use a screen reader`; integration.md bullet 3
- Problem: When `sr=1`, Lumen Edge "removes images and 'decorative' sidebars, including footnotes and the publisher's notes, to 'reduce clutter for screen reader users'". The label only asks "I use a screen reader" and says nothing about content being removed. Footnotes and publisher's notes are content, not decoration. Images can carry information such as diagrams, maps and illustrations in children's books, and removing them also removes their alt text.
- Who is affected: Blind and low-vision screen reader users, and anyone else who ticks the box (for example a sighted dyslexic person who uses text-to-speech).
- Impact: These readers get a different and incomplete book from everyone else, with no indication of what was taken out. Students cannot follow citations, and readers miss corrections, translators' notes and figure content. This is unequal access presented as a convenience. It fails 1.1.1 because informative images lose their alternative, and 1.3.1 because structure and relationships are lost. It also reflects the discredited "separate screen reader version" pattern: screen reader users can already skip clutter with headings and landmarks, given good markup.
- Severity: 3
- Fix: Remove the content-stripping behaviour. Mark up decorative images with `alt=""`, keep footnotes as linked `<aside>`/`role="doc-footnote"` or `doc-endnote` content, and use landmarks so users can skip asides themselves. If a "simplified layout" option is kept, it must not depend on disclosing assistive technology. It must say exactly what it hides, collapse content rather than delete it, and offer a one-click way back to the full content on the reading page.
- Evidence: integration.md: "removes images and 'decorative' sidebars, including footnotes and the publisher's notes". settings.html label: "I use a screen reader".
- Needs user testing: yes. Test with JAWS, NVDA and VoiceOver users reading a chapter that has footnotes and figures, comparing the full content with collapsible asides against the current stripped mode.

### F3. "Simplified text" is AI-rewritten without any marker, accuracy safeguard or easy route back to the original
- Where: settings.html, fieldset "Reading level", `Simplified text (rewritten for easier reading)`; integration.md bullet 2
- Problem: When `level=simplified`, Lumen Edge "sends the book chapter to its own rewriting model and returns the rewritten chapter. The original publisher is not told, and the rewritten text carries no marker." The label does not say that a machine model does the rewriting, that the text may be inaccurate or leave things out, or that the change applies to every book across all devices.
- Who is affected: People with cognitive or learning disabilities, people with low literacy, and people reading in a second language. These are the readers least able to spot a distortion.
- Impact: Readers may take machine output for the author's words. Facts, meaning, tone and plot can change without anyone noticing. Readers may then quote it, study from it or be examined on it. With no marker on the page, a reader who forgot the setting, or a person sharing the device, cannot tell what they are reading. This misinforms readers and breaks the expectation that a library lends the published work. Best practice under 3.1.5 (AAA) is a supplementary version shown alongside the original, not a silent replacement.
- Severity: 3
- Fix: Do not replace the text silently. Show a persistent, programmatically exposed banner on every rewritten chapter, such as "Simplified by a computer program. It may contain mistakes. [Show original]". Offer an original/simplified toggle per chapter or per paragraph. Change the settings label to say that it is machine-rewritten, may not be accurate, and that the original is always one click away. Get the publisher's agreement. Prefer human-written or human-checked Easy Read editions where they exist.
- Evidence: integration.md: "the rewritten text carries no marker". settings.html label: "Simplified text (rewritten for easier reading)".
- Needs user testing: yes. Test with readers with learning disabilities whether they notice and understand the banner, and whether the rewritten text keeps the meaning, by checking passages against the original.

### F4. "Settings saved." is shown even when saving fails
- Where: settings.html script, lines `await fetch(...)` and `document.getElementById('status').textContent = 'Settings saved.';`
- Problem: The response is never checked (no `res.ok` test) and there is no `try/catch`. A 4xx or 5xx response still shows "Settings saved.". A network error rejects the promise, so nothing is announced and the button gives no feedback. Nothing marks the save as in progress, and a second save puts identical text into `role="status"`, which many screen readers do not announce again.
- Who is affected: Every user, and especially screen reader users, who rely on the status announcement, and people with cognitive disabilities, who trust the confirmation.
- Impact: Users are told their settings were saved when they were not. They then open a book without the large text, high contrast or reduced motion they need, and have no idea why. This is silent failure (3.3.1, 4.1.3).
- Severity: 3
- Fix: Wrap the save in `try { const r = await fetch(...); if (!r.ok) throw ... }`. On failure, write a clear error to the status region, for example "Your settings were not saved. Check your connection and try again.", or use `role="alert"`. Clear the region before writing so repeated messages are announced again. Disable the button with a visible and announced "Saving…" state while the request runs. Set the cookie only after the server confirms the save.
- Evidence: Script lines 156–158 as quoted. No error handling.
- Needs user testing: yes. Test with NVDA, JAWS and VoiceOver that success, failure and a repeated save are each announced.

### F5. The panel does not show the reader's saved settings, so saving can wipe them
- Where: settings.html form. Defaults are hard-coded with `checked` (Standard, Standard, Default, Standard, Original text) and the script never loads the saved preferences.
- Problem: The markup always shows "Standard" text size, "Original text" and so on, with "I use a screen reader" unticked, whatever the reader saved before. Nothing reads `/api/account/reading-prefs` or the `rp` cookie to fill in the form. A returning reader who changes only one setting and presses "Save settings" sends a PUT that resets everything else to the defaults.
- Who is affected: Returning readers who rely on several settings together, such as low-vision users with extra large text and high contrast, and screen reader users.
- Impact: The panel misreports the current state (4.1.2: the state shown is not the true state). One change silently undoes the others, so a low-vision reader may suddenly lose large text and high contrast and then struggle to find the panel again.
- Severity: 3 (if the page is not filled in on the server)
- Fix: Render the saved values on the server, or fetch them before the form becomes interactive and set `checked` to match. Save each setting as it changes, or send a complete and accurate state.
- Evidence: The static `checked` attributes and the absence of any load code in the script.
- Needs user testing: yes. Confirm whether the server fills the form in. Test with a returning account that has non-default settings.

### F6. Unticking a checkbox may not turn the setting off
- Where: settings.html script, `Object.fromEntries(new FormData(e.target))`, together with the checkboxes `motion` and `sr`
- Problem: Unticked checkboxes are left out of `FormData`, so turning off "Reduce animation" or "I use a screen reader" sends no `motion` or `sr` key at all. Whether the account API and Lumen Edge then treat the setting as off, or keep the old value, is undefined.
- Who is affected: Users who want to turn off screen reader mode, which strips content (F2), or reduced motion.
- Impact: A reader may be unable to leave a mode that removes footnotes and images, with no feedback that the change did not take effect.
- Severity: 2
- Fix: Send explicit values, for example `motion: form.motion.checked ? 'reduce' : 'none'` and `sr: form.sr.checked ? '1' : '0'`, or use radio pairs. Define and test "off" semantics on both the API and the edge.
- Evidence: Standard `FormData` behaviour for unchecked checkboxes. The script has no handling for it.
- Needs user testing: yes. Turn each checkbox on, save, turn it off, save, and check the chapter output and the stored account values.

### F7. A year-long, unprotected cookie exposes and reapplies one reader's settings on shared devices
- Where: settings.html script, `'rp=' + ... + '; path=/; max-age=31536000; SameSite=Lax'`
- Problem: The cookie lasts one year, has no `Secure` flag, and is not cleared at sign-out. It is set from script, so it cannot be `HttpOnly`. On library public PCs and shared family devices it carries the previous reader's disability-related settings into the next session, and they are forwarded to analytics (F1) for the wrong person. The claim that settings "follow you to any device" also depends on this cookie, which exists only on the device where the reader saved. How a second device gets it is not explained.
- Who is affected: Readers using shared or public computers, and the next person to use that computer.
- Impact: The settings disclose one reader's needs to the next user. The next user gets someone else's modes, possibly stripped or rewritten text, without being told. The panel's promise about other devices may not hold, which leaves readers puzzled when settings do not apply.
- Severity: 2
- Fix: Set the preference from the server after a confirmed save, as a session cookie with `Secure; HttpOnly`, and clear it at sign-out. Tie preferences to the authenticated session, not to a long-lived device cookie. Explain in plain words where settings are stored.
- Evidence: Cookie attributes in the script. integration.md: "The `rp` cookie is read at the edge on every request."
- Needs user testing: yes. Test sign-out and sign-in by a different user on the same browser.

### F8. The library card number is shown and read aloud on screen
- Where: settings.html header, `Signed in as reader 20481193`
- Problem: The full card number is the visible account identifier. integration.md says the settings are stored "against the library card number".
- Who is affected: Screen reader users in public spaces, whose speech output can be overheard, and screen magnifier users, whose enlarged view is easy to read over the shoulder.
- Impact: Assistive technology users are more exposed to having their account identifier disclosed in public. Speech output also reads the number out as a long number, which is hard to understand and adds noise.
- Severity: 1
- Fix: Show the reader's chosen name or a masked number such as "card ending 1193".
- Evidence: Header markup line 114.
- Needs user testing: no

### F9. The settings ignore the reader's operating system preferences
- Where: settings.html form defaults ("Reduce animation" unticked, contrast "Standard")
- Problem: The defaults do not take account of `prefers-reduced-motion`, `prefers-contrast` or `forced-colors`. A new reader who has already asked their device to reduce motion gets animation until they find this panel.
- Who is affected: People with vestibular disorders, migraine or epilepsy, and people with low vision.
- Impact: Animation they have already switched off at system level can make them ill (2.3.3, AAA). They also have to repeat a setting they already made.
- Severity: 2
- Fix: Honour `prefers-reduced-motion` and `prefers-contrast` in CSS by default, and pre-select the matching options in the panel when nothing has been saved yet.
- Evidence: There are no media queries in the stylesheet, and the defaults are static.
- Needs user testing: no

### F10. Too few presentation choices for low vision and dyslexia, and the option labels are vague
- Where: settings.html fieldsets "Text size", "Contrast", "Line spacing"
- Problem: Text size tops out at "Extra large" (200), which is only the AA floor in 1.4.4. Many low-vision readers need 300–400%. Contrast offers only "Standard" and "High contrast", with no dark mode, no reader-chosen colours and no low-glare option, as 1.4.8 AAA expects. There are no letter, word or paragraph spacing controls, as in 1.4.12. "Standard", "Large", "Extra large" and "Wide" do not say how big or how wide.
- Who is affected: Low-vision readers, people with photophobia or Irlen syndrome, and dyslexic readers.
- Impact: The panel does not meet the needs of the readers it is aimed at, so they fall back on browser zoom or overlays, with mixed results.
- Severity: 1
- Fix: Add larger sizes up to at least 400%, with a live preview. Offer dark and sepia themes and a choice of colours. Add letter, word and paragraph spacing. Show a sample line under each option so the effect is visible.
- Evidence: The options listed in the markup.
- Needs user testing: yes. Test the range and the preview with low-vision and dyslexic readers.

### F11. No preview: settings do not apply to the panel itself
- Where: settings.html. Nothing applies the chosen settings to the current page after saving.
- Problem: A reader who chooses extra large text or high contrast sees no change. They cannot tell whether the choice helps until they open a book, and the panel stays hard to use for exactly the people who need the settings.
- Who is affected: Low-vision and cognitively disabled readers.
- Impact: Trial and error across pages, which adds to memory load (COGA). Readers may give up.
- Severity: 1
- Fix: Apply the settings to the page immediately, for example with classes or CSS custom properties on `<html>`, and include a sample paragraph.
- Evidence: The script only saves the settings and sets the status text.
- Needs user testing: no

### F12. The edge rewriting is not disclosed in the accessibility statement or on the panel
- Where: settings.html footer link `Accessibility`; integration.md (Lumen Edge "adapts the page before it reaches the reader")
- Problem: A third-party edge service changes content (stripping, rewriting) based on disability-related settings. The panel does not mention it, and nothing shows it in the accessibility statement. For a UK public library, the model accessibility statement under the Public Sector Bodies Accessibility Regulations 2018 must describe third-party content and any non-accessible or altered content. Vendor claims of "reducing clutter" are like accessibility-overlay claims and should not be repeated without evidence.
- Who is affected: All disabled readers deciding whether to use the service and its settings.
- Impact: Readers cannot make an informed choice and cannot find out why their books differ.
- Severity: 2
- Fix: Describe Lumen Edge's processing, its limits and the opt-outs in the accessibility statement and the privacy notice. Link to them from the panel, next to the "Screen reader mode" and "Reading level" options.
- Evidence: integration.md describes the processing. The panel has no matching text.
- Needs user testing: no

Not found: language of page (`lang="en-GB"`); page title; heading structure and landmarks (`header`, `main`, `footer`); grouping with `fieldset`/`legend` and explicit wrapped labels for every control (accessible names correct); native radio and checkbox controls with no ARIA misuse; keyboard operability and a visible `:focus-visible` indicator (#0b4f8a, 3px, contrast about 8:1 on white); text and link contrast (#1a1a1a and #0b4f8a on #fff); non-text contrast of borders; target size (block labels make the whole row clickable); viewport and reflow (max-width in rem, no fixed widths); presence of a live status region (`role="status"` present before update).
