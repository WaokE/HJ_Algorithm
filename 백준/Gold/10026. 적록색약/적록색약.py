import sys 
input = sys.stdin.readline 

N = int(input())
picture = [list(input().strip())for _ in range(N)]
unVisited = [[True]*N for _ in range(N)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
commonCount = 0 
disableCount = 0

def DFS(coordinate):
    x, y = coordinate
    color = picture[x][y]
    stackForDFS = []
    stackForDFS.append((x, y))
    
    while stackForDFS:
        x, y = stackForDFS.pop()
        unVisited[x][y] = False
        if picture[x][y] == 'G': picture[x][y] = 'R'
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx <N and 0 <= ny <N:
                if picture[nx][ny] == color and unVisited[nx][ny]: stackForDFS.append((nx, ny))

for i in range(N):
    for j in range(N):
        if unVisited[i][j]:
            DFS((i, j))
            commonCount += 1
print(commonCount, end = ' ')

unVisited = [[True]*N for _ in range(N)]
for i in range(N):
    for j in range(N):
        if unVisited[i][j]:
            DFS((i, j))
            disableCount += 1
print(disableCount)