#!/usr/bin/env bun
// Create a JSON trope capture card skeleton.
//
// This script is intentionally small: it gives future skill users a
// deterministic starting object when they want database-ready capture rather
// than prose. Plain ES module; needs only Bun (Node 22 also works).
//
// Usage: bun scripts/trope_card.mjs "label" [--out card.json]
import { writeFileSync } from "node:fs";

function card(label) {
  let slug = Array.from(label)
    .map((ch) => (/[\p{L}\p{N}]/u.test(ch) ? ch.toLowerCase() : "-"))
    .join("")
    .replace(/^-+|-+$/g, "");
  while (slug.includes("--")) slug = slug.replaceAll("--", "-");
  return {
    trope_id: slug || "unnamed-trope",
    label,
    sense: "trope-the-particular",
    fields: { quality: "", bearer: "", context: "", record: "" },
    expected_semantics: [],
    use_model: {
      purpose: "",
      floor: { quality: "", bearer: "", context: "", record: "", bond: "Intact", merge: "Single" },
    },
    loss_risks: [],
    relations: { resembles: [], conflicts: [], composes_with: [], derived_from: [] },
    vocarium_notes: "",
    hermeneia_queries_needed: [],
  };
}

const args = process.argv.slice(2);
let label;
let out;
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--out") out = args[++i];
  else if (label === undefined) label = args[i];
}
if (label === undefined) {
  console.error("usage: trope_card.mjs LABEL [--out PATH]");
  process.exit(2);
}
const text = JSON.stringify(card(label), null, 2);
if (out) writeFileSync(out, text + "\n", "utf8");
else console.log(text);
