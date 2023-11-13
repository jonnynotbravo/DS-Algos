// implment a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array.There can be negative numbers in the array, but it will always be sorted.

// Ex:
// input = [1, 1, 1, 1, 1, 2]
// output = 2

const countUniqueValues = (arr) => {
  frequency = {};

  for (num of arr) {
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
  }

  return Object.keys(frequency).length;
};
