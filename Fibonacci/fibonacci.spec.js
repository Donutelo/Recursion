const fibonacci = require('./fibonacci.js');

describe('Fibonacci sequence', () => {
    test('Works for 1', () => {
        expect(fibonacci(1)).toEqual([0]);
    });

    test('Works for 2', () => {
        expect(fibonacci(2)).toEqual([0, 1]);
    });

    test('Works for 3', () => {
        expect(fibonacci(3)).toEqual([0, 1, 1]);
    });

    test('Works for 4', () => {
        expect(fibonacci(4)).toEqual([0, 1, 1, 2]);
    });

    test('Works for 5', () => {
        expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
    });

    test('Works for 10', () => {
        expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
})