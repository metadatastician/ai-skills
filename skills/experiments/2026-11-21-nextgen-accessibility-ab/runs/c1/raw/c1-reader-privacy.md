### F1. Read-aloud may send the article text, and the fact of listening, to a browser vendor's speech service
- Where: `<script>` handler on `#listen`: `speechSynthesis.speak(new SpeechSynthesisUtterance(text))`, with no voice chosen.
- Problem: The page leaves voice choice to the browser default. In some browsers the default or available voices are network voices run by the browser vendor. With those voices the article text, and the fact that this reader used read-aloud at that time, can leave the device for a third party that the publisher does not name. Read-aloud use can imply a print, visual, cognitive or reading-related need. The page does not tell the reader this can happen and offers no way to keep it on the device.
- Who is affected: Readers who use "Listen to this article", for example blind and partially sighted readers, dyslexic readers and readers with cognitive or reading-related disabilities, when their browser's default voice is a network voice.
- Impact: A third party can receive a signal that implies a need. Whether this counts as processing special category data, and who is controller for it, is an ASSUMED legal point and not advice. The publisher itself receives nothing through this path.
- Severity: 1
- Fix: Prefer local voices. Filter `speechSynthesis.getVoices()` on `localService === true` and pick a local voice by default. Fall back to a network voice only if the reader chooses one, and say in plain words beside the control that this voice sends the text off the device. Keep the chosen voice in local storage only. Send nothing about it to the publisher.
- Evidence: Lines 266-274 of the served page. The script calls `speechSynthesis.speak` with no `voice` set and no `localService` check. Whether any text leaves the device depends on the reader's browser and voice, which this material does not show. Not observed, only inferred from the code.
- Needs disabled readers: yes. Test whether local-only voices are acceptable to the readers who use read-aloud, or whether the network voices are needed for quality. Only those readers can settle that trade-off.

### F2. Read-aloud gives the reader no control of pace, voice or pausing
- Where: `#listen` button and its script.
- Problem: Principle 4 says pace and format are set on the reader's side. The control only starts speech, or cancels it. It has no rate, voice, pause or resume, and no skip by paragraph. A reader who needs a different pace has nothing on this page to change it. The state is also not reset when speech ends: `aria-pressed` stays `true` until pressed again. This does not leak data. It is a gap in "the reader chooses the form".
- Who is affected: Readers who rely on read-aloud and need a slower or faster pace, a different voice, or the ability to pause.
- Impact: The adapted form is fixed by the publisher's defaults, not chosen by the reader. Readers may fall back to their own tools, which is permitted and needs no disclosure, but the offered path does not meet the principle.
- Severity: 1
- Fix: Add rate, voice, pause/resume and paragraph-skip controls, applied on the device. Store the choices in `localStorage` only, in try/catch, with sensible defaults when storage is missing. Send no request, cookie or event when a choice changes. Reset `aria-pressed` on the utterance's `end` and `error` events.
- Evidence: Lines 268-273. No `rate`, `pitch`, `voice`, `pause()` or `resume()` is used, and there is no `onend` handler.
- Needs disabled readers: yes. Test which controls readers of read-aloud actually need, and at what default pace. That is theirs to decide.

### F3. The current design reveals no need to the publisher: keep it that way when features are added
- Where: The whole page: the Key points box, the Listen button and the footer "Accessibility" link.
- Problem: No problem is observed. The Key points box is served to every reader, so seeing it reveals nothing. Read-aloud runs in the browser with no request to the publisher. No settings panel, preference cookie, URL parameter, analytics or beacon call, assistive-technology detection, or account profile is present in the served HTML. That is the minimal design. The risk is regression: the usual next step is a click event on "Listen", or a stored preference sent to the server. Either would reveal read-aloud use to the publisher. Several such preferences together (read-aloud, rate, contrast, font, simplify) would form an identifying profile even if each is harmless alone (the composition leak).
- Who is affected: All readers who use any adaptation, if a signal is added later.
- Impact: None at present. A future signal would reveal or imply disability information to the publisher and any analytics vendor. ASSUMED legal point, not advice: that is special category data under UK GDPR.
- Severity: 0
- Fix: Write the rule down as a constraint on this page. Adaptation is computed on the device, defaults are stored only locally, adaptation controls send no events, and adapted forms use ordinary requests that are the same for every reader. Exclude adaptation controls from any analytics added later, including aggregate counts that are tied to a session.
- Evidence: Lines 202-277. The only script is the read-aloud handler. It makes no network call and writes no storage. No third-party script, pixel, cookie or query string appears. Server logs, CDN, headers and any analytics added outside this HTML are not in the material.
- Needs disabled readers: no

Not found: settings panels, toggles for high contrast, reduced motion, fonts, simplify, Easy Read or "screen reader mode"; URL parameters, cookies, localStorage writes, analytics or beacon events; assistive-technology detection; account or profile storage of preferences; third-party scripts; any form or request that requires a reader to disclose a disability or declare a purpose to get an accessible form. The alternative-format request route, if any, behind `/accessibility` is not in the material, so it could not be checked for disclosure demands. Server-side logging, response headers and referrer policy were not supplied and could not be assessed.
