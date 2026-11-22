Original taken as the visible page text in `product.html`. Versions found: the h1 `aria-label`, the image `alt`, the home and basket link `aria-label`s, the Add to basket `aria-label`, the hidden "Product facts for assistants" block (`aria-hidden="false"`, so screen readers also read it), the JSON-LD, and the live price/stock text the script writes. No must-survive declaration exists, so the weights below are the reviewer's own (step 2).

Must-survive items (reviewer-assigned):
- Price "£34.99": number, critical (it is what the reader pays).
- "In stock": fact, critical (it decides whether the reader can buy, and it changes over time).
- Delivery condition "Free next-day delivery on orders over £40": hedge/condition, critical (the item costs £34.99, so dropping "over £40" turns the offer into a false one for this item bought alone).
- Safety: "Do not fill above the MAX line: boiling water can spill from the spout", "the body gets hot", "Keep the cord out of reach of children": instruction, critical (risk of injury).
- "1.7 litres": number, critical (it is the product's defining spec).
- Was price "£49.99": number, important (a reference-price claim the reader uses to judge the deal).
- "30-day returns": fact, important.
- Boil time "about 3 minutes": hedge, important (changing "about" into an exact figure is distortion, so it is not allowed at any weight).
- Colour "Brushed Steel": fact, important.
- Description features (cordless 360° base, limescale filter, water window marked in cups): optional.

### F1. Safety instructions dropped silently from the assistant facts block and the JSON-LD
- Where: hidden `div.sr-only aria-hidden="false"` ("Product facts for assistants"); `<script type="application/ld+json">`.
- Problem: All three critical safety items are missing from both versions, and neither says anything was cut. Code: dropped (silent) ×3 in each. Class: Unfaithful.
- Who is affected: Screen-reader users, who hear the facts block as page content. Also anyone who gets the product through a shopping assistant that builds its answer from these blocks.
- Impact: A reader who relies on these versions is never told about the overfill scald risk, the hot body or the cord near children. Whether downstream assistants pass the omission on is OPEN; the omission in the source versions can be seen in the file.
- Severity: 3
- Fix: Add the safety text to the facts block word for word, or remove the facts block (see F4). Add the safety text to the JSON-LD, for example as a `PropertyValue` "Safety". Declare all three items critical.
- Evidence: Original: "Do not fill above the MAX line: boiling water can spill from the spout. The handle stays cool, but the body gets hot. Keep the cord out of reach of children." | Facts block: "...Weight empty: 1.4 kg. Minimum fill: 0.5 litres. Delivery: free next day. Returns: 30 days..." (no safety text) | JSON-LD: `"additionalProperty":[{"name":"Weight empty"...},{"name":"Minimum fill"...}]` (no safety text).
- Needs disabled readers: yes. Test whether screen-reader users who navigate past the Safety heading take the facts block as the complete product summary.

### F2. Delivery condition "over £40" removed, so a conditional offer reads as unconditional
- Where: h1 `aria-label`; Add to basket `aria-label`; facts block.
- Problem: The critical condition is dropped in three versions: changed (the hedge was removed). On its own this kettle costs £34.99, below the threshold, so each version makes a false statement about this purchase. Class: Unfaithful.
- Who is affected: Screen-reader users: the h1 and button `aria-label`s replace the visible text, and the facts block is read aloud. Also users of assistants that read these labels.
- Impact: A reader may expect free next-day delivery and then be charged for delivery at checkout. The button is also self-contradictory: its `aria-describedby` points to `#delivery`, which keeps the condition, while its name drops it.
- Severity: 3
- Fix: Use "Free next-day delivery on orders over £40" word for word wherever delivery is mentioned, or leave delivery out of these labels.
- Evidence: Original: "Free next-day delivery on orders over £40." | h1 label: "...free next-day delivery" | Button label: "...buy now, free next-day delivery, 30-day returns..." | Facts block: "Delivery: free next day." (By contrast the home link label "free delivery over 40 pounds" keeps the condition.)
- Needs disabled readers: yes. Test which of the accessible name and the description screen-reader users hear first or remember, when the two conflict.

### F3. New factual and marketing claims appear in versions but not in the original
- Where: h1 `aria-label`; image `alt`; Add to basket `aria-label`; basket link `aria-label`; facts block.
- Problem: These are new claims that the visible original does not support. Retailer opinion is presented as fact, and the rating has no source. Class: Unfaithful for every version listed.
- Who is affected: Screen-reader users, who get these claims in place of the visible text. Also assistant users.
- Impact: Readers receive claims that sighted readers never see on the page and that nothing on the page backs up. It breaks the line between fact and opinion, and readers relying on these versions are led to a purchase on an unequal footing.
- Severity: 3
- Fix: Remove every claim that the visible page does not state. If the rating is real, show it visibly with its source and date, then quote it.
- Evidence:
  - Original h1: "Stellar 1.7L Rapid Boil Kettle, Brushed Steel" | label: "...best-selling kettle, rated 4.6 out of 5 by 1,204 customers..." ("best-selling" and the rating appear nowhere on the visible page).
  - Image alt: "...best price, ... stainless steel kettle, ... energy saving kettle" ("best price" and "energy saving" are unsupported; the original says "Brushed Steel", not stainless).
  - Button label: "...best price guarantee" (no guarantee appears anywhere on the page).
  - Basket link: "...checkout securely" (not stated on the page).
  - Facts block: "Rating: 4.6 of 5. Reviews: 1,204. ... Keywords: ... energy saving kettle".
- Needs disabled readers: no.

### F4. Hedge removed: "about 3 minutes" becomes an exact "3 minutes"
- Where: facts block.
- Problem: An important hedge is changed. This is distortion, which is not allowed at any weight. Class: Unfaithful.
- Who is affected: Screen-reader users; assistant users.
- Impact: An estimate is presented as a specification.
- Severity: 2
- Fix: Use "Boil time: about 3 minutes (full 1.7 litres)".
- Evidence: Original: "Boils a full 1.7 litres in about 3 minutes." | Facts block: "Boil time: 3 minutes."
- Needs disabled readers: no.

### F5. Stale versions: the live script updates the visible price and stock but leaves the other versions behind (chain fault)
- Where: `setInterval` script; JSON-LD; facts block; the `<s>£49.99</s>` was-price.
- Problem: Every 20 seconds the script rewrites `#price` and `#stock`. The JSON-LD (`"price":"34.99"`, `"InStock"`) and the facts block ("Price: 34.99 GBP. Availability: in stock.") are never updated, so after a change they come from an older original. The was-price stays fixed whatever the new price is. Code after a change: price changed; stock changed. Class: Unfaithful from the first change on.
- Who is affected: Screen-reader users, who hear the visible price and then the stale facts-block price on the same page. Also assistant users, especially agents that read the JSON-LD, which is what the page was built for.
- Impact: Two different prices or stock states can sit on the page at once. If the price goes above £49.99, the page reads "Was £49.99 Now £5x", a false discount claim.
- Severity: 3
- Fix: Generate the JSON-LD, the facts block and the was/now pair from the same offer object the script fetches, and update them together. If they cannot be kept current, remove the duplicates.
- Evidence: Script: `document.getElementById('price').textContent = '£' + o.price;` (only `#price` and `#stock` change) | JSON-LD: `"price":"34.99"...,"availability":"https://schema.org/InStock"` | Facts block: "Price: 34.99 GBP. Availability: in stock."
- Needs disabled readers: no.

### F6. "Price checked just now" can be false, and the price format can change
- Where: `#stock` live region and its script.
- Problem: The fetch has no error handling. If it fails or `r.json()` throws, the text is not updated and keeps saying "Price checked just now." while it gets older; the page fails silently. Separately, `'£' + o.price` with a numeric `34.9` renders "£34.9", so the number changes form. The page states the check time relatively but never gives the actual time.
- Who is affected: All readers. Screen-reader users hear it announced through `aria-live="assertive"`.
- Impact: The reader is told the price is fresh when it may not be.
- Severity: 2
- Fix: Show the actual check time. On failure, say "Price could not be updated; last checked <time>". Format prices with `toFixed(2)` or `Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP'})`.
- Evidence: Original (initial HTML): "In stock. Price checked just now." | Script: `(o.inStock ? 'In stock.' : 'Out of stock.') + ' Price checked just now.'` with no `try/catch` and no `r.ok` check.
- Needs disabled readers: yes. Test whether an assertive announcement every 20 seconds of unchanged text lets screen-reader users finish reading the safety and description sections.

### F7. The Add to basket name changes the action and stays the same when the item is out of stock
- Where: Add to basket `aria-label`.
- Problem: The visible text "Add to basket" becomes "Add to basket: ... buy now". "Buy now" is a different action from adding to the basket: changed. When the script sets "Out of stock.", the button and its "buy now" label stay as they are.
- Who is affected: Screen-reader and voice-control users.
- Impact: The reader is misinformed about what the control does, and about whether it can do it at all.
- Severity: 2
- Fix: Name it "Add to basket" and let `aria-describedby` carry the context. When out of stock, disable the control or change its name.
- Evidence: Visible: "Add to basket" | Label: "Add to basket: Stellar 1.7L Rapid Boil Kettle in Brushed Steel, buy now, ..."
- Needs disabled readers: yes. Test with voice-control users whether the long name affects activation.

### F8. Image alt text is a keyword list, not a description of the image
- Where: `img` `alt`.
- Problem: The alt text describes nothing visual. It repeats the product name and SEO keywords and adds claims (see F3). The image itself is not in the case material, so whether any visual content was kept cannot be checked.
- Who is affected: Screen-reader users; braille users.
- Impact: Whatever the image shows (finish, window, base) does not reach the reader, and unsupported claims do.
- Severity: 2
- Fix: Describe the image, for example "Brushed steel kettle on its round base, with a water window on the side". Drop the keywords.
- Evidence: Alt: "Stellar 1.7L Rapid Boil Kettle in Brushed Steel, buy the Stellar kettle, best price, rapid boil kettle UK, stainless steel kettle, cordless kettle, energy saving kettle"
- Needs disabled readers: yes. Test what content screen-reader users need from a product image.

### F9. Facts that appear only in the machine versions are not in the visible original
- Where: JSON-LD and facts block, compared with the visible page.
- Problem: "Weight empty: 1.4 kg" and "Minimum fill: 0.5 L" are in the machine versions but not in the visible page. Minimum fill is an instruction for use. Either the visible original is incomplete, or the versions add claims; the file does not say which is the source of record.
- Who is affected: Sighted readers and anyone not using assistive technology, who never see the minimum fill.
- Impact: Readers get different substance depending on the channel.
- Severity: 1
- Fix: Put weight and minimum fill in the visible page (Description or Safety), and make the visible text the single source of record.
- Evidence: JSON-LD: `{"name":"Minimum fill","value":"0.5 L"}` | Facts block: "Minimum fill: 0.5 litres." | Visible page: none.
- Needs disabled readers: no.

### F10. No version carries a label, provenance or check
- Where: all versions.
- Problem: No version records who made it, from what, when, or whether anyone checked it. The facts block calls itself "Product facts for assistants", which is a label it gives itself and therefore not evidence. There is no must-survive declaration. Every version is at best Unchecked, and F1 to F5 make the main ones Unfaithful.
- Who is affected: All readers; also auditors and assistant builders.
- Impact: Nobody can tell which text is authoritative or current.
- Severity: 2
- Fix: Write a must-survive declaration covering the items listed above. Generate each version from it and record its source, time and check status. Withhold any version that cannot keep the critical items.
- Evidence: Facts block: "Product facts for assistants. Name: ..." (no date, source or check); JSON-LD has no `dateModified` or provenance.
- Needs disabled readers: yes. Disabled readers should decide what "intact" means for the product facts (principle 5).

Not found: a must-survive declaration; any version label or provenance; EU AI Act Article 50 marking, which cannot be assessed because it is not known whether any of these versions was machine-made; a source or date for the 4.6/1,204 rating; the image itself, so alt fidelity to the image cannot be checked; Easy Read, plain-language, audio, transcript or translated versions; correction notes or version history.
