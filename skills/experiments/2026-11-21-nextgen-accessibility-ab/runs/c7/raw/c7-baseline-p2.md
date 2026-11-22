### F9. Captions appear to leave out speech that the transcript contains
- Where: captions-excerpt.vtt, between the cue ending 00:03:26.000 and the cue starting 00:04:40.000; lecture.html transcript, Okafor's first paragraph
- Problem: Okafor's last cue is "and that's on top of the gap we already had." The transcript goes straight on with "And Friday childcare has fallen on parents, mostly mothers." No cue carries that sentence. The next cue starts 74 seconds later, with Lindqvist's reply. Either that speech was not captioned, or the excerpt has left out cues. The material does not show which.
- Who is affected: Deaf and hard-of-hearing viewers who follow the debate through captions.
- Impact: If the cues are missing, caption users lose one of Okafor's two main arguments (childcare and its effect on mothers) and up to a minute of the debate, with no sign that anything was skipped. This would fail WCAG 1.2.2.
- Severity: 2 (3 if the published captions do lack this speech)
- Fix: Check the full captions.vtt against the audio for 00:03:26 to 00:04:40. Caption every spoken sentence, the chair's interjections included, and add non-speech cues such as "[applause]" or "[pause]" where they carry meaning. Make the captions and the transcript come from the same edited source so they cannot drift apart.
- Evidence: Caption timings at 00:03:22.000–00:03:26.000 and 00:04:40.000, compared with the transcript text "And Friday childcare has fallen on parents, mostly mothers."
- Needs user testing: no. Check the full caption file against the audio.

### F10. The transcript has no descriptions of visual content, so deafblind users have no equivalent of the audio description
- Where: lecture.html, the `<details>` transcript
- Problem: The page offers an audio-described video, which means there is visual content worth describing. The transcript holds only speech, with no descriptions of slides, charts, on-screen text or who is shown. Any figures shown on screen reach no one who cannot see the video.
- Who is affected: Deafblind users reading with a braille display, who can use neither the captions nor the audio description, and blind users who prefer text to audio.
- Impact: These users miss any visual information the description adds. A descriptive transcript is the only format that serves them (WCAG 1.2.8, AAA; the purpose behind 1.2.3).
- Severity: 2
- Fix: Publish a descriptive transcript that adds the audio-description content in brackets at the right points (for example "[Slide: reading scores in pilot districts, 2024 to 2026]"). Link it next to the audio-described version.
- Evidence: Line 125 (audio-described version offered) and lines 134–139 (speech only).
- Needs user testing: yes. Test with deafblind braille users whether the descriptive transcript gives them the full debate.

### F11. A 58-minute recording has no chapters or way to jump to a point
- Where: lecture.html, `<video>` element (only a `kind="captions"` track) and the transcript (no timestamps or links)
- Problem: There is no `kind="chapters"` track, no table of contents with timestamps, and no transcript links that move the video to a point. The only way to find a section is to drag or step through the native seek slider.
- Who is affected: Keyboard and switch users and people with tremor, for whom fine seeking is slow or impossible; screen-reader users, who hear the slider only as a time value; people with cognitive or memory impairments who need to go back to a point or follow the structure.
- Impact: Finding one speaker's argument or the closing remarks in nearly an hour of video takes a lot of effort, or fails.
- Severity: 1
- Fix: Add a chapters track (for example "Introduction", "Dr Okafor's opening", "Professor Lindqvist's reply", "Discussion", "Chair's close"). Add a visible list of chapters with timestamps as buttons that seek the video, and put timestamp links in the transcript.
- Evidence: Line 123 has only a captions track. The intro paragraph gives "58 minutes".
- Needs user testing: yes. Test seeking by keyboard, by switch and with a screen reader.

### F12. The video has no accessible name
- Where: lecture.html, `<video controls preload="metadata" poster="poster.jpg">`
- Problem: The `<video>` has no `aria-label` or `aria-labelledby`. Screen readers announce only "video" or "media", and the poster image has no text alternative.
- Who is affected: Screen-reader users, particularly on pages or in element lists that hold more than one media item.
- Impact: Users are not told which recording the player holds, or that it is the main content of the page.
- Severity: 1
- Fix: Add `aria-labelledby` pointing at the `<h1>` (give the `<h1>` an id), or add `aria-label="Debate recording: should the four-day school week be scrapped?"`.
- Evidence: Line 121.
- Needs user testing: no

### F13. The collapsed transcript is hidden from find-in-page in some browsers
- Where: lecture.html, `<details>` with no `open` attribute
- Problem: When the transcript is collapsed, its text is not rendered. Browsers that do not open `<details>` automatically to show a find-in-page match will not find words in the transcript. Some readers' and translation tools also skip collapsed content.
- Who is affected: People with cognitive, memory or reading disabilities who use Ctrl+F to find a topic, and users of translation, reader-mode or text-to-speech extensions.
- Impact: A search for "childcare" or "secondary" either finds nothing or finds only the incorrect AI summary. This strengthens the steering problem in F4.
- Severity: 1
- Fix: Show the transcript expanded by default (`<details open>`), or as an ordinary section under its own heading.
- Evidence: Line 133.
- Needs user testing: yes. Test find-in-page and common reading extensions in Chrome, Firefox and Safari.

### F14. No sign language interpretation for a public debate
- Where: lecture.html, media alternatives (captions, transcript and audio description are offered; no sign language)
- Problem: The page offers no BSL-interpreted version, and does not say whether one is available.
- Who is affected: Deaf people whose first language is BSL. For many of them, written English captions and transcripts are a second language and harder to follow at speed.
- Impact: These users get the debate only in their second language. The only plain short version on offer, the AI summary, is wrong (F1).
- Severity: 1
- Fix: Provide a BSL-interpreted version of the recording (WCAG 1.2.6, AAA; expected for public-engagement events), or say on the page how to request one.
- Evidence: Lines 121–125. Only captions and audio description are linked.
- Needs user testing: yes. Test with BSL users whether the interpreted version and its placement on the page work for them.

Not found: In this pass I also checked these areas and found nothing new to report: WebVTT syntax and voice-tag closure; caption line length; `srclang="en"` against `lang="en-GB"` (consistent enough); the landmarks (`header`, `main`, `footer`); the absence of a skip link (not needed with two header links); the size of the meta text (.9rem at line-height 1.6); and the consistency of speaker names between the intro and the transcript.
