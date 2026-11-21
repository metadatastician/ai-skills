# Provenance

Imported from ChatGPT skill export, 2026-11-21.

- `SKILL.md`, `references/`, `assets/icon.svg` are copied unchanged.
- `evals/*.json` (re-serialised as canonical JSON per the estate JSON policy; data unchanged).
- `agents/openai.yaml` (ChatGPT/Codex-only metadata) is not shipped.
- `scripts/trope_card.py` is replaced by `scripts/trope_card.mjs`, a port to plain
  JavaScript for Bun, because the estate language policy denies Python. The port
  was compared with the original: for three labels, including one with accents and
  one with no letters, the output was identical byte for byte.
