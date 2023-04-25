import sys
from collections import deque
input = sys.stdin.readline

N, M = list(map(int, input().split()))
inputs = [list(map(int, input().split()))for _ in range(M)]
edges = [[]for _ in range(N+1)]
inDegree = [0]*(N+1)

for edge in inputs:
    edges[edge[1]].append(edge[0])
    inDegree[edge[0]] +=1

queue = deque()
for i in range(1, N+1):
    if inDegree[i] == 0:
        queue.append(i)

result = []
while queue:
    current = queue.popleft()
    result.append(current)
    for nextNode in edges[current]:
        inDegree[nextNode] -= 1
        if inDegree[nextNode] == 0:
            queue.append(nextNode)
result.reverse()
for i in result:
    print(i,end=' ')
