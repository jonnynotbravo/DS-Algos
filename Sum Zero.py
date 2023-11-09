# Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to Zero or undefined if a pair does not exist.

# Ex: [-3, -2, -1, 0, 1, 2, 3, 4, 6, 7] = > [-3, 3]

#     [-2, 0, 1, 3] = > undefined

#     [1, 2, 3] = > undefined

def sumZero(array):

    i = 0
    j = len(array) - 1
    while i < j:
        if array[i] + array[j] == 0:
            return [array[i], array[j]]
        if array[i] + array[j] > 0:
            j -= 1
        else:
            i += 1
