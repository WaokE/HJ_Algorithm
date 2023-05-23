from collections import deque
import sys
input = sys.stdin.readline

N, Q = list(map(int, input().split()))
USADO = [list(map(int, input().split()))for _ in range(N-1)]
USADOEachVideo = [[]for _ in range(N+1)]
questions = [list(map(int, input().split()))for _ in range(Q)]

for edge in USADO:
    USADOEachVideo[edge[0]].append((edge[1], edge[2]))
    USADOEachVideo[edge[1]].append((edge[0], edge[2]))

for question in questions:
    K, video = question 
    searchQ = deque()
    count = 0
    unVisited = [True]*(N+1)
    unVisited[video] = False
    for edge in USADOEachVideo[video]:
        if edge[1] >= K:
            searchQ.append(edge[0])
            count += 1
    
    while searchQ:
        current = searchQ.popleft()
        unVisited[current] = False
        for edge in USADOEachVideo[current]:
            if edge[1] >= K and unVisited[edge[0]] and edge[0] not in searchQ:
                searchQ.append(edge[0])
                count += 1
    
    print(count)