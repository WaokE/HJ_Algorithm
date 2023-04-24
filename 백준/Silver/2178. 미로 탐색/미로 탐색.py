import sys
from collections import deque
input = sys.stdin.readline
N, M = list(map(int, input().split()))
maze = [list(map(int, input().strip()))for _ in range(N)]

def checkMoveAble(x, y, maze):
    return [not (x-1<0 or maze[x-1][y] != 1),not (x+1>N-1 or maze[x+1][y] != 1),not (y-1<0 or maze[x][y-1] != 1),not (y+1>M-1 or maze[x][y+1] != 1)]

queue = deque()
queue.append((0,0,1))
while queue:
    x, y, length = queue.popleft()
    if x == N-1 and y == M-1:
        print(length)
        break
    moveable = checkMoveAble(x, y, maze)
    if moveable == [False,False,False,False]:
        continue
    maze[x][y] = -1

    if moveable[0] and (x-1,y,length+1)not in queue: queue.append((x-1,y,length+1))
    if moveable[1] and (x+1,y,length+1)not in queue: queue.append((x+1,y,length+1))
    if moveable[2] and (x,y-1,length+1)not in queue: queue.append((x,y-1,length+1))
    if moveable[3] and (x,y+1,length+1)not in queue: queue.append((x,y+1,length+1))