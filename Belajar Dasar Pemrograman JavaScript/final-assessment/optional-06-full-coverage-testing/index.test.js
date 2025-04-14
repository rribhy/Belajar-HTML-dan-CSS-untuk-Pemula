import test from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test('function dengan penjumlahan dua angka positif', () => { //Test case 1: Function dengan penjumlahan dua angka positif
    assert.strictEqual(sum(1, 2), 3);
});

test('function dengan parameter string', () => { //Test case 2: Function dengan parameter string
    const potentialErrorToBeThrew = () => {
        const operandA = "1";
        const operandB = 2;
        add(operandA, operandB);
    };
    assert.throws(potentialErrorToBeThrew, Error);
});

test('function dengan parameter 0', () => { //Test case 3: Function dengan parameter 0
    const potentialErrorToBeThrew = () => {
        const operandA = 0;
        const operandB = 0;
        add(operandA, operandB);
    };
    assert.throws(potentialErrorToBeThrew, Error);
});