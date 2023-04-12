import sys
from itertools import permutations

N = sys.stdin.readline()
inputs = list(map(int,(sys.stdin.readline().split())))

cases = list(permutations(inputs, r = len(inputs)))

def cal(arr):
    result = 0
    for i in range(1, len(arr)):
        result += abs(arr[i-1] - arr[i])
    return result

print(max(list(map(cal, cases))))
