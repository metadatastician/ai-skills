### F1. Reader needs are turned into a machine signal and sent to the delivery service and its analytics
- Where: integration.md, bullets 1, 4 and 5 (`X-Reader-Prefs` header, "reader segments", account API keyed to card number); settings.html script (`rp` cookie written from the full form data).
- Problem: The settings exist to adapt the page on the reader's side. Here they are serialised into a cookie and then a request header that goes with IP address and user agent to the origin and to Lumen Edge analytics. Analytics then labels readers "Accessibility: low vision" and "Accessibility: cognitive". This serves segmentation and the vendor's pipeline, not the reader. It breaks principle 4 ("the publisher never learns who needed what") and the rule that no request, header or analytics event may reveal a reader's needs. Each value may look harmless alone, but together they make an identifying profile (the composition leak), and the dashboard puts that profile together explicitly. Disability information is special category data under UK GDPR (legal point: ASSUMED).
- Who is affected: Every reader who changes any setting, most of all those choosing size 200, high contrast, dyslexia font, simplified text or screen reader mode.
- Impact: Disability is inferred and disclosed to a third party and the library without consent. Readers who know or suspect this may stop using the settings they need, which turns a privacy harm into an access barrier.
- Severity: 3
- Fix: Apply size, contrast, motion, font and spacing on the client only: CSS and local state, with optional sync stored encrypted and not readable by the edge. Never forward preferences in headers. Remove the reader segments. Do not key preferences to the card number in any system the vendor can read.
- Evidence: integration.md bullet 1 (header contents and recipients), bullet 4 (named accessibility segments), bullet 5; settings.html line 288 writes all values to a cookie sent on every same-site request.
- Needs disabled readers: no. Whether to stop the disclosure is not their call. It needs a yes from them only on the replacement design, if any sync is kept.

### F2. "Simplified text" is an unlabelled, unchecked machine rewrite presented as the book
- Where: integration.md bullet 2; settings.html Reading level fieldset ("Simplified text (rewritten for easier reading)").
- Problem: When `level=simplified`, a vendor model rewrites the chapter. Nothing declares what must survive, nothing checks the rewrite, the text carries no marker, and the publisher is not told. Under the theory this is at best Unchecked. Whether it is Unfaithful (dropped, changed or merged items, new claims) is unknown on every chapter. The setting's label says only that the text is "rewritten for easier reading". It does not say a machine wrote it, that nobody checked it, or that it may differ in substance. The missing marker also appears to fall short of EU AI Act Article 50 marking from 2 August 2026 (legal point: ASSUMED).
- Who is affected: Cognitive-access, learning-disabled and low-literacy readers, and anyone who chooses the setting. They are the readers least able to compare the rewrite with the original.
- Impact: A reader may take a distorted book (changed facts, dropped hedges, misattributed speech, lost corrections) as the author's work. They are given no means to tell. Whether AI adaptations break declared items at material rates is OPEN, so how often this happens is not established. The risk is structural.
- Severity: 3
- Fix: Mark every rewritten chapter visibly and in text, and say that a machine made it, from which edition and when. Label it Unchecked until it is checked against a must-survive declaration. Offer a one-step switch back to the original at the same place in the book. Give no label the rewrite has not earned. Agree rights with the publisher. Withhold the rewrite where a critical item would break. Rewrite only from the original, never from another version.
- Evidence: integration.md bullet 2 ("carries no marker"); settings.html line 273.
- Needs disabled readers: yes. Test with cognitive-access and Easy Read users what "intact" means for a simplified chapter, and whether they can tell they are reading a rewrite and get back to the original.

### F3. "Screen reader mode" removes content on a machine assumption about screen reader users
- Where: integration.md bullet 3; settings.html Screen reader mode fieldset ("I use a screen reader").
- Problem: Ticking the box strips images, sidebars, footnotes and the publisher's notes "to reduce clutter". Footnotes and publisher's notes can carry sources, caveats, corrections and right of reply. These are must-survive types. Dropping them silently makes the version Unfaithful wherever a critical item lives there. Images lose their alt text and are not replaced with anything. The checkbox does not tell the reader any of this. It asks about identity ("I use a screen reader") when the real choice is "remove content".
- Who is affected: Screen reader users. Also low-vision readers who use a screen reader alongside magnification and still look at images. Also anyone who ticks the box to try it.
- Impact: These readers get less of the book than other readers and are not told. Some of what is lost may be what is needed to follow the text or judge it.
- Severity: 3
- Fix: Remove the content removal. If the publisher marks up footnotes and notes properly (links, landmarks, alt text), screen reader users can skip them with their own tools. If any decluttering is kept, name exactly what it removes, make it a separate reversible option labelled by effect, and never apply it to notes, corrections or captioned images.
- Evidence: integration.md bullet 3; settings.html line 276.
- Needs disabled readers: yes. Test with screen reader users whether they want anything collapsed, and what they count as "clutter" compared with content.

### F4. The live region announces "Settings saved." whatever the server says
- Where: settings.html script, lines 284 to 290; `<p id="status" role="status">`.
- Problem: The script never checks `fetch`'s response. A network error rejects and leaves the status empty with no message. An HTTP error (4xx or 5xx) still sets the cookie and announces "Settings saved." What the page shows and what it announces agree, but both can be false. An automated checker sees a correctly built status region and passes it.
- Who is affected: Every reader, especially screen reader users, who rely on the announcement because they cannot see whether anything changed.
- Impact: The reader believes the settings now follow them to other devices when the account was not updated. The cookie and the account can also drift apart.
- Severity: 2
- Fix: Check `response.ok`. Announce success only after the server confirms it. Announce failure in plain words with a way to retry. Set the cookie, if one is kept at all (see F1), only after a confirmed save.
- Evidence: settings.html lines 286 to 289. There is no `try`, and the response is not read.
- Needs disabled readers: no

### F5. People-only barriers in the panel that no agent or scanner would register
- Where: settings.html, whole form.
- Problem: (a) Nothing applies until the reader saves, and nothing previews. A reader with low vision or a cognitive disability has to save, go to a book, and come back to find out what "Large" or "Wide" does. (b) The labels state categories but not their effects: what "Simplified" costs (F2), and what "I use a screen reader" removes (F3). (c) "Reduce animation" is unchecked by default. Nothing shows whether an existing OS `prefers-reduced-motion` setting is respected before the reader finds this panel. (d) The header shows "Signed in as reader 20481193", a long number with no meaning to the reader. That adds cognitive load. It also displays the card number to anyone who can see or hear the screen.
- Who is affected: Cognitive-access readers, low-vision and magnifier users, people with vestibular disorders, and people using read-aloud in shared spaces.
- Impact: More effort to configure, choices made without knowing what they do, and possible motion exposure before the panel is found. Whether the commonest barriers block people but not agents is DESIGNED, not tested. These items illustrate that claim. They do not test it.
- Severity: 2
- Fix: Apply each setting live, with a short sample paragraph. Describe each option by its effect. Default motion from `prefers-reduced-motion`. Show the reader's name or nothing, not the card number.
- Evidence: settings.html lines 248 to 278 (no preview, no descriptions), line 261 (unchecked default), line 245.
- Needs disabled readers: yes. Test whether the option wording is understood, and whether a live preview reduces effort for cognitive-access and low-vision users.

### F6. A fix aimed at software, such as the vendor's adaptation or an agent-readable preference signal, is what harms people here
- Where: integration.md as a whole.
- Problem: In the other direction, almost nothing here blocks an agent but not a person. The settings form is simple, labelled markup. The only agent-side gap is that a rewritten or stripped chapter carries no machine-readable marker, so an agent quoting or summarising it cannot know it is not the original. The likely "fix" for that, or for "AI readiness" generally, is to broadcast preferences in a header or add version metadata that encodes the reader's settings. That would deepen F1. The current design already shows the pattern: the preference signal was made machine-readable for the edge, and that exposed readers.
- Who is affected: All readers who use the settings. It also affects downstream readers of any agent output built on an unmarked rewrite.
- Impact: Agents may pass on rewritten or stripped text as the original. The obvious agent-side remedy would cost readers' privacy.
- Severity: 1
- Fix: Mark versions by what changed and how it was made (label, source edition, maker, date), never by who it was made for. Keep preferences out of anything an intermediary can read.
- Evidence: integration.md bullets 1 to 3. The rewritten text "carries no marker", and the preferences are forwarded as a header.
- Needs disabled readers: no

### F7. An automated check of the panel would pass it while the main barriers sit outside what it can see
- Where: settings.html compared with integration.md.
- Problem: settings.html has `lang`, a title, labelled controls grouped in fieldsets with legends, visible focus, adequate contrast and a status region. A static analyser would probably report few or no failures. It cannot establish: whether the simplified chapter is faithful (F2); whether content removed in screen reader mode was critical (F3); whether "Settings saved." is true (F4); the privacy disclosure at the edge (F1); the reading level or cognitive load of the rewrites; or whether the options are understood (F5). The footer links to an Accessibility page that is not provided. Any statement there that rests on automated results would treat that slice as the whole. In GDS's 2017 test, the best tool found 41% of 143 planted barriers.
- Who is affected: The library and its readers, who may rely on a clean report.
- Impact: A clean report would hide the harms with the highest severity in this case.
- Severity: 2
- Fix: Scope any accessibility statement to the edge-adapted output, not only the panel's markup. Cover Lumen Edge's rewriting and stripping explicitly. Do not cite an automated score as conformance. Measure outcomes with readers (principle 6).
- Evidence: settings.html lines 228 to 293. integration.md shows the adaptation happens after the page leaves the origin.
- Needs disabled readers: yes. Outcome testing of adapted chapters (correctly informed, without undue effort, not misled) needs them.

Not found: structured data or JSON-LD; text hidden for agents or search; verbose or keyword-stuffed accessible names; ARIA beyond one `role="status"`; generated alt text on the page; an automated score, badge or conformance claim on the material (the Accessibility page itself is not supplied); captions, transcripts or audio description; time limits or animation in the panel itself.
