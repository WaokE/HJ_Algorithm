import sys
from collections import deque

N, M = list(map(int, input().split()))
inputs = [list(map(int, input().split()))for _ in range(M)]
edges = [[]for _ in range(N+1)]

for input in inputs:
    edges[input[0]].append(input[1])
    edges[input[1]].append(input[0])
for edge in edges:
    edge.sort()

def BFS(vertex,visited):
    queue = deque()
    queue.append(vertex)
    visited.append(vertex)
    while queue:
        current = queue.pop()
        for edge in edges[current]:
            if edge not in visited and edge not in queue:
                queue.appendleft(edge)
                visited.append(edge)

nodes = list(range(1, N+1))    
visited = []
count = 0
while len(visited) < N:
    if visited:
        for node in nodes:
            if node not in visited:
                BFS(node, visited)
                count += 1
    else:
        BFS(nodes[0], visited)
        count +=1

print(count)