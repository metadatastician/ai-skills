# Case notes (sealed: written before any run, never shown to an arm or judge)

What the case author planted. Tag **[N]** means the theory targets it; **[C]**
means conventional best practice targets it (AAA, cognitive, screen-reader,
media, statement or privacy practice). Some are both **[N+C]**. This is a
secondary, descriptive measure. It does not enter the decision.

## c1 news article
1. [N] Key points use the pre-correction cost £4.8m; the article and correction say £4.2m (version made from an older version).
2. [N] Key points drop the hedges: "will protect 900 homes" against "expect ... around 900 ... no barrier can remove the risk entirely" and the EA's "could reduce".
3. [N] Key points misattribute Malik Osei's "rushed through without consultation" to Cllr Ana Ruiz.
4. [N] Key points say "finished by 2028" and drop "subject to the consultation" and the January consultation.
5. [N] Right of reply (Hallam Civils) and the correction are absent from key points; meta description repeats the faults and goes to aggregators.
6. [N] Label "generated automatically to help you read faster" says nothing of checking or source version.
7. [N+C] Listen reads `article.innerText`, so the faulty key points are read first, and the button label is read too.
8. [C] Listen has no pause, speed or position control; `aria-pressed` stays "true" after speech ends.

## c2 medicine dosing
1. [N+C] Easy Read changes "at least 4 hours between doses" to "1 dose every 4 hours" (implies up to 6 doses a day).
2. [N+C] Easy Read drops "no more than 4 doses in 24 hours".
3. [N+C] Easy Read drops the overdose instruction (999 / A&E even if they seem well) and the other-paracetamol-medicines warning.
4. [N] Easy Read is made from the pre-3-November page ("under 3 months, talk to a doctor"); dated 14 March 2026, no link to the source version.
5. [N+C] Easy Read gives no doses; "look at the box" sends the reader elsewhere; the 2 to 3 month two-dose limit is gone.
6. [N] No label saying it was AI-written or whether anyone checked it.
7. [C] Easy Read practice: no involvement of people with learning disabilities noted; symbols all `alt=""` (acceptable, but the version has no review date).

## c3 consultation
1. [N+C] "Simplify" URL carries `needs=learning-disability`; logged with IP for 90 days; sent to a vendor in the prompt.
2. [N+C] Hidden `a11y_profile` stored with the response and broken out in analysis; analytics beacon `a11y_mode` with `uid`.
3. [N+C] Simplified version drops the blue badge bays move, the hours of operation and the hedges ("could be up to 4 minutes", car journeys slower).
4. [N+C] Simplified form has 2 options instead of 5 and no comments box: those responses are not comparable and cannot comment on the bays.
5. [N] Simplified version unlabelled as AI-written and unchecked; cached a week.
6. [C] Read aloud has no stop control and reads the whole form.
7. [C] Link styled as a button (class "button") is fine as a link; noted only.

## c4 reading settings
1. [N+C] `X-Reader-Prefs` header forwarded with IP and user agent to origin and third-party analytics.
2. [N+C] "Reader segments" named "Accessibility: low vision / cognitive": combined preferences inferred into disability categories.
3. [N+C] `sr=1` "I use a screen reader" is assistive-technology disclosure, and it strips footnotes and publisher notes (content loss).
4. [N] `level=simplified` rewrites chapters with no marker and no publisher involvement; reader not told the text is rewritten.
5. [N+C] Settings stored against library card number; a one-year cookie; no local-only option.
6. [C] No preview of settings; "Settings saved" is announced (good). Signed-in header shows reader number.

## c5 agent-tuned product page
1. [N+C] Verbose, keyword-stuffed accessible names on h1, links, image alt and the button; landmark labels repeat.
2. [N+C] `aria-live="assertive"` re-announces "In stock. Price checked just now." every 20 seconds.
3. [N+C] Hidden "product facts for assistants" block read by screen readers, duplicating content with keywords.
4. [N] Minimum fill (0.5 L) and weight exist only for agents (structured data and hidden block), not for sighted users.
5. [N] Safety text (spill above MAX, hot body, cord) is absent from the agent facts and structured data, so agent summaries lose it.
6. [C] Link given `role="button"` but activates as a link (Space key does nothing).
7. [C] `aria-describedby` chains price, stock, delivery and returns onto the button.
8. [C] Redundant `role="banner"` and `role="main"`; image alt is keyword stuffing.

## c6 statistics release
1. [N+C] "At a glance": "fell sharply" against "not statistically significant"; hedge and caution dropped.
2. [N+C] "Nearly 50,000 fewer" against 41,000 (with CI of plus or minus 96,000).
3. [N+C] "Lowest level in two years" is false: Jul to Sep 2024 was 74.0.
4. [N+C] "Unemployment rose to 4.6%" against 4.4% unchanged (both summary and audio).
5. [N] Audio briefing made from the pre-release draft; adds "Economists say the jobs market is cooling" (new claim).
6. [N] Label "Summary generated with AI from this release" overstates provenance (audio says draft); no check.
7. [C] Chart alt gives no trend; axis starts at 73.5% (noted only in caption) so the visual exaggerates the fall.

## c7 lecture
1. [N+C] AI summary merges positions: "Both speakers agreed ... should be scrapped"; Lindqvist argued to reform.
2. [N+C] "Test scores down 12%" generalises "reading scores for the youngest pupils"; attributes it to both.
3. [N+C] "The chair concluded that the policy would be reversed next year": new claim, contradicting "nothing will change before" the spring report.
4. [N] Summary made from automatic captions (3 Oct) before the edited captions (5 Oct).
5. [N] Lindqvist's points (maths flat, attendance up, vacancies halved) and the common ground on secondary schools are dropped.
6. [C] Transcript collapsed behind `details`; summary placed before it, so it is what most readers meet.

## c8 accessibility statement
1. [N+C] "WCAG 2.3 AAA verified": there is no WCAG 2.3; full AAA conformance is not a credible claim.
2. [N+C] Conformance claimed from an automated tool only; "100 out of 100" presented as conformance.
3. [N+C] Required "disability or condition" field to get an alternative format; shared with the housing officer and kept on the tenancy file.
4. [N] AI rewriting "instantly and accurately" into Easy Read and BSL: self-awarded accuracy, no check, BSL by AI.
5. [C] Statement lacks required content: non-accessible content, enforcement procedure, preparation method detail, feedback timescales.
6. [C] Request form itself demands a tenancy reference with no alternative route (phone, text relay).

## c9 control
No planted problems of either kind. Minor possible nits only: first name not marked optional; error summary covers only email.
