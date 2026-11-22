### F12. The minimum gap between doses is written two ways and is missing from the dose table
- Where: dosing.html, table row "2 to 3 months (after vaccinations)": "a second dose after 4 to 6 hours if needed"; `.warn` note: "Leave at least 4 hours between doses"; the "How often" cells for the other rows: "Up to 4 times in 24 hours"
- Problem: The gap is given as "4 to 6 hours" in one place and "at least 4 hours" in another. The "How often" column, which is where a reader looks for timing, gives only the number of doses per day and never the gap. The gap appears only in the note after the table.
- Who is affected: People with cognitive or learning disabilities and people who read literally, who may take "4 to 6 hours" as a range with an upper limit. Screen-reader users who move through the table cell by cell and then leave it, and people who scan, who take the table as complete.
- Impact: The reader is unsure whether waiting longer than 6 hours is wrong. A reader who uses the table alone gets the daily count but not the minimum gap, so doses can be given too close together.
- Severity: 2
- Fix: Use one form everywhere: "Wait at least 4 hours before the next dose." Put it in every "How often" cell, for example "Up to 4 times in 24 hours. Wait at least 4 hours between doses." For the 2 to 3 month row write "1 dose. If needed, 1 more dose at least 4 hours later. No more than 2 doses in total."
- Evidence: The quoted table cell, the `.warn` text and the "How often" cells.
- Needs user testing: yes. Ask carers, including screen-reader users moving through the table, when they would give the next dose.

### F13. No usable route to non-emergency help on either page, and the Easy Read leaves out the pharmacist
- Where: dosing-easy-read.html: "If you are worried, talk to a doctor." and "If your baby is under 3 months old, talk to a doctor first."; dosing.html: "speak to a doctor or pharmacist", "Speak to a doctor if your child still has a fever after 3 days, or you are worried."
- Problem: Neither page says how to reach help: there is no phone number, no NHS 111 option, no out-of-hours route and no link. The full page offers "doctor or pharmacist", but the Easy Read drops the pharmacist. For many people a pharmacist is the quickest person to ask, with no appointment needed.
- Who is affected: Easy Read users, people with learning disabilities, anxiety or cognitive impairments who find it hard to work out which service to contact, and Deaf users who need a text or relay route (for example NHS 111 online, 999 BSL or text relay).
- Impact: A worried carer is told to "talk to a doctor" with no way to do it, which in practice means waiting for a GP appointment or not asking at all. Easy Read users get fewer ways to get help than other readers.
- Severity: 2
- Fix: On both pages, add a short "Who to contact" section listing a pharmacist, NHS 111 (phone 111 as a `tel:` link, plus 111 online and the relay or BSL options), and 999 for emergencies. In the Easy Read, give each one its own row and picture, with one sentence on when to use it.
- Evidence: The quoted sentences. There are no contact details or links for help in either file.
- Needs user testing: yes. Ask Easy Read users and Deaf users what they would do, and whom they would contact, if they were worried at night.

### F14. The Easy Read uses hard words without explaining them
- Where: dosing-easy-read.html: "1 dose", "syringe", "paracetamol", "high temperature"
- Problem: Easy Read practice explains every hard word the first time it is used, often in bold with a picture. "Dose" is the key idea of the page and is never explained. "Syringe" is not explained or shown, because the picture next to it is a spoon (sym/spoon.png).
- Who is affected: People with learning disabilities and people with low literacy, who are the audience for the Easy Read.
- Impact: A reader who does not know that a "dose" means a measured amount given once cannot follow the timing advice. A reader who does not know what an oral syringe looks like may use something else to measure.
- Severity: 1
- Fix: Add plain explanations the first time each word appears, for example: "A **dose** is the amount of medicine you give at one time." "A **syringe** is a plastic tube for measuring medicine. It has no needle." Show a picture of each.
- Evidence: The quoted words. The page has no explanations of words.
- Needs user testing: yes. Ask Easy Read users what "dose" and "syringe" mean after reading the page.
