### F1. The AI "At a glance" summary contradicts the release it summarises
- Where: bulletin.html, `section.glance`, the three `<li>` items
- Problem: The summary says "Employment fell sharply this quarter, with nearly 50,000 fewer people in work." The release says the fall was 41,000, "within the sampling variability of the survey and is not statistically significant", with a confidence interval of "plus or minus 96,000". The summary says "The employment rate dropped to 74.1%, its lowest level in two years". The table shows 74.0 for "Jul to Sep 2024", which is lower, so the claim is false within the period charted. The summary says "Unemployment rose to 4.6%". The release says "The unemployment rate was estimated at 4.4%, unchanged on the quarter." The summary also leaves out the warning that "estimates should be treated with caution".
- Who is affected: People who read only the summary. This includes people with cognitive or learning disabilities and people with fatigue, who are told summaries are the easy way in. It also includes screen-reader users, who meet the bordered "At a glance" region landmark first and often stop there.
- Impact: Disabled users are given a different and wrong set of official statistics, with an invented fall, a false record low and a wrong unemployment rate. Users who read the full text get the correct figures, so the accessible route is the one that misinforms. Users who notice the conflict cannot tell which figures are right, and that burdens memory and comprehension.
- Severity: 3
- Fix: Do not publish machine-generated figures for official statistics without statistician sign-off against the release. Write the summary by hand, or check it against the release: "Employment fell by an estimated 41,000, but this change is not statistically significant. The employment rate was 74.1%, down 0.2 percentage points. Unemployment was 4.4%, unchanged. Treat these estimates with caution because of low survey response." Add an automated check that every number in the summary appears in the release data.
- Evidence: The `<li>` text compared with the "Main points" paragraphs and the table row `Jul to Sep 2024 | 74.0`.
- Needs user testing: yes. Test which section users with cognitive disabilities and screen-reader users rely on, and what figures they recall afterwards.

### F2. The audio briefing comes from a pre-release draft and gives wrong or unqualified figures
- Where: audio-briefing.txt (and, by implication, audio-briefing.mp3)
- Problem: The file says "Generated 10 November 2026 from the pre-release draft", a day before the release on 11 November. It says "Unemployment rose to 4.6 per cent" (the release says 4.4%, unchanged) and "the lowest for two years" (the table contradicts this). It does not say that the employment fall is not statistically significant. It adds an unsourced claim, "Economists say the jobs market is cooling". It says "today's" but never names the period (July to September 2026), and it ends with "Find out more on our website", with no address.
- Who is affected: Blind and partially sighted users, people with dyslexia or low literacy, and people with cognitive disabilities who choose audio as their accessible format.
- Impact: The audio format gives a different and wrong account of official statistics. Its commentary is unattributed, and its time reference becomes meaningless when the clip is replayed or shared later. Listeners cannot check or skim figures they have heard.
- Severity: 3
- Fix: Regenerate the audio from the published, signed-off release text, never from a draft. Name the period and the release date. State the significance caveat and the quality warning. Remove the unsourced commentary or attribute it. Give a specific next step, such as "the full bulletin and data table are on the same page as this audio". Check the script against the release before publication.
- Evidence: The script header, its unemployment and "lowest for two years" lines, and the bulletin's Main points and table.
- Needs user testing: yes. Test whether listeners understand the uncertainty and the time period from the audio alone.

### F3. AI generation and the synthetic voice are disclosed too weakly, too late or not at all
- Where: bulletin.html, `<p><small>Summary generated with AI from this release.</small></p>`; the button `Audio briefing (1 minute)`
- Problem: The disclosure comes after the summary, in `<small>` text, and does not say whether a person checked the summary. It does not say that the Main points are the authoritative version, and it gives no route to report errors. The summary is styled as the most prominent content on the page, with a 2px border and a top position. Nothing tells users that the audio uses a synthetic voice or that its script is machine-generated.
- Who is affected: Screen-reader users and people with cognitive disabilities, who read in order and may not reach or notice the small line. Low-vision users miss small text at the end of a box. Users of the audio are told nothing.
- Impact: Users trust a machine summary as if it were the official statistics. That trust is misplaced here (F1, F2).
- Severity: 2
- Fix: Put the disclosure before the summary, at body-text size: "This summary was produced with AI and checked by a statistician on [date]. If it differs from the main points below, the main points are correct. Report an error." Label the audio as well: "Audio briefing, synthetic voice (about 25 seconds)". Better still, put the human-written Main points first.
- Evidence: The position of the `<small>` element and the button label.
- Needs user testing: yes. Test whether users notice the disclosure and understand which text is authoritative.

### F4. The audio button gives no control, no state and no feedback, and repeated clicks overlap
- Where: bulletin.html, `<script>`: `document.getElementById('audio').addEventListener('click', () => new Audio('audio-briefing.mp3').play());`
- Problem: Each click creates a new `Audio` object, so a second click starts a second copy over the first. There is no pause, stop or volume control. The button does not change state (no `aria-pressed`, no label change) and no status message is announced. A rejected `play()` promise or a missing file fails silently. The button does not warn that sound will start at once.
- Who is affected: Screen-reader users, whose own speech collides with the briefing and who cannot easily find a way to stop it. Users with cognitive or attention disabilities and users with hearing aids are also affected, as is any keyboard user who presses the button twice.
- Impact: Users cannot stop or pause the audio, and they hear overlapping speech. They get no confirmation that playback started or failed. A stop control is the practice that WCAG 1.4.2 and 2.2.2 set out, and it is missing here.
- Severity: 2
- Fix: Use a single `<audio controls preload="none" src="audio-briefing.mp3">` element, which has native keyboard-accessible play, pause, seek and volume. Alternatively, make the button a toggle with `aria-pressed` and the label "Play"/"Pause audio briefing", reuse one `Audio` instance, and handle `play()` errors with a visible message and a `role="status"` message.
- Evidence: The click handler shown.
- Needs user testing: yes. Test with NVDA, JAWS, VoiceOver and TalkBack whether users can start, pause and stop the audio, and whether the speech collides with their screen reader.

### F5. The stated duration does not match the script
- Where: bulletin.html, button text "Audio briefing (1 minute)"
- Problem: The script is about 60 words, which takes roughly 20 to 30 seconds at synthetic-speech rates, not "1 minute". The two may come from different versions of the audio.
- Who is affected: People who plan their attention or energy around stated durations, such as people with cognitive disabilities or fatigue. Screen-reader users who want to know how long the audio will talk over their reader are also affected.
- Impact: Users get misleading expectations, which is also a sign that the audio, the script and the label are not kept in step.
- Severity: 1
- Fix: Take the duration from the actual MP3 at build time, and state it as "about 25 seconds".
- Evidence: The word count of audio-briefing.txt compared with the label.
- Needs user testing: no

### F6. The transcript is not shown to be equivalent to the audio and is served as a raw text file
- Where: bulletin.html, `<a href="audio-briefing.txt">Audio briefing script</a>`; audio-briefing.txt
- Problem: The link goes to a script "as generated", with the header "Generated 10 November 2026 from the pre-release draft". Nothing shows that it matches the published MP3. It opens as plain `.txt`, with no language declared, no page title and no link back. The link text "script" does not tell users it is the transcript.
- Who is affected: Deaf and hard-of-hearing users and deafblind braille users, for whom the transcript is the only access to the audio (WCAG 1.2.1). Screen-reader users who reach a bare text file with no navigation are also affected.
- Impact: Users may read text that differs from what hearing users hear. The internal "pre-release draft" header confuses them, and the raw file gives no way back.
- Severity: 2
- Fix: Publish the transcript as an HTML section on the same page, or as a linked HTML page with `lang="en-GB"`, generated from the same signed-off text as the audio. Label it "Audio briefing transcript". Remove the internal generation header.
- Evidence: The header line of the script and the link markup.
- Needs user testing: yes. Compare the MP3 word for word with the transcript.

### F7. The chart's text alternative leaves out the trend, and the cropped axis exaggerates the fall
- Where: bulletin.html, `<img src="chart-employment.png" alt="...The rate ends at 74.1%...">` and the `<figcaption>`
- Problem: The alt text gives only the end value. It does not describe the shape of the line, which is the point of the chart: a rise to a peak of 74.5% in July to September 2025, then a gentle fall to 74.1%, with a range of only 0.5 points. The caption says "The vertical axis starts at 73.5%". A 0.2-point change will therefore look like a steep drop, which echoes the AI summary's "fell sharply", but the text does not explain this.
- Who is affected: Blind users, who do not get the equivalent of what the chart shows. Sighted users with cognitive or numeracy difficulties may read the cropped axis as a large fall.
- Impact: Blind users lose information. Sighted users get a misleading visual impression.
- Severity: 2
- Fix: Use an alt text such as "Line chart. The employment rate rose from 74.0% in July to September 2024 to a peak of 74.5% a year later, then eased to 74.1%. All values lie between 74.0% and 74.5%. Figures are in the table below." Start the axis at a point that does not exaggerate small changes, or add a plain warning, and show confidence intervals.
- Evidence: The alt attribute, the figcaption and the table values.
- Needs user testing: yes. Test what blind users and users with low numeracy take away about the size of the change.

### F8. Statistical terms are not explained in plain language
- Where: bulletin.html, Main points: "sampling variability", "not statistically significant", "95% confidence interval for this change is plus or minus 96,000", "percentage points", "seasonally adjusted"
- Problem: These terms carry the meaning of the release, which is that the fall may not be real, but the page does not define or explain them (WCAG 3.1.3 and 3.1.5 at AAA, plain-language practice).
- Who is affected: People with cognitive or learning disabilities, low literacy or low numeracy, and people reading in a second language or a sign-language user's second language.
- Impact: These users cannot understand the key caveat, so they fall back on the misleading summary.
- Severity: 2
- Fix: Add plain-language glosses, for example: "This fall is small enough that it could be due to chance in who answered the survey. The true change could be anywhere from a fall of 137,000 to a rise of 55,000." Link the terms to a glossary.
- Evidence: The quoted Main points text.
- Needs user testing: yes. Test comprehension with users who have cognitive disabilities.

### F9. The data table's period abbreviations and missing context
- Where: bulletin.html, table row headers "Jul to Sep 2024" and similar
- Problem: The row headers abbreviate month names. Some screen readers read "Sep" literally or with an odd pronunciation (WCAG 3.1.4 at AAA). The table is not associated with the figure and gives no change or uncertainty values.
- Who is affected: Screen-reader users and people with cognitive disabilities.
- Impact: The table is slightly harder to listen to, and users cannot read the uncertainty from it.
- Severity: 1
- Fix: Use full month names ("July to September 2024") or `<abbr title="September">`. Consider adding a change column with confidence intervals.
- Evidence: The table markup.
- Needs user testing: no

Not found: The document language (`lang="en-GB"`), page title, viewport and reflow settings. The single `h1` and logical `h2` structure, and the landmarks (`header`, `main`, `footer`). The table markup (`caption`, `scope="col"`, `scope="row"`). Text and link contrast (#1a1a1a and #0b4f8a on white). The visible focus indicator (3px `:focus-visible`). The native `<button>` element and its accessible name. That the chart has a data-table equivalent. The figure captioning. The accessibility statement link in the footer (the statement itself was not supplied).
