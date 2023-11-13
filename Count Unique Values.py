# // implment a function called countUniqueValues, which accepts a sorted array,
# // and counts the unique values in the array.There can be negative numbers in the array, but it will always be sorted.

# // Ex:
# // input = [1, 1, 1, 1, 1, 2]
# // output = 2

def countUniqueValues(arr):

    freq = {}

    for num in arr:
        if num in freq:
            freq[num] += 1
        else:
            freq[num] = 1

    return len(freq.keys())
