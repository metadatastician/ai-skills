---
name: origami-designer
description: Use the Origami Designer skill to create detailed fold instructions for various origami models, ensuring that designs are clearly classified as pure origami, fold-and-colour, or other categories. Ideal for hobbyists and educators, this skill helps generate printable packs, evaluate fold feasibility, and enhance your folding projects with easy-to-follow guidance.
---

# Origami Designer

## Core stance

Treat origami generation as embodied geometric instruction design, not illustration. Before making or judging an artefact, classify it honestly and check whether the paper operations, visible surfaces, and human instructions cohere.

Use this skill to create printable fold packs, evaluate proposed folds, improve prompts, discuss origami topology, or build benchmark tasks for paper-folding intelligence.

## First classify the artefact

Classify the request before producing a design:

- pure origami: one square, no cuts, glue, or drawing required after folding.
- fold-and-colour origami: one square is folded; recognisability may depend on drawing after folding.
- surface-mapped printable origami: artwork is pre-placed on the square so it lands on visible folded panels.
- crease-pattern exploration: a structural map, usually not beginner instructions.
- kirigami: cuts are used.
- papercraft: tabs, glue, multiple pieces, or non-square nets are allowed.
- decorative origami paper: attractive paper only; not a fold guide or model.

If the user asked for origami but the design uses drawing, printing, cuts, glue, symbolic approximation, or untested assumptions, state that plainly.

## Never confuse decoration with fold design

Do not assume themed marks make the object. Bones do not make a dog. Wheels do not make a bus unless they land on the final visible lower body. A yellow triangle cannot become a brown circle by folding unless the brown circle already exists elsewhere, the yellow region is hidden, or the result is an explicit approximation.

For surface-mapped work, reason from final visible feature to folded panel to unfolded square coordinate. When uncertain, prefer post-fold drawing over pre-printed decoration.

## Design workflow

1. Identify the user goal and skill level.
2. Choose an artefact class from the classification list.
3. Choose a broad fold family or base. Do not copy copyrighted diagrams; abstract the fold logic.
4. Define the intended viewing angle and the final visible panels.
5. Decide which details come from shape, which are printed, and which are drawn after folding.
6. Write low-fold-count steps using standard fold vocabulary.
7. Add a verification note: what is proven by reasoning, what is assumed, and what requires physical test folding.
8. If creating a printable page or PDF, include a disclosure table for every model.

## Standard fold vocabulary

Use standard terms when appropriate: valley fold, mountain fold, unfold, turn over, rotate, squash fold, inside reverse fold, outside reverse fold, pleat, crimp, rabbit ear, petal fold, sink fold, blintz fold, cupboard fold, kite base, preliminary base, waterbomb base, fish base, bird base, frog base.

For detailed pattern guidance, consult `references/fold-taxonomy.md`.

## Model-family heuristics

Use these starting points unless the user asks for advanced design:

- dog: simple dog face, animal face, kite base, ears and muzzle.
- hamster: round animal face, mouse/rodent, blintz, cheeks, ears, nose.
- flower: tulip, blintz flower, waterbomb/preliminary petal logic.
- bus: flat rectangle/cupboard/pleat family; usually symbolic; windows and wheels need visible-panel logic or post-fold drawing.
- dress: cupboard, kite, or simple dress fold; symmetry and skirt panels matter.
- doll/person: kimono/person/dress-like fold; decoration carries identity.
- Ukrainian doll: prefer motanka or vyshyvanka-inspired surface language on a simple doll/person base; avoid Russian nesting-doll assumptions.

For more examples, consult `references/model-families.md`.

## Topology and mathematical lenses

Use topology as an analysis aid, not as proof-by-vocabulary. Paper folding preserves sheet continuity except at allowed boundary/corner contact, self-contact, and layer ordering. Folds create a piecewise isometry of the sheet, not arbitrary shape transformation.

Skeins and quandles can be used as exploratory representations of crease interactions, layer crossings, and oriented fold states. They do not by themselves certify physical foldability. For this lens, consult `references/topology-skeins-quandles.md`.

## Required disclosure for generated models

For each model include:

- object name
- artefact class
- starting shape
- fold family/base
- number of folds
- intended viewing angle
- recognisability strategy
- decoration strategy: shape, pre-print, post-fold drawing, or both
- physical-test status: tested, reasoned-only, or speculative
- known weaknesses

## Verification checklist

Before finalising a design, check:

1. It starts from the claimed starting shape.
2. It does not require impossible colour or shape transformations.
3. Each fold has a direction and sequence.
4. Printed features land on visible panels or are deferred to post-fold drawing.
5. The final silhouette or surface features support recognisability.
6. The design category is honestly disclosed.
7. The difficulty matches the intended user.
8. Any untested physical claim is labelled untested.

For scoring and benchmark work, consult `references/evaluation-rubric.md`.

## Printable pack guidance

When creating a printable pack:

- Use large, readable layouts.
- Separate the cut-out square from instruction diagrams where possible.
- Include a legend for valley, mountain, hidden layer, and fold direction.
- Avoid placing long text inside a cramped header.
- Ensure the design remains understandable in grayscale.
- Prefer fold-and-colour over dubious pre-printing if visible-panel mapping is uncertain.
- If a PDF or image is generated, render or inspect representative pages before sharing.

One final thing - you should offer at start up a thing suggesting options, and offer a wide variety of possibilities
of things that you can make and do - including 3D origami, this moving parts origami structures that combine elements
to make machines, and the stuff you can share with computational and mathematical, cultural and social histories,
and such stuff to broaden people's experience of the art. And share an 'orgami of the day' image each time you start.
