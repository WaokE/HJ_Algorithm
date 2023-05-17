import sys
input = sys.stdin.readline

N = int(input())
results = [list(map(int, input().split()))for _ in range(N)]

cows = [-1]*11
crossCount = 0

for result in results:
    cow, position = result
    if cows[cow] == -1: cows[cow] = position
    else: 
        if cows[cow] != position:
            cows[cow] = position
            crossCount += 1

print(crossCount)
