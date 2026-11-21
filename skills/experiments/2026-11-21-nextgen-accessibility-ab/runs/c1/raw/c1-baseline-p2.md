### F10. The whole article is sent as one utterance, which some browsers cut off silently
- Where: article.html `<script>`: `speechSynthesis.speak(new SpeechSynthesisUtterance(text));` with `text = document.querySelector('article').innerText`
- Problem: The full article text goes to the speech engine as one long utterance. In Chromium-based browsers, long utterances are known to stop after about 15 seconds with some voices, often network voices. They end without an `end` or `error` event that the page handles. Playback then stops partway through the article, usually before the body and always before the correction at the end. The button stays at `aria-pressed="true"`.
- Who is affected: Users who rely on read-aloud: people with dyslexia, low vision, learning disabilities, low literacy or fatigue.
- Impact: The listener may hear only the byline, the button label and the incorrect key points (F1), and then silence. Nothing tells them the reading has stopped early. The button still reports "pressed", so they cannot tell it has failed, and they never reach the correction.
- Severity: 2 significant
- Fix: Split the spoken text into one utterance per paragraph (headline, then the body paragraphs) and queue them. Handle `onend` and `onerror` on each, and reset the state after the last one. Per-paragraph utterances also make pause and resume, skip and highlighting of the current paragraph possible (see F6). Tell the user when playback fails, in visible text and in a polite live region.
- Evidence: There is a single `speak()` call on the full `innerText`, with no chunking and no event handlers.
- Needs user testing: yes. Play the full article in Chrome, Edge, Safari and Firefox on desktop and mobile, with the default voice and with network voices, and check that it reaches the last paragraph.

### F11. The toggle's name and pressed state do not clearly say what pressing does
- Where: article.html `<button type="button" id="listen" aria-pressed="false">Listen to this article</button>`
- Problem: Screen readers announce the playing state as "Listen to this article, toggle button, pressed". It is unclear whether "pressed" means it is playing now, or whether pressing again will stop it. The visible label always reads "Listen to this article", even while it is playing, so the only way to stop playback is to press a button labelled "Listen". Under the ARIA APG toggle-button pattern, the label of an `aria-pressed` button must not change with its state. So a label-swap fix such as "Stop listening" cannot simply be added to this button: it would produce "Stop listening, toggle button, pressed".
- Who is affected: Screen-reader users; users with cognitive disabilities; voice-control users, who would say "click Listen" to stop it.
- Impact: Users are unsure how to stop the audio, or press the button again expecting it to restart. Those who rely on the label alone are told the opposite of what the button will do.
- Severity: 1 minor
- Fix: Choose one pattern. Option 1: a plain button without `aria-pressed`, whose label changes between "Listen to this article" and "Stop listening", with a polite live-region message such as "Reading started" or "Reading stopped". Option 2: keep `aria-pressed` with a fixed label such as "Read aloud", and show the state visibly with a style and the words "Playing" next to the button. Do not mix the two.
- Evidence: `aria-pressed` is toggled by the script, the label text is fixed, and no state is styled or described.
- Needs user testing: yes. Test with NVDA, JAWS, VoiceOver, TalkBack and Dragon or Voice Control users whether they can predict what the button does and how to stop it.

Not found: no further problems in the head metadata beyond F2, in the colour and focus styles, the skip link behaviour, the landmark and heading structure, the blockquote markup, or the absence of images, media, forms and charts.
