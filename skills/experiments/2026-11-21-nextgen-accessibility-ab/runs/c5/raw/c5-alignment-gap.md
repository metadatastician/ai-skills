### F1. Assertive live region re-announces a no-change status every 20 seconds, while the real price change is silent
- Where: `#stock` (`aria-live="assertive" aria-atomic="true"`) and the `setInterval` script ("so assistants always see the live offer").
- Problem: Every 20 s the script rewrites `#stock` with `textContent`. Many screen-reader/browser pairs announce a live region again whenever its content is replaced, even with identical text, so "In stock. Price checked just now." can interrupt the user (assertive) three times a minute, mid-sentence, wherever they are on the page. Meanwhile `#price` is not in any live region, so an actual price change gets no announcement at all. The noise serves no person, and the change that matters is not announced. The polling exists for agents, as the script comment says.
- Who is affected: Screen-reader users (interruption, lost reading position, no news of a price change); braille display users (the flash message displaces the line); cognitive-access users (repeated interruption).
- Impact: Reading the Description or Safety section can be cut off repeatedly. A user can add to basket at a price they never heard.
- Severity: 3
- Fix: Remove polling for the page's human view, or poll without writing to the DOM unless a value actually changes. Announce once, politely (`aria-live="polite"`), only when price or stock changes, with the old and new price ("Price changed from £34.99 to £36.99"). Serve agents the live offer from the API or JSON-LD, not by churning a live region.
- Evidence: `setInterval(..., 20000)` writes `document.getElementById('stock').textContent` on every tick, with no change check; `#price` has no `aria-live`.
- Needs disabled readers: yes. Test with screen-reader users across at least two reader/browser pairs: how often the message is actually announced, whether it interrupts reading, and whether a real price change is noticed before purchase.

### F2. The H1's accessible name adds claims that the visible heading and page do not support, and one contradicts the delivery terms
- Where: `<h1 aria-label="... best-selling kettle, rated 4.6 out of 5 by 1,204 customers, free next-day delivery">`.
- Problem: The aria-label replaces the visible heading text for assistive tech. It announces "best-selling", a rating and a review count that appear nowhere visibly, and "free next-day delivery" without condition. The visible terms are "Free next-day delivery on orders over £40", and the kettle costs £34.99, so on its own it does not qualify. What is announced differs from what is seen, and the announced version is commercially more favourable.
- Who is affected: Screen-reader users, who are told something different from the visible page. Voice-control users, for whom the heading is not actionable, are affected less. Sighted users helping a screen-reader user see a different heading. Agents that read the accessibility tree are affected too and may relay the claim to their users.
- Impact: A misleading delivery claim given to some users only. Heading navigation becomes long and promotional, and the heading list is the main way to skim the page.
- Severity: 3
- Fix: Remove the aria-label so the heading is its visible text. If rating and delivery facts matter, show them as visible text for everyone, with the £40 condition intact.
- Evidence: Line with the h1 aria-label; `<p id="delivery">Free next-day delivery on orders over £40.</p>`; price £34.99. No visible rating, review count or "best-selling" anywhere on the page.
- Needs disabled readers: yes. Test whether screen-reader users come away believing delivery is free for this item alone, and how much the long heading slows heading navigation.

### F3. The "Add to basket" control is stuffed with claims, contradicts itself, and duplicates its description
- Where: `<a class="btn" href="/basket/add?sku=STL-17-BS" role="button" aria-label="Add to basket: ... buy now, free next-day delivery, 30-day returns, best price guarantee" aria-describedby="price stock delivery returns">`.
- Problem: (a) The name says "buy now", but the action only adds to basket. (b) "Best price guarantee" appears nowhere visibly. (c) The name says delivery is free without condition, and the description then reads "Free next-day delivery on orders over £40", so one announcement contradicts itself. (d) Delivery and returns are each spoken twice, once in the name and once in the description. (e) `role="button"` on a link that navigates by GET: users who know the convention press Space for a button, and Space does not activate a link. That is a barrier for keyboard and switch users that no agent meets.
- Who is affected: Screen-reader users (length, contradiction, a claim with no source); keyboard and switch users (Space does nothing); cognitive-access users (conflicting terms). Voice-control users can still say "Add to basket", because the visible text begins the name.
- Impact: The page's primary action is the longest and least consistent announcement on it, and it states a guarantee the business shows to no one else.
- Severity: 2
- Fix: Use a real `<button>` in a form that POSTs, with the accessible name "Add to basket" taken from the visible text. Keep `aria-describedby="price stock"` at most. Show delivery and returns terms visibly once, accurately.
- Evidence: Attributes quoted above; `#delivery` text; no visible "best price guarantee"; `role="button"` with no key handler for Space.
- Needs disabled readers: yes. Test the announcement length, and whether listeners notice the contradiction, with screen-reader users. Test Space activation with keyboard and switch users.

### F4. The hidden "facts for assistants" block is spoken to screen-reader users, duplicates the page, and alters it
- Where: `<div class="sr-only" aria-hidden="false">Product facts for assistants. ...</div>` at the end of `main`.
- Problem: This is an unlabelled machine version of the page, exposed to the accessibility tree and hidden from sight. Screen-reader users reading linearly hear it after Safety: a second copy of the facts, then a keyword list. Against the visible original it fails the integrity test. It drops the "about" hedge ("Boil time: 3 minutes" vs "about 3 minutes"). It drops the £40 condition ("Delivery: free next day"). It drops all safety instructions (the MAX-line spill warning, the hot body, the cord near children). It adds rating, review count and "energy saving", which the visible page does not support. Under the theory's outcome codes that is a changed hedge, a changed condition and new claims, so the class is Unfaithful whatever the declaration weights. If safety is declared critical, it also drops critical items.
- Who is affected: Screen-reader and braille users (noise, contradiction with the visible page, keyword stuffing read aloud). People who rely on an agent's summary of the page, which may lose the safety warning and gain the unconditional free delivery.
- Impact: Screen-reader users hear a static price that will contradict `#price` after a live update (see F6). Safety information is absent from the version written for agents.
- Severity: 2
- Fix: Delete the block. Agents already have JSON-LD and the visible text. If a machine summary is kept, it must be made from the visible original, keep hedges, conditions and the safety instructions, be hidden from assistive tech (`aria-hidden="true"` or kept out of the DOM entirely), and carry a label (Unchecked until checked).
- Evidence: Block text versus `#delivery`, the Description paragraph ("about 3 minutes") and the Safety section. `aria-hidden="false"` deliberately exposes it.
- Needs disabled readers: yes. Only they can say whether the duplicate and keyword list burden them, and what "intact" requires for a product version (Principle 5). Whether AI adaptations break declared items at material rates is OPEN. This finding rests on the page's own text, not on that claim.

### F5. Keyword-stuffed image alt text describes search terms, not the image, and contradicts the colour
- Where: `<img src="kettle.jpg" alt="Stellar 1.7L ... buy the Stellar kettle, best price, rapid boil kettle UK, stainless steel kettle, cordless kettle, energy saving kettle">`.
- Problem: The alt text is SEO keywords. It says nothing of what the photo shows (shape, finish, base, water window) and adds marketing claims ("best price", "energy saving") made nowhere else. "Stainless steel" sits beside "Brushed Steel", which may or may not describe the same finish. An automated check sees non-empty alt text and passes it.
- Who is affected: Screen-reader and braille users; users of alt text in text-only or image-off modes; cognitive-access users of read-aloud tools.
- Impact: The only image gives non-visual users no description of the product's appearance, and a long, repetitive announcement instead.
- Severity: 2
- Fix: Write a short alt text that describes the photo, for example "Brushed steel kettle on its round cordless base, with a water window on the side". Keep keywords out of it.
- Evidence: The alt attribute quoted above.
- Needs disabled readers: yes. Whether the replacement alt text gives what a non-visual buyer needs to judge the kettle's appearance.

### F6. Live price updates leave three machine copies and the "Was" price stale, so seen, announced and declared prices can disagree
- Where: The script updates only `#price`. JSON-LD `"price":"34.99"`, the hidden facts block ("Price: 34.99 GBP") and `<s>£49.99</s>` with sr-only "Was"/"Now" stay static.
- Problem: After a price change the page carries up to three different prices: the visible live one, the stale JSON-LD one (for agents) and the stale hidden-text one (for screen readers). A rise above £49.99 would show "Was £49.99 Now £52.00", a false saving. Out of stock, the JSON-LD still says `InStock` and the hidden block still says "in stock". The status line "Price checked just now" is at most 20 s old, but on a page where JavaScript has failed it stays "just now" indefinitely.
- Who is affected: Screen-reader users who reach the hidden block; cognitive-access users comparing figures; anyone relying on an agent that reads JSON-LD.
- Impact: Price and availability are inconsistent between what is seen, what is announced and what agents read.
- Severity: 2
- Fix: Use one source of truth. Update JSON-LD and any hidden copy together with the visible price, or (better) remove the duplicates. Recompute or drop the "Was" price when the price changes. Show the time of the check rather than "just now".
- Evidence: Script body updates only `#price` and `#stock`; static values in `ld+json` and the sr-only div.
- Needs disabled readers: no.

### F7. Silent price change under the user is a timing and cognitive barrier that no agent meets
- Where: The `setInterval` price refresh.
- Problem: The visible price can change while a person reads, compares or seeks help, with no notice, no history and no way to pause it. An agent re-reads instantly; a person with memory, attention or processing impairments, or one who reads slowly by magnifier or switch, decides over minutes. The claim that this class of barrier blocks people but not agents is DESIGNED, not tested. The finding rests on the script's behaviour, not on that general claim.
- Who is affected: Cognitive-access users; magnifier users (the price may be out of view when it changes); switch and voice users with slow interaction.
- Impact: A purchase decision can be made against a price that has since changed, with nothing showing that it changed.
- Severity: 2
- Fix: Do not auto-change the price displayed to a person. Show a "Price updated: £X (was £Y)" notice that the user acknowledges, and confirm the final price at basket and checkout.
- Evidence: A 20000 ms interval rewrites `#price` with no notice.
- Needs disabled readers: yes. Test with cognitive-access and magnifier users whether a price change is noticed and understood before purchase.

### F8. Information exists only in the machine layers: people see less than agents
- Where: JSON-LD `additionalProperty` "Minimum fill 0.5 L" and "Weight empty 1.4 kg"; rating and review count only in aria-labels and hidden text.
- Problem: Minimum fill matters for safe use, alongside the visible MAX-line warning, yet only agents (and screen-reader users, through the hidden block) get it. Rating and reviews reach screen-reader users and agents but not sighted users. The result is an uneven page in which what each group receives depends on its access route, not on choice (Principle 4).
- Who is affected: Sighted users, including magnifier, cognitive-access, voice and switch users, who do not get minimum fill, weight or rating. Screen-reader users, who get unverified claims.
- Impact: Safety-relevant use information is withheld from the visible page.
- Severity: 1
- Fix: Put minimum fill and weight in the visible Description or a specification list, and give rating and reviews (if shown at all) as visible text, with a link to the reviews.
- Evidence: The `ld+json` `additionalProperty` array and the hidden block; no visible equivalents.
- Needs disabled readers: no.

### F9. Verbose and redundant landmark names lengthen every landmark jump
- Where: `header role="banner" aria-label="Hob and Ladle kitchenware online shop header with navigation, search and basket"`; `main role="main" aria-label="Product details for ..."`; breadcrumb `nav aria-label="Breadcrumb navigation trail showing your location in the shop"`; `role="region"` on a one-image gallery and on the price; home link `aria-label="... free delivery over 40 pounds"`; basket link `aria-label="Basket (0), view your basket and checkout securely"`.
- Problem: Explicit roles duplicate native ones. Screen readers commonly announce the role alongside the name, so "banner" and "navigation" are said twice. The header label promises navigation and search that do not exist on the page. The home link announces marketing on every visit. The labels look like markup added for machine-readiness. WebAIM's finding that pages with ARIA average more errors (59.1 vs 42) is a correlation, not a cause, and is offered only as context.
- Who is affected: Screen-reader users navigating by landmark or link list; voice-control users are unaffected, because the visible text begins each link name.
- Impact: Landmark and link navigation are slower and noisier, and one label is inaccurate (no search on the page).
- Severity: 1
- Fix: Drop the redundant roles and aria-labels. Name the breadcrumb "Breadcrumb". Let links take their visible text. Remove the region roles on the gallery and price, or keep one, briefly named.
- Evidence: The attributes quoted above; no search field or site navigation inside the header.
- Needs disabled readers: yes. Whether the landmark verbosity measurably slows screen-reader users' navigation.

### F10. What automated checking cannot establish here, and the self-claim of "AI agent ready"
- Where: The page as a whole, and the brief's framing that the page is "AI agent ready".
- Problem: Every item in F1 to F9 would pass common automated rules: alt text present, names present, label-in-name satisfied (the visible text starts each name), valid ARIA, landmarks present. No automated tool can establish whether the alt text describes the photo; whether announced claims (rating, guarantee, unconditional free delivery) are true or match the visible page; whether the live region is heard as interruption; whether a silent price change misleads; or whether the hidden summary keeps the hedges and safety instructions. "AI agent ready" is a self-assessment, and a tool's claim about itself is not evidence. A high automated score on this page would measure only the machine-checkable slice, not conformance and not reader outcomes. GDS's 2017 result (best tool found 41% of 143 planted barriers) is context for the size of the uncovered part.
- Who is affected: All disabled users, if the retailer reads a pass or score as done.
- Impact: The barriers that matter most here are invisible to the check the redesign was tuned for.
- Severity: 2
- Fix: Do not report automated results or "agent readiness" as accessibility. Review announced-versus-visible consistency by hand, and test the price-update behaviour and the primary purchase path with disabled users (Principle 6).
- Evidence: F1 to F9; the brief's "AI agent ready" claim.
- Needs disabled readers: yes. An outcome test of the purchase path: whether users end up correctly informed of price, delivery terms and safety, without undue effort.

Not found: no on-page conformance claim, score or badge (no "WCAG AAA", no "WCAG 2.3"); no motion or animation; no media needing captions, transcripts or audio description; no reader-needs signal in the fetch request, URL or analytics (no privacy leak found); no reading-level problem in the visible Description and Safety text, which is short and plain; no adapted version (summary, Easy Read) carrying a label or provenance, because none is offered except the hidden facts block, which has no label (F4); no EU AI Act Article 50 machine-made mark on that block.
