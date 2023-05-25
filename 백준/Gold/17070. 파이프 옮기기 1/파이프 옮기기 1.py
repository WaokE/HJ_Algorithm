import sys
input = sys.stdin.readline
DOWN = 0
RIGHT_DOWN = 1
RIGHT = 2

N = int(input())
house = [list(map(int, input().split()))for _ in range(N)]
visitCount = [[0]*N for _ in range(N)]
dx = [1, 1, 0]
dy = [0, 1, 1]

searchStack = [(0, 1, RIGHT)]
while searchStack:
    x, y, dir = searchStack.pop()
    visitCount[x][y] += 1
    if dir == RIGHT:
        for i in range(2, 0, -1):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx < N and ny < N and house[nx][ny] != 1: 
                if i == 1 and (house[x+1][y] or house[x][y+1]):
                    continue
                searchStack.append((nx, ny, i))
    elif dir == RIGHT_DOWN:
        for i in range(3):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx < N and ny < N and house[nx][ny] != 1: 
                if i == 1 and (house[x+1][y] or house[x][y+1]):
                    continue
                searchStack.append((nx, ny, i))
    elif dir == DOWN: 
        for i in range(0, 2):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx < N and ny < N and house[nx][ny] != 1: 
                if i == 1 and (house[x+1][y] or house[x][y+1]):
                    continue
                searchStack.append((nx, ny, i))

print(visitCount[-1][-1])