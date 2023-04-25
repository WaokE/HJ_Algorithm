from collections import deque
import sys
input = sys.stdin.readline

def findTomato(garage):
    tomatos = []
    for z in range(len(garage)):
        for x in range(len(garage[z])):
            for y in range(len(garage[z][x])):
                if garage[z][x][y] == 1:
                    tomatos.append((z, x, y))
                if garage[z][x][y] == -1:
                    garage[z][x][y] = True
    return tomatos

def checkEffectAble(tomato):
    z, x, y = tomato
    return [not (x-1<0 or garage[z][x-1][y] != 0), not (x+1>N-1 or garage[z][x+1][y] != 0), not (y-1<0 or garage[z][x][y-1] != 0), not (y+1>M-1 or garage[z][x][y+1] != 0), not (z-1<0 or garage[z-1][x][y] != 0), not (z+1>H-1 or garage[z+1][x][y] != 0)]

def checkAllRipe():
    for z in range(len(garage)):
        for x in range(len(garage[z])):
            for y in range(len(garage[z][x])):
                if garage[z][x][y] == 0:
                    return False
    return True

M, N, H = list(map(int,input().split()))
garage = [[list(map(int, input().split())) for _ in range(N)]for _ in range(H)]

ripeQueue = deque()
for tomato in findTomato(garage):
    ripeQueue.append((tomato,0))

while ripeQueue:
    tomato, day = ripeQueue.popleft()
    z, x, y = tomato
    moveAble = checkEffectAble(tomato)
    if moveAble[0] and garage[z][x-1][y] == 0:
        garage[z][x-1][y] = 1
        ripeQueue.append(((z,x-1,y), day+1))
    if moveAble[1] and garage[z][x+1][y] == 0:
        garage[z][x+1][y] = 1
        ripeQueue.append(((z,x+1,y), day+1))
    if moveAble[2] and garage[z][x][y-1] == 0:
        garage[z][x][y-1] = 1
        ripeQueue.append(((z,x,y-1), day+1))
    if moveAble[3] and garage[z][x][y+1] == 0:
        garage[z][x][y+1] = 1
        ripeQueue.append(((z,x,y+1), day+1))
    if moveAble[4] and garage[z-1][x][y] == 0:
        garage[z-1][x][y] = 1
        ripeQueue.append(((z-1,x,y), day+1))
    if moveAble[5] and garage[z+1][x][y] == 0:
        garage[z+1][x][y] = 1
        ripeQueue.append(((z+1,x,y), day+1))

# Check if all tomatoes are ripe
if checkAllRipe():
    print(day)
else:
    print(-1)
