### F1. Key points and meta description carry the superseded £4.8m figure (chain fault)
- Where: `<meta name="description">`; first `<li>` of `section.keypoints`; same text sent to news aggregators.
- Problem: Both state "£4.8m". The correction (14 November 2026) says £4.8m was wrong and the approved cost is £4.2m; the `<title>` and `<h1>` say £4.2m. The machine versions were made from the older, uncorrected original, or were not remade after the correction (principle 1: a version made from an older or corrected original is a chain fault). A declared number item is changed, so under the outcome table the version is Unfaithful and should be withheld.
- Who is affected: Anyone who reads only the key points (the box says it exists "to help you read faster", which in practice means people who skim, people with cognitive or reading-related impairments, and people who tire quickly). Screen reader users who reach the box before the body. People who see only the search snippet or aggregator card, where the article body and correction never appear.
- Impact: The reader is told the wrong cost. Downstream copies (search results, aggregators) keep the error after the page is corrected, and the correction cannot follow them. The page contradicts itself: £4.2m in the title, £4.8m in the snippet and box.
- Severity: 3
- Fix: Make the key points and meta description from the current original, never from an earlier version. Regenerate on every correction and re-send to aggregators. Treat the corrected cost as a critical number in a must-survive declaration, and withhold any version that does not keep it.
- Evidence: Lines `content="A £4.8m flood barrier..."`, `<li>A £4.8m flood barrier will protect 900 homes...`, against `<h1>Council approves £4.2m...` and `<p class="correction">... an earlier version of this article said the scheme would cost £4.8m. The approved cost is £4.2m.`
- Needs disabled readers: no. The factual error can be read off the page. Whether disabled readers who rely on summaries are misled more often than other readers would need them.

### F2. Key points and meta description put the residents' complaint in the councillor's mouth
- Where: second `<li>` of the key points; the second clause of the meta description.
- Problem: "Councillor Ana Ruiz said the scheme had been rushed through without consultation." In the article Malik Osei, chair of the Residents' Association, said "rushed through without proper consultation". Ruiz is the cabinet member who backs the scheme. The two sources are merged and the quote is misattributed, and the attribution item is critical. This is distortion, which the theory forbids at any weight. The meta description turns it into a councillor criticising her own scheme ("adding that...").
- Who is affected: Summary-only readers, as in F1. Also people with memory or attention impairments, who may keep the first framing they meet and not re-check it against the body. Search and aggregator readers.
- Impact: A named public official is reported as saying the opposite of her quoted position, and a named resident's dissent loses his name. The right-of-reply balance in the article (supporter, then critic) collapses into one person.
- Severity: 3
- Fix: Withhold the key points and meta description until a checked version keeps every attribution. Declare "who said what" for each quote. The source fault (see F6) is that the attribution sits outside the quote.
- Evidence: `<li>Councillor Ana Ruiz said the scheme had been rushed through without consultation.</li>` against `Malik Osei, chair of the Lower Wendham Residents' Association, said:` and his blockquote.
- Needs disabled readers: no for the fact of the misattribution. Yes for how a reader who leans on the box understands the story; test comprehension of who supports and who opposes the scheme after reading the box alone, compared with reading the body.

### F3. Key points remove hedges and conditions, turning estimates into certainties
- Where: key points items 1 and 3; meta description.
- Problem: "will protect 900 homes" replaces Ruiz's "We expect this to cut the flood risk for around 900 homes, though no barrier can remove the risk entirely". The Environment Agency's caveat ("could reduce", "modelling was still being reviewed") is gone. "Work starts in spring and the barrier will be finished by 2028" drops the year 2027, "subject to the consultation" and "planned". The January consultation is not mentioned, and neither is the correction. Hedges are a declared type. Changing a hedge into a certainty is a change, not an omission, so the version is Unfaithful whatever the weight.
- Who is affected: Residents deciding about flood risk, and readers who rely on the short version. People who read literally, which is common for some autistic readers and some readers with learning disabilities, will take "will protect" at its word. That claim about who reads literally is a design assumption, not a tested finding.
- Impact: People may underrate their flood risk and miss that they have a consultation they can respond to. This is the reader-safety failure the theory is about: the page passes markup checks while the reader is misinformed.
- Severity: 3
- Fix: Declare Ruiz's hedge, the Environment Agency's caveat and "subject to the consultation" as critical or important hedge items, and name every cut. Add the consultation date as an instruction item. Plain language can keep hedges ("should lower the risk for about 900 homes; no barrier removes it fully").
- Evidence: Quoted lines above. The key points have three items and the body has eight factual paragraphs plus a correction.
- Needs disabled readers: yes. Test whether a hedged plain-language summary is understood as well as the unhedged one by readers with cognitive impairments (principle 5: they decide what "intact" means). This rests on "AI accessibility adaptations break declared items at material rates", which is OPEN; this page is one instance, not a rate.

### F4. The machine-made label is weak, comes after the content, and claims a benefit
- Where: `<p class="note">Key points are generated automatically to help you read faster.</p>`, placed after the list.
- Problem: The note gives no Unchecked label and no record of what made the version, from which version of the original, or when (principle 3). In reading order it comes after the three items, so a screen reader or read-aloud user hears the errors first and the disclosure last, if at all. Its smaller grey text (`.875rem`, `#3d3d3d`) makes it the least prominent text in the box. "To help you read faster" is the tool's claim about itself, which the theory says is not evidence. "Labels improve reader outcomes" is also OPEN. The meta description and aggregator copy carry no mark at all, which is relevant to the EU AI Act Article 50 duty from 2 August 2026. That legal point is ASSUMED.
- Who is affected: Screen reader and read-aloud users (order). Low-vision and magnifier users (small, low-emphasis text). Readers of search results and aggregators, who get no label.
- Impact: Readers cannot tell that the box is unchecked machine output, so they cannot weigh it against the body.
- Severity: 2
- Fix: Put a label before the items, at body text size, naming the class (Unchecked) and what it was made from ("made automatically from the version of 14 November, 10:05; not checked by an editor"). Carry the same mark wherever the text is reused. Better still: offer only Checked or Exact versions, and withhold the rest.
- Evidence: Markup order in `section.keypoints`; CSS `.keypoints p.note`.
- Needs disabled readers: yes. Test whether a label placed first, and its wording, change how much trust readers who use screen readers and readers with cognitive impairments put in the box. The theory lists this as OPEN.

### F5. "Listen to this article" reads the faulty key points first, then the contradicting body
- Where: script: `document.querySelector('article').innerText`.
- Problem: The read-aloud should be an Exact version (only the voice changes). But `article` contains the key points box, the button's own label and the byline. A listener hears "£4.8m" and the misattribution first, then "£4.2m" in the body, and the correction only at the very end. Read aloud, the two quotes run straight into the narration with no change of voice. Visually, the blockquote border marks where a quote starts, and that cue is lost. The Ruiz attribution paragraph ends at "said:" with a trailing space, and nothing in the audio marks where her words end.
- Who is affected: People who use the button instead of a screen reader. These are likely blind or low-vision readers without AT, people with dyslexia, and people with fatigue or reading impairments (an inference, not tested).
- Impact: The one version offered as faithful repeats the unfaithful one. The listener hears two contradicting costs with no way to tell which is current until the last sentence.
- Severity: 3
- Fix: Read from a declared article body that leaves out the key points, or reads them only after their label. Announce quotes and their speakers ("Quote from Malik Osei: ... End of quote"). Read the correction next to the figure it corrects, or at the start.
- Evidence: Script lines 1–6; `<section class="keypoints">` is inside `<article>`.
- Needs disabled readers: yes. Test whether listeners can say who said what, and what the scheme cost, after one listen.

### F6. Read-aloud controls: pace and state are not set by the reader
- Where: `#listen` button and script.
- Problem: There is no pause, no speed control, no skip and no way to choose a voice. The utterance uses the browser's default rate, so the publisher fixes the pace, which goes against principle 4. When speech ends on its own, `aria-pressed` stays "true" because no `onend` handler resets it. A screen reader then announces "pressed" while nothing plays, so what is announced and what is happening disagree. A screen reader user who presses it hears the page voice over their own screen reader. How the synthetic voice speaks "£4.2m" ("4.2 metres"? "4.2 m"?) depends on the engine and cannot be checked from the code.
- Who is affected: Screen reader users (stale state, competing voices); people with cognitive or processing impairments who need to slow down or pause; people with hearing impairments who may need a slower rate.
- Impact: The read-aloud is only partly usable, and it is hard to stop or follow.
- Severity: 2
- Fix: Add play/pause, rate control and paragraph skip, kept on the reader's device. Reset the state on `end` and `error`. Write currency in a form the engine speaks unambiguously (for example "£4.2 million"), and check what the voice actually says.
- Evidence: Script has no `onend`, `rate` or `pause` call.
- Needs disabled readers: yes. Test how "£4.2m" is spoken by the common engines, and whether the controls are enough for listeners who need to slow down.

### F7. Attribution sits outside the quote, which invites machine misattribution; a hidden fix for agents would harm people
- Where: `<p>... Councillor Ana Ruiz, said: </p>` followed by a separate `<blockquote>`; the same for Osei.
- Problem: This barrier blocks agents but not people. A sighted reader links the speaker to the quote across two elements; a summariser working on the text may not, and F2 is consistent with that. The tempting fix aimed at agents is hidden text, or an `aria-label` / `title` on each blockquote ("Quote by Malik Osei, Residents' Association"). For screen reader users that would duplicate the visible attribution, or replace the quote text with the label. Structured data (JSON-LD) added only for agents would not touch AT, but nothing would keep it in step with the visible text.
- Who is affected: Agents (now). Screen reader users, if the fix is made in hidden or ARIA text.
- Impact: Misattribution happens upstream, and the wrong fix adds noise downstream. The theory's ARIA-error figure (59.1 against 42) is a correlation, not a cause.
- Severity: 2
- Fix: Fix at source, in visible markup that serves both: `<figure><blockquote>...</blockquote><figcaption>Malik Osei, chair, Lower Wendham Residents' Association</figcaption></figure>`, or a `<cite>` inside the quote. Declare the attribution in the must-survive record instead of in hidden text.
- Evidence: Separate `<p>` and `<blockquote>` elements; key points item 2.
- Needs disabled readers: yes. Check that the figure/figcaption pattern reads clearly with common screen readers and does not double-announce.

### F8. The correction is plain text that machines cannot see, and is placed last for people
- Where: `<p class="correction">` at the end of the article.
- Problem: Nothing marks the correction for agents as superseding the £4.8m figure, so automated reuse (key points, meta, aggregators) cannot know to drop it. That is a barrier to agents. For people, it sits after everything else and comes after the box that repeats the error, so a reader has to reach the end to resolve the contradiction. That puts the cognitive load of reconciling two figures on the reader.
- Who is affected: People with cognitive or memory impairments; screen reader and read-aloud users, who get it last; everyone who sees reused copies.
- Impact: The correction does not reach every version, and it arrives late in the version it does reach.
- Severity: 2
- Fix: Declare the correction as a critical item that every version must carry. Put a short visible note near the top ("Corrected 14 November: cost is £4.2m, not £4.8m"). Any machine-readable correction record should mirror the visible text, never replace it.
- Evidence: Correction paragraph; F1.
- Needs disabled readers: no for placement. Yes for whether a note near the top lowers the load of reconciling the two figures.

### F9. Skip link lands readers on the unchecked box before the article
- Where: `<a class="skip" href="#main">Skip to article</a>`; `#main` begins with the h1, byline, button and key points.
- Problem: "Skip to article" leads keyboard, switch and screen reader users through the button and the faulty summary before the first sentence of the article. Agents are not affected.
- Who is affected: Keyboard, switch and screen reader users.
- Impact: Extra steps, and their first contact with the substance is the unfaithful version.
- Severity: 1
- Fix: Withhold the box (F1–F3), or move it after the body, or make it expandable and collapsed by default with its label first.
- Evidence: DOM order.
- Needs disabled readers: no.

### F10. Automated checks would pass this page while its main harms go uncaught
- Where: Whole page.
- Problem: By inspection the page has `lang`, a skip link, landmarks, one h1, a labelled section, visible focus, a native button and high-contrast colours. Automated checks are likely to find little. No automated tool can establish that the summary is faithful to the article, that the meta description matches the corrected body, that attributions are right, the reading level, what the speech engine says, or whether quotes can be followed by ear. The page shows no score or badge, but its note asserts a benefit ("help you read faster") that nothing measured. The footer "Accessibility" link was not available to review. Principle 6 (outcomes, not markup) fails while the markup passes.
- Who is affected: Every reader who relies on the adapted versions; the publisher, if it treats a clean scan as conformance.
- Impact: The page looks accessible while it misinforms. The WebAIM low-contrast point (people but no agent blocked) does not apply here, because the contrast looks adequate. The general claim that "the commonest barriers block people but not agents" is DESIGNED, not tested. On this page the worst barriers block people, and they also mislead agents downstream.
- Severity: 2
- Fix: Add a fidelity check against a must-survive declaration to publishing, and a check on every correction. Do not cite an automated score as conformance. Test outcomes with disabled readers.
- Evidence: Markup and CSS as served; F1–F5.
- Needs disabled readers: yes. Comprehension outcomes for the article, the key points and the read-aloud, with readers who use screen readers, read-aloud, magnification, and readers with cognitive impairments.

Not found: hidden text aimed at agents or search (no visually-hidden content apart from the skip link); keyword-stuffed or verbose accessible names; ARIA added for "AI readiness" (the only ARIA is `aria-label` on the nav, `aria-labelledby` on the section and `aria-pressed`, all proportionate); live regions; JSON-LD or other structured data; automated accessibility scores, badges or conformance claims on the page (no "WCAG 2.3" or "full AAA" claim); generated image alt text (there are no images); captions or transcripts (there is no video or audio file); motion, animation, auto-advance or time limits; any request, header, analytics event or setting that reveals a reader's needs (the read-aloud uses on-device `speechSynthesis` and sends nothing); an Easy Read or plain-language version separate from the key points; a must-survive declaration or version record for any adapted version.
