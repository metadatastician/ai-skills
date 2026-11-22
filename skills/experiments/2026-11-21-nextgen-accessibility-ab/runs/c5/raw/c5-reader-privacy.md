### F1. The page sends nothing that reveals a need, and adaptation stays on the reader's device. Keep it that way.
- Where: `product.html` as a whole. No preference toggles, no settings panel, no cookies or storage written by script, no analytics or beacon calls, no alternative-format request, no detection of assistive technology.
- Problem: None in the file as supplied. Every adaptation path (zoom, contrast, fonts, reduced motion, read-aloud, screen reader) belongs to the reader's own browser and assistive technology. The page neither sees nor asks about these. This is the minimal design. It is fragile, though: an "AI agent ready" rebuild is the usual moment for adding agent or assistive-technology sniffing, "accessibility mode" toggles or personalisation analytics.
- Who is affected: All readers.
- Impact: Positive baseline. A later change could break it without anyone noticing, because nothing here guards against that.
- Severity: 0
- Fix: Write it down as a rule for this template: no preference may be sent to the server, no assistive-technology or agent detection, and any future display options must be stored locally (for example `localStorage`) and applied by CSS on the client, with no request, query parameter or event. Add a review check that fails if a script reads `prefers-*` media queries, `navigator` properties or settings and then sends them anywhere.
- Evidence: The only script is the `setInterval` price poll. No `document.cookie`, `localStorage`, `sendBeacon`, analytics tag, `matchMedia` call or user-agent check appears.
- Needs disabled readers: no

### F2. A 20-second background poll builds a per-session dwell-time record on the server
- Where: `<script>`: `setInterval(... fetch('/api/offer/STL-17-BS') ..., 20000)`.
- Problem: The fetch is an ordinary request and carries no need-revealing field. But it runs for as long as the tab is open, even when the tab is hidden, and same-origin `fetch` sends cookies by default. The server therefore gets a timestamped request every 20 s, tied to the session cookie, IP address and User-Agent. That record shows how long each reader stays on the page. Long dwell is one signal that could, in combination with others the server may hold (User-Agent, zoom-driven viewport hints, timing of the basket action), feed an inference about slow or assisted reading. That is the composition leak. It is an indirect inference risk, not a demonstrated leak: nothing in the file performs that profiling.
- Who is affected: Every reader. Those who read more slowly or with assistive technology produce the longest and most distinctive traces.
- Impact: The site builds behavioural data it does not need. If dwell data is ever profiled to infer a disability, it would become special category data under UK GDPR, which needs an Article 9 condition (ASSUMED, not legal advice).
- Severity: 1
- Fix: Do not poll. Check price and stock once on load, and again when the reader adds to basket (the server must re-validate at that point anyway). If a refresh is kept, stop it while the tab is hidden (`document.visibilityState`) and send it with `credentials: 'omit'` so it cannot be tied to a session. Keep offer-endpoint logs aggregate and short-lived.
- Evidence: Lines in `<script>`: no visibility check, no `credentials` option, an unconditional 20000 ms interval. The comment "so assistants always see the live offer" shows the poll serves agents, not readers.
- Needs disabled readers: no

### F3. Polling overrides the reader's own pace: an assertive announcement every 20 seconds
- Where: `<p id="stock" aria-live="assertive" aria-atomic="true">`, rewritten by the poll every 20 s with "... Price checked just now."
- Problem: Under principle 4, pace is set by the reader. Here the publisher sets it. The text node is replaced on every poll even when nothing has changed, so an assertive live region can interrupt screen-reader output about every 20 s for as long as the page stays open. Readers cannot turn this off without leaving the page. This finding is about control. It is not a privacy leak and not a full WCAG re-audit.
- Who is affected: Screen-reader users, and anyone using read-aloud that respects live regions.
- Impact: Reading the description or the Safety section may be cut off again and again. A real price change cannot be told apart from routine "checked just now" noise.
- Severity: 2
- Fix: Remove the poll (F2). If a live update is kept, change the text only when price or stock actually changes, use `aria-live="polite"`, and drop "Price checked just now" from the live region.
- Evidence: The script sets `textContent` on `#stock` unconditionally on every interval, and `#stock` is `aria-live="assertive"`.
- Needs disabled readers: yes. Test with screen-reader users reading the Description and Safety sections while the poll runs. Do they lose their place? Which update behaviour do they want: none, polite-on-change, or on demand?

### F4. Assistive-technology users get a publisher-chosen version they did not choose and cannot opt out of
- Where: `aria-label` on `<header>`, home link, `<main>`, `<h1>`, Add to basket. Image `alt`. The `sr-only` "Product facts for assistants" block (`aria-hidden="false"`).
- Problem: The page writes a separate version for software and serves it through the same channel screen readers use. Screen-reader users receive it automatically, so the publisher, not the reader, chooses their form. It also differs in substance from what sighted readers see. It adds "best-selling", "rated 4.6 out of 5 by 1,204 customers", "best price guarantee" and "buy now", plus keyword lists, none of which appear in the visible text. The h1 label claims "free next-day delivery" unconditionally, but the visible text limits it to "orders over £40". The facts block also leaves out the Safety items (MAX line, hot body, cord). By the theory's outcome codes, this version contains new claims and a changed condition, so it is Unfaithful. It would be withheld, yet it is the only version these readers can get. Whether the safety omission matters to agent users depends on the agent. The claim that agents relay such blocks faithfully is OPEN.
- Who is affected: Screen-reader users, and readers who use AI assistants that ingest the hidden block.
- Impact: Some readers get material claims (delivery threshold, price guarantee, ratings) that differ from what other readers see. That has consumer-protection implications (ASSUMED, not legal advice). Safety instructions may drop out of agent summaries.
- Severity: 2
- Fix: Give one substance to everyone. Remove the marketing `aria-label`s so names come from visible text. Make the alt text describe the image. Delete the `sr-only` facts block, since the JSON-LD already serves agents without reaching screen readers. If a facts summary is wanted, make it visible to everyone, include the safety items, and keep the £40 delivery condition.
- Evidence: The h1 `aria-label` contains "free next-day delivery". `#delivery` says "Free next-day delivery on orders over £40." The Add to basket `aria-label` contains "best price guarantee", found nowhere in the visible text. The facts block has no Safety content.
- Needs disabled readers: yes. Screen-reader users should decide whether the labelled version is "intact" against the visible page, and whether they want any agent-oriented summary at all.

Not found: preference toggles, settings panels, "screen reader mode", simplify, Easy Read, read-aloud or alternative-format request flows; any URL parameter, cookie, header, storage write or request body carrying a preference or need; analytics, beacons, third-party scripts or tags; assistive-technology or agent detection (user-agent, `matchMedia`, `navigator`); account profile fields; forms that ask for disability or purpose; third-party origins or referrer leaks. Server-side logging, cookies set by the server and the basket endpoint's behaviour are not in the supplied file and were not assessed.
