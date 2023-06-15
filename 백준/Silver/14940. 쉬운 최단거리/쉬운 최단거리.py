from collections import deque
import sys
input = sys.stdin.readline

def set_map(map_data):
    for i in range(n):
        for j in range(m):
            if map_data[i][j] == 0:
                map_data[i][j] = -float('INF')
                continue
            if map_data[i][j] == 1:
                map_data[i][j] = float('INF')
                continue
            if map_data[i][j] == 2:
                map_data[i][j] = 0
                dest = (i, j)
    return(dest)

def make_result(map_data):
    for i in range(n):
        for j in range(m):
            if map_data[i][j] == float('INF'): map_data[i][j] = -1
            if map_data[i][j] == -float('INF'): map_data[i][j] = 0

    

n, m = list(map(int, input().split()))
map_data = []
visited = [[False]*m for _ in range(n)]
for i in range (n):
    map_data.append(list(map(int, input().split())))

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
serachQ = deque()
x, y = set_map(map_data)
serachQ.append((x, y))
visited[x][y] = True
while serachQ:
    x, y = serachQ.popleft()
    visited[x][y] = True
    cost = map_data[x][y]
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if -1 < nx < n and -1 < ny < m and map_data[nx][ny] > cost + 1 and visited[nx][ny] == False:
            map_data[nx][ny] = cost + 1
            serachQ.append((nx, ny))
            visited[nx][ny] = True

make_result(map_data)
for i in map_data: print(*i)