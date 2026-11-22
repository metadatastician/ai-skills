### F1. Reader must disclose a disability to get an alternative format
- Where: `statement.html`, request form, `<select id="disability" name="disability" required>` with hint "We need this to check that you are eligible for an alternative format."
- Problem: The only path to an adapted form is gated on naming a disability category. The submit cannot succeed without it (`required`). It is also framed as an eligibility test, so the reader must justify a need before the publisher will adapt. The theory says getting a form for one's own reading is never a declared purpose. The format chosen already tells the association what to produce; the disability field adds nothing to fulfilment and serves only to collect special category data.
- Who is affected: Every tenant who needs a letter, form or page in another format. That includes people who do not identify with a listed category, people with undiagnosed or fluctuating conditions, people who need a format for reasons that are not disability (for example a carer reading for someone else, or low literacy), and people who will not disclose.
- Impact: Readers either disclose special category data they should not have to give, pick an inaccurate option, or give up and go without information about their own tenancy. The "Other" option still forces a declaration that a condition exists.
- Severity: 3
- Fix: Delete the disability field and the eligibility wording. Make "format you need" the only signal, and supply any format to anyone who asks, with no proof and no reason. Assumption, not advice: collecting health data that the stated purpose does not need may fail UK GDPR data minimisation (Art. 5(1)(c)) and need an Art. 9 condition the page does not give.
- Evidence: Lines `<label for="disability">Your disability or condition (required)</label>`, the hint text, and `required` on the select.
- Needs disabled readers: yes. Test whether the replacement form (format only, no reason) feels safe to use, and whether the format list covers what readers actually need, without assuming the answer.

### F2. Disclosed disability goes to the housing officer and stays on the tenancy file
- Where: `<p>Information you give us about your disability is shared with your housing officer and kept on your tenancy file.</p>`, below the form
- Problem: The data goes past the alternative-format service. It reaches the person who manages the tenancy and is kept indefinitely next to the tenancy record. This is purpose creep: data asked for "to check eligibility" ends up in a file used for tenancy decisions. The notice appears after the submit button, so a reader may submit before reading it. The page links only to a generic `/privacy` page in the footer. It names no lawful basis, Art. 9 condition, retention period or right to withdraw.
- Who is affected: Tenants who submit the form, especially those with mental health conditions or learning disabilities, where disclosure to a landlord's officer can bring stigma or worry about how the tenancy is managed.
- Impact: A request for large print becomes a permanent health marker on the reader's tenancy record, seen by staff who make decisions about them. The power imbalance between landlord and tenant raises the stakes. Readers who foresee this may not ask for formats at all.
- Severity: 3
- Fix: Do not collect the data (F1). Store format preferences, if kept at all, only with the reader's opt-in and only to send future letters in that format. Keep them apart from the tenancy file and the housing officer's view, give a short retention period, and let the reader withdraw. Put any privacy notice before the submit button. Assumption, not advice: purpose limitation (Art. 5(1)(b)), storage limitation (Art. 5(1)(e)) and Art. 9 apply. Under the Equality Act 2010, making reasonable adjustments does not generally depend on proof of disability.
- Evidence: The quoted sentence; the form `action="/accessibility/request"`; the footer `<a href="/privacy">` is the only privacy link.
- Needs disabled readers: yes. Test whether readers would rather a format preference be remembered for future letters (opt-in, separate from the tenancy file) or forgotten after each request. Only they can settle that trade-off.

### F3. Composition leak: name, tenancy reference, format and free text tie a need to a named tenant
- Where: Form fields `name` (autocomplete="name", required), `tenancy` (required), `format` (required), `what` (textarea, required)
- Problem: Even without F1's field, the format implies a need. Braille or audio implies a sight impairment, BSL video implies d/Deaf, and Easy Read implies a learning disability. Joined to a full name and a tenancy reference, it becomes a named health inference. The required free-text box ("What do you need in another format?") invites readers to explain their circumstances and add more health detail. No anonymous route exists, even for public pages that need no identity to supply.
- Who is affected: All requesters, and especially requesters of Braille, BSL and Easy Read, where the format strongly implies a specific need.
- Impact: The association builds an identified record of inferred disability for each requester, even if F1 is fixed.
- Severity: 2
- Fix: Split the paths. For public pages and standard documents, publish the alternative formats as ordinary downloads anyone can fetch with no request and no identity, so the request is indistinguishable from any page view. Ask for name and tenancy reference only for personal letters that must be sent to the tenant, and then treat the format as a delivery instruction, not a profile attribute. Make the free text optional and say not to include health details.
- Evidence: The `required` attributes on `name`, `tenancy`, `format` and `what`; the format option list.
- Needs disabled readers: yes. Test whether self-serve downloadable formats meet the need, or whether some formats (Braille, BSL) only work as personal requests. Do not decide that for them.

### F4. AI "rewrite any page" assistant: the path is undisclosed and may send need-revealing requests
- Where: "Our AI assistant can rewrite any page in Easy Read, British Sign Language video or another language on request, instantly and accurately."
- Problem: The page names a reader-adaptation path but gives no mechanism and no privacy information. The file contains no script or control for it, so what leaves the device cannot be traced from this file (assumption). If it runs server-side or through a third-party AI provider, each "Easy Read" or "BSL" request tells the association or the vendor, possibly tied to a tenant login, that this reader needs that form. The statement gives no notice of who receives the page, the request or any identifiers.
- Who is affected: Readers who use the assistant to get Easy Read or BSL versions.
- Impact: The need is possibly revealed to the publisher and a third party on every use, with no notice. Whether this actually happens is not established from the material.
- Severity: 2
- Fix: State where the rewrite runs, what is sent, who receives it, and whether it is logged or linked to an account. Prefer adaptation that runs on the device, or pre-made versions served as ordinary requests that carry no session or account identifier. If a third party processes requests, name it and keep need-revealing parameters out of URLs, logs and analytics. (Fidelity claims such as "accurately" are outside this perspective.)
- Evidence: The quoted sentence; no `<script>`, button or link for the assistant appears in `statement.html`.
- Needs disabled readers: no

### F5. No route to adapt the page on the reader's own device without asking
- Where: Whole statement; the sections "How accessible this website is" and "Ask for information in another format"
- Problem: The statement presents only two routes, both outbound: the AI assistant on request, and the form that requires disclosure. It does not say that readers can change text size, colours, fonts or reading tools in their own browser or assistive technology, or that the site supports this. That steers readers who could adapt privately towards routes that disclose their needs.
- Who is affected: Readers who need larger text, different contrast, a different font or read-aloud and who could do it on their own device.
- Impact: Readers disclose needs they did not have to disclose, and on-device personal adaptation is not presented as the default it should be.
- Severity: 1
- Fix: Add a section stating that the site works with browser zoom, user stylesheets, reader modes and screen readers, and that personal adaptation on your own device needs no permission and is never recorded. Keep the request form for things the device cannot produce, such as Braille, paper copies or a BSL translation of a personal letter.
- Evidence: There is no mention of browser or AT settings anywhere in `statement.html`.
- Needs disabled readers: yes. Test whether the on-device guidance is findable and enough for them to adapt without making a request.

Not found: I found no analytics, beacon or third-party scripts, no cookies set by the page, no detection of assistive technology or user preferences (no `prefers-*` queries sent anywhere, no ARIA-based or timing-based detection), no URL parameters carrying needs (the form uses POST), no settings panel, toggles, read-aloud, contrast, motion or font controls, and no referrer leaks beyond the default. The mechanism of the AI assistant and the handling of the `mailto:` contact route are not present in the material and could not be traced.
