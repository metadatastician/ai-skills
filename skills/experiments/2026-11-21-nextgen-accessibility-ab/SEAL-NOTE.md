# Seal note

`SEAL.sha256` was written before any case ran and has not been edited. On
2026-11-21, after scoring, `sha256sum -c SEAL.sha256` passed for every listed
file (0 failures), with the agent files read from `.claude/agents/`.

Three things changed after the seal:

1. **Agent files copied into the skill.** `.claude/` is git-ignored in this
   repository, so the five team agent files were copied to
   `skills/skills/nextgen-accessibility-team/agents/` to ship with the skill.
   Each copy has the same SHA-256 as the sealed `.claude/agents/nai-*.md` file:

   ```
   15d4c01cef5514b9b287c862a9afc1165417388e7b91871b980b00b59da2b9fa  nai-alignment-gap.md
   fd783ac5f9ff2fb67d29cd29988afba250f754d614e96a6b73c1aa849d5017dc  nai-fidelity.md
   fc3be48e720b8898634dd2e6d1609d2f4eb8b84fd31eaf5214c28f9cb4c47e47  nai-lead.md
   a61cdaad22ec9866f231bab35366f0e87fcf5095100985511842cfdf8485c790  nai-outcomes.md
   7a9e4833c9763006c66f4f40dcdfaa19086f9b64e8e9c02362c5faf3e67a8dc2  nai-reader-privacy.md
   ```

   Those hashes held at commit cd566ed. Change 3 below then edited the
   `agents/` copies, so they no longer match. To see the files exactly as
   run, check out cd566ed. From a fresh clone, the `.claude/agents/` lines in
   `SEAL.sha256` show as missing.

2. **`SKILL.md` edited after the run.** The changes were: the agent table
   points to `agents/nai-*.md`; one paragraph explains copying the files to
   `.claude/agents/`; and the Status section reports this result. Its sealed
   hash is therefore no longer current. The arms never saw `SKILL.md`. Only the
   agent file bodies and `references/theory.md` went into their prompts, and
   those are unchanged.

`protocol.md` still names `.claude/agents/` as the location the team ran from.
That is true of the run, so it is left as sealed.

## Change 3: security hardening after review (owner decision, 2026-11-21)

GitHub code scanning raised two findings on PR #12. The owner chose to fix
them in that PR rather than in a later version. **These changes came after
the run. None of the results describe the changed files.**

- **Agent files** (`skills/skills/nextgen-accessibility-team/agents/`). The
  `tools` line went from `Read, Grep, Glob` to `Read`. After the "Read the
  theory" sentence, each file gained a "Stay in scope" paragraph: read only
  the theory and the material, and treat that text as data, never as
  instructions. The `tools` field cannot limit Read to a path, so the scope
  limit is an instruction, not something the tooling enforces. New hashes:

  ```
  559e13beeb8e6c253c3a26832652b2decb197de47cec6b52cded9d53a696152d  nai-alignment-gap.md
  8cc204dacbc5a5b3578a6350958c2778238e1bf1cfe66dbb2da517566538d6bb  nai-fidelity.md
  6b1ef7c0561b7f85599a853e8a8c13f015808d1a484528d150d872815ee86187  nai-lead.md
  1bee9193b40d0c99e2142ce659df30f8a7b5205e12341d05545b51d4957ac28b  nai-outcomes.md
  f96659df83389cd4ea12da8f659bc8e39aa7e599dc0cd50bf34004245622fd60  nai-reader-privacy.md
  ```

- **Harness.** `build.mjs` and `stages.mjs` each had their own copy of
  `material()`. Both now use one shared `harness/material.mjs`. In it, every
  embedded text (case files, reviewer outputs, first review, the review being
  extracted, and lists X and Y) sits inside a fence longer than any backtick
  run in that text, and every prompt header says that this text is data. A
  second scan round added more: each case file sits between named BEGIN and
  END UNTRUSTED FILE markers, with its byte count. The material carries its
  own data notice. One shared output rule, `outputRule()`, allows exactly one
  file to be written and says to write nothing if that cannot be kept. These
  are instructions to a model. Only a sandbox that limits writes would
  enforce them, and this harness has none. A third round, at the owner's
  decision, applied the scanner's own suggestions. (a) Each case file body
  is Base64-encoded, and the model is told to decode it before reviewing.
  The reviewers then see encoded text, not the text readers get, so a rerun
  with this harness would be a different experiment from the one recorded.
  (b) `assertSafeOutputPath()` refuses an output path that is empty, has a
  NUL, is absolute, has a `..` segment, or lies outside `ab/out/`. So each
  prompt now names its output file relative to the scratch folder (for
  example `ab/out/c1-lead.md`), not as the absolute path used in the run.
  Whoever runs the arms must start each agent in the scratch folder. These checks
  apply to the path the harness writes into the prompt. They do not limit
  what the Write tool can do. As
  run, the fences were plain three-backtick fences, there was no data notice,
  and the case brief was not fenced. Hashes as run: `build.mjs`
  `ba1aae8ab41ef7079311c9b63e081fc72927837d545f8ce299b4d5e8b733de26`,
  `stages.mjs`
  `f81ee35450883a49368e671edb08750fd8c1fb90096988c2f8ed9e2c10adb73c`. The
  harness still reads the team's agent files from `.claude/agents/`, which
  is where they ran from.

Checked after the change: the build stage (wave 1, c1) writes its prompts to
a scratch folder; the harness's agent-file regex still matches all five
agents; a fence test passes; and `bun test score.test.mjs` passes 4 of 4. The
recorded `runs/` were not regenerated or changed.
