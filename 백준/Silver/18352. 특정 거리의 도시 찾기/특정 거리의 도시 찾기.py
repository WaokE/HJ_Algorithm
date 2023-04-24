import sys
from collections import deque
input = sys.stdin.readline

N,M,K,X = list(map(int,input().split()))
inputs = [list(map(int,input().split()))for _ in range(M)]
edges = [[]for _ in range(N+1)]

for edge in inputs:
    edges[edge[0]].append(edge[1])

queue = deque()
queue.append((X, 0))
visited = [False]*(N+1)
founded = False
visited[X] = True
result = []
while queue:
    current, length = queue.popleft()
    if length == K:
        founded = True
        result.append(current)
        continue
    for goTo in edges[current]:
        if visited[goTo] == False: 
            queue.append((goTo, length+1))
            visited[goTo] = True

if founded == False:
    print(-1)
else:
    result.sort()
    for i in result: print(i)