import sys
input = sys.stdin.readline
sys.setrecursionlimit(10 ** 9)

N = int(input())
inputs = [list(map(int, input().split()))for _ in range(N-1)]
edges = [[]for _ in range(N+1)]

for edge in inputs:
    edges[edge[0]].append(edge[1])
    edges[edge[1]].append(edge[0])
for edge in edges:
    edge.sort()

visited = [False]*(N+1)
parents = [0]*(N+1)
def findParents(vertex):
    if visited[vertex] == True:
        return
    visited[vertex] = True
    for goTo in edges[vertex]:
        if parents[goTo] == 0:
            parents[goTo] = vertex
        findParents(goTo)

findParents(1)
for parents in parents[2:]:
    print(parents)