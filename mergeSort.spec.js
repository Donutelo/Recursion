const mergeSort = require('./mergeSort.js');

describe('Merge sort', ()=> {
    test('Works for empty list', () => {
        expect(mergeSort([])).toEqual([]);
    });

    test('Works for an array with one number only', () => {
        expect(mergeSort([73])).toEqual([73]);
    })

    test('Works for a sorted array', () => {
        expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    })

    test('Works for an unsorted array', () => {
        expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    })

    test('Works for another unsorted array', () => {
        expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
    })
})