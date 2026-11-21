Scope note: the original is the `<main>` of `consultation.html`. Versions found: (a) the AI "simple version" in `simplified.html` (made by Clarifyr Ltd's service, per `server-notes.md`); (b) the "Read aloud" speech of `main.innerText`. No summary, alt text, transcript or translation exists. `simplified.html` is one cached output; findings cover this instance only. Findings about it rest on the file itself, not on the OPEN claim that AI adaptations break declared items at material rates.

### F1. No must-survive declaration exists; reconstructed declaration used for coding
- Where: `consultation.html` (no declaration in markup or metadata); `server-notes.md` (prompt sent to the tool)
- Problem: The author has declared nothing that must survive, and the tool gets only "Rewrite for a reader with <need>". The reviewer reconstructed the declaration below from the original. Weights are the reviewer's proposal, not the author's, and need the author's and disabled readers' agreement (principles 2 and 5).
  - D1 "We propose" / "Have your say": the line between proposal and decision (fact or opinion). Critical: a consultation that reads as decided misleads the reader about whether their response counts.
  - D2 "operating 7am to 10am and 4pm to 7pm on weekdays" (number). Critical: it defines what is proposed.
  - D3 "Outside those hours the lane would be open to all traffic." (caveat). Critical: without it the lane reads as bus-only at all times.
  - D4 "between the Mill Street junction and the station" (other). Important: where it applies. May be cut if named.
  - D5 "Twelve on-street parking spaces on the north side would be removed." (number). Critical: the main loss to residents.
  - D6 "Four blue badge bays would be moved 40 metres east, to the new layby outside number 62." (number). Critical: it directly affects disabled residents, and the form asks for comments on it.
  - D7 "Our traffic modelling suggests bus journeys could be up to 4 minutes quicker at peak times." (attribution, hedge, number). Critical: a modelled estimate, not a promise.
  - D8 "Car journeys on Riverside Road may be up to 2 minutes slower." (hedge, number). Critical: the stated cost. Without it the case is one-sided.
  - D9 "Consultation open from 3 November to 15 December 2026." (instruction). Closing date critical; opening date optional.
  - D10 The response instruction: five-point question "Do you support the proposed bus lane?" plus "Any comments on the proposal, including the blue badge bays" (instruction). Critical: it decides what the reader can say.
  - D11 Footer links "Accessibility statement" and "Privacy notice" (other). Important: the reader's route to how their response is handled.
- Who is affected: everyone who receives an adapted version; the consultation team that relies on its outputs
- Impact: The tool has no target to preserve, and nobody has a basis on which to check its output. "Giving the tool the declaration improves fidelity" is OPEN.
- Severity: 2
- Fix: Publish a declaration with exact words, type and weight for D1 to D11. Pass it to the simplification service with the source. Check every output against it before serving.
- Evidence: server-notes.md: "sends the full page text to our AI simplification service ... with the prompt \"Rewrite for a reader with <need>\"". The page carries no declaration.
- Needs disabled readers: yes. People with learning disabilities, as the intended audience, should confirm or change the weights, especially D2, D3, D6 and D8, and say what "intact" means for an Easy Read version.

### F2. Proposal turned into a decision
- Where: `simplified.html` `<h1>` and body sentences
- Problem: D1 changed. The original frames a proposal under consultation. The version states outcomes as settled future facts.
- Who is affected: readers of the simple version
- Impact: Readers may conclude the decision is made and that responding is pointless, or respond on a false basis. Distortion; not allowed at any weight.
- Severity: 3
- Fix: Keep "propose" or an Easy Read equivalent ("The council has an idea. Nothing is decided yet. Tell us what you think."), and use "might" or "could" throughout.
- Evidence: Original: "Have your say: Riverside Road bus lane" / "We propose a bus lane ..." / "would be removed". Version: "A new bus lane on Riverside Road" / "Buses will be faster." / "Some parking spaces will go."
- Needs disabled readers: yes. Test whether readers of the simple version can say correctly whether the bus lane has been decided.

### F3. Peak-hours-only lane presented as bus-only at all times
- Where: `simplified.html` first paragraph
- Problem: D2 and D3 dropped silently, and the remainder changed. "Just for buses" with no hours states the opposite of D3. D4 (Mill Street to the station) also dropped silently.
- Who is affected: readers of the simple version, including drivers, residents and blue badge holders deciding whether to support it
- Impact: Readers respond to a more restrictive scheme than the one proposed.
- Severity: 3
- Fix: Include the hours and the all-traffic caveat in plain words ("Only buses can use it on weekdays from 7 to 10 in the morning and 4 to 7 in the evening. At other times all cars can use it."). Keep D4 or name the cut.
- Evidence: Original: "operating 7am to 10am and 4pm to 7pm on weekdays. Outside those hours the lane would be open to all traffic." Version: "We want to make a lane just for buses on Riverside Road."
- Needs disabled readers: yes. Test whether readers come away knowing when the lane applies.

### F4. Modelled, hedged benefit turned into a certainty; attribution and number lost
- Where: `simplified.html` "Buses will be faster."
- Problem: D7 changed. The hedge ("suggests", "could be up to"), the source ("Our traffic modelling"), the number (4 minutes) and the condition ("at peak times") are all gone, and the sentence now states an unconditional fact. This is a new factual claim the original does not support.
- Who is affected: readers of the simple version
- Impact: The benefit is overstated and loses its basis.
- Severity: 3
- Fix: "Our computer tests show buses might be up to 4 minutes faster at busy times."
- Evidence: Original: "Our traffic modelling suggests bus journeys could be up to 4 minutes quicker at peak times." Version: "Buses will be faster."
- Needs disabled readers: yes. Test whether readers understand that the time saving is an estimate.

### F5. The stated cost to car journeys is dropped silently, which makes the case one-sided
- Where: `simplified.html` (absent)
- Problem: D8, a critical item, dropped silently. Only the benefit survives (and is distorted; see F4).
- Who is affected: readers of the simple version, including people who rely on car or taxi travel
- Impact: Readers see the benefit but not the cost and are not correctly informed. The council's own balance is lost.
- Severity: 3
- Fix: Keep D8 in plain words ("Cars on Riverside Road might be up to 2 minutes slower.").
- Evidence: Original: "Car journeys on Riverside Road may be up to 2 minutes slower." Version: no counterpart.
- Needs disabled readers: yes. Test whether readers can name both a benefit and a cost.

### F6. Blue badge bay move dropped silently, and parking loss vaguened and made certain
- Where: `simplified.html` "Some parking spaces will go."
- Problem: D6 is critical and dropped silently. D5 changed: "Twelve" became "Some", "north side" dropped, and "would be removed" became "will go". The version made for a disability need omits the one item about disabled parking, while the original form asks for comments on exactly that.
- Who is affected: blue badge holders and their carers using the simple version, and residents near number 62
- Impact: The readers most affected by the bay move are not told of it and cannot respond to it.
- Severity: 3
- Fix: Keep both items: "12 parking spaces might be taken away. 4 blue badge parking spaces might move a short way (40 metres), to outside number 62."
- Evidence: Original: "Twelve on-street parking spaces on the north side would be removed. Four blue badge bays would be moved 40 metres east, to the new layby outside number 62." Version: "Some parking spaces will go."
- Needs disabled readers: yes. Blue badge holders should judge whether the plain wording of the bay move is enough to act on.

### F7. Response form changed: five-point question merged to Yes/No, question reworded, comments removed
- Where: `simplified.html` `<form>`
- Problem: D10 changed and merged. "Strongly support" and "Support" are merged into "Yes"; "Oppose" and "Strongly oppose" into "No"; "Neither support nor oppose" is dropped. "Do you support the proposed bus lane?" became "Do you like the bus lane idea?" The comments field, including the blue badge invitation, is dropped silently. "Yes" and "No" post the same values ("support", "oppose") as the full form's different answers, so the stored record merges unlike answers.
- Who is affected: respondents using the simple version, who get less power to respond than other residents; the consultation team and decision makers, whose results mix answers to different questions
- Impact: Responses from the simple version cannot be weighed like the others. Respondents cannot give a neutral or graded view or comment on the blue badge bays. This distorts the consultation record.
- Severity: 3
- Fix: Keep the same question meaning, all five options (with plain labels and, if wanted, symbols) and the comments box with its blue badge prompt. Store the same values the full form uses for the same answers. Never post a value that means something different.
- Evidence: Original: legend "Do you support the proposed bus lane?", five radios, textarea "Any comments on the proposal, including the blue badge bays". Version: legend "Do you like the bus lane idea?", `<input ... value="support"> Yes`, `<input ... value="oppose"> No`, no textarea.
- Needs disabled readers: yes. Test with people with learning disabilities whether a five-option scale in Easy Read form is usable. Do not assume it isn't.

### F8. Simple version carries no provenance or check label
- Where: `simplified.html` `<title>` and body; `server-notes.md`
- Problem: The only label is "simple version". The version does not say that a machine made it, that Clarifyr Ltd's service made it, which original and date it came from, or that nobody checked it. Measured against the declaration, its class is Unfaithful (F2 to F7), so it should be Withheld, not served. The EU AI Act Art. 50 machine-made marking applies from 2 August 2026, and this consultation runs in November and December 2026 (legal point ASSUMED).
- Who is affected: readers of the simple version
- Impact: Readers cannot know they are reading an unchecked machine rewrite that differs from the council's text.
- Severity: 3
- Fix: Withhold this output. For any future version that passes a check, show a visible label naming the maker (Clarifyr AI service), source page and version or date, generation date, check status (Checked or Unchecked) and any named cuts, with the link to the full page kept.
- Evidence: Original title: "Have your say: Riverside Road bus lane". Version title: "Bus lane on Riverside Road: simple version". The body has no statement of origin. server-notes.md: "returns it in the `simplified.html` template". No check step is described.
- Needs disabled readers: yes. Test whether the label wording is understood by readers of the simple version.

### F9. Chain fault risk: cached for a week with no source version or date
- Where: `server-notes.md` caching; `simplified.html` (no source stamp)
- Problem: The version is cached for a week and is not tied to a version of the original. A correction to the consultation page during the six-week consultation would keep reaching simple-view readers for up to seven days, and nothing on the page would reveal it. The input is "the full page text", so form labels and chrome go into the rewrite too, not just the declared content.
- Who is affected: readers of the simple version during any correction window
- Impact: Readers may get uncorrected substance after the original is fixed. This cannot be detected from the version.
- Severity: 2
- Fix: Key the cache to a hash or version of the original's content, invalidate it on any edit, and stamp each version with its source version and date. Send only the declared content region.
- Evidence: server-notes.md: "caches the result for a week". simplified.html has no date, version or source reference. Original: "Consultation open from 3 November to 15 December 2026."
- Needs disabled readers: no

### F10. Footer links and opening date dropped silently
- Where: `simplified.html` (no footer)
- Problem: D11 (important) dropped silently: the "Accessibility statement" and "Privacy notice" links are absent from the page that submits responses. D9's opening date and year were dropped; they are optional, and the closing date was kept.
- Who is affected: respondents using the simple version
- Impact: No route to how the council handles their response and data, and no route to report an accessibility problem, from the page where they respond. Class for this item: Undeclared cuts.
- Severity: 1
- Fix: Keep both footer links (in plain words if needed) on the simple version.
- Evidence: Original: `<a href="/accessibility">Accessibility statement</a> · <a href="/privacy">Privacy notice</a>`; "3 November to 15 December 2026". Version: no footer; "by 15 December".
- Needs disabled readers: no

### F11. Read aloud is form-only (Exact) but unlabelled
- Where: `consultation.html` script, `speechSynthesis.speak(... document.querySelector('main').innerText)`
- Problem: Read aloud speaks the current page's `main` text directly, so it comes from the current original and changes only the form: class Exact. Nothing tells the reader that it reads the full text, and the simple version has no read-aloud control. This is not a fidelity fault.
- Who is affected: read-aloud users
- Impact: Low. Recorded for completeness.
- Severity: 0
- Fix: None needed for fidelity. Optionally state "Reads the full page aloud".
- Evidence: Original `<main>` text = spoken text (same DOM, read at the time of the click).
- Needs disabled readers: no

Not found: summaries other than simplified.html, key-points lists, alt text, chart descriptions, audio scripts, transcripts, translations, metadata descriptions; any must-survive declaration by the author; any record of a human check of the AI output; any version date, source hash or correction note on either page; any evidence of what the service returns for needs other than "learning-disability".
