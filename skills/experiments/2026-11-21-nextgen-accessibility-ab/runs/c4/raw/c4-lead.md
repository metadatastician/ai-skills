### F1. Every request carries the reader's settings to the origin and to Lumen Edge analytics, which labels readers by disability
- Where: settings.html submit handler (the `rp` cookie); integration.md bullets 1, 2 and 4.
- Problem: The script writes every setting into the `rp` cookie with `path=/`, so the browser sends it with every same-site request. Lumen Edge reads it at the edge, turns it into `X-Reader-Prefs`, and forwards it with the reader's IP address and user agent to the library origin and to Lumen Edge analytics. Analytics combines values into named segments, "Accessibility: low vision" (size 200 and high contrast) and "Accessibility: cognitive" (simplified and dyslexia font), and the library can see them. This is the composition leak, and here the vendor builds the profile on purpose. Because the rewrite runs per request, Lumen Edge also learns which device reads which book with a simplified-text flag set. This breaks principle 4 (the publisher never learns who needed what) and the rule that no request, header or analytics event may reveal a reader's needs. A segment can also be wrong: it can give a disability label to a reader who has none, and the material gives readers no way to see or correct it.
- Who is affected: Every reader who changes a setting from its default. Readers who choose extra-large text with high contrast, a dyslexia font, simplified text or screen reader mode are the most exposed.
- Impact: The origin's logs, the edge's logs and the analytics all become stores of need data that can be linked to a person, for as long as the cookie lasts (one year). Under UK GDPR this is likely special category data, which would need an Article 9 condition and a DPIA. Neither is described, and the privacy page is not supplied (legal point: ASSUMED). Whether this disclosure puts readers off using the settings has not been tested.
- Severity: 3
- Fix: Apply size, contrast, motion, font and spacing on the device with CSS and local state, and send them nowhere. Remove the conversion to `X-Reader-Prefs`. Remove the reader segments and every preference value from analytics. If the library needs usage figures, count only aggregate toggles, with no identifier, no combinations and no record per reader, or do not measure at all. Serve the same page to everyone.
- Evidence: settings.html: `document.cookie = 'rp=' + encodeURIComponent(JSON.stringify(data)) + '; path=/; max-age=31536000; SameSite=Lax';`. integration.md: "forwards it, with the reader's IP address and user agent, to the library origin and to Lumen Edge analytics"; "builds 'reader segments' from header values ... 'Accessibility: low vision' (size 200 and high contrast) and 'Accessibility: cognitive' (simplified and dyslexia font)".
- Needs disabled readers: no, to stop the disclosure. Yes for any replacement that still syncs settings: test it with readers who use these settings.

### F2. Settings are always stored on the account against the library card number, with no option to keep them on the device
- Where: settings.html intro text and its `PUT /api/account/reading-prefs`; integration.md bullet 5; settings.html header.
- Problem: Saving is the only route the panel offers, and it always writes the full set of settings to the account. The account API keys them to the library card number. Cross-device sync is presented as the purpose of saving, but there is no option to keep settings on this device only. The page header also shows "Signed in as reader 20481193" on screen, and read-aloud would speak it. The material does not show whether this number is the card number.
- Who is affected: Every signed-in reader who saves a setting.
- Impact: The library holds a lasting, identified record that a particular cardholder uses a screen reader mode, a dyslexia font or simplified text, which can be exposed by a breach, by staff access or by onward sharing (legal point: special category data, ASSUMED).
- Severity: 3
- Fix: Store settings on the device by default and never transmit them. Offer sync as a separate opt-in. If sync is offered, encrypt the settings end to end so the server holds a blob it cannot read, not values keyed to the card number. Show the reader's name, or nothing, instead of the number.
- Evidence: settings.html: "Your settings are saved to your library account and follow you to any device."; `fetch('/api/account/reading-prefs', { method: 'PUT', ... body: JSON.stringify(data) })`; "Signed in as reader 20481193". integration.md: "The account API stores the same settings against the library card number."
- Needs disabled readers: yes. Test whether readers who rely on these settings want sync at all, and whether a device-only default with opt-in sync works for them across library and home devices.

### F3. "Simplified text" is an unlabelled, unchecked machine rewrite served as the book, with no route to a check
- Where: integration.md bullet 2; settings.html Reading level fieldset.
- Problem: When `level=simplified` is set, Lumen Edge's own model rewrites the chapter, the result carries no marker, and the publisher is not told. No must-survive declaration exists, so no check can be made against one, and there is no Withheld path. Under the theory the version is at most Unchecked, but it carries no label at all. Nothing records who made it, from which edition or when (principle 3). Telling the reader "rewritten for easier reading" does not say that a machine made the rewrite or that nobody checks it. It also asserts an outcome, easier reading, that nothing in the material measures.
- Who is affected: Every reader who chooses Simplified text, whatever their reason: for example readers with cognitive or learning disabilities or aphasia, readers with low literacy, and readers in a second language.
- Impact: On a rewritten page, nothing tells the reader that the words are not the author's. If the model changes, merges or misattributes a quote, a number, a hedge or an attribution, the reader takes it as the book's own text. Whether AI adaptations break declared items at material rates is OPEN, so how often this happens is not established. The risk is structural and follows directly from the integration text. EU AI Act Article 50 marking applies from 2 August 2026. Whether it applies to this UK service and its vendor is ASSUMED, as is the theory's application of CDPA s.31F(5) to intermediaries; counsel's opinion is pending.
- Severity: 3
- Fix: Mark every simplified chapter where it is read and in its metadata as a machine rewrite. Name the model and its version, the source edition and the date. Show the label Unchecked until a check against a publisher's must-survive declaration earns Checked, and never upgrade a label automatically. Give a one-step switch to the original at the same place in the text. Put rewriting under a publisher agreement that supplies a declaration for each title. Withhold any passage that would break a critical item, and say it was withheld. In the panel, say that a machine makes the rewrite and that nobody checks it. Remove "for easier reading" unless outcome testing supports it.
- Evidence: integration.md: "Lumen Edge sends the book chapter to its own rewriting model and returns the rewritten chapter. The original publisher is not told, and the rewritten text carries no marker." settings.html: `<input type="radio" name="level" value="simplified"> Simplified text (rewritten for easier reading)`. Neither file contains a declaration, a check, a label or a version record.
- Needs disabled readers: yes. Readers who choose simplified text decide what "intact" means for a simplified chapter (principle 5). Have them read a simplified non-fiction chapter, then ask: who said a given quote, what figure was given, whether a claim was stated as certain or only likely, and whether what they read was the author's own words. Score each answer as correctly informed, uninformed or misinformed, against readers of the original. Test also whether they notice the label and can act on it.

### F4. "Screen reader mode" silently removes images, footnotes and publisher's notes
- Where: integration.md bullet 3; settings.html Screen reader mode fieldset.
- Problem: With `sr=1` set, Lumen Edge removes images and "decorative" sidebars, and it counts footnotes and publisher's notes as decorative. Notes are where sources, caveats, attributions, corrections and errata usually sit. Nothing tells the reader that anything was removed. The material says images are removed and shows no text alternative in their place. Coded against the original, these items are "dropped (silent)". Where a note holds a critical item the version is Unfaithful, and where the cuts are only important items it is at best "Undeclared cuts". With no declaration and no chapters supplied, which case applies cannot be settled. A reviewer's claim that the version "is Unfaithful" outright goes beyond the evidence and is qualified here.
- Who is affected: Everyone who ticks "I use a screen reader", whatever their reason.
- Impact: These readers receive less of the work than other readers and are not told. A claim can reach them without its caveat or correction, and a figure-based argument without its figure. Because the cut is tied to a need flag, disclosing a need costs the reader content.
- Severity: 3
- Fix: Stop removing content on the basis of a need flag. Keep footnotes and notes as linked elements the reader can move to and skip. Keep images with publisher-supplied text alternatives, or "image: no description available" where none exists. Mark true decoration in the source. If any decluttering stays, make it a separate option that the reader can reverse, that is named by its effect and lists what it hides, and that never hides notes, corrections or captioned images. Say at the point of reading when anything is hidden.
- Evidence: integration.md: "Lumen Edge removes images and 'decorative' sidebars, including footnotes and the publisher's notes, to 'reduce clutter for screen reader users'." settings.html: `<input type="checkbox" name="sr" value="1"> I use a screen reader`. Neither text mentions removal.
- Needs disabled readers: yes. Test with screen reader users on a chapter that has footnoted caveats and a figure, once with the mode on and once with it off. Ask what source supports a given claim, whether the claim is qualified anywhere, what the figure shows, and whether anything was left out. They also decide whether any removal is wanted at all, and what counts as clutter and what counts as content.

### F5. "Settings saved." is announced whether or not the save succeeded
- Where: settings.html submit handler; `<p id="status" role="status">`.
- Problem: The response from `fetch` is never read. If the server returns an HTTP error, the cookie is still written and "Settings saved." is still announced. If the network fails, `fetch` rejects, nothing catches it, and the reader gets no message at all. The page announces a status about itself that nothing has checked.
- Who is affected: Every reader who saves. Readers who rely on the `role="status"` announcement have no other confirmation.
- Impact: A reader may believe their settings now follow them to every device, or that they switched Simplified text or screen reader mode off, when the account was not updated. The cookie and the account record can also drift apart.
- Severity: 2
- Fix: Check `response.ok` and wrap the call in error handling. Announce success only after the server confirms it. Announce failure in plain words, keep the reader's choices on screen and offer a retry. Write any cookie that remains (see F1) only after a confirmed save, or state that a setting applies on this device only.
- Evidence: `await fetch('/api/account/reading-prefs', {...});` discards the result; `document.getElementById('status').textContent = 'Settings saved.';` runs unconditionally after the cookie is written. There is no `try` block.
- Needs disabled readers: no. Force a failed save to show it.

### F6. The panel says it changes how books "look and sound", but two options change the content and every option is sent to third parties
- Where: settings.html intro text, the Reading level label, the Screen reader mode label, and the footer.
- Problem: The intro presents every option as a change of presentation. Simplified text replaces the author's words (F3), and screen reader mode removes content (F4). All of the settings go to Lumen Edge and its analytics (F1). Nowhere on the panel does it say who rewrites the text, that notes are removed, or who receives the settings. A footer link to /privacy is the only route to such information, and that page is not supplied, so the material cannot show whether it says any of this. Each label names a category but not what it does.
- Who is affected: Every reader who uses the panel.
- Impact: Readers choose without being told what they will receive or who will learn of their choices.
- Severity: 2
- Fix: Beside each option, state in one line what actually happens, for example: "An AI model run by Lumen Edge rewrites the text. Nobody checks it." Stop the intro from promising changes to look and sound only. Better, fix F1, F3 and F4 so that the description becomes true.
- Evidence: settings.html: "Choose how books look and sound. Your settings are saved to your library account and follow you to any device.", compared with integration.md bullets 1 to 4.
- Needs disabled readers: yes. Before and after they make a choice, ask panel users: "What will change in your book if you choose this?" and "Who, besides you, will know which settings you chose?" Score each answer as correct, don't know or wrong.

### F7. The vendor's own descriptions are treated as evidence, and the vendor decides what disabled readers need
- Where: integration.md as a whole ("from the vendor onboarding pack"); settings.html labels.
- Problem: Several statuses are awarded with nothing behind them. "Decorative" is applied to footnotes and publisher's notes. "To reduce clutter for screen reader users" is stated as a benefit. "Rewritten for easier reading" and "Dyslexia-friendly" claim outcomes. The integration description is itself the vendor's account of its own behaviour, taken from its onboarding pack. None of it has been observed, so the real data flow could be wider or narrower than described. The material shows no involvement of disabled readers in deciding what screen reader users count as clutter, what a simplified chapter must keep, or which segments readers are sorted into. These decisions are made about them by the vendor.
- Who is affected: Every reader who uses the adaptive modes, and the library, which relies on the vendor's description.
- Impact: The library cannot know from this pack what Lumen Edge actually does with readers' data or with the text. The modes embody someone else's definition of what these readers need.
- Severity: 2
- Fix: Treat the onboarding pack as a claim. Check it by observing headers, edge and analytics retention, and real rewritten and stripped output. Strike or qualify outcome claims in labels until outcome testing supports them. Have disabled readers define what each mode must keep and what it may change before any mode is offered (principle 5).
- Evidence: integration.md: "'decorative' sidebars, including footnotes and the publisher's notes, to 'reduce clutter for screen reader users'"; the heading "(from the vendor onboarding pack)". settings.html: "Simplified text (rewritten for easier reading)", "Dyslexia-friendly font".
- Needs disabled readers: yes. Readers who use each mode set what "intact" means for it, and what "clutter" means. Then test real output from Lumen Edge against their definition.

### F8. The options ask the reader to declare a condition, and the values sent name it
- Where: settings.html "I use a screen reader" and "Dyslexia-friendly font"; the transmitted values `sr=1` and `font=dyslexia`.
- Problem: To get a mode, the reader must state an identity or a condition rather than choose an effect. The resulting values then travel in every request and into storage (F1, F2), so each leak discloses the condition directly instead of leaving it to be inferred. A reader who ticks the box only to try the mode is recorded as a screen reader user.
- Who is affected: Readers who choose either option.
- Impact: Getting an adaptation depends on disclosing a need, and the leaks in F1 and F2 become direct disclosure.
- Severity: 2
- Fix: Name each option by its effect ("Hide side notes", "Font: rounded sans"), use neutral values, and keep them on the device once F1 is fixed. Better, make the default page work with screen readers so that no mode is needed.
- Evidence: settings.html: `<input type="checkbox" name="sr" value="1"> I use a screen reader`; `<input type="radio" name="font" value="dyslexia"> Dyslexia-friendly font`. integration.md example header: `font=dyslexia;...;sr=1`.
- Needs disabled readers: yes. Test which wording readers who use these options find clear, and whether screen reader users want this mode at all.

### F9. Unticking a checkbox may not switch a mode off, and the panel does not show the stored settings
- Where: settings.html script, `Object.fromEntries(new FormData(e.target))`; the hard-coded `checked` defaults.
- Problem: FormData leaves out unchecked checkboxes, so unticking "I use a screen reader" or "Reduce animation" sends no `sr` or `motion` key at all, not an "off" value. The material does not show whether the account API and Lumen Edge treat a missing key as off or keep the stored value. If the account API keeps it, a reader cannot leave screen reader mode on their other devices. The panel's checked states are also fixed in the markup, and no code loads the reader's saved values. The panel therefore cannot show what is currently in force.
- Who is affected: Readers who tried a mode and want to stop it.
- Impact: The reader may keep receiving stripped or rewritten text while being told "Settings saved." (F5). This depends on server behaviour the material does not show.
- Severity: 2
- Fix: Send an explicit value for every setting (for example `sr=0`, `motion=none`). Make the API replace the whole record. Load the stored settings into the panel, and read them back after each save.
- Evidence: The `motion` and `sr` checkboxes have no hidden counterpart. Every `checked` attribute is fixed in the markup. The script contains no load step.
- Needs disabled readers: no. Untick a box, save, and inspect the stored record and the header.

### F10. The preference cookie lasts a year, can be read by script and is not marked Secure
- Where: settings.html submit handler.
- Problem: The script sets the `rp` cookie, so it cannot be HttpOnly. It has no `Secure` attribute and lasts 365 days. The material shows nothing that clears it at sign-out. On a shared device, the next user inherits the settings and can infer the earlier reader's needs from them. That library services run on shared terminals is general context, not something the material states. Any script running on the site can read the cookie, though the material shows no third-party script.
- Who is affected: Readers who use shared or public devices, and anyone who uses the device after them.
- Impact: The earlier reader's needs persist on the device and can be read.
- Severity: 2
- Fix: Do not keep preferences in a cookie. Use on-device storage that is never transmitted, and on shared devices scope it to the session and clear it at sign-out.
- Evidence: `'; path=/; max-age=31536000; SameSite=Lax'`. The cookie has no `Secure` attribute and no `HttpOnly`.
- Needs disabled readers: no

### F11. Neither the order of the two edge transformations nor the source edition is recorded
- Where: integration.md bullets 2 and 3, read together; the documented example header sets both `level=simplified` and `sr=1`.
- Problem: The material does not say which transformation runs first. If the rewrite runs on the stripped chapter, it is a version made from a version, and the notes, corrections and image content are lost before the rewrite starts (principle 1). Nothing records which edition or revision was rewritten, or whether rewrites are cached. Because the publisher is not told, a correction has no route to invalidate an earlier rewrite. The material shows a gap in the record, not an observed fault. One reviewer's statement that the rewrite "is made from the original chapter, so this is not a chain fault" is struck, because the material does not establish it.
- Who is affected: Readers who set both options, and readers of simplified text in any corrected title.
- Impact: If the stripped chapter is rewritten, the loss cannot be recovered at a later step, and an uncorrected text could be delivered. Neither can be confirmed from these files.
- Severity: 1
- Fix: Make every version from the current publisher original. Record on each version the source edition or revision, and the transformations applied, in order. Invalidate stored versions when the publisher issues a correction.
- Evidence: integration.md lists the two transformations separately and says nothing about order, caching or versioning. It also says: "The original publisher is not told".
- Needs disabled readers: no

### F12. Nothing takes effect until the reader saves, and nothing previews
- Where: settings.html form.
- Problem: Each setting takes effect only after the reader saves and then opens a book. The panel shows no sample, so the reader cannot see what "Large", "Wide" or "High contrast" does before committing to it. The panel itself stays at standard size and spacing while the reader chooses.
- Who is affected: Readers who set text size, contrast, spacing or font.
- Impact: Readers spend more effort finding a working setting, by saving, leaving the panel and coming back.
- Severity: 1
- Fix: Apply each choice to the panel at once, show a short sample paragraph, and describe each option by its effect.
- Evidence: Nothing in the script handles `change` events. The only handler is `submit`.
- Needs disabled readers: yes. Test with low-vision and cognitive-access readers whether a live preview reduces the effort of setting up.

Not found: The book chapters, or any sample of rewritten or screen-reader-mode output, so no must-survive item could be coded item by item. No must-survive declaration, version record, label, check or Withheld path. No statement of the order of the transformations, caching or invalidation. No view of the reading page itself, so we could not check whether the active version is shown there or whether an OS `prefers-reduced-motion` setting is honoured. The content of the /privacy and /accessibility pages. Any consent, DPIA or retention period for preference data. Any device-only storage option. Any way for readers to see or delete their analytics segment. How the account API treats missing keys. Any involvement of disabled readers in defining the modes. Preferences in URLs, or leaking through Referer. Detection of assistive technology by script (here detection is by self-declaration, F8). Generated alt text. Any conformance badge, automated score or "accessible" claim on the material. One reviewer's statements that the panel has "adequate contrast" and would pass an automated check were not measured, and are struck. The status claims that do appear ("Settings saved.", "rewritten for easier reading", "decorative") are dealt with in F5, F3 and F7. Two reviewer findings were dropped: the WCAG scope finding was speculative, and the finding about software-aimed fixes rested on a hypothetical remedy. Their substance is kept in F3 and F7.
