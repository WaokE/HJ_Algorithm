from collections import deque
import sys
input = sys.stdin.readline

dx = [-1, 1, 0, 0]
dy = [0, 0, -1 ,1]

problemCount = 0
while True:
    N = int(input())
    if N:
        problemCount += 1
        cave = [list(map(int, input().split()))for _ in range(N)]
        cost = [[float('inf')]*N for _ in range(N)]
        q = deque()

        q.append((0,0))
        cost[0][0] = cave[0][0]
        while q:
            x, y = q.popleft()
            currentCost = cost[x][y]
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                if 0<=nx<N and 0<=ny<N:
                    if cost[nx][ny]:
                        if cost[nx][ny] > currentCost + cave[nx][ny]:
                            cost[nx][ny] = currentCost + cave[nx][ny]
                            q.append((nx, ny))    
        
        print(f'Problem {problemCount}:', cost[-1][-1])           
    else:
        exit()