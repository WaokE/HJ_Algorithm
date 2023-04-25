import heapq
import sys
input = sys.stdin.readline

n = int(input())
maze = [list(map(int, input().strip()))for _ in range(n)]

def isMoveAble(x, y, scope):
    if scope[0] < 0 or scope[0] > n-1 or scope[1] < 0 or scope[1] > n-1:
        return False
    if maze[scope[0]][scope[1]] == -1:
        return False
    elif maze[scope[0]][scope[1]] == 1:
        return 'W'
    elif maze[scope[0]][scope[1]] == 0:
        return 'B'
    else:
        return False

def search():
    # before search
    visitList = []
    visited = [[False]*n for _ in range(n)]
    # x, y, wallCount
    heapq.heappush(visitList, (0, 0, 0))

    # search start
    while visitList:
        wallCount, x, y = heapq.heappop(visitList)
        if visited[x][y] == True:
            continue

        if isMoveAble(x, y, [x-1, y]) == 'W':
            heapq.heappush(visitList, (wallCount, x-1, y))
        elif isMoveAble(x, y, [x-1, y]) == 'B':
            heapq.heappush(visitList, (wallCount+1, x-1, y))
        if isMoveAble(x, y, [x+1, y]) == 'W':
            heapq.heappush(visitList, (wallCount, x+1, y))
        elif isMoveAble(x, y, [x+1, y]) == 'B':
            heapq.heappush(visitList, (wallCount+1, x+1, y))
        if isMoveAble(x, y, [x, y-1]) == 'W':
            heapq.heappush(visitList, (wallCount, x, y-1))
        elif isMoveAble(x, y, [x, y-1]) == 'B':
            heapq.heappush(visitList, (wallCount+1, x, y-1))
        if isMoveAble(x, y, [x, y+1]) == 'W':
            heapq.heappush(visitList, (wallCount, x, y+1))
        elif isMoveAble(x, y, [x, y+1]) == 'B':
            heapq.heappush(visitList, (wallCount+1, x, y+1))

        visited[x][y] = True

        if x == n-1 and y == n-1: 
            print(wallCount)
            break


search()