# Given two strings s and t, return true if t is an anagram of s, and false otherwise.

# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


# Example 1:

# Input: s = "anagram", t = "nagaram"
# Output: true
# Example 2:

# Input: s = "rat", t = "car"
# Output: false


# Constraints:

# 1 <= s.length, t.length <= 5 * 104
# s and t consist of lowercase English letters.

def valid_anagram(s, t):

    obj = {}

    if len(s) != len(t):
        return False

    for char in s:
        if char in obj:
            obj[char] += 1
        else:
            obj[char] = 1

    for char in t:
        if char in obj:
            obj[char] -= 1
        else:
            return False

    for value in obj.values():
        if value != 0:
            return False

    return True
