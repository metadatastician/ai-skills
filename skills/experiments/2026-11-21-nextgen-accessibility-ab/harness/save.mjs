// SPDX-License-Identifier: MPL-2.0 AND CC-BY-SA-4.0
// MPL-2.0 (code) and CC-BY-SA-4.0 (prose)
// SPDX-FileCopyrightText: 2026 Jonathan D.A. Jewell <j.d.a.jewell@open.ac.uk>

// Saves one arm's text reply (fifth round, owner decision). The arms run
// with no tools, so this script, not the model, writes the file. It reads the
// save path from the prompt's machine-readable policy, checks it again, and
// refuses to overwrite, to follow a symlink out of ab/out, or to save
// "cannot comply" or invalid JSON. It fails loudly; it never saves silently.
//   bun save.mjs <scratchpad> <prompt-file> <reply-file>
import fs from "node:fs";
import path from "node:path";
import { assertSafeOutputPath, OUT_DIR, POLICY_HEADING } from "./material.mjs";

const fail = (m) => { console.error("save.mjs: " + m); process.exit(1); };
const [SP, promptFile, replyFile] = process.argv.slice(2);
if (!SP || !promptFile || !replyFile) fail("usage: bun save.mjs <scratchpad> <prompt-file> <reply-file>");

const prompt = fs.readFileSync(promptFile, "utf8");
const at = prompt.lastIndexOf("\n" + POLICY_HEADING + "\n");
if (at < 0) fail(`no policy block in ${promptFile}`);
const m = prompt.slice(at).match(/^(`{3,})json\n([\s\S]*?)\n\1\s*$/m);
if (!m) fail(`policy block in ${promptFile} is not one JSON fence`);
let policy;
try { policy = JSON.parse(m[2]); } catch (e) { fail(`policy is not valid JSON: ${e.message}`); }
if (policy.version !== 2 || policy.mode !== "reply-only" || !Array.isArray(policy.tools) || policy.tools.length !== 0)
  fail("policy is not version 2, reply-only, with no tools");

let rel;
try { rel = assertSafeOutputPath(policy.save); } catch (e) { fail(e.message); }
const outRoot = fs.realpathSync(path.join(SP, OUT_DIR));
const target = path.join(SP, rel);
fs.mkdirSync(path.dirname(target), { recursive: true });
const dir = fs.realpathSync(path.dirname(target));
if (dir !== outRoot && !dir.startsWith(outRoot + path.sep)) fail(`save path leaves ${OUT_DIR} through a link: ${rel}`);

const reply = fs.readFileSync(replyFile, "utf8").trim();
if (reply === "") fail("reply is empty");
if (/^cannot comply\.?$/i.test(reply)) fail("the arm replied: cannot comply");
if (rel.endsWith(".json")) { try { JSON.parse(reply); } catch (e) { fail(`reply is not valid JSON: ${e.message}`); } }

try { fs.writeFileSync(path.join(dir, path.basename(target)), reply + "\n", { flag: "wx" }); }
catch (e) { fail(e.code === "EEXIST" ? `will not overwrite ${rel}` : e.message); }
console.log("saved " + rel);
