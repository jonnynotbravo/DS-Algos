// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false

//Answer:
var isAnagram = function (s, t) {
  let char = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    char[s[i]] = char[s[i]] ? char[s[i]] + 1 : 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!char[t[i]]) {
      return false;
    }
    char[t[i]]--;
  }

  return true;
};
