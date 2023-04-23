import sys
from collections import deque
input = sys.stdin.readline

def BG(vertex):
    global queue
    queue.append((vertex, 1))
    while queue:
        parent, color = queue.popleft()
        if visited[parent] != 0:
            if visited[parent] != color:
                return False
            continue
        visited[parent] = color
        for child in edgesEachNode[parent]:
            queue.append((child, -color))
    return True

K = int(input())
for _ in range(K):
    V, E = list(map(int,input().split()))
    inputs = [list(map(int, input().split()))for _ in range(E)]
    edgesEachNode = [[]for _ in range(V+1)]

    for edge in inputs:
        edgesEachNode[edge[0]].append(edge[1])
        edgesEachNode[edge[1]].append(edge[0])

    visited = [0]*(V+1)
    queue = deque()
    result = 'YES'
    for i in range(1, V + 1):
        if visited[i] == 0:
            if not BG(i):
                result = 'NO'
    print(result)
    
