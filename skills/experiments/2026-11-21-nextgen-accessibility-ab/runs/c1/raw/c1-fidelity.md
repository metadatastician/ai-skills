Original: the article body as corrected on 14 November 2026 (h1 through the correction notice). Versions found: (V1) the "Key points" box; (V2) the meta description, which per the case brief is also what news aggregators receive; (V3) the "Listen to this article" read-aloud, built from `article.innerText`; (V4) the `<title>`.

Must-survive declaration I derived from the original (weights are mine; the author declared none):

| # | Item (exact words) | Type | Weight | Why |
|---|---|---|---|---|
| D1 | "£4.2m" / "The approved cost is £4.2m" | number | critical | The headline fact, and the subject of a correction |
| D2 | "Correction, 14 November 2026: ... said the scheme would cost £4.8m. The approved cost is £4.2m." | correction | critical | A correction must reach every version |
| D3 | Ruiz: "We expect this to cut the flood risk for around 900 homes" | attribution + direct quote + number + hedge | critical | The claim is an expectation from one named official, not a fact |
| D4 | "though no barrier can remove the risk entirely" | hedge or caveat | critical | It qualifies D3 |
| D5 | Osei (chair, Lower Wendham Residents' Association): "This has been rushed through without proper consultation." | attribution + opinion + direct quote | critical | A critic's opinion, and who holds it |
| D6 | "The council said a public consultation on the barrier's design would open in January, before construction begins." | right of reply | critical | The council's answer to D5 |
| D7 | Environment Agency: "could reduce" ... "its modelling was still being reviewed" | attribution + hedge | important | An independent caveat on effectiveness |
| D8 | "expected to start in spring 2027, subject to the consultation, with completion planned for late 2028" | number + hedge | important | Timeline with its conditions |
| D9 | "Residents on Mill Lane will lose their river access" | attribution (Osei) + claim | important | The concrete harm alleged |
| D10 | Hallam Civils would respond "in due course" | right of reply | important | The contractor's reply |
| D11 | "cabinet has approved" | fact | important | What happened |
| D12 | "after two winters of flooding" | other | optional | Background |
| D13 | Byline and dates: Priya Nair; published 12 November, updated 14 November 2026 | attribution | important | Provenance and currency |

### F1. Key points and meta description give the pre-correction cost of £4.8m
- Where: V1 bullet 1; V2 (meta description, which also goes to aggregators).
- Problem: A critical number is changed. The article corrected the cost to £4.2m, but both versions still carry the figure the correction withdrew. Neither carries the correction (D2), so it is dropped silently. The page now contradicts itself: `<title>` and `<h1>` say £4.2m, and the key points just below the h1 say £4.8m.
- Who is affected: Readers who use the key points instead of the full text, for example to cut reading load or effort. Screen-reader and keyboard users meet the box before the body. People who only see search results or aggregator listings receive V2 alone.
- Impact: Readers who rely on the adapted version are told the withdrawn figure. Readers of the original get the corrected one. Off-site copies (aggregators, search snippets) carry the error and give no sign that a correction exists.
- Severity: 3
- Fix: Withhold V1 and V2 now. Regenerate both from the current (14 November) original against a must-survive declaration. Make every update or correction to the original regenerate or withdraw all versions automatically. Push the corrected description to aggregators.
- Evidence: Original: "Council approves £4.2m flood barrier" / "Correction, 14 November 2026: an earlier version of this article said the scheme would cost £4.8m. The approved cost is £4.2m." V1: "A £4.8m flood barrier will protect 900 homes in Lower Wendham." V2: "A £4.8m flood barrier will protect 900 homes in Lower Wendham, ..."
- Needs disabled readers: no

### F2. Chain fault: both versions were made from the uncorrected 12 November text, or from each other
- Where: V1, V2.
- Problem: The £4.8m figure matches only the "earlier version" named in the correction. That is evidence that V1 and V2 were made from the 12 November original, not the current one, and were not regenerated on the 14 November update. The brief says V2 reuses the key points, so V2 is a version made from a version. Its wording differs from V1 (see F3), so it was recomposed again on top of that. Neither version carries a date or a source-version note, so no reader can tell which text it came from.
- Who is affected: All readers of V1 and V2, and anyone downstream of the aggregator feed.
- Impact: The error compounds down the chain: original (old), then key points, then meta description, then aggregators. A fix at any later step cannot recover what was lost earlier.
- Severity: 3
- Fix: Make each version straight from the current original. Record the source version (its date or hash) on each one. Do not derive V2 from V1.
- Evidence: Original byline: "Published 12 November 2026, updated 14 November 2026". Correction: "an earlier version of this article said the scheme would cost £4.8m". V1/V2: "£4.8m". The brief: "The same key points are used as the article's meta description and are sent to news aggregators."
- Needs disabled readers: no

### F3. The residents' criticism is attributed to the councillor who backs the scheme
- Where: V1 bullet 2; V2 second clause.
- Problem: Misattribution. The "rushed through" criticism came from Malik Osei, chair of the residents' association. V1 and V2 give it to Councillor Ana Ruiz, the cabinet member for environment, whose own quote supports the scheme. V2 also merges the two speakers into one sentence ("Ruiz said, adding that..."). The quote itself is altered too: "without proper consultation" becomes "without consultation". Osei's attribution (D5) does not appear in either version.
- Who is affected: Every reader of V1 and V2, including aggregator and search audiences.
- Impact: The versions reverse who holds which position. They show a council cabinet member attacking her own council's scheme, and the actual critic disappears. They also say there was no consultation at all, when the claim was that consultation was not "proper".
- Severity: 3
- Fix: Withhold. Any regenerated version must keep "Malik Osei, chair of the Lower Wendham Residents' Association" with his words, and must keep Ruiz's words separate.
- Evidence: Original: "Malik Osei, chair of the Lower Wendham Residents' Association, said: 'This has been rushed through without proper consultation.'" V1: "Councillor Ana Ruiz said the scheme had been rushed through without consultation." V2: "..., Councillor Ana Ruiz said, adding that the scheme had been rushed through without consultation."
- Needs disabled readers: no

### F4. An official's hedged expectation becomes a flat fact, and its caveat is dropped
- Where: V1 bullet 1; V2 first clause.
- Problem: Several distortions in one sentence:
  - Ruiz's hedge "We expect this to cut the flood risk" becomes "will protect", which is changed.
  - "around 900" becomes "900", which is changed.
  - "cut the flood risk" becomes "protect [homes]", which is a different claim.
  - V1 drops the attribution to Ruiz, so an opinion is presented as fact. That breaks the line between fact and opinion.
  - The caveat "though no barrier can remove the risk entirely" (D4, critical) is dropped silently.
  - The Environment Agency's hedge "could reduce ... modelling was still being reviewed" (D7, important) is dropped silently.
  - "will protect 900 homes" is a new factual claim that the original does not support.
- Who is affected: Readers relying on V1/V2, including residents of Lower Wendham deciding how to treat their flood risk.
- Impact: Readers of the adapted versions are told the homes will be protected. Readers of the original are told the risk is expected to fall but not to disappear, and that the modelling is still under review.
- Severity: 3
- Fix: Withhold. A regenerated version must keep "expect", "around", the attribution to Ruiz, and the "no barrier can remove the risk entirely" caveat. If it drops the Environment Agency hedge, it must name that cut.
- Evidence: Original: "'We expect this to cut the flood risk for around 900 homes, though no barrier can remove the risk entirely.'" and "the barrier 'could reduce' the chance of flooding in a severe winter, but that its modelling was still being reviewed." V1: "A £4.8m flood barrier will protect 900 homes in Lower Wendham." V2: "A £4.8m flood barrier will protect 900 homes in Lower Wendham, Councillor Ana Ruiz said".
- Needs disabled readers: no

### F5. The council's right of reply is dropped, leaving the criticism unanswered
- Where: V1, V2.
- Problem: The council's statement that a public consultation opens in January (D6, critical) appears in neither version, so it is dropped silently. The contractor's reply (D10, important) and the Mill Lane river-access point (D9, important) are also dropped silently. With D6 gone, the misattributed and altered "without consultation" claim (F3) stands with no answer.
- Who is affected: Readers of V1/V2, and the council and residents as parties to the story.
- Impact: Readers of the versions get one side of a dispute, and that side is attributed to the wrong person. The concrete loss residents alleged (river access on Mill Lane) is also missing.
- Severity: 3
- Fix: Treat the council's consultation statement as critical in the declaration and keep it in every version. Either keep D9 and D10 or name the cuts.
- Evidence: Original: "The council said a public consultation on the barrier's design would open in January, before construction begins." / "Residents on Mill Lane will lose their river access and nobody asked them." / "Hallam Civils ... said it would respond to residents' concerns about river access 'in due course'." V1/V2: none of these appear.
- Needs disabled readers: no

### F6. A conditional timeline becomes a firm schedule
- Where: V1 bullet 3.
- Problem:
  - Changed: "expected to start", conditional, becomes "Work starts".
  - Dropped silently: the condition "subject to the consultation".
  - Changed: "completion planned for late 2028" becomes "will be finished by 2028". That is a firm promise, and "by 2028" can be read as before 2028.
  - Dropped: the start year, 2027. On a page published in November 2026, "spring" is ambiguous.
- Who is affected: Readers of V1.
- Impact: The timeline reads as certain and its dependency on the consultation disappears. The completion date may be read as earlier than the original says.
- Severity: 2
- Fix: Keep "expected", "spring 2027", "subject to the consultation" and "planned for late 2028", or name the cut of this important item. Do not turn a plan into a promise.
- Evidence: Original: "Work is expected to start in spring 2027, subject to the consultation, with completion planned for late 2028." V1: "Work starts in spring and the barrier will be finished by 2028."
- Needs disabled readers: no

### F7. The labels on the versions are self-awarded and incomplete; the meta description has none
- Where: V1 note; V2 (no label); aggregator feed.
- Problem: V1's label says only that a machine made it ("generated automatically to help you read faster"). It does not say which tool, from which version of the article, when, or whether anyone checked it, and it implies the version is fit to read instead of the article. V2 carries no label at all, even though it is reused off-site. A label the tool gives itself is not evidence. On the evidence above, the versions are classed as follows:
  - V1: Unfaithful. A critical item is dropped, items are changed and misattributed, and it makes a new factual claim.
  - V2: Unfaithful, for the same reasons plus a merge.
  - Neither can carry any label and both should be withheld.
- Who is affected: Readers who use the key points because of reading load, and off-site readers of V2.
- Impact: No reader can tell that the version may differ from the article, or that it predates the correction. Whether the EU AI Act Article 50 marking duty applies to V2 is a legal point, recorded as ASSUMED.
- Severity: 2
- Fix: Label each offered version with: the maker (tool and model), the source version and date, the generation date, the check status and any named cuts. Use "Unchecked" until a check is done. Carry the label into the meta and feed outputs.
- Evidence: V1: "Key points are generated automatically to help you read faster." V2: `<meta name="description" content="A £4.8m flood barrier ...">`, with no label.
- Needs disabled readers: yes. Test whether the label's wording and position tell readers who rely on the key points how far they can trust them compared with the article. Only those readers can decide what "intact" means for this summary.

### F8. Read-aloud reads the unfaithful key points first, so listeners hear £4.8m before £4.2m
- Where: V3 (`document.querySelector('article').innerText`).
- Problem: The read-aloud speaks the whole `<article>`. That includes the button's own text, then the Key points box with the errors in F1 and F3 to F6, then the body. Listeners therefore hear "£4.8m" and the misattribution to Ruiz before the body corrects them, and the correction comes only at the very end. Taken alone, the body portion is an Exact form change. As delivered, V3 contains V1, so it inherits V1's distortions and its weak label. The read-aloud itself carries no label (no synthetic voice, source version or date stated).
- Who is affected: People who listen instead of reading, including people who stop listening early.
- Impact: A listener who stops after the opening hears only the distorted version. The contradiction between the two figures is resolved only for listeners who reach the end.
- Severity: 3
- Fix: Exclude the key points box from read-aloud until it is faithful, or read it after a spoken label. Announce what is being read (the article as updated 14 November, synthetic voice).
- Evidence: Script: "const text = document.querySelector('article').innerText;". The Key points `<section>` sits inside `<article>`, before the body. Spoken order: "Listen to this article", then "Key points", then "A £4.8m flood barrier will protect 900 homes...", ..., then "Wendham District Council's cabinet has approved a £4.2m flood barrier...", ..., then "Correction, 14 November 2026".
- Needs disabled readers: yes. Test with listeners what they take away about the cost and about who said "rushed through" after the opening section alone, and after the whole recording.

### F9. Read-aloud may blur where the quotations start and end
- Where: V3, the blockquotes for Ruiz and Osei.
- Problem: The script turns the article into plain text, which removes the blockquote structure. Only the literal quotation marks remain, and synthetic voices often do not voice them. The boundary between the reporter's narration and the speakers' own words (D3, D5) may therefore be lost. The Environment Agency's inline quotes "could reduce" and the contractor's "in due course" depend on the same marks. I have not confirmed this by running the code; it depends on the voice used.
- Who is affected: Listeners.
- Impact: Listeners may not be able to tell which statements are a named person's words and which are the reporter's narration.
- Severity: 1
- Fix: Mark quote boundaries in the spoken text (for example "quote ... end quote", or a pause and voice change), and test this on the browsers' default voices.
- Evidence: Original markup: `<blockquote><p>"We expect this to cut the flood risk ..."</p></blockquote>`. Script: `new SpeechSynthesisUtterance(text)` on `innerText`.
- Needs disabled readers: yes. Test whether listeners can tell quoted speech from narration, and who is speaking each quote.

### F10. Title tag is faithful
- Where: V4 `<title>`.
- Problem: None. It keeps D1 (£4.2m) and D11 ("approves"), and it matches the h1. It is classed Exact.
- Who is affected: n/a
- Impact: It is the only off-page version that carries the corrected figure, and it contradicts the meta description beside it in search results.
- Severity: 0
- Fix: None for the title. Fixing V2 removes the contradiction.
- Evidence: Original h1: "Council approves £4.2m flood barrier for Lower Wendham". V4: "Council approves £4.2m flood barrier for Lower Wendham | Wendham Courier".
- Needs disabled readers: no

Evidence status: this is one case. It does not bear on the OPEN claim that AI accessibility adaptations break declared items at material rates. That the key points were made by an AI tool is inferred from the label "generated automatically"; the tool is not identified.

Not found:
- The text actually sent to aggregators. The brief says it is the key points, so it is presumed equal to V1/V2, but I could not inspect it.
- Any mechanism for pushing the correction to aggregators.
- An author-made must-survive declaration. The weights above are mine.
- Any record of who or what generated V1/V2, from which version, when, or whether anyone checked them.
- Easy Read, plain-language, translation or transcript versions.
- Alt text or chart descriptions (the page has no images or charts).
