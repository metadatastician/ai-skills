### F1. Summary and audio both give unemployment as 4.6% and rising; the release says 4.4%, unchanged
- Where: `bulletin.html` "At a glance" item 3 ("Unemployment rose to 4.6%."); `audio-briefing.txt` line 4 ("Unemployment rose to 4.6 per cent."); against "Main points" ("estimated at 4.4%, unchanged on the quarter").
- Problem: The number and the direction are both changed. Outcome code: changed (number), and a new factual claim ("rose"). Under the theory this is Unfaithful, so the version should be withheld. Instead it is the first content on the page and the whole of the audio. The page has no must-survive declaration, but any declaration for a statistics release would make the headline unemployment rate a critical item.
- Who is affected: Readers who rely on the summary: people with cognitive or learning disabilities, people with low literacy or low numeracy, readers who skim, and screen-reader users who stop after the first section. Blind and partially sighted readers, and anyone who chooses audio, get only the wrong figure, with no correction anywhere on that path. Readers who quote the figure onward (journalists, advisers, and agents that scrape the summary) carry the error further.
- Impact: Performance: readers on the summary or audio path come away misinformed about the headline statistic, not just uninformed. Safety: they may act on or repeat a false rise in unemployment, for example in benefit, hiring or policy commentary. Readers on the full-page path meet two contradictory figures and are given no indication which is authoritative. Comfort: those readers carry the extra load of sorting out the conflict.
- Severity: 3
- Fix: Withhold the summary and the audio until each is regenerated from the published release (principle 1) and checked against a declaration that marks every headline figure and direction as critical. Show the "Withheld" state instead of the faulty versions. Publish a correction notice on the page if the faulty versions have already gone out.
- Evidence: Direct text comparison within the case material. This is an observed instance, not the OPEN general claim about rates.
- Needs disabled readers: yes. Test which figure readers who use the summary-first or audio-only paths report, and whether readers using a screen reader in reading order notice the contradiction at all.

### F2. Employment fall overstated and its uncertainty removed ("fell sharply", "nearly 50,000")
- Where: "At a glance" item 1 ("fell sharply this quarter, with nearly 50,000 fewer people in work"); against Main points ("fell by 41,000 ... 95% confidence interval ... plus or minus 96,000"; rate change "not statistically significant").
- Problem: The number is changed (41,000 becomes "nearly 50,000") and "sharply" is added. The hedges are dropped silently: the confidence interval, which is wider than the change itself and so includes a rise, and the statement that the change is not significant. Outcome codes: changed (number); dropped silently (hedge); new claim ("sharply"). The audio keeps 41,000 but also drops the interval and the significance hedge.
- Who is affected: Readers who rely on the summary or the audio, especially readers with low statistical literacy. These readers are the least likely to reach the confidence-interval paragraph on their own.
- Impact: Performance: readers are misinformed that a large and certain fall took place. The release says the change cannot be told apart from no change. Safety: an overstated number and a false certainty may be repeated or acted on. Comfort: undoing the impression needs the hardest paragraph on the page.
- Severity: 3
- Fix: Mark the figure, the confidence interval and the "not statistically significant" hedge as critical in a declaration. A plain-language version can keep the hedge, for example "a small fall that may be due to chance in the survey". Withhold any version that cannot keep it.
- Evidence: Text comparison within the case material.
- Needs disabled readers: yes. Test whether plain-language and audio wording of the uncertainty leaves readers correctly informed that the change may not be real. Only readers can settle whether the hedge, as worded, survives as understood.

### F3. "Lowest in two years" is not supported by the release's own table
- Where: "At a glance" item 2 and audio line 3 ("lowest for two years"); against the table (Jul to Sep 2024: 74.0; Jul to Sep 2026: 74.1).
- Problem: This is a new factual claim that the original does not support. The table shows a lower rate (74.0) at the start of the two-year window. Neither the release text nor the chart makes this claim.
- Who is affected: Readers of the summary and listeners to the audio. Chart-description users cannot check it either, because the alt text gives only the end value.
- Impact: Performance and safety: readers are misinformed about the trend. A reader who checks the table later meets a contradiction.
- Severity: 2
- Fix: Remove the claim, or replace it with a comparison that the table supports and that has been checked. Treat trend comparisons as declared items.
- Evidence: Comparison with the table in `bulletin.html`.
- Needs disabled readers: no

### F4. Audio briefing made from the pre-release draft adds an unsourced opinion and loses the caveats
- Where: `audio-briefing.txt` line 1 ("Generated 10 November 2026 from the pre-release draft"; the page was released 11 November); line 5 ("Economists say the jobs market is cooling.").
- Problem: The script was made from an older original, which is a chain fault under principle 1. It adds a claim attributed to unnamed "economists", which is opinion presented as reported fact and appears nowhere in the release. It drops the caution about low survey response rates, the confidence interval and the significance hedge. It sends listeners to "our website" with no pointer to the corrected figures. The script is labelled "as generated", so no check is recorded. The page link offers this same script as the text alternative, so the errors reach text readers as well. It is unknown whether the MP3 matches the script.
- Who is affected: Blind and partially sighted readers, readers with dyslexia or reading fatigue, and anyone who chooses audio. On this path they are the most likely to rely on the audio alone.
- Impact: Performance: listeners are misinformed (F1, F3) and get no caveats. Safety: the "cooling" framing goes further than an official release does. Listeners cannot detect that the audio predates the published figures.
- Severity: 3
- Fix: Regenerate the audio from the published release only and check it against the declaration. Remove the unattributed opinion. Keep the response-rate caution. Record who made the audio, from what source and when, next to the button, with a label (Unchecked until checked). Make sure the script and the MP3 are produced from the same checked text.
- Evidence: The script header and line 5. The release date is on the page.
- Needs disabled readers: yes. Test whether listeners can say where the "economists" claim came from and whether the figures are provisional, and whether the audio path leaves them correctly informed compared with the full page.

### F5. The AI summary's label does not say it is unchecked, and it sits under "Official statistics"
- Where: `bulletin.html` line "Official statistics. Released 11 November 2026." followed by the summary box; `<small>Summary generated with AI from this release.</small>`.
- Problem: The label says a machine was involved. That roughly matches the Article 50 marking, but it does not say what changed or that nobody has checked it (Unchecked). It is in small text at the end of the box, after the content, so screen-reader and linear readers reach it only after reading the claims. The box sits under an "Official statistics" statement, so readers may assume the summary carries official status. The audio button and the script link have no label at all.
- Who is affected: Every reader of the summary, and most of all those who do not read past the box or who miss small print (people with low vision, cognitive disabilities, or limited time).
- Impact: Performance and safety: readers give the AI text the same trust as the official figures. Whether labels change reader outcomes is an OPEN claim.
- Severity: 2
- Fix: Put a label before each adapted version: Unchecked, Checked or Withheld, with who made it, from what source and when. Separate the AI versions visually and structurally from the official statement. Once the label is in place, test whether it changes outcomes rather than assuming it does.
- Evidence: Markup order in `bulletin.html`. The theory's labels table. Evidence status "Labels improve reader outcomes: OPEN".
- Needs disabled readers: yes. Test whether readers using a screen reader, magnification or the summary-first path notice the label, and whether it changes which figure they trust.

### F6. The chart's text alternative and its truncated axis give different impressions of the trend
- Where: `<img alt="... The rate ends at 74.1%. Full figures are in the table below.">`; figcaption "The vertical axis starts at 73.5%".
- Problem: The alt text gives only the end value and no shape, so readers who rely on the chart description get no trend unless they go through the table. Sighted readers see a 0.2-point move on an axis that starts at 73.5%, which can look like a large fall, and the chart says nothing about the change not being significant. The figcaption discloses the axis start but does not explain its effect.
- Who is affected: Screen-reader users who rely on the chart description; people with cognitive disabilities or low numeracy; sighted skimmers who read the slope.
- Impact: Performance: description users are uninformed about the trend. Safety: visual readers may be misinformed about the size of the change.
- Severity: 2
- Fix: Write an alt text or short description that summarises the shape (broadly flat between 74.0 and 74.5 over two years, a small fall in the latest quarter, not statistically significant). Consider a zero-based axis, or state plainly that the axis exaggerates small changes.
- Evidence: Alt text, figcaption and table in `bulletin.html`.
- Needs disabled readers: yes. Test whether blind readers using the description and readers with cognitive disabilities using the chart end up with the same understanding of the trend as readers of the table.

### F7. The audio has no pause, stop or pace control
- Where: `<script>` that plays `new Audio('audio-briefing.mp3')` on click.
- Problem: The audio has no controls: no pause, no stop, no replay position and no speed setting. Repeated clicks may start overlapping playback. Principle 4 puts pace on the reader's side, and this page leaves it with the publisher.
- Who is affected: Screen-reader users, whose speech competes with the audio; people with cognitive or processing disabilities who need a slower pace or a replay; people with hearing loss who need to switch to the script.
- Impact: Comfort: the effort and time pressure are undue, and a listener who misses a figure has to restart from the beginning. Performance: figures may be misheard with no easy way to re-check them.
- Severity: 1
- Fix: Use a player with pause, stop, seek and speed controls, and let only one playback run at a time.
- Evidence: The script in `bulletin.html`.
- Needs disabled readers: yes. Test whether listeners who use a screen reader or need a slower pace can catch and re-check each figure.

### F8. Proposed outcome test
- Where: All paths: full page; "At a glance"; audio; audio script; chart description; screen-reader reading order.
- Problem: No outcome measure exists. A panel needs to show, for each path, whether readers end up correctly informed, uninformed or misinformed.
- Who is affected: All readers. Assign panel members by the path they would actually use.
- Impact: Without a test, the publisher cannot know whether any version informs its readers correctly.
- Severity: 2
- Fix: Ask each panel member, after using one path:
  1. What was the unemployment rate this quarter, and did it go up, down or stay the same?
  2. Roughly how many fewer people were in work than last quarter?
  3. Is that fall certain, or could it be down to chance in the survey?
  4. Was the employment rate this quarter the lowest in the last two years?
  5. How much should these estimates be trusted, and why?
  6. Who said the jobs market is cooling?
  7. Was the summary or audio made by a person or a machine, and has anyone checked it?
  8. When is the next release?
  9. How much effort did it take to find each answer, and did you have to replay or re-read?

  Code each answer as correct, uninformed or misinformed against the release text. Compare the results across paths.
- Evidence: The theory's principle 6, applied to this case.
- Needs disabled readers: yes. The panel must include readers who use each path (screen reader, audio, plain-language summary, magnification, cognitive-access needs). Disabled readers decide what counts as intact under principle 5.

Not found: a must-survive declaration for the release; any version label beyond "generated with AI" (no Exact, Checked, Unchecked or Withheld); a record of a check on the summary or the audio; an Easy Read or plain-language version; a description of the chart's trend; the next-release date or the methodology caution in the summary or audio; any evidence that the MP3 matches the script; any reader-side setting that reveals reader needs (none found, so no privacy finding).
