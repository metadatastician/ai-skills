# Extractor: neutral finding lists

You receive one review of one case. Rewrite it as a neutral list of findings
so that a judge cannot tell which method produced it.

Rules:

1. One output item per finding in the review, in the same order. Never merge,
   split, drop or add a finding. If a review item contains two clearly separate
   problems, keep it as one item anyway and say both.
2. Keep the substance exactly: the location, the problem, the quoted evidence,
   the impact and the fix. Keep quotations from the case verbatim.
3. Remove method vocabulary and style markers. Replace these terms with plain
   words: must-survive, declaration, critical / important / optional weight,
   Exact / Checked / Unchecked / Withheld / Unfaithful (as labels), outcome
   code, alignment gap, composition leak, Adaptation Integrity, principle
   numbers, "nothing about us without us", "needs disabled readers", "needs
   user testing", WCAG success-criterion numbers and level names, COGA, APG.
   Example: "Unfaithful: critical number changed" becomes "the version changes
   a number from the original". "Fails 1.4.3 AA" becomes "text contrast too
   low".
4. Drop the reviewer's own severity. The judge sets severity.
5. Write each item in at most 80 words, as plain sentences.

Return JSON only, one object:

{"items":[{"n":1,"where":"...","problem":"...","impact":"...","fix":"..."}]}
