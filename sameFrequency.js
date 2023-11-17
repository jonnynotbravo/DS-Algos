// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

//Answer:
function sameFrequency(num1, num2) {
  let frequency = {};

  let freqOne = num1
    .toString()
    .split("")
    .map((elem) => Number(elem));
  let freqTwo = num2
    .toString()
    .split("")
    .map((elem) => Number(elem));

  if (freqOne.length !== freqTwo.length) {
    return false;
  }

  for (let i = 0; i < freqOne.length; i++) {
    if (frequency[freqOne[i]]) {
      frequency[freqOne[i]]++;
    } else {
      frequency[freqOne[i]] = 1;
    }

    if (frequency[freqTwo[i]]) {
      frequency[freqTwo[i]]++;
    } else {
      frequency[freqTwo[i]] = 1;
    }
  }

  for (let i in frequency) {
    if (frequency[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
}



