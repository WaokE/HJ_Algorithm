from collections import deque
import sys
input = sys.stdin.readline

N, M = list(map(int, input().split()))
map = [list(map(int, input().split()))for _  in range(N)]


def checkIceberg():
    iceberg = []
    for i in range(len(map)):
        for j in range(len(map[i])):
            if map[i][j] > 0:
                iceberg.append((i,j))
    return iceberg

def checkEachIce(x,y,dx,dy):
    moveAble = []
    seaCount = 0
    for i in range(4):
        if 0<=x+dx[i]<=(N-1) or 0<=y+dy[i]<=(M-1):
            if map[x+dx[i]][y+dy[i]] == 0:
                seaCount += 1
            else: moveAble.append(i)
    return (moveAble, seaCount)

def BFS(start):
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    visited = [[False]*M for _ in range(N)]
    newMap = [arr[:] for arr in map]
    x, y = start
    count = 0
    q = deque()
    q.append((x, y))
    while q:
        current = q.popleft()
        x, y = current
        count += 1
        visited[current[0]][current[1]] = True
        moveAble, seaCount = checkEachIce(x,y,dx,dy)
        newMap[x][y] -= seaCount
        if newMap[x][y] < 0:
            newMap[x][y] = 0
        if 0 in moveAble and visited[x-1][y] == False and (x-1,y)not in q: q.append((x-1,y))
        if 1 in moveAble and visited[x+1][y] == False and (x+1,y)not in q: q.append((x+1,y))
        if 2 in moveAble and visited[x][y-1] == False and (x,y-1)not in q: q.append((x,y-1))
        if 3 in moveAble and visited[x][y+1] == False and (x,y+1)not in q: q.append((x,y+1))
    return count, newMap
    
year = 0
while True:
    icebergs = checkIceberg()
    try:
        temp, newMap = BFS(icebergs[0])
        map = newMap
        result = year
        year += 1
        if temp == len(icebergs): 
            pass
        else:
            print(result)
            break
    except:
        print(0)
        break
