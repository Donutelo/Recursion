/**
 * Sorts numbers in ascending order using merge sort.
 * Does not modify the input array.
 *
 * @param {number[]} arr An array of numbers.
 * @returns {number[]} The sorted array.
 */

// slice() creates intermediate arrays; this implementation uses O(n) extra memory.

function mergeSort(arr) {
  let fArray = [];
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  let firstHalf = mergeSort(arr.slice(0, mid));
  let secondHalf = mergeSort(arr.slice(mid));
  fArray = merge(firstHalf, secondHalf);

  return fArray;
}

function merge(arr1, arr2) {
  let i = 0,
    j = 0;
  let fArr = [];

  while (i <= arr1.length - 1 && j <= arr2.length - 1) {
    if (arr1[i] <= arr2[j]) {
      fArr.push(arr1[i]);
      i++;
    } else {
      fArr.push(arr2[j]);
      j++;
    }
  }

  for (; i < arr1.length; i++) {
    fArr.push(arr1[i]);
  }

  for (; j < arr2.length; j++) {
    fArr.push(arr2[j]);
  }

  return fArr;
}

module.exports = mergeSort;

