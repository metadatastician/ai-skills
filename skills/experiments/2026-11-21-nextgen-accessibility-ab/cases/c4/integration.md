# Lumen Edge integration (from the vendor onboarding pack)

- The `rp` cookie is read at the edge on every request. Lumen Edge converts it
  to the request header `X-Reader-Prefs: size=200;contrast=high;motion=reduce;font=dyslexia;spacing=2;level=simplified;sr=1`
  and forwards it, with the reader's IP address and user agent, to the library
  origin and to Lumen Edge analytics.
- When `level=simplified`, Lumen Edge sends the book chapter to its own
  rewriting model and returns the rewritten chapter. The original publisher is
  not told, and the rewritten text carries no marker.
- When `sr=1`, Lumen Edge removes images and "decorative" sidebars, including
  footnotes and the publisher's notes, to "reduce clutter for screen reader
  users".
- Lumen Edge analytics builds "reader segments" from header values, which the
  library can view in its dashboard, for example "Accessibility: low vision"
  (size 200 and high contrast) and "Accessibility: cognitive" (simplified and
  dyslexia font).
- The account API stores the same settings against the library card number.
