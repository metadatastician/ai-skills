# Examples

## Example 1: word substitution

Task: Find a comfortable synonym for “joy” in casual expressive speech.

Trope fields:

```yaml
quality: joy
bearer: speaker/token position
context: casual conversation
record: expressive speech act
```

Operation: `resemble[joy] candidate`.

Use-model floor:

```yaml
quality: Attenuated(3) or better
bearer: Present
context: Present
record: Present
bond: Intact
merge: Single
```

`elation` may be p-sufficient if quality loss is low and context/record remain present. `happiness` may fail if it shifts register. `schadenfreude` fails quality and record. `run` fails quality and bearer.

## Example 2: surface-to-core programming face

Input occurrence:

```text
{ ...config, debug: true }
```

Trope record:

```yaml
quality: object-spread semantic appearance
bearer: src/app.affine:42 expression
context: TypeScript-like face over AffineScript
record: source span plus front-end lowering claim
```

Transformation:

```yaml
operation: realise / project / attenuate
realisation: AffineScript record update
residue:
  preserves: [field override, copy-like surface intent]
  rejects: [prototype semantics, dynamic property set]
  requires: [closed record shape, ownership checked]
```

## Example 3: literary or image reading

Input: “a woman as a private wound in a social machine.”

Capture:

```yaml
quality: private wound / living truth under social form
bearer: the woman-as-remembered figure
context: Whartonian social machine / Age of Innocence reading
record: interpretive claim, not biographical fact
```

Risk: collapsing her into archetype, siren, victim, or moral lesson. A trope reading keeps her as a situated force whose effect depends on bearer, context, and record.

## Example 4: database / query requirement

Vocarium entry should store:

```yaml
trope_id: wharton-private-wound-001
fields: {...}
relations:
  resembles: [jamesian-fragility, brontean-buried-truth]
  conflicts: [simple-siren-reading]
use_models:
  vk-thought-image: allow symbolic projection, forbid flattening into one reading
```

Hermeneia query:

```yaml
voke:
  sought_quality: suppressed truth that remains alive
  bearer_constraints: female figure or room/object standing for her agency
  context_constraints: social form, duty, memory, restraint
  record_constraints: interpretive/visual metaphor
  forbidden_faults: [Conflated]
```
