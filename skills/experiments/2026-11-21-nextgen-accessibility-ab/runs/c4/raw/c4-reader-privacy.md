### F1. Every request carries the reader's full need profile in a header to the origin and a third party
- Where: integration.md bullet 1 (`rp` cookie converted to `X-Reader-Prefs`, forwarded with IP address and user agent to the library origin and to Lumen Edge analytics); settings.html line 287 (cookie `path=/`, so it is attached to every same-site request).
- Problem: All seven settings leave the device on every page, image and API request. The values are not neutral layout choices: `font=dyslexia`, `sr=1` and `level=simplified` each name or strongly imply a disability or need. They travel with IP address and user agent, which makes the record linkable to a person and a device.
- Who is affected: Every reader who changes any setting from its default; most of all those who choose dyslexia font, screen reader mode or simplified text.
- Impact: The library and Lumen Edge receive, and can log, health-related data on every request for as long as the cookie lives (one year). Origin access logs, edge logs and analytics each become a store of special category data. (Legal point ASSUMED, not advice: under UK GDPR this is likely special category data and would need an Article 9 condition and a DPIA; none is described.)
- Severity: 3
- Fix: Do not send preferences in requests at all. Apply size, contrast, motion, font and spacing on the device with CSS custom properties and the `prefers-contrast`, `prefers-reduced-motion` and similar media queries, read only by client-side CSS and never reported. Serve one ordinary page to everyone. Remove the edge conversion to `X-Reader-Prefs`.
- Evidence: integration.md: "The `rp` cookie is read at the edge on every request ... forwards it, with the reader's IP address and user agent, to the library origin and to Lumen Edge analytics." settings.html line 287 sets `rp` with `path=/; max-age=31536000`.
- Needs disabled readers: no

### F2. Analytics turns the settings into labelled disability segments the library can see
- Where: integration.md bullet 4.
- Problem: Lumen Edge infers disability categories from preference combinations and labels them in the library's dashboard ("Accessibility: low vision", "Accessibility: cognitive"). This is the composition leak made explicit: size 200 and high contrast are each harmless, together they are labelled a disability. The inference may also be wrong, attaching a disability label to readers who have none.
- Who is affected: Any reader whose combination matches a segment rule; the readers can neither see nor correct the label.
- Impact: The publisher (the library) learns who needed what, which principle 4 forbids. A third-party processor derives and holds health inferences. (Legal point ASSUMED: inferred health data is likely still special category data; profiling purpose not disclosed to readers.)
- Severity: 3
- Fix: Remove preference values from analytics entirely. If the library needs to know whether the feature is used, count only aggregate on-device toggles with no identifiers, no combinations and no per-reader record, or do not measure it.
- Evidence: integration.md: "Lumen Edge analytics builds 'reader segments' from header values ... 'Accessibility: low vision' (size 200 and high contrast) and 'Accessibility: cognitive' (simplified and dyslexia font)."
- Needs disabled readers: no

### F3. Settings stored against the library card number make the need profile identified and persistent
- Where: settings.html line 286 (`PUT /api/account/reading-prefs`); integration.md bullet 5; settings.html line 244 ("Signed in as reader 20481193").
- Problem: Saving settings is the only path offered, and it always writes them to the account, keyed to the card number. There is no "this device only" option. Cross-device sync is presented as the purpose ("follow you to any device") but is not optional.
- Who is affected: Every signed-in reader who saves any setting.
- Impact: The library holds a durable, identified record that a named cardholder uses a screen reader, a dyslexia font or simplified text. It can be exposed by breach, subject access by others with account access, staff access or onward sharing. (Legal point ASSUMED: special category data needing an Article 9 condition.)
- Severity: 3
- Fix: Default to storing settings on the device only (localStorage, never sent). Offer sync as a separate, opt-in choice; if offered, store it end-to-end encrypted so the server holds an opaque blob it cannot read, not values keyed to the card number.
- Evidence: settings.html line 247: "Your settings are saved to your library account and follow you to any device." Line 286 sends the full form as JSON. integration.md: "The account API stores the same settings against the library card number."
- Needs disabled readers: yes: test whether readers who rely on these settings want sync at all, and whether a device-only default with opt-in sync is workable for them across library and home devices.

### F4. Screen reader mode requires the reader to declare assistive technology use
- Where: settings.html lines 274-276 ("I use a screen reader"); integration.md bullet 3.
- Problem: To get the adapted form, the reader must state that they use a screen reader. The declaration is then sent on every request (`sr=1`), stored on the account and fed to analytics. This is both a forced disclosure and detection of assistive technology by self-report.
- Who is affected: Screen reader users, and anyone who ticks the box to get the decluttered layout.
- Impact: Getting an adaptation is conditioned on disclosing a need, against the rule that personal adaptation is never a declared purpose.
- Severity: 3
- Fix: Describe the effect, not the person (for example "Simplified layout"), apply it on the device, and send nothing. Better still, make the default page work with screen readers so no mode is needed.
- Evidence: settings.html line 275: `<input type="checkbox" name="sr" value="1"> I use a screen reader`.
- Needs disabled readers: yes: test whether screen reader users want this mode at all, and whether the decluttered layout helps or removes content they use.

### F5. Declaring a need gets the reader a lesser book: footnotes and publisher's notes removed
- Where: integration.md bullet 3.
- Problem: When `sr=1`, the edge strips images, sidebars, footnotes and the publisher's notes. The reader who disclosed a need receives less of the work than other readers, and is not told. This penalises disclosure, and an intermediary is making changes that are not necessary for access. (Legal point ASSUMED: the theory applies the CDPA s.31F(5) "not necessary" test to intermediaries; counsel's opinion pending.)
- Who is affected: Readers with `sr=1` set.
- Impact: Content loss tied to a need signal. Footnotes and publisher's notes may carry corrections, attributions or caveats, which the theory treats as items that must survive. Whether this breaks critical items is OPEN until a declaration is checked.
- Severity: 2
- Fix: Never remove content at the edge on the basis of a need flag. Mark decoration correctly in the source (empty alt, `aria-hidden` for true decoration) so every reader gets the same content; any further declutter is a reader-side, reversible view, labelled.
- Evidence: integration.md: "removes images and 'decorative' sidebars, including footnotes and the publisher's notes".
- Needs disabled readers: yes: test whether screen reader users regard the stripped chapter as intact, and whether they want footnotes and notes.

### F6. Simplified text sends the chapter to a third-party model, keyed to a cognitive-need flag, with no marker
- Where: integration.md bullet 2; settings.html lines 270-273.
- Problem: Choosing simplified text routes the reader's request, with its need-revealing header, IP and user agent, to Lumen Edge's rewriting model. Lumen Edge thereby learns which identified device reads which book at a simplified level. The rewritten text carries no marker, so the reader cannot tell it is a machine version.
- Who is affected: Readers who choose simplified text.
- Impact: A third party learns reading history joined to a cognitive-need signal. The unmarked rewrite is Unchecked by default and cannot claim any other label. (Legal point ASSUMED: EU AI Act Article 50 marking may apply where the service reaches EU readers.)
- Severity: 3
- Fix: Do not route simplification by reader. If a simplified version is offered, make it once from the original, check it against a declaration, label it, and serve it as an ordinary separate resource any reader may request with no account or preference signal. Otherwise offer on-device simplification so no text or signal leaves the device.
- Evidence: integration.md: "Lumen Edge sends the book chapter to its own rewriting model ... the rewritten text carries no marker."
- Needs disabled readers: yes: test whether readers who choose simplified text can tell it from the original and whether they want it labelled.

### F7. The preference cookie lives for a year, is script-readable and not marked Secure, on shared library devices
- Where: settings.html line 287.
- Problem: The `rp` cookie is set by script (so not HttpOnly; any script on the site, including third-party, can read it), has no `Secure` attribute, and lasts 365 days. Library services are commonly used on shared public terminals.
- Who is affected: Readers on shared or public devices, and the next person to use the device.
- Impact: A later user of the same device inherits the settings and can infer the earlier reader's needs. The cookie can be sent over plain HTTP if the site is ever reached that way.
- Severity: 2
- Fix: Do not use a cookie for preferences. Keep them in on-device storage that is never transmitted, scoped to the signed-in session on shared devices and cleared on sign-out.
- Evidence: `document.cookie = 'rp=' + ... + '; path=/; max-age=31536000; SameSite=Lax';`
- Needs disabled readers: no

### F8. The panel names conditions in its option labels
- Where: settings.html line 264 ("Dyslexia-friendly font"), line 275 ("I use a screen reader"); the values `dyslexia` and `sr` that are transmitted.
- Problem: Labels and values describe the reader's condition, not the effect. Transmitted values therefore name a condition directly.
- Who is affected: Readers choosing those options.
- Impact: Makes every downstream leak in F1 to F3 a direct disclosure rather than an inference.
- Severity: 1
- Fix: Name effects ("Font: rounded sans", "Layout: minimal") and, once F1 is fixed, keep values on the device.
- Evidence: settings.html lines 264 and 275.
- Needs disabled readers: yes: test which wording readers who use these options find clear.

### F9. Readers are not told who receives their settings
- Where: settings.html line 247 and footer privacy link; integration.md as a whole.
- Problem: The only notice is that settings "follow you to any device". Nothing tells the reader that a third party receives them on every request, profiles them into disability segments, or rewrites and strips books based on them.
- Who is affected: All readers who use the panel.
- Impact: Readers cannot make an informed choice about disclosure. (Legal point ASSUMED: transparency and explicit-consent requirements for special category data are unlikely to be met.)
- Severity: 2
- Fix: Fix F1 to F3 so there is nothing to disclose; until then, state plainly at the point of choice what leaves the device and who receives it.
- Evidence: settings.html line 247; integration.md bullets 1, 4.
- Needs disabled readers: no

### F10. "Settings saved." is shown whether or not the save succeeded
- Where: settings.html lines 286-288.
- Problem: The `fetch` result is not checked; the status message is set unconditionally, and the cookie is written regardless.
- Who is affected: Readers relying on the status message.
- Impact: Silent failure; reader believes settings are stored when they may not be. Minor for privacy.
- Severity: 1
- Fix: Apply settings on the device first and report the actual outcome of any optional sync.
- Evidence: no `res.ok` check before `textContent = 'Settings saved.'`.
- Needs disabled readers: no

Minimal design: all seven settings computed and applied on the device with CSS and local storage; defaults stored locally; no cookie, header, URL parameter, account field or analytics event carrying a preference; one ordinary page served to everyone; sync, if any, opt-in and end-to-end encrypted; any simplified or adapted version made once from the original, labelled, and requestable without any signal of need.

Not found: preferences in URL parameters or query strings; Referer leakage of preferences; client-side detection of assistive technology by script (detection here is by self-declaration, F4); any consent, DPIA or retention period for preference data; any device-only storage option; any way for readers to see or delete their analytics segment.
