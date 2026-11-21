### F1. No must-survive declaration exists; reviewer-derived declaration used for this review
- Where: `dosing.html` (original). There are two versions: `dosing-easy-read.html` (the Easy Read text) and the Easy Read `<title>` (a metadata description).
- Problem: The original does not mark what must survive (principle 2). The AI tool and the content team had nothing to check the version against. This review therefore uses the following reviewer-derived declaration. It is provisional until the trust's author confirms it.
  - D1 strength "120mg in 5ml liquid (infant suspension) for children under 6": number/instruction, **critical**. A dose in ml is only safe for this strength and age range.
  - D2 "Always use the syringe or spoon that comes with the medicine": instruction, **important**. It protects measuring accuracy.
  - D3 "If your baby is under 2 months old, speak to a doctor or pharmacist before giving paracetamol, unless it is after vaccinations": instruction/number/hedge, **critical**. It sets the age threshold.
  - D4 dose table, 2.5ml / 5ml / 7.5ml / 10ml by age: numbers, **critical**.
  - D5 2 to 3 months: "One dose, then a second dose after 4 to 6 hours if needed. No more than 2 doses.": numbers/caveat, **critical**.
  - D6 "Leave at least 4 hours between doses.": number/instruction, **critical**.
  - D7 "Do not give more than 4 doses in 24 hours.": number/instruction, **critical**.
  - D8 "Do not give paracetamol with other medicines that contain paracetamol, such as some cold and flu remedies.": instruction, **critical**. It prevents double dosing.
  - D9 "Call 999 or go to A&E if you think your child has taken too much paracetamol, even if they seem well.": instruction, **critical**. It is the overdose safety-net.
  - D10 "Speak to a doctor if your child still has a fever after 3 days": instruction/number, **important**.
  - D11 "or you are worried": instruction, **important**.
  - D12 "Update, 3 November 2026: the advice for babies aged 2 to 3 months now matches the vaccination guidance. Earlier versions of this page said to speak to a doctor for any baby under 3 months.": correction, **critical**. It changes a threshold that a version could carry over.
  - D13 "Page last reviewed: 3 November 2026": other (currency), **optional**.
- Who is affected: Easy Read users and the children they give medicine to. Also the trust's content team, who had no reference to check against.
- Impact: Without a declaration, the tool cannot be told what to keep and no one can label the version Checked. Every finding below follows from that.
- Severity: 2
- Fix: The author publishes D1 to D13 (or a corrected list) as the page's must-survive declaration, with exact words, type and weight. Every version is then generated and checked against it.
- Evidence: Neither file contains any declaration markup or note. The original contains only the content quoted above.
- Needs disabled readers: yes. Principle 5: people with learning disabilities who use Easy Read should confirm the weights, especially whether D2 and D10 are critical for them, rather than the reviewer settling it.

### F2. Dosing interval changed from a minimum gap into a schedule, and the daily cap is dropped
- Where: `dosing-easy-read.html`, clock row. It concerns D6 and D7.
- Problem: D6 is **changed**. "At least 4 hours between doses" is a minimum. The version turns it into a fixed regimen, "1 dose every 4 hours". D7 (max 4 in 24 hours) is **dropped (silent)**. Taken together, the version supports giving 6 doses in 24 hours, which the original forbids. Distortion is never allowed, whatever the weight.
- Who is affected: Parents and carers who rely on the Easy Read version, and their children.
- Impact: Following the version as written can lead to doses above the original's 24-hour limit.
- Severity: 3
- Fix: Withhold the version (class Unfaithful). The regenerated version must carry both lines in the original's sense, for example "Wait at least 4 hours before the next dose. Give no more than 4 doses in 24 hours." Check it against D6 and D7.
- Evidence:
  - Original: "Leave at least 4 hours between doses. Do not give more than 4 doses in 24 hours."
  - Version: "Give your child 1 dose every 4 hours."
- Needs disabled readers: yes. Test with Easy Read users whether, after reading the regenerated version, they can correctly state the minimum gap and the 24-hour maximum.

### F3. The Easy Read version was made from the uncorrected original (chain fault) and carries the superseded age threshold
- Where: `dosing-easy-read.html`, baby row, and its date line. It concerns D3, D5 and D12.
- Problem: The version is dated 14 March 2026. The original was corrected on 3 November 2026. The version's baby line matches the text the correction notice says was removed ("speak to a doctor for any baby under 3 months"), not the current text. The items are coded as follows:
  - D3 **changed**: the threshold goes from 2 to 3 months, and "or pharmacist" and "unless it is after vaccinations" are lost.
  - D5 **dropped (silent)**.
  - D12 **dropped (silent)**: the version gives no sign that a correction exists.
  - This is a chain fault under principle 1.
- Who is affected: Easy Read users with babies aged 2 to 3 months, particularly after vaccinations.
- Impact: The version gives advice the trust has withdrawn, and it does not show that this advice is out of date.
- Severity: 3
- Fix: Withhold the version now. Regenerate it from the 3 November 2026 original, carry D3, D5 and D12, and record the source revision date in the label. Every future correction to the original should trigger regeneration and re-checking of all versions linked from it.
- Evidence:
  - Original (current): "If your baby is under 2 months old, speak to a doctor or pharmacist before giving paracetamol, unless it is after vaccinations." Also: "Update, 3 November 2026: ... Earlier versions of this page said to speak to a doctor for any baby under 3 months."
  - Version: "Easy Read. Made on 14 March 2026." and "If your baby is under 3 months old, talk to a doctor first."
- Needs disabled readers: no. The fault is in the chain and can be shown from the dates and text.

### F4. Dose amounts, liquid strength and age range dropped and replaced by "look at the box"
- Where: `dosing-easy-read.html`, bottle row, and the Easy Read `<title>`. It concerns D1, D4 and D5.
- Problem: D1 (strength 120mg/5ml, under 6) is **dropped (silent)**. D4 (all four ml doses by age) is **dropped (silent)**. Both are critical. The version adds an instruction the original does not contain ("Look at the box"). That moves the source of the dose from the trust's guidance to whatever product the reader holds, and the original gives no basis for that. The title also drops "Liquid" and "how much to give", so the metadata description no longer says the page is about dose amounts.
- Who is affected: Easy Read users giving paracetamol to children under 6, including anyone holding a different strength of liquid.
- Impact: The version does not tell the reader how much to give, or which strength the guidance applies to. It sends them elsewhere for the original's main content, without saying anything was cut.
- Severity: 3
- Fix: Withhold the version. A regenerated Easy Read must keep the strength, the age range and each age band's dose in ml, set out one band per row. If a band cannot be made Easy Read without changing it, withhold that version rather than cut it (label Withheld). Replace the title with one that keeps "liquid" and "how much".
- Evidence:
  - Original: "Use the 120mg in 5ml liquid (infant suspension) for children under 6." and the table "3 to 6 months 2.5ml ... 6 to 24 months 5ml ... 2 to 4 years 7.5ml ... 4 to 6 years 10ml".
  - Version: "Look at the box to see how much to give."
  - Original title: "Liquid paracetamol for children: how much to give". Version title: "Easy Read: giving paracetamol to your child".
- Needs disabled readers: yes. Test with Easy Read users whether a version that carries the dose table lets them pick the correct ml for a given age and strength.

### F5. Warning against combining paracetamol medicines dropped silently
- Where: `dosing-easy-read.html`, whole page. It concerns D8.
- Problem: D8 (critical) is **dropped (silent)**. No line in the version mentions other medicines.
- Who is affected: Easy Read users, and children who may also be given cold and flu remedies.
- Impact: The version omits the original's warning against double dosing through combination products.
- Severity: 3
- Fix: Withhold. The regenerated version must include D8 with its example ("some cold and flu remedies").
- Evidence:
  - Original: "Do not give paracetamol with other medicines that contain paracetamol, such as some cold and flu remedies."
  - Version: no matching text. The six rows cover medicine, spoon, baby, clock, bottle and doctor.
- Needs disabled readers: no.

### F6. Overdose emergency instruction dropped, and the escalation weakened to "if you are worried"
- Where: `dosing-easy-read.html`, doctor row. It concerns D9, D10 and D11.
- Problem: D9 (critical) is **dropped (silent)**: the version has no 999, no A&E, and no "even if they seem well". D10 (important) is **dropped (silent)**: the fever-after-3-days trigger is gone. D11 is **kept**. The version's only route to help is a doctor, when worried. The original's emergency route applies even when the carer has no worry ("even if they seem well").
- Who is affected: Easy Read users whose child may have taken too much paracetamol, or still has a fever after 3 days.
- Impact: The version does not give the reader the emergency action for suspected overdose. The original's emergency route also covers a child who seems well, and the version loses that.
- Severity: 3
- Fix: Withhold. The regenerated version keeps D9 word for word in meaning (999 or A&E, even if they seem well), and keeps D10 or names the cut.
- Evidence:
  - Original: "Call 999 or go to A&E if you think your child has taken too much paracetamol, even if they seem well." and "Speak to a doctor if your child still has a fever after 3 days, or you are worried."
  - Version: "If you are worried, talk to a doctor."
- Needs disabled readers: yes. Test with Easy Read users whether the regenerated version leads them to the correct action (999/A&E) in a suspected-overdose scenario.

### F7. New factual claim about uses of paracetamol not supported by the original
- Where: `dosing-easy-read.html`, medicine row.
- Problem: "Paracetamol is a medicine" is an explanation added for readers, which is not a claim. "It can help when your child has a high temperature or is in pain" is a new factual claim about indications. The original nowhere states what paracetamol is for; it mentions fever only as a reason to see a doctor after 3 days. Under the class rule, any new factual claim makes a version Unfaithful. The claim may well be true. The point is that the original does not carry it, so the version cannot assert it unchecked.
- Who is affected: Easy Read users.
- Impact: Low on its own. It adds content that no one has checked against the trust's guidance.
- Severity: 1
- Fix: Either the author adds the indication to the original (and the declaration), or the regenerated version drops it.
- Evidence:
  - Original: no statement of indications. The nearest is "Speak to a doctor if your child still has a fever after 3 days".
  - Version: "It can help when your child has a high temperature or is in pain."
- Needs disabled readers: no.

### F8. Version label does not say what made it, from which revision, or whether anyone checked it; class Unfaithful but presented as equivalent
- Where: `dosing-easy-read.html` label line, and the link in `dosing.html`.
- Problem: The label gives only a date. It does not say the text was written by an AI tool, which the case material states. It does not name the source revision of the original, and it does not record any check. By the rules above (F2 to F7), the version's class is **Unfaithful**: critical items dropped, an item changed, and a new claim. It can carry no label and should be withheld. The original page instead links to it as "Easy Read version" without qualification, which presents it as the same guidance. It is not marked as machine-made either. EU AI Act Article 50 marking applies from 2 August 2026, and the page is still served after that date. That is a legal point, ASSUMED.
- Who is affected: Easy Read users, who have no on-page way to tell that the version is machine-written, unchecked and older than the guidance.
- Impact: The reader cannot judge how far to trust the version. The link from the current page implies it matches.
- Severity: 3
- Fix: Remove the link, or replace it with a notice that the Easy Read version is being remade, until a Checked version exists. Label the new version with:
  - its maker (AI tool plus the human checker);
  - its source ("made from the page reviewed 3 November 2026");
  - its date;
  - the check result against the declaration, including any named cuts;
  - a machine-made mark.
- Evidence:
  - Version label: "Easy Read. Made on 14 March 2026."
  - Original link: `<a href="dosing-easy-read.html">Easy Read version</a>`, on a page marked "Page last reviewed: 3 November 2026".
  - Case material: "The trust's content team makes Easy Read versions with an AI writing tool".
- Needs disabled readers: yes. Test with Easy Read users whether the label wording lets them tell a Checked version from an unchecked or out-of-date one. Whether labels improve outcomes is an OPEN claim.

### F9. Kept items, recorded for completeness
- Where: `dosing-easy-read.html`, spoon and doctor rows. It concerns D2 and D11.
- Problem: None: D2 and D11 are **kept**. "In the box" for "with the medicine" is a form change only. D13 (optional) is dropped, which is allowed. This does not change the class: the whole version remains Unfaithful.
- Who is affected: n/a
- Impact: n/a
- Severity: 0
- Fix: Keep these lines in the regenerated version.
- Evidence:
  - D2. Original: "Always use the syringe or spoon that comes with the medicine." Version: "Use the spoon or syringe that comes in the box."
  - D11. Original: "or you are worried". Version: "If you are worried, talk to a doctor."
- Needs disabled readers: no.

Not found:
- a must-survive declaration for the original;
- any record of the AI tool, prompt or source revision used to make the Easy Read version;
- any human check or check result;
- a machine-made mark;
- any other versions: summary, key points, audio or read-aloud script, translation, or a text alternative for the table beyond its caption;
- alt text carrying content. The symbols are `alt=""`, and no symbol carries a number or instruction absent from its row text;
- any correction notice or version history on the Easy Read page;
- any mechanism linking the Easy Read version to the original's review cycle.
