const test = require("node:test");
const assert = require("node:assert");
const calc = require("../src/calc");

test("add", () => {
  assert.strictEqual(calc.add(2, 3), 5);
});

test("multiply", () => {
  assert.strictEqual(calc.multiply(2, 3), 6);
  assert.strictEqual(calc.multiply(0, 5), 0);
  assert.strictEqual(calc.multiply(-2, 3), -6);
  assert.strictEqual(calc.multiply(1.5, 2), 3);
});
