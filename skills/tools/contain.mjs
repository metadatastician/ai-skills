// Path containment shared by build.mjs, recover-skills.mjs and import-seam.mjs.
//
// One policy, in one place: a name taken from data (a manifest, a chat export, a flag) is a single path
// segment, and a path built from it is only used for writing or deleting when, after resolving the real
// location of the root, it lies inside that root and no existing component below the root is a symlink.
// Imports node:fs and node:path only.
import fs from "node:fs";
import path from "node:path";

// A single, ordinary directory or file name: no separators, no "." or "..", no NUL, not empty.
export function assertSegment(name, what = "name") {
  if (typeof name !== "string" || name === "" || name === "." || name === ".." || /[\/\\\0]/.test(name)) {
    throw new Error(`${what} must be a single plain path segment, got ${JSON.stringify(name)}`);
  }
  return name;
}

// Resolve `rel` below `root` for writing or deleting. Returns an absolute path under the real path of `root`.
// Throws when rel is absolute, climbs out of root, or when any existing component below root is a symlink
// (which would redirect the write or delete elsewhere). Components that do not exist yet are fine.
// `under` (optional) is a directory name below root that rel must stay within, so rel is checked on its own
// before being joined (an absolute rel must not be rescued by the join).
export function resolveInside(root, rel, under = "") {
  if (typeof rel !== "string" || rel === "" || rel.includes("\0") || path.isAbsolute(rel) || /^[A-Za-z]:/.test(rel)) {
    throw new Error(`path must be relative and non-empty, got ${JSON.stringify(rel)}`);
  }
  const realRoot = fs.realpathSync(root);
  const relParts = rel.split(/[\/\\]+/).filter((p) => p !== "" && p !== ".");
  if (relParts.includes("..")) throw new Error(`path escapes its directory: ${JSON.stringify(rel)}`);
  const parts = under ? [assertSegment(under, "directory"), ...relParts] : relParts;
  let cur = realRoot;
  for (const part of parts) {
    cur = path.join(cur, part);
    let st;
    try { st = fs.lstatSync(cur); } catch (e) { if (e.code === "ENOENT") continue; throw e; }
    if (st.isSymbolicLink()) throw new Error(`refusing to follow symlink: ${cur}`);
  }
  if (cur !== realRoot && !cur.startsWith(realRoot + path.sep)) throw new Error(`path escapes its directory: ${JSON.stringify(rel)}`);
  return cur;
}

// Same, for an absolute target that must lie inside root (e.g. a destination given on the command line).
// Symlinks in the part of the path above root are the caller's own business; below root they are refused.
export function resolveAbsInside(root, target) {
  const realRoot = fs.realpathSync(root);
  // realpath the deepest existing ancestor of target so a symlinked ancestor cannot hide an escape
  let existing = path.resolve(target), tail = [];
  while (!fs.existsSync(existing) && path.dirname(existing) !== existing) { tail.unshift(path.basename(existing)); existing = path.dirname(existing); }
  const resolved = path.join(fs.realpathSync(existing), ...tail);
  const rel = path.relative(realRoot, resolved);
  if (rel === "") return realRoot;
  if (rel === ".." || rel.startsWith(".." + path.sep) || path.isAbsolute(rel)) throw new Error(`path must lie inside ${realRoot}: ${target}`);
  return resolveInside(realRoot, rel.split(path.sep).join("/"));
}
