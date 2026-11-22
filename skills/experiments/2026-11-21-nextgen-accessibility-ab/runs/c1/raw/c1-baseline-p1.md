### F1. Automatically generated key points contradict the article and misattribute a quote
- Where: article.html, `<section class="keypoints">`, list items (lines 108-110 of the file as given)
- Problem: The box states facts the article does not support. (a) "A £4.8m flood barrier" uses the figure the article itself withdrew: "Correction, 14 November 2026: an earlier version of this article said the scheme would cost £4.8m. The approved cost is £4.2m." (b) "Councillor Ana Ruiz said the scheme had been rushed through without consultation." Ruiz said no such thing. That criticism came from Malik Osei, chair of the residents' association ("This has been rushed through without proper consultation"). (c) "will protect 900 homes" turns Ruiz's hedged claim into a certainty. She said "We expect this to cut the flood risk for around 900 homes, though no barrier can remove the risk entirely", and the Environment Agency says its modelling "was still being reviewed". (d) "Work starts in spring and the barrier will be finished by 2028" drops "expected", "subject to the consultation" and "planned", and drops the January public consultation.
- Who is affected: People with cognitive or learning disabilities, dyslexia, fatigue or attention conditions, and screen-reader and magnifier users who rely on summaries to save effort. The page's note invites them to do this: "to help you read faster".
- Impact: The readers who most need a reliable shortcut get wrong facts: the wrong cost, a false attribution to a named councillor, overstated protection and a fixed timetable. People in a flood-risk area could form wrong expectations about their safety. Anyone who reads only the box has no way to know it is wrong, and the false quote could damage the councillor's reputation.
- Severity: 3 blocks, harms or misinforms
- Fix: Stop publishing unreviewed generated summaries. Either have the reporter or an editor write the key points, or require human sign-off against the final text before publication and again after every correction. Keep attribution and hedging ("expected", "subject to consultation", "around 900 homes", "cannot remove the risk entirely"). Regenerate and re-approve the summary whenever the article is corrected. Example: "The council has approved a £4.2m flood barrier for Lower Wendham. Councillor Ana Ruiz said it should cut flood risk for around 900 homes, but cannot remove it. Residents' association chair Malik Osei said it was rushed through without proper consultation. A public consultation opens in January; work is expected to start in spring 2027 and finish in late 2028."
- Evidence: Compare the key points list with the body paragraphs, the two blockquotes and the correction notice.
- Needs user testing: yes. Test with people with cognitive disabilities and with screen-reader users whether they read only the summary, and whether a reviewed summary matches the facts they take from the full article.

### F2. Meta description repeats the misinformation and sends it off-site, contradicting the page title
- Where: article.html `<head>`, `<meta name="description" ...>` (line 78), and through it news aggregators, search results and voice assistants
- Problem: `content="A £4.8m flood barrier will protect 900 homes in Lower Wendham, Councillor Ana Ruiz said, adding that the scheme had been rushed through without consultation."` The cost is the corrected figure, the protection is overstated, and the attribution is now spelt out ("Councillor Ana Ruiz said, adding that..."). The `<title>` says "£4.2m", so the two disagree about the cost.
- Who is affected: Users who meet the story through search results, aggregator cards and smart speakers or voice assistants that read the description aloud. This includes blind and low-vision users and people who cannot easily open and read the full article.
- Impact: The false claim spreads to places the on-page correction never reaches. Users hear contradictory costs ("£4.2m" in the title, "£4.8m" in the description) with nothing to tell them which is right.
- Severity: 3 blocks, harms or misinforms
- Fix: Write the meta description and the aggregator summary by hand or approve them editorially, from the corrected text. Re-issue them to aggregators when a correction is made, and use the correction or update fields of your feed or structured data. For example: "Wendham council has approved a £4.2m flood barrier for Lower Wendham; residents say it was rushed through without proper consultation."
- Evidence: The `<meta name="description">` text against the `<title>`, the body and the correction notice. The brief states that the key points are reused for the meta description and the aggregators.
- Needs user testing: no

### F3. Corrected figure still appears at the top while the correction notice is only at the very end
- Where: article.html byline "updated 14 November 2026" (line 101); key points (line 108); `<p class="correction">` (line 131)
- Problem: The byline says the article was "updated" but not what changed. The withdrawn "£4.8m" stays in the key points near the top. The correction, the only thing that resolves the conflict, is the last paragraph of the article.
- Who is affected: Screen-reader users reading in order or jumping by heading (the correction has no heading); people with cognitive disabilities or memory impairments; people who stop reading early because of fatigue.
- Impact: Readers meet "£4.2m" (h1), then "£4.8m" (key points), and have to keep that contradiction in mind until the end, if they reach it. Many will not, and will keep the wrong figure or lose trust in the whole article.
- Severity: 2 significant
- Fix: Remove the withdrawn figure from every summary (see F1 and F2). Put a short correction line, or a link to the correction, next to the "updated" date, for example "Updated 14 November 2026: cost corrected to £4.2m (see correction)". Give the end notice a heading or a landmark label so it can be found by heading or landmark navigation.
- Evidence: The order of the content in `<article>`. The byline does not link to the correction.
- Needs user testing: no

### F4. "Listen to this article" reads the faulty key points and page furniture aloud first
- Where: article.html `<script>`: `const text = document.querySelector('article').innerText;` (line 141)
- Problem: The utterance is the whole `<article>` innerText. That includes the byline, the button's own label "Listen to this article", the heading "Key points", the incorrect key points (£4.8m, the false attribution to Ruiz), the note "Key points are generated automatically to help you read faster", and only then the story. Speech gives no cue for the blockquotes, so it is hard to hear who is speaking: the start of Osei's words and the misattributed "rushed through" line can run together.
- Who is affected: Users who choose read-aloud because they have dyslexia, low vision, a learning disability, low literacy or fatigue.
- Impact: The first thing they hear is the misinformation from F1 in a confident synthetic voice, plus noise (the button label). They have to listen to all of it to reach the correction at the end. If speakers are unclear they may attribute quotes wrongly.
- Severity: 3 blocks, harms or misinforms
- Fix: Build the spoken text from the headline and the body paragraphs only. Leave out the button and the generated box, or include only a reviewed summary that is clearly announced as a summary. Add spoken attribution around quotes ("Malik Osei said: ... End of quote"). Announce the correction first ("This article has been corrected: ...").
- Evidence: The selector `'article'` contains `#listen` and `.keypoints`.
- Needs user testing: yes. Test with dyslexic and low-literacy listeners whether they can tell who said what, and what they remember as the cost.

### F5. Listen button state goes out of sync when speech ends, and failure is silent
- Where: article.html `<script>`, lines 137-144
- Problem: `aria-pressed` is set to "true" when speech starts. Nothing resets it when speech ends by itself, because there is no `utterance.onend` or `onerror` handler. After the article finishes, the button still reports "pressed", and the next activation only cancels and resets it, so the user has to press twice to listen again. There is no check that `speechSynthesis` exists. Where it does not, or no voice is installed, the click throws an error or does nothing, yet the button is still set to pressed. `utterance.lang` is not set, so the browser may use a non-British voice. Abbreviations such as "£4.2m" may then be read as "4.2 m" (metres) or similar.
- Who is affected: Screen-reader users, who hear "toggle button, pressed" when nothing is playing; anyone relying on the read-aloud feature.
- Impact: The announced state is wrong (WCAG 4.1.2 Name, Role, Value). Users are confused about whether audio is playing. Users without support get no explanation, and cost figures may be mispronounced.
- Severity: 2 significant
- Fix: `const u = new SpeechSynthesisUtterance(text); u.lang = document.documentElement.lang; u.onend = u.onerror = () => btn.setAttribute('aria-pressed','false');`. Hide or disable the button, with a visible message, when `!('speechSynthesis' in window)`. Write "£4.2 million" in full in the text, which also helps plain-language readers.
- Evidence: There is no event handler on the utterance and no feature detection.
- Needs user testing: yes. Test the state announcements in NVDA, JAWS, VoiceOver and TalkBack after playback ends naturally.

### F6. Read-aloud lacks the basic controls and has no visible pressed state
- Where: article.html `#listen` button and its CSS (line 89 has no `[aria-pressed="true"]` style)
- Problem: There is only start and stop: no pause or resume, no rate control, no skip, and no highlighting of the passage being read. The pressed state looks the same as the unpressed state, because no style is defined for it. Speech starts again from the top every time.
- Who is affected: Users with dyslexia or cognitive disabilities, who benefit from seeing the words highlighted as they are spoken (COGA). Users with processing-speed differences, who need a slower rate. Sighted keyboard and mouse users, who cannot see whether audio is on.
- Impact: Users who lose their place have to listen again from the start. Users cannot tell visually whether the feature is active.
- Severity: 1 minor
- Fix: Add a visible pressed style (for example, a filled background and the text "Stop listening" shown next to the label). Add pause and resume and a speed control. Optionally highlight the paragraph currently being read.
- Evidence: The CSS has no style for the pressed state, and the script exposes only `speak` and `cancel`.
- Needs user testing: yes. Test whether dyslexic users and users with low literacy find the controls sufficient.

### F7. Synthetic speech talks over the user's screen reader without warning
- Where: article.html `#listen` button
- Problem: The browser's speech synthesis runs separately from the user's screen reader. A screen-reader user who activates the button hears two voices at once as they keep navigating, and the only way to stop the browser voice is to go back to the button.
- Who is affected: Screen-reader users
- Impact: Overlapping audio makes both voices hard to follow until the user finds the button again.
- Severity: 1 minor
- Fix: Add a short description linked with `aria-describedby`, for example: "Uses your browser's voice. If you use a screen reader, you may prefer it instead." Let Escape stop playback anywhere on the page.
- Evidence: The script uses `speechSynthesis.speak` with no coordination with the screen reader.
- Needs user testing: yes. Check how the overlap behaves with NVDA, JAWS and VoiceOver.

### F8. The key points disclaimer is vague, comes after the list, and encourages skipping the article
- Where: article.html `.keypoints p.note`: "Key points are generated automatically to help you read faster."
- Problem: The note does not say that the points are unchecked or that they can be wrong. It comes after the list, so screen-reader users and linear readers have already taken in the points before they hear it. It also frames the box as a replacement for reading the article.
- Who is affected: Users with cognitive disabilities and screen-reader users
- Impact: Users get no prompt to treat the summary with caution or check it against the article, so the summary is trusted on faith.
- Severity: 2 significant
- Fix: If any generated text stays on the page after F1 is fixed, put a plain-language label before the list, inside the heading or straight after it, for example: "Summary written by software and checked by our editors on [date]. Read the full article for details." Do not claim that it saves reading time.
- Evidence: The position and wording of `p.note`.
- Needs user testing: yes. Test whether users understand what "generated automatically" means.

### F9. Navigation and footer links are separated by middle-dot characters instead of list markup
- Where: article.html `<nav aria-label="Sections">` (line 96) and `<footer>` (line 134)
- Problem: `<a href="/news">News</a> · <a href="/sport">Sport</a> · ...`. Some screen readers read the separators out ("middle dot") and announce no item count.
- Who is affected: Screen-reader users
- Impact: Extra noise, and no "list, 3 items" cue to show how big the navigation is.
- Severity: 1 minor
- Fix: Mark the links up as `<ul>` with `<li>` items and draw the separators with CSS.
- Evidence: The inline "·" text characters between the links.
- Needs user testing: no

Not found: language of the page (`lang="en-GB"`); the page title; the skip link and its target, including the skip link becoming visible on focus; focus indicators (`:focus-visible` with a 3px outline); text and link contrast (#1a1a1a, #0b4f8a and #3d3d3d on #fff or #f4f4f4 all exceed 7:1); reflow and viewport meta (no zoom lock, max-width in rem); heading structure (one h1, the h2 for the box); the landmarks (header, nav with a label, main, article, footer, and the section labelled by its heading); the button's role and accessible name; audio that starts only on user action (1.4.2); the blockquote semantics for quotes; the date formats; the accessibility statement link in the footer (its content was not provided). There are no images, media, forms or charts in this material.
