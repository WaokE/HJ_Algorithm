import sys
input = sys.stdin.readline

N, L = list(map(int, input().split()))
pools = [list(map(int, input().split()))for _ in range(N)]
pools.sort()

endOfPlank = pools[0][0] + L
plankCount = 1

for pool in pools:
    start, end = pool
    if end <= endOfPlank:
        continue

    if endOfPlank < start:
        endOfPlank = start + L
        plankCount += 1

    while end > endOfPlank:
        endOfPlank = endOfPlank + L
        plankCount += 1

print(plankCount)