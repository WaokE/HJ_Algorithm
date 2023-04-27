from collections import deque
import sys
input = sys.stdin.readline

N = int(input())
map = [list(map(int, input().strip()))for _ in range(N)]

def checkMap():
    buildings = []
    for i in range(N):
        for j in range(N):
            if map[i][j] == 1:
                buildings.append((i,j))
    return buildings

def checkAround(x, y):
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    result = [False]*4
    for i in range(4):
        if N-1 < x+dx[i] or x+dx[i] < 0 or N-1 < y+dy[i] or y+dy[i] < 0:
            continue
        if map[x+dx[i]][y+dy[i]] == 1 and visited[x+dx[i]][y+dy[i]] == False:
            result[i] = True
    return result

def BFS(start):
    x, y = start
    q = deque()
    q.append((x, y))
    houseCount = 0
    while q:
        current = q.popleft()
        x, y = current
        moveAble = checkAround(x, y)
        visited[x][y] = True
        houseCount += 1

        if moveAble[0] == True and (x-1,y) not in q: q.append((x-1,y))
        if moveAble[1] == True and (x+1,y) not in q: q.append((x+1,y))
        if moveAble[2] == True and (x,y-1) not in q: q.append((x,y-1))
        if moveAble[3] == True and (x,y+1) not in q: q.append((x,y+1))
    
    return houseCount
        

    

buildings = checkMap()
groupCount = 0
houseCountEachGroup = []
visited = [[False]*N for _ in range(N)]
for building in buildings:
    x, y = building
    if visited[x][y] == False:
        houseCountEachGroup.append(BFS((x,y)))
        groupCount += 1
houseCountEachGroup.sort()
print(groupCount)
for i in houseCountEachGroup: print(i)