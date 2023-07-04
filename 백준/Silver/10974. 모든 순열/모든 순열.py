import sys
from itertools import permutations

N = int(input())
temp = []
for i in range(1, N+1):
    temp.append(i)
result = permutations(temp, N)

for i in sorted(result): print(*i)