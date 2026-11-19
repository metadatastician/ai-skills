# Skills library

Portable Agent Skills (`<name>/SKILL.md` plus reference files), built from data.

- `skills/` — the skills. `seam-architect` is generated from `data/`. `proof-craft` is written by hand as a finished `SKILL.md` and is not yet covered by `tools/check.mjs`. Format is checked natively by `tools/check.mjs`; pass `--agentskills PATH` to `tools/check.mjs` to also cross-check with the third-party `agentskills validate`.
- `data/` — the source of truth for each skill (below).
- `originals/` — source texts that are kept unedited. Nothing under `originals/` is ever edited.
- `experiments/` — recorded experiments, each with its protocol, answers and results.
- `tools/` — plain ES modules; they need only Bun (Node 22 also works) and no installed packages.

## Optional private overlay

Some material is kept outside this repository. The tools read an optional overlay directory when one is given, by `--overlay DIR` or the environment variable `SKILLS_OVERLAY`. It mirrors this tree: source texts under `originals/`, a `names.txt` list of skill names, and optionally a `families.json` of extra family rules (an object mapping a family name to its required section kinds). Without an overlay the tools still run; the checks that need overlay files print NOT RUN and are not counted as passes.

## Skills as data (prototype: seam-architect only)

`data/<name>/` is the source of truth. `skills/<name>/` is generated from it and must not be edited by hand.

- `data/<name>/manifest.json` holds everything except the section bodies: name, family, version, title, subtitle, description, source, and for each section its id, title, kind, place, optional `when`, optional `question`, and the file name of its body. It is I-JSON in canonical JCS form (RFC 8785): sorted keys, no insignificant whitespace, one line, UTF-8, one trailing newline.
- `data/<name>/sections/<id>.md` is one file per section body, exactly the text that ends up in the skill.

The tools are plain ES modules that need only Bun (Node 22 also works) and no installed packages.

```bash
bun skills/tools/build.mjs
```

```bash
bun skills/tools/check.mjs
```

```bash
bun skills/tools/inventory.mjs --overlay DIR
```

`check.mjs` fails if the output is not valid Agent Skills format (checked natively), if a required section for the skill's family is missing, if any line of the source text is absent from the output (needs the source in the overlay), or if `skills/` differs from a fresh render. If the third-party `agentskills` validator is installed at the path named in `tools/check.mjs`, it is also run as an optional cross-check and reported on its own line; when it is absent the check says so and does not fail. `tools/import-seam.mjs <paste.txt> <data/seam-architect>` is the one-off importer that created the data layout from a pasted source text.

## Recovering skills from chat exports

`tools/recover-skills.mjs` searches exported AI chat histories (`.json`, `.jsonl`, `.ndjson`, files or whole directories) for long messages that look like skill texts: it walks every JSON value generically, scores each string of at least `--min-words` words (default 300) against a list of skill features and, when a names file is given (`--names FILE`, or `names.txt` in the overlay), the names in it (a short name, "Use when", an `Instructions` line, a version marker, typical headings, a "You are ..." opener, YAML frontmatter), de-duplicates identical texts and writes every distinct version under `recovered/<name>/`, longest first, together with `recovered/INDEX.md` (skill, rank, words, date, role, conversation title, source file, score, features, hash, and all locations).

```bash
bun skills/tools/recover-skills.mjs --names names.txt path/to/exports/ path/to/one-chat.jsonl
```

It runs entirely locally: only Node built-ins are used, it opens no network connection, and it writes nothing outside the `--out` directory. `recovered/` is listed in `.gitignore`. Chat exports contain private material, so review everything in `recovered/` before anything from it is committed or shared.
