import sys
input = sys.stdin.readline

N = int(input())
A = input().strip()
inputs = [list(map(int, input().split()))for _ in range(N-1)]
isInOrOut = []
edges = [[]for _ in range(N+1)]

isInOrOut.append(None)
for i in A:
    isInOrOut.append(int(i))
for edge in inputs:
    edges[edge[0]].append(edge[1])
    edges[edge[1]].append(edge[0])

routeCount = 0
for i in range(1, N+1):
    stack = []
    visited= [False] * (N+1)
    if isInOrOut[i] == 1:
        stack.append(i)
        while stack:
            current = stack.pop()
            if visited[current] == True:
                continue
            visited[current] = True
            if isInOrOut[current] == 1 and current is not i:
                routeCount += 1
                continue
            for route in edges[current]:
                stack.append(route)
print(routeCount)