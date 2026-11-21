// SPDX-License-Identifier: MPL-2.0 AND CC-BY-SA-4.0
// MPL-2.0 (code) and CC-BY-SA-4.0 (prose)
import { expect, test } from "bun:test";
import { jcs, netsFor } from "./score.mjs";

test("jcs sorts keys and drops whitespace", () => {
  expect(jcs({ b: 1, a: [true, null, "x"] })).toBe('{"a":[true,null,"x"],"b":1}');
});

test("netsFor scores valid severity minus invalid count", () => {
  const j = { shared: [{ x: 1, y: 1 }], unique: [
    { side: "X", n: 2, valid: true, severity: 3 }, { side: "X", n: 3, valid: false },
    { side: "Y", n: 2, valid: true, severity: 1 } ] };
  const r = netsFor(j, 3, 2);
  expect(r.X.net).toBe(2); expect(r.X.sev3).toBe(1); expect(r.Y.net).toBe(1); expect(r.shared).toBe(1);
});

test("netsFor fails loudly on an unjudged item", () => {
  expect(() => netsFor({ shared: [], unique: [{ side: "X", n: 1, valid: true, severity: 1 }] }, 2, 0)).toThrow();
});

test("netsFor fails loudly on an item both shared and unique", () => {
  expect(() => netsFor({ shared: [{ x: 1, y: 1 }], unique: [{ side: "X", n: 1, valid: true, severity: 1 }] }, 1, 1)).toThrow();
});
