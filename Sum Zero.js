// # Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to Zero or undefined if a pair does not exist.

// # Ex: [-3, -2, -1, 0, 1, 2, 3, 4, 6, 7] = > [-3, 3]

// #     [-2, 0, 1, 3] = > undefined

// #     [1, 2, 3] = > undefined

const sumZero = (nums) => {
  firstPointer = 0;
  secondPointer = nums.length - 1;

  while (firstPointer < secondPointer) {
    if (nums[firstPointer] + nums[secondPointer] === 0) {
      return [nums[firstPointer], nums[secondPointer]];
    }

    if (nums[firstPointer] + nums[secondPointer] > 0) {
      secondPointer--;
    } else {
      firstPointer++;
    }
  }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 4, 6, 7]));
