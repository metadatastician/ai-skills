### F1. The AI "At a glance" summary changes two numbers and drops the critical hedge, and it is the first content people meet
- Where: bulletin.html, `section.glance`, which comes before "Main points"
- Problem: Against the release text on the same page: "nearly 50,000 fewer people in work" changes the stated fall of 41,000 (changed number). "Unemployment rose to 4.6%" contradicts "estimated at 4.4%, unchanged on the quarter" (changed number and changed direction). "Fell sharply" removes the hedges "not statistically significant", "within the sampling variability" and the confidence interval of plus or minus 96,000. That interval means the 41,000 fall is consistent with a rise. The low-response-rate caution is also gone. Under the outcome codes this summary is Unfaithful: items are changed, critical hedges are dropped and "sharply" is a new characterisation. It should be withheld, not shown. Because it sits above the main points, anyone reading in order (with a screen reader, by heading navigation, or with magnification on a narrow viewport) gets the wrong figures first and the correct ones later, unreconciled. The page states two different unemployment figures, and nothing tells the reader which one is right.
- Who is affected: Readers who rely on the short version rather than the dense paragraphs. This includes cognitive-access and low-literacy readers, screen reader users who skim by heading, and anyone with limited time or energy. The summary exists for these readers.
- Impact: Readers come away misinformed about official statistics: a larger fall, a false rise in unemployment, and certainty where the office states none. Errors in official statistics spread when they are quoted.
- Severity: 3
- Fix: Withhold the summary until it passes a check. Write a must-survive declaration that marks the figures (41,000; 74.1%; 4.4% unchanged) and the hedges (not statistically significant; plus or minus 96,000; low response rates, treat with caution) as critical. Regenerate the summary from the published release, check it against the declaration, and show it only as Checked. If it is kept, place it after or beside the authoritative text, or make it link to that text.
- Evidence: bulletin.html line "Employment fell sharply this quarter, with nearly 50,000 fewer people in work" and "Unemployment rose to 4.6%". Compare "fell by 41,000 ... plus or minus 96,000", "4.4%, unchanged on the quarter" and "not statistically significant". (That AI news answers distort content is TESTED in BBC 2025. That AI accessibility adaptations break declared items at material rates is OPEN. This case is one instance, not a rate.)
- Needs disabled readers: yes. Test whether readers who use the summary or the audio, rather than the full text, correctly state the change in employment, the unemployment rate and whether the change is significant. Also test which figure they trust when the page shows both.

### F2. The audio briefing was made from the pre-release draft, a chain fault, and it adds claims the release does not make
- Where: audio-briefing.txt ("Generated 10 November 2026 from the pre-release draft"); the audio-briefing.mp3 played by the button
- Problem: The version was made from an older original, not from the published release of 11 November. Principle 1 calls this a chain fault. It repeats "Unemployment rose to 4.6 per cent", which conflicts with the published 4.4%, unchanged. "The lowest for two years" is a new factual claim, and the page's own table contradicts it: Jul to Sep 2024 is 74.0, lower than 74.1. "Economists say the jobs market is cooling" is a new, unattributed opinion. The release contains no such attribution, so the line blurs fact and opinion. Every hedge and the response-rate caution are dropped, with no sign of the cut. "Find out more on our website" gives listeners no route back to the caveats. The AI summary's 4.6% matches the draft-based script. That suggests the summary may also descend from the draft or from the script, not "from this release" as its note says. This cannot be established from the material.
- Who is affected: Blind and partially sighted listeners, readers with dyslexia or low literacy, and anyone who chooses audio. People who cannot easily cross-check the audio against the page carry the error unchallenged.
- Impact: Readers are misinformed through the channel offered as the accessible route. Audio is linear and hard to re-check, so the errors are harder to catch than on the page.
- Severity: 3
- Fix: Regenerate the script and the audio from the published release, never from the draft or from another version. Check it against the declaration. Remove the unsupported claims or attribute them properly. Keep the significance caveat in speech. Withhold the briefing until it passes.
- Evidence: Script header line; script lines on 4.6 per cent, "lowest for two years" and "Economists say"; the table row "Jul to Sep 2024 | 74.0".
- Needs disabled readers: yes. Test with listeners who use audio as their main route whether they leave with correct figures and the significance caveat. Also test whether they notice and resolve any conflict with the page.

### F3. The labels are self-awarded or missing, and the AI note is placed where people are least likely to meet it
- Where: `<p><small>Summary generated with AI from this release.</small></p>` at the end of the glance box; the audio button and script carry no label
- Problem: The note is a tool's claim about itself: "from this release" is unverified, and F2 suggests it may be false. The note marks machine involvement (the Article 50 kind of mark) but not what changed, and the summary has had no check, so its honest label is Unchecked. The note sits in `<small>` after the bullets. A reader moving in order hears or reads the figures before learning they are machine-made and unchecked. People using magnification or low vision see it in reduced type. The audio has no machine mark or provenance in speech at all, and only the linked text file says "from the pre-release draft".
- Who is affected: Screen reader users reading in order, magnifier and low-vision users, cognitive-access readers who may not connect a small trailing note with the list above it, and audio listeners who get no mark at all.
- Impact: People read machine output with the authority of an official statistics page. The provenance that would prompt caution is either missing or met too late.
- Severity: 2
- Fix: Put a label before each version, in normal-size text and spoken at the start of the audio. Say which label it carries, what it was made from and when, and who checked it. Do not award Checked without a recorded check against the declaration.
- Evidence: bulletin.html glance markup order; audio-briefing.txt contains no spoken provenance; the theory says "A version cannot award itself a label".
- Needs disabled readers: yes. Test whether label placement and wording are noticed and understood before the content, both by screen reader and in audio. Part of this rests on "labels improve reader outcomes", which is OPEN.

### F4. The page looks exemplary to automated and agent checks, but its main barriers are ones no such check can see
- Where: bulletin.html as a whole
- Problem: The machine-checkable slice is clean: `lang`, `title`, alt text present, table caption and `scope`, visible focus, strong contrast and a labelled region. An automated scan or an agent reading the code would likely rate this page highly. Every serious barrier here is outside that slice. These are the numeric contradictions between versions, dropped hedges, a chain fault in the audio, unsupported claims, the reading level of the main points, and whether the audio duration and contents match what is announced. None of these block an agent from parsing the page. An agent would even repeat the wrong figures fluently. This is the alignment gap in concrete form: optimising for what software can check would leave this page as it is. That the commonest barriers block people but not agents is DESIGNED, not tested. This case is consistent with that claim but does not test it.
- Who is affected: Everyone who relies on the adapted versions (see F1 and F2), and anyone who treats a passing scan as evidence the page is accessible.
- Impact: A false sense that the page is accessible, while its accessible versions misinform.
- Severity: 2
- Fix: Do not treat an automated result as conformance or as evidence of fidelity. Add a fidelity check of each version against the declaration and a human review of reading level and of the audio against its script, and record both alongside any automated result.
- Evidence: Markup as given. The theory notes that the best automated tool in GDS's 2017 test found 41% of 143 planted barriers, and that automated tools cannot count caption accuracy, reading level, cognitive load or timing.
- Needs disabled readers: no. This is a limit of method. The underlying barriers are covered in F1, F2 and F5.

### F5. The authoritative text sits at a high reading level, so the plain versions are the only route for some readers, and those are the unfaithful ones
- Where: bulletin.html, "Main points"
- Problem: "Sampling variability", "not statistically significant", "95% confidence interval for this change is plus or minus 96,000" and "percentage points" assume statistical literacy, and no plain explanation is given. The caveat that matters most, that the fall may not be real, is stated only in this language. Readers who cannot use it are pushed to the AI summary and the audio, which drop that caveat (F1, F2). Neither an agent nor an automated tool flags this. A plain-language explanation added for readers, such as "the survey cannot tell whether employment really fell", would be an explanation, not a new claim.
- Who is affected: People with cognitive or learning disabilities, people with low literacy or numeracy, and readers using English as a second language.
- Impact: The uncertainty never reaches the readers least able to recover it on their own.
- Severity: 2
- Fix: Add a short plain-language sentence in the main points that carries the significance caveat and the meaning of the interval. Include it in the declaration as critical so that every version keeps it.
- Evidence: The quoted phrases in "Main points"; the summary and the script omit them.
- Needs disabled readers: yes. Test whether readers with cognitive disabilities or low numeracy can say, after reading, whether employment definitely fell.

### F6. The chart's visual message differs from what is announced: the truncated axis shows drama, the alt text is flat
- Where: `<figure>` with `chart-employment.png`; the figcaption "The vertical axis starts at 73.5%"
- Problem: A y-axis that starts at 73.5% makes a 0.2-point move look steep to sighted readers. That matches the summary's "fell sharply", not the release's "not statistically significant". The alt text says only that the line "ends at 74.1%". Screen reader users therefore get a neutral account, while sighted users, including magnifier and cognitive-access users who rely on the visual, get an exaggerated one. The axis disclosure in the figcaption requires the reader to work out the effect themselves, which is a cognitive-load burden. An agent reading the alt text and table is not misled. People looking at the image may be. (That this kind of barrier blocks people but not agents is DESIGNED, not tested.)
- Who is affected: Sighted cognitive-access users, magnifier users who see part of the chart at a time, and anyone comparing notes across sighted and screen reader routes.
- Impact: People get different impressions of the same data depending on how they access it. The visual route misleads in the same direction as the unfaithful summary.
- Severity: 1
- Fix: Start the axis at a value that does not exaggerate the change, or state the effect in the caption in plain words, for example: "the change is small (0.2 points) and not statistically significant". Keep the alt text and caption consistent with that message.
- Evidence: The figcaption; the alt text; the table values, which range from 74.0 to 74.5.
- Needs disabled readers: yes. Test whether sighted cognitive-access and magnifier users and screen reader users reach the same understanding of the size of the change.

### F7. The audio control plays over assistive technology with no stop or pause, no state announcement, and an inaccurate duration
- Where: `<button id="audio">Audio briefing (1 minute)</button>` and its script `new Audio('audio-briefing.mp3').play()`
- Problem: Pressing the button starts audio with no visible or programmatic state, no pause or stop control, and no way to replay one part. Pressing it again starts a second overlapping copy. Screen reader users hear synthetic voice over their screen reader's speech, with no means to stop it except leaving the page or muting the system. The label promises "1 minute". The script has about 60 words, roughly 25 to 30 seconds at a typical synthetic rate, so the announced timing does not match. Readers who plan around timing, such as people with fatigue or attention-related disabilities, are given inaccurate information. Whether the mp3 matches the script cannot be established from the material.
- Who is affected: Screen reader users, people with cognitive or attention-related disabilities, and switch and voice-control users who need a reachable stop control.
- Impact: Competing audio makes both the briefing and the page hard to follow, and the only exits are disruptive.
- Severity: 2
- Fix: Use a native `<audio controls>` element, or a single toggle button that exposes its playing or paused state. Prevent overlapping playback. State the real duration. Check that the mp3 matches the published script.
- Evidence: Inline script; button label; word count of audio-briefing.txt.
- Needs disabled readers: yes. Test with screen reader, switch and voice-control users whether they can start, pause, stop and replay the briefing without the speech colliding.

### F8. The reverse case: the chart blocks agents but not people, and an agent-aimed fix would add noise
- Where: `chart-employment.png` and its alt text; the data table
- Problem: An agent reading the code gets only the alt text's end value from the chart. Sighted people get the whole series from the image, and screen reader users get it from the table. A tempting fix aimed at agents would put all nine values in the alt text, or add hidden structured data restating the headline figures. Both would duplicate the table for screen reader users, making the page longer and noisier. If the restated figures were generated from the AI summary, they would also spread its wrong numbers (F1). The current split, with a short alt text that points to the table, serves people. The agent's gap is already closed by the table.
- Who is affected: Screen reader users, who would hear duplicated or conflicting figures, and cognitive-access users, who would face extra length.
- Impact: This is potential harm, not present harm. It is recorded so that agent-readiness work does not undo a good pattern.
- Severity: 1
- Fix: Keep the alt text short and pointing to the table. If machine-readable data is wanted, publish it from the release data itself as a separate download, never from a generated version, and never as hidden or duplicated page text.
- Evidence: The alt text "Full figures are in the table below"; the table markup.
- Needs disabled readers: no

Not found: no JSON-LD or other structured data, no hidden text aimed at agents or search, no keyword-stuffed or verbose accessible names, no ARIA added for "AI readiness", no live regions, no automated score, badge or conformance claim on the page (the content of /accessibility was not provided), no must-survive declaration, and no evidence that any version was checked by a person.
