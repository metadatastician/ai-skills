### F1. The badge turns the testing record into a claim it does not support
- Where: `statement.html`, `<span class="badge">` under the h1, compared with the "Testing" section it summarises.
- Problem: The badge is the shortest version of the page and the one most readers and agents will take away. Against the original record, the Testing paragraph:
  - Attribution/method (critical): original "tested ... by AccessGuard AI, an automated tool"; badge "verified". This is **changed**: an automated run becomes verification, with no named verifier.
  - Version number (critical): original names no WCAG version in Testing; badge "WCAG 2.3". This is a **new factual claim**. There is no WCAG 2.3; the current Recommendation is 2.2.
  - Level (critical): the Testing section gives no level; badge "AAA". This is a **new factual claim**. An automated tool checks only a subset of criteria and cannot establish conformance, let alone AAA.
  Class: Unfaithful.
- Who is affected: anyone who reads only the badge, including tenants deciding whether to trust the site or to ask for another format, screen-reader users who meet it as the first text after the h1, and agents or crawlers that lift it as metadata.
- Impact: readers are told the site has been verified to a standard that does not exist, at a level the evidence cannot reach. That can lead them to blame themselves for a barrier, or not to ask for help.
- Severity: 3
- Fix: Withhold the badge. If a summary is kept, make it from the Testing record and keep its terms, for example "Automated check by AccessGuard AI, 1 November 2026. Not a conformance claim." Name WCAG 2.2 only if a human audit against 2.2 took place, and give its date and who did it.
- Evidence: Original: "This website was last tested on 1 November 2026 by AccessGuard AI, an automated tool." Version: "WCAG 2.3 AAA verified".
- Needs disabled readers: no

### F2. The "How accessible" summary drops the hedge "it found" and presents an automated score as conformance
- Where: `statement.html`, the first paragraph under "How accessible this website is", compared with the "Testing" section.
- Problem: This paragraph acts as a summary of the test result. Items:
  - Hedge (critical): original "All issues **it found** have been fixed"; version "you can be confident every page meets the standard". The scope limit is **changed** into a universal claim. In GDS's 2017 test the best automated tool found 41% of 143 planted barriers, so "it found" is the load-bearing caveat.
  - Method (critical): original "an automated tool"; version "fully conformant ... It scores 100 out of 100 in automated accessibility audits". The score is **merged** with a conformance claim, as though one established the other. A high automated score is not conformance.
  - Fact/opinion line (important): "you can be confident" is the publisher's assurance, but it is presented as a finding of the test. That is **changed**.
  - New claims: "fully conformant" and "version 2.3 at Level AAA" are not supported by the record.
  Class: Unfaithful.
- Who is affected: everyone who reads the statement, and especially people who meet barriers that automated tools cannot detect, such as reading level, cognitive load, timing and caption accuracy. Under the alignment-gap theory (DESIGNED, not tested), these are the barriers most likely to survive a 100/100 score.
- Impact: a reader who hits a barrier is told it cannot exist, so the statement discourages the reports it should invite.
- Severity: 3
- Fix: Rewrite the summary from the Testing record and keep the hedge: "An automated tool checked the site on 1 November 2026 and we fixed the issues it found. Automated tools find only some barriers. We have not yet tested the site with people or audited it by hand." Remove "fully conformant", "2.3" and "AAA" unless a dated human audit supports them.
- Evidence: Original: "All issues it found have been fixed." Version: "This website is fully conformant with the Web Content Accessibility Guidelines version 2.3 at Level AAA ... so you can be confident every page meets the standard."
- Needs disabled readers: no

### F3. The AI rewrite service labels itself "accurately", with no label, declaration or check
- Where: `statement.html`, the second paragraph under "How accessible this website is".
- Problem: The page offers machine versions of any page, in Easy Read, BSL video or another language, and certifies them in advance as accurate. Against the theory:
  - The label is self-awarded. "accurately" is the tool's claim about itself, which is not evidence. Instant AI output defaults to Unchecked.
  - No must-survive declaration is mentioned. Tenancy pages and letters carry critical items such as amounts, dates, deadlines, rights and instructions, and nothing says these will be kept.
  - No version label is promised, so nothing records who made the version, from what, when, or whether anyone checked it.
  - Nothing says the output will be marked as machine-made. EU AI Act Article 50 applies from 2 August 2026, and that mark would in any case say only that a machine was involved, not what changed.
  - BSL video "instantly" is an unsupported claim about what the tool can produce.
  The claim that AI adaptations break declared items at material rates is OPEN. The finding does not depend on it, because the fault is the unearned label, not a measured error rate.
- Who is affected: Easy Read readers, people with learning disabilities, BSL users and readers who need a translation. These are the readers least able to check the version against the English original.
- Impact: readers are invited to act on tenancy information through a version that nobody has checked, and are told it is accurate. If the version drops or changes a critical item, nothing warns them.
- Severity: 3
- Fix: Remove "accurately". Label each output Unchecked unless a check against a must-survive declaration has earned Checked, and show the label, the source page and its date, the time it was made, and that a machine made it. Withhold any version that would break a critical item. Do not offer machine BSL as equivalent to a human-made BSL version unless BSL users have set and passed the test for intact.
- Evidence: Original pages: not supplied. Version claim: "Our AI assistant can rewrite any page in Easy Read, British Sign Language video or another language on request, instantly and accurately."
- Needs disabled readers: yes. Easy Read readers and Deaf BSL users should decide what "intact" means for these versions. Test whether readers end up correctly informed of the critical items (amounts, dates, deadlines, actions) when they use the version alone, and whether the labels tell them what was cut.

### F4. The alternative-format service makes no promise of fidelity or chain integrity
- Where: `statement.html`, the "Ask for information in another format" section and form.
- Problem: The service produces versions of letters, forms and pages in large print, Braille, audio, Easy Read and BSL. Nothing says:
  - that each version will be made from the current original rather than from another version (Principle 1). With a reply time of "within 10 working days", the original letter or form may be superseded or corrected before the version arrives;
  - that a version will carry a label recording who made it, from what, on what date, and whether anyone checked it;
  - which items must survive, for example rent figures, deadlines, right of reply or appeal, and instructions;
  - whether a version will be withheld if it cannot keep a critical item.
  Large print, Braille and audio can be Exact, where only the form changes. Easy Read and BSL involve rewording and cannot be Exact. The page treats all five formats as equivalent.
- Who is affected: tenants who rely on any of the five formats for letters about their tenancy.
- Impact: a tenant may act on a version made from an outdated original, or on an Easy Read rewrite that left out a deadline or an appeal right, and has no label to warn them.
- Severity: 2
- Fix: State that every version is made from the current original, and give that original's date on the version. Label reworded versions (Easy Read, BSL) Checked or Unchecked, and name any important cut. If the original changes before the version is sent, remake the version from the corrected original and say so.
- Evidence: Original: not supplied, since the letters and forms are requested on demand. Page text: "If you need a letter, form or page in a different format, fill in this form and we will reply within 10 working days." The format list runs from "Large print" to "British Sign Language video", with no note on how each is made or checked.
- Needs disabled readers: yes. Readers of each format should say what "intact" means for a tenancy letter in that format. Test whether a reader of a reworded version can find every critical item and see what was cut.

### F5. The page gives conflicting dates and sources for the test it reports
- Where: `statement.html`, the "How accessible" paragraph, the "Testing" paragraph and the closing "prepared on" line.
- Problem: The summary says the site "is checked every night by our AccessGuard AI". The Testing record says it was "last tested on 1 November 2026". The statement was "prepared on 2 November 2026". It is unclear which run the conformance claims rest on, and whether later nightly runs found new issues since the statement was written. The summary does not say which version of the record it was made from.
- Who is affected: anyone relying on the statement to judge whether the site is current, including tenants and advocates.
- Impact: the statement can drift from the test record without notice. This is a chain fault in the statement itself.
- Severity: 1
- Fix: Give one test date and one method. Give the statement a review date and a version note. Make the summary paragraph from that dated record, and update both together.
- Evidence: Version: "is checked every night by our AccessGuard AI". Original record: "last tested on 1 November 2026 by AccessGuard AI". Metadata: "This statement was prepared on 2 November 2026."
- Needs disabled readers: no

Not found: any adapted version to code item by item, such as an Easy Read, BSL, translated, audio or summary version of this page or of a tenancy letter; a must-survive declaration; version labels or "made from / made by / checked by" records; correction or version notes; a machine-made mark under EU AI Act Article 50; alt text, chart descriptions, transcripts or a meta description. The page has no images, charts or media.
