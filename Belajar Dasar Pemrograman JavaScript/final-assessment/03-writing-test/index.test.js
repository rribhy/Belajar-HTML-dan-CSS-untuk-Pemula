import test from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test('function dengan penjumlahan angka', () => { //Test function dengan penjumlahan angka
    assert.strictEqual(sum(1, 2), 3);
});