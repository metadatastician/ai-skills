### F1. The error summary entry is an exact copy of the inline error, made from the current message
- Where: signup.html, script lines 253 and 258 (the inline `#email-error` and the `#summary-list` link)
- Problem: None. This is the only derived version on the page. The summary link text is set from the inline error's text at the moment of submission, so the two cannot drift apart. It is made from the original, not from an older copy.
- Who is affected: Readers who meet the error in the summary (focus moves there) rather than beside the field.
- Impact: No loss. The instruction and its example survive whole in both places.
- Severity: 0
- Fix: None needed. Keep deriving the summary text from the inline message (`a.textContent = err.textContent`) and not from a second hard-coded string, which could drift.
- Evidence: Original: `err.textContent = 'Enter an email address in the correct format, like name@example.com';` Version: `a.textContent = err.textContent;` Instruction (critical: it tells the reader how to recover) is kept, and the example `name@example.com` (important) is kept. Nothing is added. Class: Exact.
- Needs disabled readers: no

### F2. No must-survive declaration for the page's commitments, so no future version can be checked
- Where: signup.html, line 222 (intro paragraph) and line 234 (email hint)
- Problem: The page makes promises that any summary, read-aloud text, metadata description or AI answer about the form would need to keep: the frequency, the right to unsubscribe and the limit on use of the email address. Nothing marks them as items that must survive. There is no `<meta name="description">` or other version on the page today, so nothing has yet been dropped or changed. But the material a check would need is missing.
- Who is affected: Readers who receive the form through an adapted version (summary, assistant, plain-language rewrite) rather than the page itself.
- Impact: If a later version dropped "You can unsubscribe at any time" or "We will only use this to send the newsletter", a reader could sign up on terms they were not shown, and no reviewer could prove the cut against a declaration. That such adaptations break declared items at material rates is an OPEN claim in the theory, so this is a risk, not an observed fault.
- Severity: 1
- Fix: Record a short declaration with the page, for example: "One email a month" (number, important), "You can unsubscribe at any time" (instruction, critical), "We will only use this to send the newsletter" (caveat on use, critical), and the link to "How we use your information" (instruction, important). Any meta description or other version the charity adds should be made from this page and carry a label saying who made it, from what and when.
- Evidence: Original: `<p>One email a month about exhibitions, workshops and events. You can unsubscribe at any time.</p>` and `<p class="hint" id="email-hint">We will only use this to send the newsletter.</p>`. Version: none present (no meta description, summary, Easy Read or alternative version in the case file).
- Needs disabled readers: yes. They should decide which of these items are critical for the versions made for them, for example whether the frequency or the privacy link must appear in any short version.

Not found: any summary, key points, Easy Read or plain-language version, alt text (there are no images), chart description, audio or read-aloud script, transcript, translation, or meta description. No version labels, dates, version notes or corrections to check the chain or labels against. No quotes, attribution, fact-or-opinion line or right of reply in the original.
