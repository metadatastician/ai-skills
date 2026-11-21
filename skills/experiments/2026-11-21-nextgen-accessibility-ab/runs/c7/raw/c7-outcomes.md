### F1. The AI summary turns a disagreement into a consensus and misattributes Lindqvist's position
- Where: `lecture.html`, `section.ai`, first sentence: "Both speakers agreed that the four-day school week has failed and should be scrapped." Second sentence: "Dr Okafor and Professor Lindqvist cited falling attainment ..."
- Problem: Reader task: follow the argument and know who holds which position. The transcript and captions (04:40) have Lindqvist saying "I disagree that it should be scrapped", and his view is "reform it". In the summary path, the critical attribution and fact-or-opinion items are changed and misattributed. "Has failed" is a new evaluative claim that neither speaker made. Under the outcome codes this version is Unfaithful, and the code allows no label: it should be withheld.
- Who is affected: Readers who take the summary path as the "gist": people with cognitive or learning disabilities, people with fatigue or limited reading stamina, people reading in a second language, and screen-reader users who skim by heading (see F5). These readers are the most likely to rely on this version alone.
- Impact: Performance fails, because the reader cannot learn that the debate was contested. Safety fails, because the reader is actively misinformed about a named academic's public position, which also harms Lindqvist's reputation. No comfort gain makes up for this.
- Severity: 3
- Fix: Withhold the summary (the Withheld class). If one is offered again, make it from the edited transcript (see F4). Declare as critical the two stances with their attributions ("should be scrapped": Okafor; "reform it, not scrap it": Lindqvist), the partial common ground on secondary schools, and Okafor's refusal on primary. Then check the summary against the declaration before it is labelled Checked.
- Evidence: summary sentence 1 against transcript paragraph 3 and caption cue 00:04:40.000. This is a direct contradiction in the material, not an inference.
- Needs disabled readers: yes. Outcome test for summary-only readers (the panel answers; we do not answer for them): "Did the two speakers agree on whether the four-day week should be scrapped?" "What did Professor Lindqvist propose instead?" "Did either speaker say the policy had failed?" Code each answer as correctly informed, uninformed or misinformed. Compare summary-only readers with transcript readers.

### F2. The summary changes the key statistic: it broadens the scope, drops the hedge and assigns it to both speakers
- Where: `section.ai`: "test scores down 12%". Source: captions 00:03:16.500–00:03:22.000 and the transcript: "reading scores for the youngest pupils are down by about 12 per cent".
- Problem: Reader task: interpret a statistic. The number keeps its value but loses its scope ("reading", "youngest pupils", "in the pilot districts") and its hedge ("about"). It is also attributed to both speakers. Lindqvist accepted the figure but did not cite it as a reason to scrap the policy. The countervailing numbers he gave are silently dropped: maths flat, attendance up, teacher vacancies halved. A number item and a hedge item are changed, and both count as distortion whatever their weight.
- Who is affected: Summary readers, especially those who carry the number into decisions or repeat it: parents, governors, journalists, and readers using text-to-speech who hear "test scores down twelve percent" as a general fall in attainment.
- Impact: Safety fails, because a narrow, hedged decline becomes a precise, general one ("falling attainment"). Performance fails, because the reader misses that other measures were flat or improving.
- Severity: 3
- Fix: Declare as critical numbers: "about 12 per cent", scoped to reading and the youngest pupils in the pilot districts (Okafor's claim, which Lindqvist accepted). Declare Lindqvist's three counter-figures as at least important. If any of them is cut, the cut must be named.
- Evidence: summary sentence 2 against caption cues 00:03:16.500 and 00:04:44.000–00:04:53.000.
- Needs disabled readers: yes. Outcome test: "What fell by about 12 per cent, and for which pupils?" "Was the figure exact or approximate?" "What happened to maths scores, attendance and teacher vacancies?" "Who gave the 12 per cent figure?"

### F3. The summary makes up a decision: "The chair concluded that the policy would be reversed next year"
- Where: `section.ai`, sentence 3. Source: the chair's closing words in the transcript: "not agreement, but some common ground ... The evaluation report is due next spring, and the minister has said nothing will change before it is published."
- Problem: Reader task: understand a decision and its timing. The summary invents an outcome (reversal), a date (next year) and an authority (the chair concluding policy). None of these is in the source, and the source says the opposite: nothing changes before the evaluation. This is a new factual claim the original does not support, so the version is Unfaithful. The real information a reader would act on, nothing changes before the spring report, is dropped.
- Who is affected: Parents and staff in the twelve pilot districts who make childcare or work plans, and any summary-only reader.
- Impact: Safety fails, because readers could act on a policy change that is not happening (for example, by dropping Friday childcare arrangements). The case material contains no attempt at a correction or right of reply.
- Severity: 3
- Fix: Withhold the summary (as in F1). Declare the chair's statement of the status quo ("nothing will change before it is published") as a critical instruction or correction-type item, and "not agreement" as critical. Log any added claim about outcomes or timing separately and treat it as disqualifying.
- Evidence: summary sentence 3 against transcript paragraph 5.
- Needs disabled readers: yes. Outcome test: "According to this page, has a decision been made about the four-day week?" "When might anything change, and what has to happen first?" "Who said so?"

### F4. Chain fault: the summary was made from automatic captions before the edited captions existed
- Where: `section.ai p.meta`: "Generated by StreamScribe from the automatic captions on 3 October 2026". `lecture.html`: "Captions edited by the University's media team on 5 October 2026".
- Problem: Principle 1 says a version must be made from the original, never from another version, and never from an uncorrected original. This summary is two steps from the record (speech, then automatic captions, then summary), and it predates the human correction. Errors in the automatic captions, such as speaker turns or numbers, may have carried into the summary. Nothing triggered a regeneration or recheck after the 5 October edit. Whether the automatic captions themselves caused F1–F3 cannot be established, because they are not in the case material.
- Who is affected: Every reader of the summary. The same fault applies to any other derived version built on the automatic captions. The case material does not say what the audio-described version was made from.
- Impact: Safety: errors corrected in the edited captions can persist in a downstream version that readers see first.
- Severity: 2
- Fix: Make derived versions only from the edited transcript or captions. Record the source version and its date on each version. Invalidate and withhold derived versions when their source is corrected.
- Evidence: the two provenance lines in `lecture.html` (3 October against 5 October).
- Needs disabled readers: no

### F5. The page's structure points readers to the unfaithful version first and hides the faithful one
- Where: `lecture.html` reading order. The `section.ai`, with the page's only `h2` ("AI summary"), comes before the transcript. The transcript sits in a collapsed `<details>` with no heading. The provenance line is placed after the summary text, at `.9rem` in grey.
- Problem: Reader task: get the gist without undue effort. On the heading-navigation path, a screen-reader user finds one subheading, "AI summary", and the transcript is not reachable by heading. On the visual path, the summary is open and boxed while the transcript is closed. The only signal of status is the word "AI" and a small trailing line. The line says how the summary was made, not whether it was checked, and it carries no Unchecked label (Article 50-style marking says a machine was involved, not what changed). A reader meets the claims before the caveat.
- Who is affected: Screen-reader users who navigate by heading. Readers with cognitive disabilities or fatigue, who are steered towards the shortest version. Deaf readers who want text rather than video and must find and expand the transcript. Low-vision readers, for whom the provenance line is the least prominent text in the box.
- Impact: Comfort: getting the faithful account takes extra effort, while the misleading one takes none. Safety: this makes F1–F3 more likely to reach readers. The claim that labels improve outcomes is OPEN, so a label alone should not be relied on as the fix.
- Severity: 3
- Fix: Withhold the summary until it is Checked. If a Checked summary is restored, put its label and provenance before its text, and say what was checked and against what. Give the transcript an `h2` and either open it by default or link it prominently next to the video.
- Evidence: DOM order and the markup of `section.ai` and `details` in `lecture.html`.
- Needs disabled readers: yes. Test which version screen-reader, cognitive-disability and Deaf panel members reach first, and how long it takes them to reach the transcript. Then run the F1–F3 questions by the path each panel member actually took.

### F6. "Full transcript" may not be full, and it carries no provenance
- Where: `<summary>Full transcript</summary>`. Five short paragraphs for a recording described as "58 minutes".
- Problem: Reader task: follow the argument in text form. If the page is as published, the "Full transcript" label overclaims: about 200 words cannot cover 58 minutes, so material has been cut without the cut being named. The case material may itself be abridged, so this needs confirming against the live page. The transcript also does not say who made it, from what, or when, and it has no timestamps linking it to the captions. Unlike the captions, it identifies the chair as a speaker, which is good.
- Who is affected: Deaf and deafblind readers (including braille-display users) and anyone who relies on the transcript as the equivalent of the recording.
- Impact: Performance: if content is cut, transcript readers are uninformed about parts of the debate without knowing it. Safety: lower than for the summary, because the excerpt shown is consistent with the captions.
- Severity: 2 (if the published transcript is abridged); 0 if the abridgement is only in the case material
- Fix: Publish the complete edited transcript, or label it "Edited excerpts" and name what was cut. Add a provenance line (made by whom, from the edited captions, on which date) and timestamps.
- Evidence: the 58-minute duration in the page against the transcript's length. Its consistency with caption cues 03:12–04:53 was checked.
- Needs disabled readers: yes. Deaf and deafblind panel members should judge whether the transcript is an adequate equivalent. Outcome test: "What common ground, if any, did the speakers reach, and on which schools?"

### F7. The caption file actually served cannot be confirmed as the edited one
- Where: `<track kind="captions" src="captions.vtt" ...>`. The edited file was supplied as `captions-excerpt.vtt`.
- Problem: The page claims the captions were edited, but nothing on the track or the file records which version is served: there is no date, editor or revision in the WebVTT header. If `captions.vtt` is still the automatic file, caption readers sit on the same pre-correction chain as the summary.
- Who is affected: Deaf and hard-of-hearing caption users.
- Impact: Possible safety risk on the caption path. It cannot be tested from the case material.
- Severity: 1
- Fix: Add a `NOTE` block with provenance to the WebVTT file (edited by, date, source) and make the page's claim point to that exact file.
- Evidence: the `track src` against the supplied file name; the WebVTT excerpt has no header metadata.
- Needs disabled readers: no

Not found: The audio-described version's content, its source and its date, and whether it carries captions; I could not walk that path. The full caption file, including Okafor's childcare point, which is in the transcript but outside the caption excerpt, and the chair's lines. The automatic captions the summary was made from, so I could not tell whether F1–F3 come from them or from the summariser. Any must-survive declaration, Checked/Unchecked label, correction notice or route to report an error in the summary. Any reader-side choice of format or reading level. Any route to ask for an alternative format. Any chart or statistic description; there is none.
