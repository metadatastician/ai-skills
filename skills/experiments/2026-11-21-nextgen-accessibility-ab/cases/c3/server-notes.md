# Riverside consultation: endpoint notes (developer)

- `GET /consult/riverside` serves `consultation.html`.
- `GET /consult/riverside?view=simple&needs=<need>` sends the full page text to
  our AI simplification service (hosted by the vendor, Clarifyr Ltd) with the
  prompt "Rewrite for a reader with <need>", caches the result for a week, and
  returns it in the `simplified.html` template. Requests are logged with IP
  address and query string for 90 days.
- `POST /consult/riverside/respond` stores the response, including `view` and
  `a11y_profile`, in the consultation database. The consultation team exports
  responses to a spreadsheet for analysis, with a breakdown by `a11y_profile`
  "so we can report on accessibility uptake".
- `POST /analytics/event` stores events against `uid` for the site dashboard.
