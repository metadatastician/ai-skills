### F1. Key points and meta description give the withdrawn £4.8m cost, and the correction reaches neither (chain fault)
- Where: Key points item 1; `<meta name="description">`, which the brief says is the key points text and is sent to news aggregators.
- Problem: The correction of 14 November withdraws £4.8m and gives £4.2m. Both versions still say £4.8m and neither carries the correction, so a critical number is changed and the correction is dropped silently. £4.8m matches only the "earlier version" named in the correction. That suggests the versions were made from the 12 November text and not remade on the 14 November update. It does not prove it, because neither version records its source or date. The brief says the meta description reuses the key points, so it is a version made from a version, and its wording differs again (see F2). The page now contradicts itself: `<title>` and `<h1>` say £4.2m, the box under the h1 says £4.8m.
- Who is affected: Readers who use the box instead of the body; screen-reader and keyboard users, who meet the box before the body; search and aggregator readers, who receive only the meta text and never see the correction.
- Impact: Readers of the short versions are given the withdrawn headline figure of a public spending decision. Off-site copies keep it after the page is corrected and give no sign that a correction exists.
- Severity: 3
- Fix: Withhold both versions now. Remake each one directly from the current original, never from another version, against a must-survive declaration that marks the cost and the correction as critical. Record the source version (date or hash) on each one. Make every update or correction remake or withdraw all versions, and push the corrected description to aggregators.
- Evidence: Meta: "A £4.8m flood barrier will protect 900 homes in Lower Wendham, ..." Key points: "A £4.8m flood barrier will protect 900 homes in Lower Wendham." h1: "Council approves £4.2m flood barrier for Lower Wendham". Byline: "Published 12 November 2026, updated 14 November 2026". Correction: "an earlier version of this article said the scheme would cost £4.8m. The approved cost is £4.2m." Brief: "The same key points are used as the article's meta description and are sent to news aggregators." The aggregator payload itself is not in the material.
- Needs disabled readers: no

### F2. The residents' criticism is given to the councillor who backs the scheme, and the meta description merges the two speakers
- Where: Key points item 2; second clause of the meta description.
- Problem: "Rushed through without proper consultation" was said by Malik Osei, chair of the Lower Wendham Residents' Association. Both versions give it to Councillor Ana Ruiz, the cabinet member whose own quote supports the scheme. The meta description merges her expectation and his criticism into one speaker ("Councillor Ana Ruiz said, adding that..."). The quote is also changed: "without proper consultation" becomes "without consultation". Osei does not appear in either version. Misattribution, merging and change are distortions, so both versions are Unfaithful whatever weight the item carries.
- Who is affected: Every reader of the key points, the snippet, the aggregator copy and the read-aloud; and Ruiz and Osei, who are misrepresented.
- Impact: The versions reverse who holds which position. A council cabinet member appears to attack her own scheme, the real critic disappears, and a claim that consultation was not "proper" becomes a claim that there was none.
- Severity: 3
- Fix: Withhold. Declare each attribution and direct quote as critical and keep speaker and words paired. Any remade version must keep "Malik Osei, chair of the Lower Wendham Residents' Association" with his words, and Ruiz's words separate. A visible attribution tied to each quote (`<figure>` with `<figcaption>`, or `<cite>`) may help both people and tools. The material does not show why the summariser misattributed, so do not treat markup alone as the fix.
- Evidence: Article: "Malik Osei, chair of the Lower Wendham Residents' Association, said:" followed by "This has been rushed through without proper consultation." Key points: "Councillor Ana Ruiz said the scheme had been rushed through without consultation." Meta: "..., Councillor Ana Ruiz said, adding that the scheme had been rushed through without consultation."
- Needs disabled readers: no

### F3. A hedged expectation from one official becomes a flat promise, and both caveats are dropped
- Where: Key points item 1; first clause of the meta description.
- Problem: Ruiz's "We expect this to cut the flood risk for around 900 homes" becomes "will protect 900 homes". The hedge "expect" is changed, "around 900" becomes "900", and "cut the flood risk" becomes "protect", which is a different claim the original does not support. The key points drop the attribution to Ruiz, so her expectation reads as fact. Her caveat "though no barrier can remove the risk entirely" and the Environment Agency's "could reduce" and "its modelling was still being reviewed" are dropped silently.
- Who is affected: Readers of the short versions, including Lower Wendham residents judging their own flood risk.
- Impact: Readers are told the homes will be protected. The original says the risk is expected to fall but not disappear, and that the official modelling is still under review. A reader could act on a false sense of safety (insurance, flood kit, warnings).
- Severity: 3
- Fix: Withhold. Declare Ruiz's hedge and caveat, the "around" on the number and the Environment Agency caveat. Keep them in any remade version, or name the cut where an item is only important. A short version can keep hedges in plain words.
- Evidence: Body: "We expect this to cut the flood risk for around 900 homes, though no barrier can remove the risk entirely." and the barrier "could reduce" the chance of flooding in a severe winter, "but that its modelling was still being reviewed". Key points: "A £4.8m flood barrier will protect 900 homes in Lower Wendham."
- Needs disabled readers: yes. Test with readers who use the summary whether a short version that keeps the hedges tells them that flood risk remains after the barrier, and whether they judge that version intact. Do not assume which readers take wording literally.

### F4. The council's consultation statement and the other replies are dropped, leaving the criticism unanswered
- Where: Key points; meta description.
- Problem: The body says a public consultation on the design opens in January, before construction begins. That is the council's reply to the criticism and the one point a reader can act on. Neither version mentions it. The Mill Lane loss of river access and Hallam Civils' reply ("in due course") are also dropped silently. With the consultation gone, the misattributed "without consultation" claim (F2) stands unanswered and implies residents have no say. The weights are the reviewers', not the author's. The author made no declaration.
- Who is affected: Readers of the short versions and aggregator copy; residents who could take part in the consultation, especially on Mill Lane.
- Impact: Readers get one side of a dispute, attributed to the wrong person, and do not learn that a consultation exists or when it opens.
- Severity: 2
- Fix: Declare the consultation statement (what, when, before construction) as a critical right-of-reply and instruction item and keep it in every version. Keep the Mill Lane and contractor items, or name the cuts ("Not included: contractor's response; effect on Mill Lane river access").
- Evidence: Body: "The council said a public consultation on the barrier's design would open in January, before construction begins." / "Residents on Mill Lane will lose their river access and nobody asked them." / Hallam Civils "said it would respond to residents' concerns about river access 'in due course'." None of these appear in the key points or meta description.
- Needs disabled readers: no

### F5. The machine-made label is incomplete, comes after the content, claims a benefit nothing shows, and is missing off-site
- Where: `<p class="note">` after the `<ul>` in the key points box; meta description and aggregator copy (no label).
- Problem: The note says only that a machine made the points. It gives no check status (the honest label is Unchecked, and on the evidence in F1 to F4 the version cannot carry any label), no tool, no source version and no date. "To help you read faster" is the tool's claim about itself, and nothing in the material measures it. Strike it. The note sits after the list, so in linear order (screen reader, keyboard, read-aloud) readers take in the claims before their status. It is also in smaller text (`.875rem`) than the list. Its contrast is adequate. "Skip to article" lands on `#main`, which puts the button and the box ahead of the body's first sentence. The meta description and aggregator copy carry no mark at all. Whether EU AI Act Article 50 applies to them is a legal point, ASSUMED.
- Who is affected: Readers who trust the box because it sits at the top; screen-reader, keyboard, switch and read-aloud users (order); readers of search and aggregator copies (no label).
- Impact: No reader can tell that the box is unchecked machine output that predates the correction, or weigh it against the article.
- Severity: 2
- Fix: Offer only Exact or Checked versions and withhold the rest. Where a machine version is offered, put the label before it at body size, naming the class, the maker, the source version and the generation date ("Made automatically from the article as updated 14 November 2026; not checked by an editor"). Never let the tool award or upgrade its own label. Carry the same label into the meta and the feed. Consider placing the box after the body, or collapsed with its label first.
- Evidence: `<p class="note">Key points are generated automatically to help you read faster.</p>` follows the `<ul>`; CSS `.keypoints p.note { font-size: .875rem; color: #3d3d3d; }`; `<a class="skip" href="#main">`, and `#main` opens with h1, byline, button and box; `<meta name="description" ...>` has no mark. That labels improve reader outcomes is OPEN.
- Needs disabled readers: yes. Test whether the label's wording and position (before or after the list) change how far screen-reader users and readers who use the summary rely on the box compared with the article. Only those readers can say what "intact" means for this summary.

### F6. A conditional timeline becomes a firm schedule
- Where: Key points item 3.
- Problem: "Expected to start" becomes "Work starts". The condition "subject to the consultation" is dropped. "Completion planned for late 2028" becomes "will be finished by 2028", a firm promise that can be read as earlier. The start year, 2027, is dropped, so "spring" is ambiguous on a page dated November 2026. These are changed items, not cuts.
- Who is affected: Readers of the key points and of the read-aloud, including residents planning around the works.
- Impact: The schedule reads as certain and independent of the consultation, and completion may be read as earlier than planned.
- Severity: 2
- Fix: Keep "expected", "spring 2027", "subject to the consultation" and "planned for late 2028", or name the cut. Do not turn a plan into a promise.
- Evidence: Body: "Work is expected to start in spring 2027, subject to the consultation, with completion planned for late 2028." Key points: "Work starts in spring and the barrier will be finished by 2028."
- Needs disabled readers: no

### F7. "Listen to this article" reads the faulty key points as part of the article
- Where: Script: `const text = document.querySelector('article').innerText;`
- Problem: The key points `<section>` and the button sit inside `<article>`, so the read-aloud speaks, in order: the h1 (£4.2m), the byline, "Listen to this article", "Key points", the three faulty points (£4.8m, the misattribution, the firm dates), the note, the body (£4.2m), and the correction last. Nothing audible separates machine summary from journalism. The read-aloud of the body alone would be an Exact form change. As delivered, it contains the Unfaithful version and carries no label of its own (synthetic voice, source version, date). (One reviewer gave the spoken order as starting with the button. It starts with the h1.)
- Who is affected: People who use the Listen button, especially anyone who stops listening after the opening.
- Impact: Listeners hear £4.2m, then £4.8m and the misattribution, then £4.2m again, and can resolve the contradiction only if they reach the correction at the end.
- Severity: 2
- Fix: Read from the article body only, leaving out the key points and the button text until the points are faithful. If they are kept, read them only after a spoken label and make them skippable. Announce what is being read ("the article as updated 14 November 2026, in a synthetic voice").
- Evidence: Script line quoted above; `<section class="keypoints">` and `<button id="listen">` are children of `<article>`, before the first body paragraph; `<p class="correction">` is the last child.
- Needs disabled readers: yes. Test with listeners what they report about the cost and about who said "rushed through" after the opening section alone and after the whole recording. Test also whether a spoken label is enough or the box should be left out.

### F8. Read-aloud: pace is fixed by the publisher and the pressed state goes stale
- Where: `#listen` button and its script.
- Problem: The control can only start or cancel. It sets no rate or voice and offers no pause, resume or skip, so the publisher's defaults fix the form, against principle 4. There is no `end` or `error` handler, so `aria-pressed` stays "true" after speech finishes. Assistive technology then reports "pressed" while nothing plays, and the next press only cancels and resets, so restarting takes two presses. How engines speak "£4.2m" cannot be told from the code.
- Who is affected: Listen users who need a different pace or need to pause or replay; screen-reader users, who are told a state that is not true.
- Impact: The read-aloud is hard to follow at a chosen pace, and its announced state contradicts what is happening.
- Severity: 2
- Fix: Reset `aria-pressed` on the utterance's `end` and `error` events. Add pause and resume, rate and voice choice, and paragraph skip, applied on the device, stored only locally, and sending nothing to the site. Check what the common engines say for "£4.2m", and write "£4.2 million" in the spoken text if needed.
- Evidence: The script calls only `speechSynthesis.speak(...)` and `speechSynthesis.cancel()`; no `rate`, `voice`, `pause()`, `resume()` or `onend` appears.
- Needs disabled readers: yes. Test which controls and what default pace listeners who use read-aloud need. The engine pronunciation check does not need them.

### F9. The correction sits only at the foot of the article, after the box that repeats the error
- Where: `<p class="correction">`, the last element of `<article>`.
- Problem: On the page itself the correction is placed last, after the key points have given £4.8m. No visible note near the figure or the top tells readers that the cost was corrected. Nothing machine-readable marks it as superseding £4.8m either, so reuse downstream has no signal to act on.
- Who is affected: Readers in linear order (screen reader, keyboard, read-aloud), who meet it last; readers who stop early.
- Impact: Readers have to hold two figures through the whole article to learn which is current.
- Severity: 1
- Fix: Add a short visible note near the top ("Corrected 14 November 2026: the cost is £4.2m, not £4.8m") as well as at the foot. Any machine-readable correction record must mirror the visible text, never replace it.
- Evidence: "Correction, 14 November 2026: an earlier version of this article said the scheme would cost £4.8m. The approved cost is £4.2m." is the last paragraph; the byline says only "updated 14 November 2026".
- Needs disabled readers: yes. Test whether a note near the top lowers the effort of reconciling the figures for screen-reader, read-aloud and other linear readers.

### F10. Read-aloud may lose where quotations start and end
- Where: Read-aloud of the Ruiz and Osei blockquotes and the inline quotes ("could reduce", "in due course").
- Problem: `innerText` drops the blockquote structure. Only literal quotation marks remain, and synthetic voices may not voice them, so the line between the reporter's narration and a speaker's words may be lost. Not confirmed by running the code. It depends on the voice.
- Who is affected: Listen users.
- Impact: Listeners may not be able to tell who said what, which is the item F2 shows to be fragile.
- Severity: 1
- Fix: Mark quote boundaries and speakers in the spoken text ("Quote from Malik Osei ... end of quote") if testing shows they are lost.
- Evidence: `<blockquote><p>"We expect this to cut the flood risk ..."</p></blockquote>`; `new SpeechSynthesisUtterance(text)` on `innerText`.
- Needs disabled readers: yes. Test whether listeners can tell quoted speech from narration, and who is speaking, with the browsers' default voices.

### F11. Read-aloud may send article text and the fact of listening to a browser vendor's speech service
- Where: `speechSynthesis.speak(new SpeechSynthesisUtterance(text))`, with no voice chosen.
- Problem: The browser picks the default voice. Some browsers' voices run on the vendor's servers, and the page neither prefers a local voice nor tells the reader. The publisher receives nothing through this path. Whether text leaves the device depends on the browser and voice, which the material does not show. This is inferred from the code, not observed.
- Who is affected: Listen users whose default voice is a network voice.
- Impact: A third party may receive a signal that implies a reading-related need. Whether that is special category processing, and who is controller, is ASSUMED.
- Severity: 1
- Fix: Prefer voices with `localService === true` by default. Use a network voice only when the reader chooses one, with a plain note beside the control that it sends the text off the device. Store the choice locally only.
- Evidence: No `voice` is set and there is no `getVoices()` or `localService` check in the script.
- Needs disabled readers: yes. Test whether local-only voices are acceptable to read-aloud users, or whether network voices are needed for quality. That trade-off is theirs.

### F12. No outcome evidence for any path; a clean markup check would not show these faults
- Where: Every path: full page, key points, meta and aggregator snippet, Listen, screen-reader order.
- Problem: The page has `lang`, a skip link, landmarks, one h1, a labelled section, visible focus, a native button and adequate contrast, all by inspection. No automated tool was run, so "would pass" is an expectation, not a result. No tool can establish the faults in F1 to F7. The material contains no comprehension or outcome data and no fidelity check on publication or correction.
- Who is affected: Readers who rely on the adapted paths; the publisher, if it reads a clean scan as conformance.
- Impact: The page can look accessible while its versions misinform.
- Severity: 1
- Fix: Add a fidelity check against a must-survive declaration at publication and on every correction. Do not cite an automated score as conformance. Measure outcomes per path, coding each answer as correctly informed, uninformed or misinformed, on cost, who supports and opposes the scheme, residual flood risk, the consultation, the timeline and its condition, who loses something, the correction, and which parts a machine wrote. Record time and re-reading as well.
- Evidence: Markup and CSS as served; no outcome data in the material.
- Needs disabled readers: yes. Disabled readers should decide what "intact" means for the summary and the audio, and take part in each path's panel, including screen-reader, read-aloud and magnification users and readers who use summaries.

Not found: an author-made must-survive declaration (the weights used above are the reviewers' own, and only the distortion findings stand regardless of weight); any record of which tool made the key points, from which version, when, or whether anyone checked them; the actual aggregator payload and any mechanism for pushing corrections to it; any sign that disabled readers shaped the key points or read-aloud features; conformance badges, automated scores, "verified" or "WCAG 2.3" / "full AAA" claims; requests, cookies, URL parameters, storage writes, analytics, beacons, third-party scripts or AT detection that reveal a reader's needs (the current design sends the publisher nothing, so any later Listen event or preference sent to the server must be kept out, including combined preferences); hidden text, ARIA or structured data aimed at agents; images, alt text, charts, video, captions, transcripts, motion or time limits; Easy Read, plain-language or translated versions; the content behind the footer "Accessibility" link; server logs, headers and referrer policy.
