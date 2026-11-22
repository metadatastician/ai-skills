### F1. The summary and the audio both give the unemployment rate as 4.6% and rising; the release says 4.4%, unchanged
- Where: `bulletin.html` "At a glance" item 3; `audio-briefing.txt` line "Unemployment rose to 4.6 per cent."; compared with "Main points".
- Problem: Both versions change the value and the direction of the headline unemployment figure. Outcome code: changed. Under the theory either change alone makes a version Unfaithful, so neither version should be offered. The page shows two unemployment figures and does not say which one is authoritative.
  - Original: "The unemployment rate was estimated at 4.4%, unchanged on the quarter."
  - At a glance: "Unemployment rose to 4.6%."
  - Audio: "Unemployment rose to 4.6 per cent."
- Who is affected: Anyone who reads the summary box, which comes before "Main points" in reading order, and anyone who listens to the audio or reads its script. This may include screen-reader users reading in order, listeners who are blind or partially sighted, and readers who use short summaries. Readers on the audio path never meet the published figure.
- Impact: Readers are told that unemployment rose when the release says it did not. Readers who see both figures get no help resolving the conflict.
- Severity: 3
- Fix: Withhold both versions now and show them as Withheld. Rebuild each from the published release, check it against a must-survive declaration that marks the headline figures and their direction as critical, and publish a correction note if the faulty versions have already gone out.
- Evidence: The three quoted lines. This is one observed instance. It does not show a rate (that claim is OPEN).
- Needs disabled readers: no. The mismatch is settled by comparing the texts. F11 covers testing what readers take away.

### F2. Both versions silently drop the significance hedge, the confidence interval and the office's quality warning
- Where: All of "At a glance"; all of `audio-briefing.txt`.
- Problem: Neither version keeps the hedges or the caution, and neither says anything was cut. Outcome code: dropped (silent). The page publishes no declaration. The fidelity reviewer's weights, which mark these items as critical, are a reasonable reading but remain provisional until the author declares them. If they are critical, each version is Unfaithful on this ground alone. The interval (plus or minus 96,000) is wider than the fall (41,000), so the release does not establish that employment fell at all.
  - Original: "The change is within the sampling variability of the survey and is not statistically significant." / "The 95% confidence interval for this change is plus or minus 96,000." / "Response rates to the Labour Force Survey remain low, and estimates should be treated with caution."
  - At a glance and audio: no hedge, interval or caution anywhere. The audio's only route back is "Find out more on our website."
- Who is affected: Every reader of either version. Listeners may be hit hardest, because audio is linear and the script points nowhere specific.
- Impact: Every figure reads as certain, including a change the office says may be sampling noise.
- Severity: 3
- Fix: The author declares the hedge, the interval and the caution. Every version carries a short form of each, or is Withheld.
- Evidence: The quoted lines, and the absence of any hedge in the glance list and the script.
- Needs disabled readers: yes. Test with people who use the summary or the audio, including people with cognitive disabilities or low numeracy, screen-reader users and audio listeners, which short wording of "not statistically significant" and "treat with caution" leaves them correctly informed that the fall may not be real. Whether giving the tool the declaration improves fidelity is OPEN.

### F3. The summary raises the employment fall from 41,000 to "nearly 50,000" and calls it sharp
- Where: "At a glance" item 1.
- Problem: The number is changed, and "sharply" adds a characterisation that contradicts the release's own statement that the change is not significant. Outcome codes: changed (number), plus a new claim ("sharply"). The audio keeps "around 41,000", so this distortion is in the summary only.
  - Original: "The estimated number of people in employment fell by 41,000 on the quarter."
  - At a glance: "Employment fell sharply this quarter, with nearly 50,000 fewer people in work."
- Who is affected: Readers of the summary box.
- Impact: A small fall that may not be real is presented as a large, certain one, with a figure about a fifth higher than the published one. Nothing on the page supports 50,000.
- Severity: 3
- Fix: Withhold the summary. Rebuild it from the release, for example "Employment is estimated to have fallen by 41,000. This change is not statistically significant.", and check it before showing it.
- Evidence: The two quoted lines.
- Needs disabled readers: no.

### F4. The audio script was generated from the pre-release draft, not from the published release
- Where: `audio-briefing.txt` header; the "Audio briefing (1 minute)" button.
- Problem: This is a chain fault under principle 1: the version was made from an older original. Nothing on the page or in the audio tells the listener this. Only the linked script file says it. The script link is also the text alternative to the audio, so the draft-based content reaches people who read the script as well. The 4.6% figure (F1) is consistent with a draft value that changed before release, but no draft is available, so that cannot be confirmed.
  - Original: "Official statistics. Released 11 November 2026."
  - Script: "Audio briefing script. Generated 10 November 2026 from the pre-release draft."
- Who is affected: Listeners to the audio, and readers who use the script instead, for example Deaf and hard-of-hearing readers.
- Impact: Anything that changed between the draft and the release cannot be recovered downstream, and listeners cannot tell that the briefing predates the published figures.
- Severity: 3
- Fix: Regenerate the script and the audio from the published release, from the same checked text. Record the source release, the date and the check next to the button and at the start of the audio. Block publishing any version whose source is not the current original.
- Evidence: The two quoted lines. The audio file itself was not supplied, so it is not established that the MP3 matches the script.
- Needs disabled readers: no.

### F5. The audio adds "Economists say the jobs market is cooling", which the release does not contain
- Where: `audio-briefing.txt`, second-to-last spoken line.
- Problem: This is a new claim with no source in the original. It is opinion framed as reported fact, attributed only to unnamed "economists", inside a briefing introduced as "today's labour market figures from the National Statistics Office". The release's only interpretation, "not statistically significant" and "treated with caution", points the other way. A new claim makes the version Unfaithful. Two reviewers called this a misattribution. That goes further than the evidence: the line names a source, even if a vague one. The material shows an unsupported addition voiced inside an official briefing.
- Who is affected: Listeners, and readers of the script.
- Impact: An official statistics briefing states a judgement that its own release does not support.
- Severity: 3
- Fix: Remove the line. Keep commentary out of the official-statistics briefing, or attribute it to a named, cited source outside it.
- Evidence: The script line. The release text contains no such statement.
- Needs disabled readers: no.

### F6. The AI labels are self-awarded, incomplete, placed after the content, or missing
- Where: `<p><small>Summary generated with AI from this release.</small></p>` at the end of the glance box; the audio button and script link, which carry no label.
- Problem: The summary's note is a tool's claim about itself, and it is not evidence of its source. "From this release" is doubtful: the summary shares the 4.6% error with the draft-based audio script and does not carry the published figure. That link is circumstantial, because no draft is available. The note marks machine involvement (the Article 50 kind of mark) but not what changed, who checked it, or its label. Its honest label is Unchecked, and on content (F1 to F3) it should be Withheld. The note comes after the bullets, in `<small>` text, and the box sits directly under "Official statistics", so the machine text appears to carry official status. The audio carries no mark at all, visible or spoken: it does not say the voice is synthetic, the script machine-made, or the source a draft.
- Who is affected: Every reader of the summary, especially readers who meet the claims before the trailing note (reading in order with a screen reader) or who miss small text (low vision, magnification). Listeners, who get no mark at all.
- Impact: Machine output reaches readers with the authority of the official release, and the provenance that would prompt caution is missing or comes too late.
- Severity: 2
- Fix: Put a label before each version, in normal-size text, and speak it at the start of the audio. State the label (Unchecked, Checked or Withheld), what the version was made from, when, by which tool, and who checked it. Award Checked only after a recorded check against the declaration. Separate the AI versions visually and structurally from the official statement.
- Evidence: Glance markup and its order; the audio button markup; the script header, which appears only in the linked file. Whether labels improve reader outcomes is OPEN.
- Needs disabled readers: yes. Test with screen-reader, magnifier and audio users whether the label is noticed and understood before they rely on the content, and whether it changes which figure they trust.

### F7. The audio control has no pause or stop, announces no state, and starts overlapping copies
- Where: `<button type="button" id="audio">Audio briefing (1 minute)</button>` and `new Audio('audio-briefing.mp3').play()`.
- Problem: A click starts playback with no pause, stop, seek or speed control and no exposed playing state. Each click creates a new `Audio` object, so repeated clicks overlap. A screen reader's speech competes with the synthetic voice, and the only exits are leaving the page or muting the system. Pace stays with the publisher, against principle 4. Two reviewers suggested "1 minute" is wrong. The script is short (about 50 spoken words), but the MP3 was not supplied, so the stated duration cannot be confirmed or refuted.
- Who is affected: Screen-reader users; switch and voice-control users who need a reachable stop control; people who need a slower pace or a replay.
- Impact: The briefing and the page become hard to follow, and a missed figure means starting again from the beginning.
- Severity: 2
- Fix: Use a native `<audio controls>` element, or a single toggle that exposes its state and prevents overlapping playback. Offer speed control. State the real duration once it has been measured.
- Evidence: The inline script and the button markup.
- Needs disabled readers: yes. Test with screen-reader, switch and voice-control users whether they can start, pause, stop and replay the briefing without the speech colliding, and with listeners who need a slower pace whether they can catch and re-check each figure.

### F8. The caveat that matters most is stated only in technical language
- Where: `bulletin.html`, "Main points".
- Problem: "Within the sampling variability of the survey", "not statistically significant", "95% confidence interval ... plus or minus 96,000" and "percentage points" come with no plain explanation. Readers who cannot use that language are left with the summary and the audio, which drop the caveat (F2). A plain sentence added for readers, such as "the survey cannot tell whether employment really fell", would be an explanation, not a new claim.
- Who is affected: Readers who may find statistical terms hard, such as people with cognitive or learning disabilities, low numeracy, or English as an additional language.
- Impact: The uncertainty may never reach the readers least able to work it out for themselves.
- Severity: 2
- Fix: Add one plain-language sentence to "Main points" that carries the significance caveat and the meaning of the interval, and declare it critical so that every version keeps it.
- Evidence: The quoted phrases.
- Needs disabled readers: yes. Test whether readers with cognitive disabilities or low numeracy can say, after reading, whether employment definitely fell, with and without the plain sentence.

### F9. "Lowest in two years" is a new comparison of ambiguous support, added to a non-significant change
- Where: "At a glance" item 2 ("its lowest level in two years"); audio ("the lowest for two years").
- Problem: "Main points" makes no two-year comparison, so this framing is added. Reviewers said the table contradicts it, which goes further than the evidence. The table's first row, Jul to Sep 2024, is 74.0, lower than 74.1. But every one of the eight quarters after it is higher than 74.1, so the phrase is true if "in two years" means "since July to September 2024". The claim is ambiguous rather than false. It adds a downward framing to a change the office says is not significant.
- Who is affected: Readers of the summary, and listeners. Readers who cannot use the chart can check it only through the table.
- Impact: Readers may come away with a stronger sense of decline than the release supports.
- Severity: 1
- Fix: Remove it, or replace it with a comparison the author declares, for example "the lowest since July to September 2024", together with the significance caveat.
- Evidence: Table rows "Jul to Sep 2024 | 74.0" to "Jul to Sep 2026 | 74.1"; "Main points" has no such comparison.
- Needs disabled readers: no.

### F10. The chart's alt text gives no trend, and the truncated axis may make a small change look large
- Where: `<img alt>` of `chart-employment.png`; figcaption "The vertical axis starts at 73.5%."
- Problem: The alt text keeps the end value, the population and a pointer to the table, but not the shape: a rise to 74.5 in Jul to Sep 2025, then a fall. The figcaption discloses the axis start but not its effect, and it does not say that the latest change is not significant. With values between 74.0 and 74.5, an axis from 73.5% is likely to exaggerate the movement. The image was not supplied, so how it looks and whether it matches the table are not established. The alt text has no recorded author or check, so it is Unchecked, although on content nothing is distorted.
- Who is affected: People who rely on the chart description; sighted readers, including magnifier users, who read the slope.
- Impact: People using different routes to the same data may come away with different impressions of how much it changed.
- Severity: 1
- Fix: Add one sentence on the shape to the alt text or caption, for example "broadly flat between 74.0% and 74.5%, with a small fall in the latest quarter that is not statistically significant". Record who wrote the description and who checked it.
- Evidence: The alt text, the figcaption and the table values.
- Needs disabled readers: yes. Test whether screen-reader users using the description, and sighted readers with cognitive disabilities using the chart, reach the same understanding of the size of the change as readers of the table, and whether the pointer to the table is enough.

### F11. Nothing records that disabled readers were involved in, or that any outcome was measured for, the versions offered to them
- Where: All paths: full page, "At a glance", audio, script, chart description.
- Problem: The summary, the audio and its script are offered as easier routes, but the material shows no declaration agreed with readers and no check or outcome test with readers on any path. Under principles 5 and 6, disabled readers decide what "intact" means, and success is measured by readers being correctly informed. That no such work happened is not established, only that none is recorded.
- Who is affected: Every reader who uses an adapted path.
- Impact: The publisher cannot know whether any version leaves its readers correctly informed.
- Severity: 1
- Fix: Run an outcome test per path once the versions are rebuilt. After one path, ask: the unemployment rate and its direction; roughly how many fewer people were in work; whether that fall is certain; whether this was the lowest rate in two years; how far to trust the estimates and why; who said the market is cooling; whether a person or a machine made the version and whether anyone checked it; when the next release is; and how much effort each answer took. Code each answer as correct, uninformed or misinformed against the release.
- Evidence: The absence of any check record, label or declaration in the material.
- Needs disabled readers: yes. Recruit panel members by the path they actually use (screen reader, audio, script, plain summary, magnification, cognitive access). They set what counts as intact, and the test reports what they answer, not what the team expects.

### F12. Playing the audio, or opening its script, makes a separate request that a server log could record
- Where: The `#audio` click handler that fetches `audio-briefing.mp3`; the `audio-briefing.txt` link.
- Problem: Each format is fetched only on demand, so access logs could show which readers chose audio, the script, or both. That is a choice of form, not a declared need, but such patterns can combine into a profile (the composition leak). The page has no analytics, beacons, preference cookies, URL parameters or third-party resources. Log retention and joining are not shown, so the risk is not established here.
- Who is affected: Readers who choose the audio or the script.
- Impact: Low on the evidence given. It would rise if more adapted versions were added as separate per-reader fetches and the logs were kept per client.
- Severity: 0
- Fix: Keep these as parameter-free static URLs. Serve them without cookies, keep per-client identifiers out of the logs for alternative-format assets, and never add play or click analytics. Whether inferred format choices count as special category data is ASSUMED, pending legal advice.
- Evidence: The click handler and the script link. No tracking code appears in the file.
- Needs disabled readers: no.

Not found: a must-survive declaration from the author (the item weights used above are the fidelity reviewer's, provisional); the pre-release draft; the audio file `audio-briefing.mp3`, so neither its match with the script nor its duration could be checked; the chart image; any record of which tool made the summary or the audio, of who checked any version, or of a correction or version note; any automated score, conformance badge, "verified" or "accessible" claim on the page (the `/accessibility` page was not supplied); any structured data, hidden agent-aimed text or added ARIA; any Easy Read, plain-language or translated version; any reader setting, cookie, parameter, analytics or assistive-technology detection that reveals reader needs; any form that asks readers to disclose a disability. One reviewer's finding that the page "would likely rate highly" on automated checks was dropped: no such score is on the page, and the finding describes a hypothetical, not this material. A second finding was dropped because the harm it described was potential, not present: an alt text change aimed at agents.
