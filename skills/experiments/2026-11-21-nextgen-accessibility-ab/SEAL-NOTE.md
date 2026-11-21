# Seal note

`SEAL.sha256` was written before any case ran and has not been edited. On
2026-11-21, after scoring, `sha256sum -c SEAL.sha256` passed for every listed
file (0 failures), with the agent files read from `.claude/agents/`.

Two things changed after the seal:

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

   Checking from a fresh clone, the `.claude/agents/` lines in `SEAL.sha256`
   will show as missing. Compare the hashes above with the `agents/` copies
   instead.

2. **`SKILL.md` edited after the run.** The changes were: the agent table
   points to `agents/nai-*.md`; one paragraph explains copying the files to
   `.claude/agents/`; and the Status section reports this result. Its sealed
   hash is therefore no longer current. The arms never saw `SKILL.md`. Only the
   agent file bodies and `references/theory.md` went into their prompts, and
   those are unchanged.

`protocol.md` still names `.claude/agents/` as the location the team ran from.
That is true of the run, so it is left as sealed.
