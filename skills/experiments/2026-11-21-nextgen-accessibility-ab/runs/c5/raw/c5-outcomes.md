### F1. Non-visual and agent paths say delivery is free, but it is not free for this kettle bought alone
- Where: `h1` aria-label ("free next-day delivery"); Add to basket aria-label ("free next-day delivery"); hidden facts block ("Delivery: free next day"); compare visible `#delivery` ("Free next-day delivery on orders over £40") and the price £34.99.
- Problem: The kettle costs £34.99, under the £40 threshold. The visible page states the condition. The heading name, the button name and the hidden facts drop it, so it becomes an unconditional claim. On the button the two disagree in one announcement: the name says "free next-day delivery", then aria-describedby reads "Free next-day delivery on orders over £40". Coded against the visible original, the condition (a hedge or caveat) is dropped silently and the claim is changed. That makes the version Unfaithful, not merely lossy.
- Who is affected: Screen-reader users, who hear the heading and button names in place of the visible text. People who shop through an AI assistant or AI browser that reads accessible names or the hidden block. Readers with cognitive or memory disabilities, who are more likely to keep the first, simpler claim than the later, conditional one.
- Impact: Safety: readers on the buy task can pay for delivery they were told was free, or decide to buy because of it. Performance: the reader is misinformed about the total cost. Comfort: the reader has to reconcile two contradictory statements.
- Severity: 3
- Fix: Remove delivery claims from the `h1` and button names. Let the names match the visible text ("Stellar 1.7L Rapid Boil Kettle, Brushed Steel"; "Add to basket"). Generate any machine-facing delivery statement from the same source as `#delivery`, condition included. Outcome test: "If you buy only this kettle, how much will delivery cost?"; "Where on the page did you learn that?"
- Evidence: Line 225 aria-label; line 236 aria-label and `aria-describedby="price stock delivery returns"`; line 238; line 248. How often assistants rely on accessible names or hidden text over visible text is not tested here (the alignment-gap claim is DESIGNED).
- Needs disabled readers: yes. Test with screen-reader users and with assistant users whether they report delivery as free, conditional or unknown, and which announcement they relied on.

### F2. Live price and stock reach the visible page only; structured data and the hidden facts stay frozen
- Where: JSON-LD `offers` (price "34.99", `InStock`); hidden facts ("Price: 34.99 GBP. Availability: in stock."); the script updates only `#price` and `#stock`.
- Problem: The page has three price and availability records. Only one is live. The script's comment says it runs "so assistants always see the live offer", but the records an assistant is most likely to parse are never updated. This is a chain fault (principle 1): versions are made from a snapshot taken at page load, not from the current original. When stock runs out, the visible text says "Out of stock." while the JSON-LD and the hidden block, which screen readers also read, still say in stock. The button still says "buy now".
- Who is affected: Readers who rely on an AI assistant to compare, summarise or buy, including blind readers and readers with cognitive or motor disabilities who use an agent to save effort. Screen-reader users, who meet both the live text and the stale hidden block.
- Impact: Safety: a reader is told a wrong price or that the item is available, or an agent buys at a price the reader did not agree to. Performance: the reader cannot tell which figure is current.
- Severity: 3
- Fix: Keep one source of truth for the offer. Render the visible price, the JSON-LD and any facts text from it, and update all of them together, or none of them. When stock is out, change the button state and name. Outcome test: "What does this kettle cost right now?"; "Can you buy it today?"; "How sure are you, and why?", asked after a price or stock change during the session.
- Evidence: Line 204; line 248; lines 253–258. The claim that the fault affects buyers depends on assistants reading JSON-LD or hidden text. That is plausible but not tested here.
- Needs disabled readers: yes. Test whether assistant users and screen-reader users come away with the current price and stock after a mid-session change, or with the stale ones.

### F3. Claims exist only in accessible names, alt text and hidden text, with no visible support
- Where: `h1` aria-label ("best-selling kettle, rated 4.6 out of 5 by 1,204 customers"); button aria-label ("best price guarantee", "buy now"); alt text ("best price", "energy saving kettle"); hidden facts ("Rating: 4.6 of 5. Reviews: 1,204.").
- Problem: The visible page states no rating, best-seller status, price guarantee or energy-saving property. These are new factual claims that only non-visual and machine paths receive, which makes those paths Unfaithful. The paths also disagree among themselves: "1,204 customers" in the heading, "Reviews: 1,204" in the hidden block. The page gives no terms for the "best price guarantee", so a reader cannot act on it.
- Who is affected: Screen-reader users. Readers using assistants. Voice-control and braille users, who get the same names.
- Impact: Safety: readers may buy on the strength of a guarantee, rating or energy claim that sighted readers are never shown and cannot check. Performance: different readers of the same page get materially different information.
- Severity: 3
- Fix: Remove from names, alt text and hidden text every claim that is not on the visible page. If the rating or the guarantee is real, show it visibly with its source or terms, and give it the same words on every path. Outcome test: "Does this kettle come with a price guarantee? What does it promise?"; "How is the kettle rated, and by how many people?"; "Is it energy saving?"
- Evidence: Lines 225, 228, 236, 248, compared with the visible text on lines 225–245.
- Needs disabled readers: yes. Test whether screen-reader and assistant users report these claims as facts about the product, and whether they knew sighted readers were not shown them.

### F4. A screen reader announces stock every 20 seconds, while a price change is never announced
- Where: `#stock` with `aria-live="assertive"` and `aria-atomic="true"`; the script rewrites its textContent every 20 s. `#price` is not a live region.
- Problem: The script rewrites the stock text on every cycle, even when nothing changed. Depending on the browser and screen reader, that can cause a repeated, interrupting "In stock. Price checked just now." A price change, the fact that matters, updates silently. If the fetch fails or the JSON is malformed, nothing updates, the promise rejects unhandled, and the page still says "Price checked just now", a freshness claim that is now false. The text "checked just now" is also fixed at page load, so a cached page makes the claim from the start.
- Who is affected: Screen-reader users, especially those who read slowly, use braille, or are interrupted mid-sentence. Readers with attention or cognitive disabilities who use read-aloud.
- Impact: Comfort: repeated interruptions during reading and checkout. Safety: a reader is reassured that the price is current while a change goes unannounced, or while the check has failed.
- Severity: 3
- Fix: Announce only real changes. Compare against the previous value, and use polite, not assertive, announcements. Announce price changes explicitly ("Price changed from £34.99 to £36.99"). Show a real time ("Price checked at 14:02"), and on failure say "Could not check the price; shown price may be out of date". Consider stopping polling once the reader is interacting. Outcome test: "Did the price change while you were on the page? From what to what?"; "How current was the price you saw?"; "Rate how disruptive the page was while you read the safety section."
- Evidence: Line 233; lines 253–258. The repeat announcement on identical text varies by browser and screen reader and is not tested here.
- Needs disabled readers: yes. Test interruption burden and whether price changes are noticed, across the main screen reader and browser pairs and on braille displays.

### F5. The "Was" price stays fixed while the "Now" price moves
- Where: `<s>£49.99</s>` with sr-only "Was" and "Now"; the script replaces only `#price`, as `'£' + o.price`.
- Problem: After a live update, the page can show a discount that no longer holds. If the price rises to £49.99 or above, it still reads "Was £49.99, Now £52". The script does no number formatting, so a value like 34.9 shows as "£34.9". Neither the JSON-LD nor the hidden facts carry a was-price, so assistants cannot check or report the discount, and sighted and screen-reader readers get a discount claim that agents do not.
- Who is affected: All readers on the buy task. Most exposed are readers who rely on the "Was/Now" phrasing as their only cue to the discount: screen-reader users, and readers with dyscalculia comparing figures.
- Impact: Safety: a misleading reference price. Performance: a wrong sense of the saving.
- Severity: 2
- Fix: Derive the was-price, the now-price and the discount from the same offer data on every update, and hide the was-price when it does not apply. Format currency with Intl.NumberFormat for en-GB and GBP. Outcome test: "How much would you save compared with the usual price?"
- Evidence: Line 232; line 256; line 204 (no reference price).
- Needs disabled readers: no.

### F6. Safety instructions reach the visible page only, not the assistant or structured paths
- Where: Safety section (lines 244–245). It is missing from the JSON-LD and from the hidden facts block, which carries minimum fill but not the MAX line.
- Problem: The instructions "Do not fill above the MAX line", "body gets hot" and "keep the cord out of reach of children" are not declared for the machine paths. A reader who buys through an assistant summary is unlikely to receive them. The minimum fill and the empty weight are the reverse case: they are in the structured and hidden paths but not on the visible page.
- Who is affected: Readers who rely on assistants to shop: blind readers, and readers with cognitive disabilities, who are less likely to open the full page. Sighted readers miss the minimum fill and the weight; the weight matters to readers with grip or strength impairments.
- Impact: Safety: a scald risk and an instruction for child safety that the assistant path omits. Performance: weight, which matters for buyers with limited grip, is hidden from sighted readers.
- Severity: 2
- Fix: Declare the safety instructions as critical must-survive items (type: instruction) and include them, word for word, in every machine-facing record. Show the weight and the minimum fill visibly. Outcome test: "What must you not do when filling this kettle, and why?"; "Which parts get hot?"; "How heavy is it empty?"
- Evidence: Lines 204, 245, 248. Whether assistants pass on safety text is OPEN.
- Needs disabled readers: yes. Test whether assistant users receive and recall the safety instructions before buying.

### F7. The hidden facts block changes a hedge and duplicates the page for screen-reader users
- Where: `div.sr-only aria-hidden="false"` at the end of `main`.
- Problem: The visible text says "Boils a full 1.7 litres in about 3 minutes". The block says "Boil time: 3 minutes", so the hedge is dropped and the claim changed. Because the block is exposed to assistive technology, screen-reader users hear a second, keyword-padded copy of the page ("Keywords: rapid boil kettle, cordless kettle…") after the content. Some of its figures disagree with the visible ones (see F1 to F3).
- Who is affected: Screen-reader users, who have to listen through it and cannot tell which copy is authoritative.
- Impact: Comfort: a repeated, padded reading. Safety: a firmer performance claim than the original makes. Performance: when the two copies conflict, the reader cannot tell which to trust.
- Severity: 2
- Fix: Remove the block. If machine-facing facts are needed, put them in structured data generated from the visible original, keep the hedges, and keep them out of the accessibility tree. Outcome test: "How long does it take to boil a full kettle? How certain is that figure?"
- Evidence: Line 242 compared with line 248.
- Needs disabled readers: yes. Test the reading burden and which copy screen-reader users treat as authoritative.

### F8. The alt text is a keyword list, not a description of the image
- Where: `img` alt (line 228).
- Problem: The alt text repeats the product name and SEO terms ("buy the Stellar kettle, best price, rapid boil kettle UK…"). It does not describe what the image shows: shape, finish, the water window, the base. "Energy saving" is an unsupported claim (see F3).
- Who is affected: Blind and partially sighted screen-reader users choosing a kettle by its appearance or features. Assistant users whose agent describes the image from its alt text.
- Impact: Performance: no visual information. Comfort: padded listening. Safety: an unsupported claim.
- Severity: 2
- Fix: Write alt text that describes the photograph, in a sentence or two, with no keywords and no claims. Outcome test: "Describe what this kettle looks like."; "Can you see how much water is inside it without opening it?"
- Evidence: Line 228; line 242 (water window).
- Needs disabled readers: yes. Test whether the replacement description is enough to choose by appearance.

### F9. Inflated landmark and link names multiply the reading load along the screen-reader route
- Where: The `header`, `main` and breadcrumb `nav` aria-labels; the home link and basket link aria-labels; the `h1` and button names.
- Problem: Each name adds marketing or redundant text. Before the price, a screen-reader user can hear "free delivery" or "free next-day delivery" several times (the home link, the `h1`, and later the button, its description and the hidden block). Landmark lists become long sentences. The basket name "Basket (0), view your basket and checkout securely" is static text and may not follow the visible count if the count changes.
- Who is affected: Screen-reader users navigating by landmarks, headings and links. Voice-control users who have to say names that differ from the visible ones.
- Impact: Comfort: undue listening time and repetition on the most-used navigation routes. Performance: repetition buries the conditions that matter (F1).
- Severity: 2
- Fix: Use short names that match the visible text, or no aria-label where the visible text is enough. Remove promotional text from all accessible names. Outcome test: "How long did it take to reach the price?"; "Rate how much of what you heard was useful."
- Evidence: Lines 218–223, 225, 236. The ARIA error correlation in the theory is correlation, not cause, and is not relied on here.
- Needs disabled readers: yes. Test time to reach the price and to add to basket, and the reported burden, against a version with plain names.

Not found: No reader-need disclosure in the request, URL or analytics (the polling fetch carries no preference data). No version label or Article 50 machine mark on any machine-facing record (none is generated by AI here). No dose, deadline or consultation task. No evidence in the material of how any particular assistant actually reads this page.
