// Shared helpers for the tool tests. Everything is created under os.tmpdir() unless a test says otherwise.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

export const TOOLS = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const REPO = path.resolve(TOOLS, "..", "..");
export const SKILLS = path.join(REPO, "skills"); // DEFAULT_ROOT of the tools

export function tmp(prefix = "tools-test-") {
  return fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), prefix)));
}
export const rm = (d) => fs.rmSync(d, { recursive: true, force: true });

export function run(script, args, opts = {}) {
  const r = spawnSync(process.execPath, [path.join(TOOLS, script), ...args], { encoding: "utf8", ...opts });
  return { status: r.status, out: (r.stdout ?? "") + (r.stderr ?? ""), stdout: r.stdout ?? "", stderr: r.stderr ?? "" };
}

// A skill-shaped chat message: scores 3 (name line, "Use when", Instructions line). `extra` varies the text.
export function skillText(name, extra = "", sep = "\n") {
  const filler = Array.from({ length: 30 }, (_, i) => `step${i} do the thing carefully`).join(sep);
  return ["name: " + name, "Use when you need to test " + name + ".", "Instructions", filler, extra].join(sep);
}

export const writeJson = (file, v) => { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, JSON.stringify(v)); };

export function snapshot(dir) {
  const out = {};
  const walk = (d, rel = "") => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const r = rel ? rel + "/" + e.name : e.name;
      if (e.isSymbolicLink()) out[r] = "-> " + fs.readlinkSync(path.join(d, e.name));
      else if (e.isDirectory()) { out[r] = "dir/"; walk(path.join(d, e.name), r); }
      else out[r] = fs.readFileSync(path.join(d, e.name), "utf8");
    }
  };
  walk(dir);
  return out;
}
