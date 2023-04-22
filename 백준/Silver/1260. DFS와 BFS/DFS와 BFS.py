import sys
from collections import deque
input = sys.stdin.readline

N, M, V = list(map(int, input().split()))
inputs = [list(map(int, input().split()))for _ in range(M)]
edges = [[]for _ in range(N+1)]

visited = []

for input in inputs:
    edges[input[0]].append(input[1])
    edges[input[1]].append(input[0])
for edge in edges:
    edge.sort()

def DFS(vertex):
    if vertex in visited:
        return
    print(vertex, end = ' ')
    visited.append(vertex)
    for edge in edges[vertex]:
        DFS(edge)

queue = deque()
def BFS(vertex):
    visited.append(vertex)
    queue.appendleft(vertex)
    while queue:
        current = queue.pop()
        print(current, end = ' ')
        for v in edges[current]:
            if v not in visited and v not in queue:  # 변경된 조건
                queue.appendleft(v)
                visited.append(v)

DFS(V)
visited.clear()
print()
BFS(V)