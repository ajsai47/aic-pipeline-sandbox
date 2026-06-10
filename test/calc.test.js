const test = require("node:test");
const assert = require("node:assert");
const calc = require("../src/calc");

test("add", () => {
  assert.strictEqual(calc.add(2, 3), 5);
});

// Pipeline ticket target: multiply is expected but not yet implemented.
test("multiply", () => {
  assert.strictEqual(calc.multiply(2, 3), 6);
});
