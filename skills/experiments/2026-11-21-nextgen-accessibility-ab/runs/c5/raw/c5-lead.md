### F1. Live price updates only the visible figure, so stale copies, a fixed "Was" price and a silent change sit on the same page
- Where: `setInterval` script; JSON-LD `offers`; hidden facts block; `<s>£49.99</s>` with sr-only "Was"/"Now"; `#price` (not a live region).
- Problem: Every 20 s the script rewrites `#price` and `#stock` only. The JSON-LD (`"price":"34.99"`, `InStock`) and the facts block ("Price: 34.99 GBP. Availability: in stock.") never change, so after any change they come from an older original (a chain fault, principle 1). The was-price stays £49.99 whatever the new price is, so a rise to £49.99 or more still reads as a discount. The price change itself is not announced and leaves no visible notice. When stock runs out, the button and its "buy now" name stay as they are.
- Who is affected: All readers on the buy task: the was/now pair and the silent change are visible to everyone. Screen-reader users also meet the stale facts block after the live figure. Anyone using an agent that reads the JSON-LD, which is the purpose the script's own comment gives.
- Impact: The page can state two prices or two stock states at once, and a false reference price. A reader can decide on a price that has since changed, with nothing to show it changed.
- Severity: 3
- Fix: Keep one offer object as the source of truth. Render the visible price, the was-price (or hide it when it no longer applies), the JSON-LD and any facts text from it, and update them together, or remove the duplicates. Do not change the price shown to a person silently: show "Price changed from £X to £Y" and confirm the price at basket. Change the control's state and name when out of stock.
- Evidence: Script: `document.getElementById('price').textContent = '£' + o.price;` and the `#stock` line, nothing else written; comment "so assistants always see the live offer"; JSON-LD `"price":"34.99"...,"availability":"https://schema.org/InStock"`; facts block "Price: 34.99 GBP. Availability: in stock."; `<s>£49.99</s>`. Whether particular agents read the JSON-LD rather than the visible text is not shown in the material.
- Needs disabled readers: yes. After a mid-session price or stock change, test whether screen-reader, magnifier and cognitive-access users and assistant users can state the current price and availability, and whether they noticed the change before adding to basket.

### F2. The delivery condition "over £40" is dropped from three versions, so a conditional offer reads as unconditional for a £34.99 item
- Where: `h1` `aria-label`; Add to basket `aria-label`; hidden facts block.
- Problem: The visible terms are "Free next-day delivery on orders over £40." The kettle costs £34.99, so bought alone it does not qualify. The h1 name ("free next-day delivery"), the button name ("free next-day delivery") and the facts block ("Delivery: free next day.") drop the condition and change the claim. On the button the name and the `aria-describedby` text (`#delivery`) contradict each other in one announcement. The home link keeps the condition ("free delivery over 40 pounds"), so the page disagrees with itself.
- Who is affected: Screen-reader users, for whom the `aria-label`s replace the visible heading and button text and who reach the facts block when reading linearly. Users of assistants that read accessible names or the hidden block.
- Impact: A reader can expect free delivery and be charged at checkout, or buy because of the claim.
- Severity: 3
- Fix: Remove delivery from the h1 and button names so each name is its visible text. Wherever delivery is stated, use "Free next-day delivery on orders over £40" word for word.
- Evidence: h1 label "...rated 4.6 out of 5 by 1,204 customers, free next-day delivery"; button label "...buy now, free next-day delivery, 30-day returns, best price guarantee" with `aria-describedby="price stock delivery returns"`; `<p id="delivery">Free next-day delivery on orders over £40.</p>`; `<strong id="price">£34.99</strong>`. Struck from one review: a claim about which readers with cognitive or memory disabilities are "more likely" to retain; the material does not show it and it is not the team's to state.
- Needs disabled readers: yes. Ask screen-reader and assistant users what delivery costs if they buy only this kettle, and which announcement they relied on.

### F3. Claims appear only in accessible names, alt text and hidden text, with nothing visible to support them
- Where: `h1` `aria-label`; Add to basket `aria-label`; image `alt`; basket link `aria-label`; hidden facts block.
- Problem: "best-selling", "rated 4.6 out of 5 by 1,204 customers", "best price guarantee", "best price", "energy saving kettle" and "checkout securely" appear nowhere on the visible page. The guarantee has no terms. The rating has no source or date. These are new factual claims made only to the non-visual and machine paths, which makes those versions Unfaithful under the theory (on the reviewers' own weights, since no declaration exists).
- Who is affected: Screen-reader and braille users, and voice-control users, who get these names. Assistant users. Sighted readers get different substance from the same page.
- Impact: Some readers are given purchase-relevant claims that others are never shown and nobody can check.
- Severity: 3
- Fix: Remove every claim that the visible page does not make. If the rating or guarantee is real, show it visibly, with source and date or terms, and use the same words on every path.
- Evidence: Quoted strings above; no visible rating, review count, "best-selling", guarantee or energy claim in the page body. "stainless steel kettle" in the alt sits beside "Brushed Steel"; the material does not show whether these are the same finish, so that one is unsupported, not shown to be false.
- Needs disabled readers: yes. Test whether screen-reader and assistant users report these claims as facts about the product, and whether they knew the visible page does not make them.

### F4. Assertive live region rewrites unchanged text every 20 seconds, and "Price checked just now" can be false
- Where: `<p id="stock" aria-live="assertive" aria-atomic="true">`; the `setInterval` script.
- Problem: The script sets `#stock` `textContent` on every tick, with no check for change. Whether each identical rewrite is announced depends on the screen reader and browser, which the material does not show; where it is, an assertive region can interrupt about three times a minute, wherever the reader is. Readers cannot turn it off; the publisher sets the pace (principle 4). The fetch has no `r.ok` check and no error handling, so on failure the text keeps saying "Price checked just now" while it ages; the initial HTML also says it before any check, so a cached page makes the claim from the start. If the API returns a number such as 34.9, `'£' + o.price` shows "£34.9" (the API is not in the material).
- Who is affected: Screen-reader and braille users, and read-aloud users whose tools respect live regions. The freshness claim reaches all readers.
- Impact: Reading the Description or Safety section may be cut off repeatedly, and routine noise cannot be told from a real change. Readers can be told the price is fresh when it is not.
- Severity: 2
- Fix: Write to the DOM only when price or stock changes, and use `aria-live="polite"`. Take "Price checked just now" out of the live region; show the actual time ("Price checked at 14:02"). On failure, say "Could not check the price; the price shown may be out of date". Format with `Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP'})`.
- Evidence: `setInterval(async () => { const r = await fetch(...); const o = await r.json(); ... }, 20000)`; `(o.inStock ? 'In stock.' : 'Out of stock.') + ' Price checked just now.'`. The repeat-announcement and braille-display behaviour stated in the reviews is untested here and is qualified accordingly.
- Needs disabled readers: yes. Across at least two screen-reader and browser pairs and on a braille display, test how often the message is actually announced, whether it interrupts reading of the Safety section, and which update behaviour readers choose: none, polite on change, or on demand.

### F5. The hidden "facts for assistants" block is exposed to screen readers and alters the page; it and the JSON-LD drop the safety instructions
- Where: `<div class="sr-only" aria-hidden="false">Product facts for assistants. ...</div>`; `<script type="application/ld+json">`.
- Problem: The block is a machine version hidden from sight but deliberately kept in the accessibility tree, so screen-reader users get a second, keyword-padded copy after Safety, in a form the publisher chose. Against the visible original it changes a hedge ("Boil time: 3 minutes" for "about 3 minutes"), drops the delivery condition (F2), adds unsupported claims (F3) and goes stale (F1). Neither it nor the JSON-LD carries any of the three safety instructions, and neither says anything was cut.
- Who is affected: Screen-reader and braille users, who hear the duplicate and cannot tell which copy is authoritative. Users of assistants that build answers from these records.
- Impact: A firmer performance claim than the original makes, and conflicting figures. The visible Safety section still reaches every reader of the page, including screen-reader users, so the harm from the safety omission falls on the assistant path, and whether assistants pass it on is OPEN. Graded 2, not 3, for that reason.
- Severity: 2
- Fix: Delete the block; the JSON-LD already serves agents without reaching screen readers. Any machine-facing record must be made from the visible original, keep "about", the £40 condition and the safety text word for word, and carry a label (Unchecked until checked). Declare the three safety instructions critical.
- Evidence: Description "Boils a full 1.7 litres in about 3 minutes." vs block "Boil time: 3 minutes."; Safety "Do not fill above the MAX line: boiling water can spill from the spout. The handle stays cool, but the body gets hot. Keep the cord out of reach of children." absent from the block and from the JSON-LD `additionalProperty`; `aria-hidden="false"`. Struck from one review: a statement that blind readers and readers with cognitive disabilities are "less likely to open the full page"; the material does not show it.
- Needs disabled readers: yes. Screen-reader users decide whether any agent-facing summary should reach them at all and what "intact" requires of it (principle 5). Test which copy they treat as authoritative, and whether assistant users receive the safety instructions before buying.

### F6. The Add to basket control is a link with role="button", a name that changes the action, and no out-of-stock state
- Where: `<a class="btn" href="/basket/add?sku=STL-17-BS" role="button" aria-label="Add to basket: ... buy now, ..." aria-describedby="price stock delivery returns">`.
- Problem: The element is a link announced as a button, with no key handler, so Space (the button convention) does not activate it. The name says "buy now", a different action from adding to basket. Delivery and returns are spoken twice, in the name and in the description. When the script writes "Out of stock.", the control and its name do not change.
- Who is affected: Keyboard and switch users (Space); screen-reader users (misnamed action, length, contradiction with F2).
- Impact: The primary action can fail for some keyboard users, and readers are misinformed about what it does and whether it can be done.
- Severity: 2
- Fix: Use a real `<button>` in a form that POSTs, named by its visible text "Add to basket", with `aria-describedby="price stock"` at most. Disable it or rename it when out of stock.
- Evidence: Attributes quoted above; no keydown handler in the script.
- Needs disabled readers: yes. Test Space and Enter activation with keyboard and switch users, and announcement length with screen-reader users.

### F7. Image alt text is a keyword list, not a description of the image
- Where: `img` `alt`.
- Problem: "Stellar 1.7L Rapid Boil Kettle in Brushed Steel, buy the Stellar kettle, best price, rapid boil kettle UK, stainless steel kettle, cordless kettle, energy saving kettle" describes nothing visual and carries claims (F3). The image is not in the material, so what it shows cannot be checked.
- Who is affected: Screen-reader and braille users; images-off and text-only users.
- Impact: Whatever the photo shows does not reach non-visual readers; a long, repetitive announcement does.
- Severity: 2
- Fix: Write a short description of the actual photograph with no keywords or claims (for example, if accurate, "Brushed steel kettle on its round cordless base, with a water window on the side").
- Evidence: The alt attribute quoted above.
- Needs disabled readers: yes. Test whether the replacement description is enough for non-visual buyers to judge the kettle's appearance.

### F8. Status awarded by self-claim: "AI agent ready", "Product facts for assistants", and no label or provenance on any version
- Where: The brief's framing ("AI agent ready"); the facts block's own heading; every version (aria-labels, alt, facts block, JSON-LD).
- Problem: "AI agent ready" is the retailer's self-assessment, and a tool's or publisher's claim about itself is not evidence. The facts block names itself; no version records who made it, from what, when, or whether anyone checked it, and there is no must-survive declaration. Every version is at best Unchecked. Common automated rules (alt present, names present, label-in-name, valid ARIA) would likely pass most of F2 to F7, but no checker was run, so that is an expectation, not a result; either way a pass or score would measure only the machine-checkable slice and is not conformance.
- Who is affected: All readers, if the retailer reads agent readiness or an automated pass as accessibility; auditors and assistant builders who cannot tell which text is authoritative.
- Impact: The barriers that matter most here are outside what the rebuild was tuned to satisfy.
- Severity: 2
- Fix: Do not present agent readiness or automated results as accessibility. Write the declaration (price, stock, delivery condition, safety instructions, 1.7 litres as critical), generate each version from it with source, time and check status, and withhold any version that drops a critical item. The Unfaithful classes in this review rest on the reviewers' weights, not a declaration, and are provisional until one exists.
- Evidence: Brief: "AI agent ready"; facts block "Product facts for assistants. Name: ..." with no date, source or check; JSON-LD has no `dateModified` or provenance.
- Needs disabled readers: yes. Disabled readers decide what "intact" means for these versions (principle 5); an outcome test of the purchase path should check whether they end correctly informed of price, delivery terms and safety.

### F9. Minimum fill and empty weight exist only in the machine layers
- Where: JSON-LD `additionalProperty` ("Weight empty" 1.4 kg, "Minimum fill" 0.5 L); facts block.
- Problem: Neither appears on the visible page. Minimum fill is an instruction for use. Readers get different substance depending on their route, and the file does not say which is the source of record.
- Who is affected: Readers who do not use assistive technology or agents, including magnifier, cognitive-access, voice and switch users.
- Impact: Use information is withheld from the visible page.
- Severity: 1
- Fix: Show weight and minimum fill visibly (Description or Safety) and make the visible text the single source of record.
- Evidence: `{"name":"Minimum fill","value":"0.5 L"}`; "Minimum fill: 0.5 litres." in the block; no visible equivalent.
- Needs disabled readers: no.

### F10. Verbose and inaccurate landmark and link names
- Where: `header` `aria-label` ("...with navigation, search and basket"); `main` and breadcrumb `nav` `aria-label`s; redundant `role="banner"`/`role="main"`; `role="region"` on the gallery and price; home and basket link `aria-label`s.
- Problem: Explicit roles duplicate native ones, names are long, the home link repeats marketing, and the header label promises navigation and search the header does not contain. The basket name is static text that will not follow the visible count if script ever changes it. Voice control is not affected: the visible text begins each link name.
- Who is affected: Screen-reader users navigating by landmark or link list.
- Impact: Slower, noisier navigation; one inaccurate label.
- Severity: 1
- Fix: Drop the redundant roles and labels, name the breadcrumb "Breadcrumb", and let links take their visible text.
- Evidence: Attributes quoted above; the header holds only the home and basket links. Struck from one review: the claim that voice-control users must say names that differ from the visible ones.
- Needs disabled readers: yes. Test time to reach the price and to add to basket against a version with plain names.

### F11. The 20-second poll builds a timestamped dwell record tied to the session
- Where: `setInterval(... fetch('/api/offer/STL-17-BS') ..., 20000)`.
- Problem: The request carries no need-revealing field. But same-origin `fetch` sends cookies by default and the poll runs while the tab is open, so the server receives a timed, session-linked record of how long each reader stays. Combined with other data the server may hold, long dwell is one ingredient of a composition leak. Nothing in the file performs that profiling; this is an inference risk, not a demonstrated leak. Server logging is not in the material.
- Who is affected: All readers; slower or assisted readers leave the longest traces.
- Impact: The site collects behavioural data it does not need; if ever used to infer disability it would be special category data (ASSUMED, counsel's opinion pending).
- Severity: 1
- Fix: Check the offer on load and re-validate at add to basket instead of polling. If a refresh is kept, pause it while `document.visibilityState` is hidden, send it with `credentials: 'omit'`, and keep endpoint logs aggregate and short-lived.
- Evidence: Unconditional 20000 ms interval, no `credentials` option, no visibility check.
- Needs disabled readers: no.

Not found: a must-survive declaration; any version label, provenance or EU AI Act Article 50 mark (it is not known whether any version is machine-made); a source or date for the 4.6 / 1,204 rating; the image itself; any request, header, URL, cookie, storage write, analytics, beacon or assistive-technology or agent detection that reveals a reader's needs (the page leaves adaptation to the reader's device, and nothing guards that against a later change); on-page conformance badges, scores or "WCAG 2.3"/AAA claims; media needing captions or audio description; motion; Easy Read, plain-language or audio versions; correction notes or version history; evidence in the material that disabled readers took part in the rebuild or its testing; evidence of how any particular assistant actually reads this page.
