Original: `bulletin.html`, "Main points", the chart caption and the table (released 11 November 2026). Versions made from it: the "At a glance" AI summary; `audio-briefing.txt` (the script of the synthetic-voice audio); the chart `alt` text. The page publishes no must-survive declaration, so the reviewer derived the items and weights below. They are provisional until the author declares them.

| # | Item (exact words) | Type | Weight | Why |
|---|---|---|---|---|
| I1 | "employment rate ... was 74.1%" | number | critical | headline figure |
| I2 | "0.2 percentage points lower than the previous quarter" | number | important | size of the change |
| I3 | "within the sampling variability of the survey and is not statistically significant" | hedge | critical | without it, a fall that may be noise is read as a real fall |
| I4 | "fell by 41,000 on the quarter" | number | critical | headline figure |
| I5 | "95% confidence interval ... plus or minus 96,000" | hedge/number | critical | the interval is wider than the change, so the direction is uncertain |
| I6 | "unemployment rate was estimated at 4.4%, unchanged on the quarter" | number | critical | headline figure and its direction |
| I7 | "Response rates ... remain low, and estimates should be treated with caution" | caveat | critical | the office's own quality warning on every figure |
| I8 | "estimated" (on I1, I6) | hedge | important | these are survey estimates, not counts |
| I9 | "Official statistics", National Statistics Office as source | attribution | important | who is speaking |
| I10 | "people aged 16 to 64", "seasonally adjusted" | other | important | the population and basis behind the rate |
| I11 | "The vertical axis starts at 73.5%" | caveat | important | a truncated axis makes small changes look large |
| I12 | "Released 11 November 2026. Next release 16 December 2026." | other | optional | release dates |

### F1. "At a glance" and the audio change the unemployment rate and its direction
- Where: "At a glance" item 3; `audio-briefing.txt` line 4.
- Problem: Item I6 (critical) is **changed** in both versions. The value and the direction differ from the original.
  - Original: "The unemployment rate was estimated at 4.4%, unchanged on the quarter."
  - At a glance: "Unemployment rose to 4.6%."
  - Audio: "Unemployment rose to 4.6 per cent."
- Who is affected: Readers who use only the summary box, and anyone who listens to the audio instead of reading, such as blind readers, readers with low vision, people with dyslexia or cognitive disabilities, and people who choose audio.
- Impact: Readers are told something false: that unemployment rose to 4.6%. The page gives no sign of any conflict unless the reader also reads "Main points".
- Severity: 3
- Fix: Withhold both versions until they are rebuilt from the published release. Each must state "4.4%, unchanged". Add a check that compares every number in a version with the declared items before the version is published.
- Evidence: bulletin.html line "The unemployment rate was estimated at 4.4%, unchanged on the quarter." compared with the glance `<li>Unemployment rose to 4.6%.</li>` and audio line "Unemployment rose to 4.6 per cent."
- Needs disabled readers: no. The distortion is a factual mismatch.

### F2. "At a glance" inflates the fall in employment and calls it sharp
- Where: "At a glance" item 1.
- Problem: Item I4 (critical) is **changed** from 41,000 to "nearly 50,000". The summary also adds "sharply", which contradicts I3 and I5. The original says the change is not statistically significant, and the change of 41,000 is smaller than the ±96,000 interval.
  - Original: "The estimated number of people in employment fell by 41,000 on the quarter. The 95% confidence interval for this change is plus or minus 96,000." / "...is not statistically significant."
  - At a glance: "Employment fell sharply this quarter, with nearly 50,000 fewer people in work."
- Who is affected: Readers who use the summary box as their way in, which may include readers who rely on short, plain summaries.
- Impact: A change the office says may be sampling noise is presented as a large, certain fall, with a number about 20% higher than the published one.
- Severity: 3
- Fix: Withhold the summary. Rebuild it as "Employment is estimated to have fallen by 41,000. This change is not statistically significant."
- Evidence: Quoted above. Nothing on the page supports 50,000.
- Needs disabled readers: no. This is distortion.

### F3. Critical hedges and the quality warning are dropped silently from both versions
- Where: "At a glance" (all items); `audio-briefing.txt` (all lines).
- Problem: Items I3, I5 and I7 (all critical) and I8 (important) are **dropped (silent)** in both versions. Neither version says anything was cut. The audio's "around 41,000" keeps the number but not the interval or the significance.
  - Original: "The change is within the sampling variability of the survey and is not statistically significant." / "plus or minus 96,000" / "estimates should be treated with caution."
  - At a glance: "The employment rate dropped to 74.1%, its lowest level in two years." (no hedge anywhere in the box)
  - Audio: "Employment fell this quarter, down by around 41,000, and the employment rate slipped to 74.1 per cent" (no hedge anywhere in the script)
- Who is affected: Every reader of either version, and audio listeners most of all, because the script offers no way back to the caveats except "Find out more on our website".
- Impact: Every figure is presented as certain. Losing a critical item alone makes a version Unfaithful.
- Severity: 3
- Fix: Declare I3, I5 and I7 as critical, and make each version include a short form of them, for example "Not statistically significant. The survey has low response, so treat the figures with caution." A version that cannot carry them should be Withheld.
- Evidence: Quoted above.
- Needs disabled readers: yes. Test with people who rely on summaries and audio, such as people with cognitive disabilities or low literacy, and screen-reader and audio users, to find which short wording of "not statistically significant" and "treat with caution" leaves them correctly informed. The theory says those readers decide what "intact" means. Whether adding the declaration to the tool improves fidelity is an OPEN claim.

### F4. The audio script was made from the pre-release draft, not the published release
- Where: `audio-briefing.txt` header.
- Problem: This is a chain fault (principle 1). The script was generated on 10 November from a draft. The original was released on 11 November. Its 4.6% unemployment figure (F1) is consistent with a draft value that changed before release, but no draft is available, so that cannot be confirmed.
  - Original: "Official statistics. Released 11 November 2026."
  - Audio: "Audio briefing script. Generated 10 November 2026 from the pre-release draft."
- Who is affected: People who listen to the audio, who hear an older, uncorrected version of the statistics with no warning.
- Impact: Any change between the draft and the release cannot be recovered downstream. The listener cannot tell that the briefing is out of date.
- Severity: 3
- Fix: Regenerate the script and the audio from the published release, record the release date and version in the script and next to the button, and block publishing any version whose source is not the current original.
- Evidence: Quoted above.
- Needs disabled readers: no.

### F5. The audio adds an unsourced opinion and voices it as the statistics office
- Where: `audio-briefing.txt` line 5.
- Problem: The audio adds a **new factual claim** and blurs the line between fact and opinion. The original contains no economists and no judgement that the market is "cooling". The script opens "Here are today's labour market figures from the National Statistics Office", so the opinion reaches the listener in the office's voice. That is a misattribution.
  - Original: (no such statement. The only interpretation is "not statistically significant" and "treat with caution", which point the other way.)
  - Audio: "Economists say the jobs market is cooling."
- Who is affected: People who listen to the audio.
- Impact: A statistics office's audio states an unattributed opinion that its own release does not support. A new claim makes the version Unfaithful.
- Severity: 3
- Fix: Remove the line. Any commentary must be clearly attributed, kept out of the official-statistics briefing, and supported by a source.
- Evidence: Quoted above.
- Needs disabled readers: no.

### F6. "Lowest in two years" is a new comparison the release does not make, and the table does not support it
- Where: "At a glance" item 2; `audio-briefing.txt` line 3.
- Problem: This is a **new factual claim**. "Main points" makes no two-year comparison. The table's two-year window includes Jul to Sep 2024 at 74.0%, which is lower than 74.1%. At most, the table supports "lowest since July to September 2024". The claim also adds a downward framing to a change that is not significant.
  - Original (table): "Jul to Sep 2024 | 74.0" ... "Jul to Sep 2026 | 74.1"
  - At a glance: "its lowest level in two years."
  - Audio: "the lowest for two years."
- Who is affected: Readers of the summary and people who listen to the audio. Readers who cannot use the chart or the table cannot easily cross-check the claim.
- Impact: The comparison is misleading, and the reader has no way to see that it is not the office's.
- Severity: 2
- Fix: Remove it, or replace it with a comparison the author declares and the data supports.
- Evidence: Quoted above.
- Needs disabled readers: no.

### F7. "At a glance" says it was made "from this release", but its content matches the pre-release audio
- Where: "At a glance" label.
- Problem: The chain is unverified. The summary shares the 4.6% error with the audio script, which says it was made from the pre-release draft. The summary does not share the published figure. Its label is a claim the tool makes about itself and is not evidence of its source.
  - Original: "The unemployment rate was estimated at 4.4%"
  - At a glance: "Unemployment rose to 4.6%." / "Summary generated with AI from this release."
  - Audio: "Generated 10 November 2026 from the pre-release draft." / "Unemployment rose to 4.6 per cent."
- Who is affected: Readers of the summary.
- Impact: The label tells readers the summary reflects this release, when its content suggests the summary came from a draft or from the audio script.
- Severity: 2
- Fix: Record the summary's source input, version hash, generation date and tool. Regenerate it from the published release.
- Evidence: Quoted above. The shared error is circumstantial. No draft is available to confirm it.
- Needs disabled readers: no.

### F8. Neither generated version carries an earned label. The audio carries none on the page.
- Where: "At a glance" `<small>` label; the "Audio briefing (1 minute)" button.
- Problem: The summary says a machine was involved. It does not say which tool, when, from which version, what changed or whether anyone checked it. The audio button says nothing at all: it does not say the voice is synthetic or the script machine-generated, and it does not give the source, the date or any check. The script's own header ("from the pre-release draft") is shown only in the linked file, not to listeners. On content, both versions class as **Unfaithful** (F1 to F6), so neither may carry a label. Both should be **Withheld**.
  - At a glance: "Summary generated with AI from this release."
  - Audio button: "Audio briefing (1 minute)"
- Who is affected: Readers of the summary and people who listen to the audio, who cannot judge how far to trust either version.
- Impact: Unfaithful versions sit next to the original with no warning. The page gives them equal or greater prominence than the original, placing the summary box above "Main points".
- Severity: 2
- Fix: Withhold both versions now. Once they are rebuilt, label each with who or what made it, from which release, when, and the check result (Checked or Unchecked). For the audio, put this next to the button and say at the start of the audio itself.
- Evidence: Quoted above.
- Needs disabled readers: yes. Test with people who listen to the audio and screen-reader users whether a spoken and visible label is noticed and understood before they rely on the version. Whether labels improve reader outcomes is an OPEN claim.

### F9. The chart's alt text keeps the essentials but carries no label or record of a check
- Where: `<img alt>` of `chart-employment.png`.
- Problem: On content, the alt text keeps I1 and I10 ("people aged 16 to 64", "ends at 74.1%"). The trend is **dropped (stated)** through the pointer to the table. The rise to 74.5% in Jul to Sep 2025 and the fall since are not described. The axis caveat (I11) and "seasonally adjusted" are in the figcaption, not the alt text, which is acceptable as long as the figcaption is exposed with the image. By content this is Checked-eligible, but nothing records who wrote it or whether it was checked, so its label is Unchecked.
  - Original: "Jul to Sep 2025 | 74.5" ... "Jul to Sep 2026 | 74.1"; "The vertical axis starts at 73.5%."
  - Alt: "Line chart of the employment rate ... The rate ends at 74.1%. Full figures are in the table below."
- Who is affected: Screen-reader users and anyone who cannot see the chart.
- Impact: Low. Nothing is distorted, and the full data is one step away.
- Severity: 1
- Fix: Optionally add one sentence on the shape, such as "rose to a peak of 74.5% in July to September 2025, then fell". Record the author and the check.
- Evidence: Quoted above. The chart image itself was not available, so the reviewer could not check whether the chart matches the table.
- Needs disabled readers: yes. Test with screen-reader users whether the pointer to the table is enough, or whether they need the trend sentence to be correctly informed.

Not found: a must-survive declaration from the author, so the weights above are the reviewer's and provisional; the pre-release draft the audio was made from; the audio file `audio-briefing.mp3`, so the reviewer could not confirm that the audio matches the script or lasts one minute; the chart image; any record of who generated or checked any version, which tool was used, or any correction or version note for the release; any Easy Read, plain-language, translation or transcript version beyond those reviewed.
