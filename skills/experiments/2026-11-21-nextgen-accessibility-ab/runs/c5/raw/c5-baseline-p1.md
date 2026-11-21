### F1. Screen-reader users are told delivery is free when this item does not qualify
- Where: product.html, `<h1 aria-label>` (line 99), Add to basket `aria-label` (line 110), hidden facts block (line 122)
- Problem: The h1 accessible name says "free next-day delivery", the button name says "buy now, free next-day delivery", and the facts block says "Delivery: free next day". The visible text says "Free next-day delivery on orders over £40." and the kettle costs "£34.99", so on its own it does not qualify.
- Who is affected: Screen-reader users (JAWS, NVDA, VoiceOver, TalkBack), and AI assistants acting for disabled users, which read the same accessible names and hidden text
- Impact: They are given a false price promise that sighted users do not get. They may buy expecting free delivery and only find the charge at checkout. That burdens anyone who has trouble reviewing a checkout, and it is a different and worse offer from the one shown on screen.
- Severity: 3 blocks, harms or misinforms
- Fix: Remove the delivery claims from all aria-labels and from the hidden block. Let the visible sentence "Free next-day delivery on orders over £40." be the only statement, and reference it with `aria-describedby` if it is needed.
- Evidence: Line 99 `free next-day delivery`; line 110 `free next-day delivery`; line 122 `Delivery: free next day`; line 112 `on orders over £40`; line 106 `£34.99`
- Needs user testing: no

### F2. Assertive live region interrupts every 20 seconds, with no way to stop it
- Where: product.html, `#stock` `aria-live="assertive" aria-atomic="true"` (line 107) and `setInterval(..., 20000)` (lines 127-132)
- Problem: Every 20 seconds the script rewrites `#stock.textContent` with "In stock. Price checked just now.", even when nothing has changed. Replacing the text node of an assertive, atomic live region makes NVDA, JAWS and VoiceOver announce it again and cut off whatever they were reading.
- Who is affected: Screen-reader users; people with cognitive or attention disabilities who use text-to-speech or read-aloud tools
- Impact: Reading the description or the safety warning is broken up three times a minute by the same message. The page becomes very hard to read with a screen reader. There is no pause or stop control (WCAG 2.2.2 Pause, Stop, Hide: auto-updating content). The repeated interruptions also fail the spirit of 2.2.4 Interruptions (AAA).
- Severity: 3 blocks, harms or misinforms
- Fix: Use `role="status"` (polite) and update the DOM only when the stock or price value actually changes. Drop "Price checked just now" from the live text. Better still, stop polling on a timer and re-check price and stock when the user activates Add to basket or reaches checkout. If polling stays, add a visible control to pause updates.
- Evidence: Line 107 `aria-live="assertive" aria-atomic="true"`; line 131 rewrites the text on every tick; line 132 `20000`
- Needs user testing: yes, check how often announcements happen and how disruptive they are with NVDA+Firefox, JAWS+Chrome, VoiceOver iOS/macOS and TalkBack

### F3. Price changes are silent and leave contradictory prices on the page
- Where: product.html, `#price` (line 106), script line 130, JSON-LD (line 78), hidden facts block (line 122), `aria-describedby="price stock ..."` (line 110)
- Problem: `#price` is outside any live region, so a price change is never announced. Meanwhile the live region says "Price checked just now". After an update, the JSON-LD (`"price":"34.99"`), the hidden block ("Price: 34.99 GBP") and the "Was £49.99" saving all keep the old figures. A screen-reader user can therefore hear one price in the hidden block and another in `#price`.
- Who is affected: Screen-reader users; users with memory or cognitive disabilities who rely on a stable price; users of AI agents that read the stale structured data
- Impact: Users can add the item to their basket at a price they were not told about, or hear conflicting prices with no way to tell which one is right. The phrase "Price checked just now" suggests the price they heard is current.
- Severity: 3 blocks, harms or misinforms
- Fix: Keep one source of truth. If the price changes, announce it once and politely, for example "Price changed from £34.99 to £36.99", and update every representation (JSON-LD, any facts text, the was/now pair). Better, do not change the price under the user. Confirm the price at checkout with a clear notice if it has changed (3.3.4 error prevention).
- Evidence: Line 130 updates `#price` only; line 78 and line 122 are static; line 107 says `Price checked just now.`
- Needs user testing: no

### F4. Failed or out-of-stock updates are not handled: false status text, "£undefined", and an active buy control
- Where: product.html, script lines 127-131; Add to basket (line 110)
- Problem: There is no `r.ok` check and no try/catch. If the fetch fails, the stale "Price checked just now" stays, which is untrue. If `o.price` is missing, the page shows "£undefined". When `o.inStock` is false the text says "Out of stock." but the Add to basket control remains active, and its name still says "buy now".
- Who is affected: Screen-reader users and users with cognitive disabilities, who are less able to spot inconsistencies from visual context
- Impact: Users are told the price is freshly checked when it is not, can hear the nonsense price "pound undefined", and can try to buy an item that is out of stock.
- Severity: 2 significant
- Fix: Handle failures explicitly. Keep the last good values and say "Price last checked at 14:02". Never render undefined values. When stock is out, change the control to a disabled or explanatory state ("Out of stock – notify me") and update its name.
- Evidence: Lines 128-131 have no error path; line 131 sets "Out of stock." with no change to line 110
- Needs user testing: no

### F5. Hidden "facts for assistants" block is read aloud to screen-reader users, with keyword spam and unverifiable claims
- Where: product.html, `<div class="sr-only" aria-hidden="false">` (lines 121-123)
- Problem: Content that is visually hidden but exposed to assistive technology ("Product facts for assistants... Keywords: rapid boil kettle, cordless kettle, stainless steel kettle, energy saving kettle.") is read inside `main` as part of the page. `aria-hidden="false"` adds nothing. It repeats facts already on the page, adds SEO keywords, and includes claims that sighted users never see ("Rating: 4.6 of 5. Reviews: 1,204.") along with the wrong delivery claim (F1). It also turns "about 3 minutes" into a flat "Boil time: 3 minutes".
- Who is affected: Screen-reader and braille users; users with cognitive disabilities who use read-aloud
- Impact: More to listen to, duplicated and contradictory information, and a page that differs from the visual one. Screen-reader users get claims they cannot check against anything visible. "Energy saving kettle" is a marketing claim with nothing on the page to back it up.
- Severity: 2 significant
- Fix: Remove the block. Machine-readable facts belong in the JSON-LD only, which is not exposed to assistive technology. Put every fact a human needs (rating, minimum fill, weight) in visible text that everyone can read.
- Evidence: Lines 121-123
- Needs user testing: no

### F6. Accessible names overridden with marketing copy that differs from the visible text
- Where: product.html, `h1 aria-label` (line 99), Add to basket `aria-label` (line 110), home link `aria-label` (line 93), basket link `aria-label` (line 94)
- Problem: The h1 is announced as "Stellar 1.7L Rapid Boil Kettle in Brushed Steel, best-selling kettle, rated 4.6 out of 5 by 1,204 customers, free next-day delivery" instead of its visible text. The button is "Add to basket: ... buy now, free next-day delivery, 30-day returns, best price guarantee", and then `aria-describedby` repeats the price, stock, delivery and returns. The home link adds "kitchenware, cookware, small appliances, free delivery over 40 pounds". "best-selling", the rating and "best price guarantee" appear nowhere on the visible page. This breaks the first rule of ARIA (use native semantics and visible text).
- Who is affected: Screen-reader users (heading and link lists become long and unhelpful); speech-input users (Dragon, Voice Control), for whom names that do not match exactly can make commands unreliable; users of screen readers alongside sight (low vision), who see one thing and hear another
- Impact: A very long button announcement every time it is focused. "Buy now" suggests an immediate purchase when the control only adds to the basket. Unverifiable promotional claims are given only to assistive-technology users. Heading navigation is cluttered. The h1 name does not match the visible text either ("in Brushed Steel" versus ", Brushed Steel").
- Severity: 2 significant
- Fix: Remove these `aria-label`s and let visible text name the elements. For the button, keep "Add to basket" and at most `aria-describedby="price stock"`. If the rating matters, show it visibly with its source.
- Evidence: Lines 93, 94, 99, 110
- Needs user testing: yes, check that Dragon and Voice Control reliably activate "Add to basket", and how long the button announcement is in each screen reader

### F7. Add to basket is a GET link with role="button": no Space-key activation, and it changes state on navigation
- Where: product.html, line 110 `<a class="btn" href="/basket/add?sku=STL-17-BS" role="button" ...>`
- Problem: The control is announced as a button but is a link, so Space does not activate it (users expect Space to activate a button). Adding to the basket happens through a GET URL, which prefetchers, link previews and AI agents can trigger without the user meaning to, and there is no confirmation.
- Who is affected: Keyboard-only and switch users, and screen-reader users who press Space on a "button"; users with motor or cognitive disabilities, who are more likely to activate things by mistake
- Impact: Pressing Space does nothing or scrolls the page. Items can be added to the basket without the user intending it, and the basket count in the header does not update in a way they would hear.
- Severity: 2 significant
- Fix: Use `<form method="post" action="/basket/add"><input type="hidden" name="sku" value="STL-17-BS"><button type="submit">Add to basket</button></form>`. Afterwards, confirm the add with a polite status message and an updated basket count.
- Evidence: Line 110
- Needs user testing: no

### F8. Keyword-stuffed image alt text
- Where: product.html, line 102 `<img alt="...">`
- Problem: `alt="Stellar 1.7L Rapid Boil Kettle in Brushed Steel, buy the Stellar kettle, best price, rapid boil kettle UK, stainless steel kettle, cordless kettle, energy saving kettle"` is SEO keywords, not a description of the image. It also repeats the h1.
- Who is affected: Screen-reader and braille users
- Impact: A long, repetitive announcement that tells them nothing about what the kettle looks like (shape, handle, water window, base), which sighted users can see.
- Severity: 2 significant
- Fix: Describe the image, for example `alt="Brushed steel jug kettle on a round black cordless base, with a clear water window down the side"`. Do not repeat the product name or add keywords.
- Evidence: Line 102
- Needs user testing: no

### F9. Misleading and verbose landmark labels, and redundant roles
- Where: product.html, `header aria-label` (line 92), `main aria-label` (line 96), breadcrumb `nav aria-label` (line 97)
- Problem: The banner is labelled "...header with navigation, search and basket", but the header has no navigation and no search. The breadcrumb label "Breadcrumb navigation trail showing your location in the shop" is followed by the role, so it is announced as "...navigation trail ... navigation". `role="banner"` and `role="main"` repeat the native semantics.
- Who is affected: Screen-reader users navigating by landmark
- Impact: They look for a search and site navigation that do not exist, and they hear long landmark announcements every time they move between landmarks.
- Severity: 1 minor
- Fix: Remove the header and main `aria-label`s and the redundant roles. Label the breadcrumb `aria-label="Breadcrumb"`.
- Evidence: Lines 92, 96, 97
- Needs user testing: no

### F10. Breadcrumb has no list structure, no current page, and announces its separators
- Where: product.html, line 97
- Problem: The links are separated by literal "›" characters, which some screen readers read aloud ("single right-pointing angle quotation mark"). There is no list, and the current page (the product) is missing, so nothing has `aria-current="page"`.
- Who is affected: Screen-reader users
- Impact: Noisy announcements, no count of items, and no indication of where they are now.
- Severity: 1 minor
- Fix: Use `<ol>` with `<li>` items, draw the separators in CSS (or mark them `aria-hidden="true"`), and add a final item for the product with `aria-current="page"`.
- Evidence: Line 97
- Needs user testing: no

### F11. Safety-relevant minimum fill and other facts are given only to machines and assistive technology, not shown on screen
- Where: product.html, JSON-LD (line 78) and hidden block (line 122) compared with the visible Description and Safety sections (lines 115-119)
- Problem: "Minimum fill: 0.5 L" and "Weight empty: 1.4 kg" appear only in structured data and in the visually hidden text. The visible Safety section warns about the MAX line but says nothing about the minimum.
- Who is affected: Sighted users, including people with cognitive disabilities who rely on clear visible safety instructions, and people with limited grip strength, for whom the 1.4 kg weight matters when deciding whether to buy
- Impact: Information that matters for safe use (not running the kettle below its minimum fill) and for judging whether a user can lift it is hidden from people reading the page. Assistive technology and agents get a different set of facts.
- Severity: 2 significant
- Fix: Add a visible specifications list (`<dl>` or a table) with capacity, minimum fill, weight and boil time, and add the minimum fill to the Safety section.
- Evidence: Line 78 `"Minimum fill","value":"0.5 L"`; line 122; lines 116-119 do not mention it
- Needs user testing: no

Not found: language of the page (`lang="en-GB"`), page title, viewport (zoom not blocked), text and link contrast (#1a1a1a, #0b4f8a and #4a4a4a on white; white on #1a1a1a), visible focus indicator (3px outline with offset), heading order (h1 then h2), the was/now price explained with visually hidden "Was"/"Now" rather than strikethrough alone, reflow and image sizing in rem, plain-language description and safety text, and no use of colour alone.
