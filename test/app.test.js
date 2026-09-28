const test = require("node:test");
const assert = require("node:assert");

test("basic calculation should work", () => {
    const result = 2 + 3;

    assert.strictEqual(result, 5);
});