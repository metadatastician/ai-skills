# Trope Voker framework

## Minimal theory

A trope is a particularised property-instance: this quality, borne by this bearer, in this context, with this record/provenance. Trope-particularity is the recoverable individuating content of that instance after operations.

The working field set is:

- `quality`: situated quality, expectation, semantic appearance, affect, property-instance.
- `bearer`: word, expression, code span, visual element, proof claim, artefact, person-role, object, scene.
- `context`: language game, institutional scene, source face, workflow, genre, situation.
- `record`: provenance, illocutionary force, evidence trail, speech-act status, source, warrant.

## Project map

- Haec: language for writing trope transformations.
- Trope IR: language-neutral DAG with nodes, edges, effects, grades, and use-model floors.
- trope-checker: pure checker over Trope IR; validates composition and floor-subsumption.
- Vocarium: store of vokeable particulars and their relations.
- Hermeneia: query/imminence language for finding or summoning fitting particulars.
- trope-particularity-workbench: environment for capture, classification, transformation, witness inspection, and database curation.

## Core distinction from type systems

A type says what a value is allowed to be. A trope record says how a situated occurrence appears, what expectations it carries, how it is realised, and what residue must be retained to prevent misleading equivalence.

Example:

```text
Type: this expression has type Record.
Trope: this expression appears as a TypeScript object spread in this source face, carries expectations of shallow copy and enumerable property behaviour, and is realised as an AffineScript record update with no prototype semantics.
```

## Use-model floor

A use-model is the declared minimum retained particularity required for a use. The floor can demand full presence on some fields while allowing attenuation or projection on others.

Examples:

- casual synonym: quality may attenuate mildly; bearer, context, and record must remain present.
- archival evidence: record and provenance must remain present; quality may be projected into a summary only if loss is marked.
- UI icon reuse: visual quality may attenuate; context must not change from warning to celebration.

## Verdict intuition

- `p-sufficient`: the produced residual retains at least what the use-model floor demands.
- `p-insufficient`: a field, bond, or merge coordinate falls below the floor.
- witness edge: the operation that first pushed the running grade below the floor.

## Firewalls

1. Soundness, not completeness: the checker may conservatively reject usable cases.
2. Relative to faithful lowering: the checker does not prove that a front end correctly classified a source operation. That is an O2 obligation.
