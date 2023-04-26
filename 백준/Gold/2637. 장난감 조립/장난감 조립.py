from collections import deque
import sys
input = sys.stdin.readline

N = int(input())
M = int(input())
inputs = [list(map(int, input().split()))for _ in range(M)]

parts = [[]for _ in range(N+1)]
costs = [[0]*(N+1)for _ in range(N+1)]
inDegree = [0]*(N+1)

for part in inputs:
    parts[part[1]].append((part[0], part[2]))
    inDegree[part[0]] += 1
    
q = deque()
for i in range(1, len(inDegree)):
    if inDegree[i] == 0:
        q.append(i)

while q:
    current = q.popleft()
    for nextPart, nextCost in parts[current]:
        if any(costs[current]):
            for i in range(1, len(inDegree)):
                costs[nextPart][i] += costs[current][i]*nextCost
        else:
            costs[nextPart][current] += nextCost

        inDegree[nextPart] -= 1
        if inDegree[nextPart] == 0:
            q.append(nextPart)

for i in enumerate(costs[N]):
    if i[1] > 0:
        print(*i)