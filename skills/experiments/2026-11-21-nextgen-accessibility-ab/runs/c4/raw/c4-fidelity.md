### F1. Simplified chapters are unlabelled, unchecked machine rewrites served as the book
- Where: integration.md, `level=simplified` bullet; settings.html, Reading level fieldset.
- Problem: The rewrite is made by Lumen Edge's own model and returned with no marker. Nothing records who made it, from what, when, or whether anyone checked it. The settings label says only "rewritten", not that a machine wrote it or that nobody checks it. By the theory's default this is Unchecked. It carries nothing that could earn Exact or Checked, and there is no means to withhold a version that breaks a critical item.
  Original (system description): "Lumen Edge sends the book chapter to its own rewriting model and returns the rewritten chapter. The original publisher is not told, and the rewritten text carries no marker."
  Version as the reader is told: "Simplified text (rewritten for easier reading)".
- Who is affected: Readers who choose simplified text, for example readers with cognitive or learning disabilities or with low literacy in English. Once a rewritten page is shown, nothing on it tells them it is not the author's text.
- Impact: A reader cannot tell the author's words from the model's. A quote, number, hedge or attribution changed by the model is read as the book's own. The theory classes any changed, misattributed or merged item, or any new factual claim, as Unfaithful, and such a version should be withheld. Here no check exists that could find one. The claim that AI adaptations break declared items at material rates is OPEN. The claim that AI answers about news often distort content is TESTED, but it concerns news answers, not book rewrites.
- Severity: 3
- Fix: Label each rewritten chapter, at the top and in metadata, as a machine rewrite (EU AI Act Art. 50 applies from 2 August 2026). Name the model and version, the source edition and the date. Show its class: Unchecked unless a check against a must-survive declaration has earned Checked. Give a one-step switch back to the original at the same place in the text. Ask publishers for must-survive declarations for each title. Withhold the rewrite for any title or chapter where a critical item cannot be kept.
- Evidence: integration.md: "the rewritten text carries no marker"; settings.html: `<label><input type="radio" name="level" value="simplified"> Simplified text (rewritten for easier reading)</label>`. No check, declaration or version record appears in either file.
- Needs disabled readers: yes. Readers who use simplified text should decide what "intact" means for a simplified book chapter, and which label wording and placement they can read and act on.

### F2. Screen reader mode silently drops footnotes, publisher's notes and images
- Where: integration.md, `sr=1` bullet; settings.html, Screen reader mode fieldset.
- Problem: Footnotes and publisher's notes are not decorative. They are where sources, attributions, caveats, corrections, errata and content notes typically sit. The cut is not stated anywhere a reader sees it. Images are removed rather than given text alternatives, so their content (figures, maps, charts and their data) is dropped, not adapted. Coded against the original, these items are "dropped (silent)". If any is critical (a correction, a hedge, an attribution), the version is Unfaithful. If only important items are cut, it is at best Undeclared cuts.
  Original: the chapter "including footnotes and the publisher's notes" and its images.
  Version: "Lumen Edge removes images and 'decorative' sidebars, including footnotes and the publisher's notes, to 'reduce clutter for screen reader users'."
  What the reader was offered: "I use a screen reader" (no mention that content will be removed).
- Who is affected: Blind and partially sighted readers, and any reader who uses a screen reader and ticks the box.
- Impact: These readers receive less of the book than other readers, without being told. They may take a hedged claim as unqualified, miss a correction, or miss whose words a passage reports. A screen reader can already navigate or skip notes, so removing them takes away the reader's own choice.
- Severity: 3
- Fix: Stop removing footnotes, publisher's notes and corrections. Keep them in the text, marked up so screen reader users can navigate and skip them. Replace image removal with publisher-supplied text alternatives, or "image: no description available" where none exists. If any content is ever cut, name the cut in the version and in the label. Change the checkbox so it describes the transformation, not the reader ("Hide images and side notes"), and say what is removed.
- Evidence: integration.md: "removes images and 'decorative' sidebars, including footnotes and the publisher's notes"; settings.html: `<label><input type="checkbox" name="sr" value="1"> I use a screen reader</label>`.
- Needs disabled readers: yes. Screen reader users should settle whether any removal is wanted at all, and how notes and image descriptions should be reached.

### F3. Chain unknown when both settings are on, and no link to the current edition
- Where: integration.md, `level=simplified` and `sr=1` bullets together; the account API.
- Problem: With `level=simplified;sr=1` (both appear in the documented example header), the order of the two transformations is not stated. If the rewrite runs on the stripped chapter, it is a version made from a version, and the notes, corrections and image content are lost before the rewrite starts. Nothing records which edition or revision of the chapter was rewritten. Because "the original publisher is not told", a later publisher correction has no route to invalidate or redo an earlier rewrite if Lumen Edge stores or caches one.
  Original: "make every version from the original, never from another version" (theory, principle 1).
  Version: `X-Reader-Prefs: ...level=simplified;sr=1` with two independent edge transformations and no stated order, source revision or date.
- Who is affected: Readers who use a screen reader and also choose simplified text; and any simplified-text reader of a corrected title.
- Impact: Possible loss along the chain that later steps cannot recover, and possible delivery of an uncorrected text. This cannot be confirmed from the files. It is a gap in the record, not an observed fault.
- Severity: 2
- Fix: Make every version from the current publisher original. Record the source edition, revision hash or date, and the transformations applied, in order, on each version. Invalidate stored rewrites when the publisher issues a correction. Tell publishers when their text is rewritten, so that corrections and right of reply can reach the versions.
- Evidence: integration.md lists the two transformations separately with no ordering, caching or versioning statement; "The original publisher is not told".
- Needs disabled readers: no

### F4. The publisher's authority over the text is bypassed, so a check is impossible
- Where: integration.md, `level=simplified` bullet.
- Problem: A must-survive declaration comes from the author or publisher. The publisher is not told that a rewrite happens, so no declaration can be supplied and no check can be made against one. Every rewritten chapter is therefore Unchecked by design, with no path to Checked or Withheld. This is a structural break in principles 2 and 3.
  Original: "The author marks who said what, direct quotes, numbers, hedges, the line between fact and opinion, right of reply and corrections" (theory, principle 2).
  Version: "The original publisher is not told".
- Who is affected: Simplified-text readers, and publishers and authors whose words are changed.
- Impact: No fidelity assurance is possible for any rewritten title. Note that the theory applies CDPA s.31F(5) ("must not include any changes to the work which are not necessary") to intermediaries such as Lumen Edge, not to the reader. That legal point is ASSUMED, with counsel's opinion pending.
- Severity: 2
- Fix: Put rewriting under a publisher agreement that supplies must-survive declarations for each title. Until a declaration exists, either withhold the rewrite or show it clearly as Unchecked, with the original one step away.
- Evidence: integration.md: "The original publisher is not told, and the rewritten text carries no marker."
- Needs disabled readers: no

Not found: The book chapters themselves, so no must-survive item (quote, number, hedge, attribution, correction) could be listed, weighted or coded item by item against a rewritten or stripped version. Also not found: any must-survive declaration; any version record, date or source-edition reference; any check, reviewer or label on a rewritten chapter; any sample rewritten or screen-reader-mode output; alt text or image descriptions; the order of the transformations; any caching or invalidation policy; any audio or read-aloud version or its script; any translation.
