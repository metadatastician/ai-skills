### F10. The audio briefing sits outside the heading structure, so heading navigation skips it
- Where: bulletin.html, `<p><button type="button" id="audio">Audio briefing (1 minute)</button> <a href="audio-briefing.txt">Audio briefing script</a></p>`, between the "At a glance" section and `<h2>Main points</h2>`
- Problem: The audio control and its transcript link are in a bare paragraph with no heading and no landmark. A screen-reader user who moves by headings (H key, rotor) goes from "At a glance" straight to "Main points" and never hears that an audio briefing exists. The button's accessible name, "Audio briefing (1 minute)", names a thing and not an action, so it does not say that pressing it will start sound.
- Who is affected: Screen-reader users who navigate by headings or landmarks. Users with cognitive disabilities who scan headings to find the format they want.
- Impact: The alternative format is easy to miss for the users most likely to want it, and pressing the button starts speech without warning.
- Severity: 1
- Fix: Give the audio its own section, for example `<section aria-labelledby="audio-h"><h2 id="audio-h">Listen to this release</h2>`, holding the player and the transcript link. Name the control with its action: "Play audio briefing, synthetic voice, about 25 seconds".
- Evidence: The position of the paragraph in the markup and the button text.
- Needs user testing: yes. Test whether NVDA, JAWS and VoiceOver users who navigate by headings find the audio briefing.

### F11. The audio button does nothing without JavaScript, and there is no direct link to the audio file or speed control
- Where: bulletin.html, the `<button id="audio">` and the `<script>` block; the only reference to `audio-briefing.mp3` is inside the script
- Problem: The button is in the static HTML, but it only works through `new Audio('audio-briefing.mp3').play()`. If the script fails to load, is blocked, or runs in a reader mode or a simplified browser, the button stays on the page and does nothing. No link to the MP3 is given, so users cannot open it in their own player. The `Audio` object gives no playback-rate control.
- Who is affected: Blind and partially sighted users and people with dyslexia, who often use their own media player at a set speed. People with cognitive or processing disabilities, who may need to slow the audio down. Users of reader modes, simplified browsers or assistive browsers.
- Impact: Some users meet a control that does nothing and do not know why. Others cannot replay the audio at a speed they can follow or keep it to listen again.
- Severity: 1
- Fix: Use a native `<audio controls preload="none">` element with a `<source src="audio-briefing.mp3" type="audio/mpeg">` and a fallback download link inside it. Add a visible "Download audio (MP3, 0.4 MB)" link next to the transcript link. Offer a playback-speed control in any custom player.
- Evidence: The script is the only place the MP3 is referenced, and the button has no fallback behaviour.
- Needs user testing: yes. Test with JavaScript disabled, in reader mode, and with users who change playback speed.

### F12. The "Official statistics" label lends the AI summary and the audio the status of the release
- Where: bulletin.html, `<p>Official statistics. Released 11 November 2026...</p>` directly above `section.glance`, and the audio button below it
- Problem: The page labels itself "Official statistics" at the top. It does not say that the AI summary and the audio briefing are outside that status, so they appear to carry it. Both give figures that differ from the release (F1, F2).
- Who is affected: People with cognitive or learning disabilities, people with low numeracy, and screen-reader users who read in order. Each of these groups is more likely to take the label at face value and use the first or easiest format.
- Impact: Users are led to treat wrong, machine-made figures as official, quotable statistics. They may repeat them or act on them, for example in benefit, job or advocacy decisions.
- Severity: 2
- Fix: Put the "Official statistics" designation on the human-checked release content, for example the "Main points" heading and the table. State next to the summary and the audio: "This summary and audio are not part of the official statistics. The main points and data table are the official figures."
- Evidence: The status line's position directly above the AI section, and no statement anywhere on the page that limits its scope.
- Needs user testing: yes. Test which figures users believe are official after reading or listening to only the first content they meet.
