import sys
from heapq import heappop, heappush
input = sys.stdin.readline

V, E = list(map(int, input().split()))
K = int(input())
inputs = [list(map(int, input().split()))for _ in range(E)]
cost = [float('INF')]*(V+1)
visited = set()
edges = [[]for _ in range(V+1)]
for edge in inputs:
    edges[edge[0]].append((edge[2], edge[1]))

q = []
visited.add(K)
q.append((0, K))
while q:
    currentCost, currentNode = heappop(q)
    if currentCost > cost[currentNode]:
        continue
    visited.add(currentNode)
    for edge in edges[currentNode]:
        if cost[edge[1]] > currentCost + edge[0] and edge[1] not in visited:
            cost[edge[1]] = currentCost + edge[0] 
            heappush(q, (cost[edge[1]], edge[1]))

for i in range(1, V+1):
    if i == K: print(0)
    elif cost[i] == float('INF'): print('INF')
    else: print(cost[i])