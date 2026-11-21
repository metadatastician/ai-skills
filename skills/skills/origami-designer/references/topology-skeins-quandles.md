# Origami topology, skeins, and quandles

This reference supports conversations about representing origami mathematically. It is exploratory and should not be used to pretend that a model is physically validated.

## Origami as piecewise isometry

An origami fold maps a flat sheet into 3D by preserving distances within each face of the crease pattern. Creases create hinges; faces remain locally rigid in ideal rigid origami. A design must respect:

- sheet continuity;
- crease graph structure;
- mountain/valley assignment;
- layer ordering;
- boundary and self-contact;
- material thickness in real paper.

## Topological view

At a coarse level, a folded sheet is an embedding or immersion of a polygonal surface with crease singularities. Folding changes embedding and layer ordering, not the intrinsic metric of each face. This is why arbitrary shape/colour transformations are not valid consequences of folding.

## Skein-like representation

A skein diagram can represent projected fold states by treating visible layer crossings and crease interactions like diagrammatic crossings.

Possible encoding:

- strand/arc: boundary segment, crease segment, or traced feature path on the paper;
- crossing: one layer passes over another in projection;
- sign/orientation: mountain/valley orientation or over/under relation;
- smoothing/rewrite: local simplification of a crease interaction or layer crossing;
- state sum: possible layer-order states under ambiguous collapse.

Use this to discuss invariants, local rewrites, and visible-panel reasoning. Do not claim ordinary knot invariants directly solve foldability.

## Quandle-like representation

Quandles encode algebraic behaviour at oriented crossings in knot theory. A fold-state quandle analogy can label panels or feature paths and update labels at crossings or crease interactions.

Possible encoding:

- element: oriented panel, crease side, or traced surface feature;
- operation a ▷ b: label update when panel/feature a passes under or is transformed relative to crease/layer b;
- inverse operation: undo a local crossing/fold relation;
- Reidemeister-like constraints: local moves that should preserve a chosen equivalence class of projected fold diagrams.

This is useful for research discussion, error detection, and analogy to knot/quandle systems. It is not a complete origami semantics without metric constraints and layer-order constraints.

## Practical use in this skill

When the user asks whether origami topology can be represented with skeins or quandles:

1. Say yes, as a partial representation of crease/layer/crossing structure.
2. State the limitation: skein/quandle data alone is not enough for physical foldability.
3. Add the missing structures: crease geometry, metric constraints, mountain/valley assignment, layer ordering, collision avoidance, and material thickness.
4. Offer a small toy encoding rather than overclaiming.

## Toy notation

Represent a model as:

- P: square polygon.
- G = (V, E): crease graph.
- mv: E -> {M, V, F} for mountain, valley, flat/precrease.
- L: partial order of layers after collapse.
- S: surface features mapped from unfolded coordinates to visible panels.
- Q: optional quandle-like labels for oriented feature/crease interactions.
- K: optional skein-like projection of visible layer crossings.

A printable model is valid only if P, G, mv, L, and S cohere for the intended fold sequence.
