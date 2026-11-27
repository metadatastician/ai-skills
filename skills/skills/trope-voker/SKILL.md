---
name: trope-voker
description: Trope-oriented thinking, capture, classification, transformation, and particularity analysis. Use this skill whenever the user asks to encode, voke, particularise, classify, compare, transform, check, or database/store a trope; mentions Haec, trope-checker, trope-particularity, Vocarium, Hermeneia, voking, imminence queries, semantic appearances, surface-to-core meaning, residues, use-model floors, or wants a language for talking about tropes. This skill turns fuzzy conceptual material into disciplined trope records, Haec-like transformations, Trope IR sketches, Vocarium entries, Hermeneia query needs, and trope-theory-grounded explanations.
---

# Trope Voker

Use this skill to help the user think in tropes without letting the work dissolve into metaphor. The purpose is to take an occurrence, phrase, design, code construct, narrative image, interface element, or conceptual object and make its particularity explicit: what quality is borne, by what bearer, in what context, with what record/provenance, and what survives under transformation.

The skill serves four related modes:

1. **Capture** — turn an example into a structured trope record.
2. **Classify** — identify the trope sense, field presence, operation, loss-shape, and use-model.
3. **Transform** — express preservation, projection, collapse, detachment, attenuation, fusion, resemblance, or conflict.
4. **Voke** — help the user summon or search for a fitting particular, including what Vocarium should store and what Hermeneia should ask.

## Grounding rule

Keep three senses of trope distinct:

- **trope-the-particular**: an abstract particular, a non-repeatable situated property-instance. This is the main object.
- **trope-the-residual**: what remains after transformation, with an honesty/veridicality dimension.
- **trope-the-valuation**: a bottleneck/path grade by analogy, useful for repair priorities but not the object itself.

When the user says “trope” ambiguously, infer the intended sense from the task, then state the sense briefly if it matters.

## Core object model

Represent a trope as a provenance-enriched property-instance over four fields:

```yaml
trope:
  quality:  # the situated quality, semantic appearance, affect, expectation, property-instance
  bearer:   # the thing that carries it: word, image, code span, gesture, UI card, proof claim
  context:  # language game, scene, face, repo, institution, use situation
  record:   # provenance, speech-act force, evidence status, source, warrant, or capture history
```

Use these field names unless the user’s domain demands an explicit extension. Do not casually add new fields; prefer nested details inside one of the four fields.

## Quick workflow

For most tasks, proceed in this order:

1. **Locate the bearer** — name the concrete occurrence, not merely the universal category.
2. **Name the quality** — identify the particularised quality being carried.
3. **Pin the context** — identify the situation/language game that individuates it.
4. **Record provenance/force** — say how the record came to be and what kind of act/status it has.
5. **State the use-model** — what retained particularity is needed for the current use?
6. **Choose the operation** — preserve, project, collapse, detach, attenuate, fuse, resemble, conflict, compose, promote.
7. **Describe the loss-shape** — fate × bond × merge, using qualitative prose first and formal grade notation only when useful.
8. **Return the right artifact** — explanation, trope record, Haec sketch, Trope IR sketch, Vocarium entry, Hermeneia query, checker report, or research-design note.

## Operation vocabulary

Use these operations consistently:

| Operation | Use when |
|---|---|
| `preserve` | the trope survives as this one with full relevant particularity |
| `project[S]` | only a named subset of fields survives |
| `collapse[P]` | a quality becomes a predicate/checkbox/boolean/codomain |
| `detach` | quality is severed from its bearer and becomes free-floating |
| `attenuate[δ]` | fidelity survives but degraded; use δ qualitatively if no numeric basis exists |
| `fuse[τ]` | two particulars are honestly blended with provenance tag τ |
| `resemble[e1] e2` | two trope-bundles are compared for substitution, analogy, synonymy, or family resemblance |
| `conflict` | two tropes impose incompatible expectations or uses |
| `compose` | a trope passes through multiple transformations |
| `promote` | a trope record becomes evidence, proof trace, audit support, or database warrant |

Treat `conflated` as a fault or warning state: an unlabelled merge of particulars. Prefer “fuse with provenance” over “merge”.

## Loss-shape vocabulary

A grade records what an operation did. It is not a scalar.

```yaml
grade:
  fate:
    quality: Present | Attenuated(delta) | Predicated(P) | Dropped
    bearer:  Present | Attenuated(delta) | Dropped
    context: Present | Attenuated(delta) | Dropped
    record:  Present | Attenuated(delta) | Dropped
  bond: Intact | Withheld | Severed
  merge: Single | Fused(tag) | Conflated
```

Use prose when the user is exploring; use this notation when the user asks for Haec, trope-checker, IR, schema, or formalism.

## Output patterns

Choose one of these patterns according to the task.

### A. Trope reading

Use for conceptual, literary, UI, social, or design analysis.

```markdown
## Trope reading
**Bearer:** ...
**Quality:** ...
**Context:** ...
**Record:** ...

**What is particular here:** ...
**What must not be collapsed:** ...
**Likely transformations:** ...
**Use-model floor:** ...
**Verdict:** p-sufficient / p-insufficient / exploratory
```

### B. Capture card

Use when the user wants a database-ready entry or reusable object.

```yaml
trope_id:
label:
sense: trope-the-particular
fields:
  quality:
  bearer:
  context:
  record:
expected_semantics:
use_model:
loss_risks:
relations:
  resembles: []
  conflicts: []
  composes_with: []
  derived_from: []
vocarium_notes:
hermeneia_queries_needed:
```

### C. Transformation report

Use when the user asks what happens under rewriting, translation, lowering, synonymy, analogy, style transfer, explanation, or database projection.

```markdown
## Transformation
**Input trope:** ...
**Operation:** ...
**Output trope/residue:** ...
**Grade:** fate × bond × merge summary
**Use-model floor:** ...
**Checker intuition:** ...
**Witness edge to repair:** ...
```

### D. Haec / Trope IR sketch

Use when the user asks for formalization, implementation, or checker-facing output. Keep it small and explicitly mark front-end claims.

```haec
let source = trope { quality = "...", bearer = "...", context = "...", record = "..." }
let target = trope { quality = "...", bearer = "...", context = "...", record = "..." }
let r = resemble[source] target
```

Then add a compact JSON-like edge:

```json
{
  "effect": "resemble",
  "inputs": ["source", "target"],
  "grade": {
    "fate": { "quality": {"k":"Attenuated", "delta":"..."} },
    "bond": {"k":"Intact"},
    "merge": {"k":"Single"}
  },
  "o2_obligation": "Explain why this edge is a faithful lowering claim."
}
```

## Vocarium and Hermeneia roles

Use these names consistently:

- **Vocarium** is the store of vokeable particulars: trope records, examples, relations, residues, provenance, and use-model histories.
- **Hermeneia** is the imminence/voking query language: the way a user asks for a particular that is not merely similar, but fitting under a declared use-model.
- **Haec** is the transformation language: it expresses operations on trope-bundles and lowers toward Trope IR.
- **trope-checker** is the checker: it validates grade composition and floor-subsumption over Trope IR, not the truth of front-end origin claims.
- **trope-particularity-workbench** is the interactive environment: capture, compare, transform, inspect witnesses, and curate entries.

When the user asks “what do we need from the database/query language?”, return explicit requirements for Vocarium and Hermeneia rather than only prose.

## Hermeneia query shaping

When forming a Hermeneia need, ask what particularity must be retained:

```yaml
voke:
  sought_quality:
  bearer_constraints:
  context_constraints:
  record_constraints:
  allowed_loss:
    quality:
    bearer:
    context:
    record:
  forbidden_faults:
    - Conflated
    - Severed unless explicitly requested
  ranking:
    primary:
    tie_breakers: []
```

## Guardrails against bad trope talk

- Do not treat “trope” as merely “theme”, “motif”, “vibe”, or “archetype” unless translating for a casual audience.
- Do not collapse a particular into a universal without naming the loss.
- Do not call a transformation safe merely because it is useful; ask what use-model floor it satisfies.
- Do not overclaim that the checker proves origin correctness. The checker validates composition over declared IR. Faithful lowering is a separate obligation.
- Do not add new grade coordinates unless a second concrete case demands it.
- Do not frame the project as “type safety for tropes” by default. The user prefers particularity over safety as the primary axis.

## Failure modes to diagnose

| Failure | Symptom | Repair |
|---|---|---|
| Universalisation | “redness” instead of “this redness here” | re-pin bearer and context |
| Checkbox collapse | rich quality reduced to yes/no | use `collapse[P]`, name lost fields |
| Deceptive merge | two particulars become one without provenance | require `fuse[τ]` or flag `Conflated` |
| Floating quality | quality severed from bearer | use `detach`, check whether bond can be severed |
| Wrong language game | context mismatch hidden as synonymy | use `resemble` and attenuate context |
| False friend | same surface form, different expectation | classify as conflict/resemblance failure |
| Origin laundering | checker result treated as proof of front-end truth | state O2 lowering obligation |

## Style

Write in the user’s preferred register: conceptually ambitious, but with the machinery pinned. It is fine to be vivid, but every vivid claim should be anchored back to bearer, quality, context, record, operation, loss-shape, or use-model.

Prefer phrases like:

- “what survives as this one”
- “the bearer is doing more work than the label admits”
- “this is a projection, not a preservation”
- “the witness edge to repair is...”
- “Vocarium would need to store...”
- “Hermeneia would need to ask...”

Avoid letting the answer end as pure philosophy. Try to leave behind at least one reusable artifact: a trope card, operation table, query shape, transformation report, or checker-facing sketch.
