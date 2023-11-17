# // Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

# // Your solution MUST have the following complexities:

# // Time: O(N)

# // Sample Input:

# // sameFrequency(182,281) // true
# // sameFrequency(34,14) // false
# // sameFrequency(3589578, 5879385) // true
# // sameFrequency(22,222) // false


def sameFrequency(num1, num2):
    freq = {}

    str_num1 = str(num1)
    str_num2 = str(num2)

    if len(str_num1) != len(str_num2):
        return False

    for digit1, digit2 in zip(str_num1, str_num2):
        if digit1 in freq:
            freq[digit1] += 1
        else:
            freq[digit1] = 1

        if digit2 in freq:
            freq[digit2] -= 1
        else:
            freq[digit2] = 1

    for value in freq.values():
        if value != 0:
            return False

    return True
