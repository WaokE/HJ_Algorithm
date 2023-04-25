from collections import deque
import sys
input = sys.stdin.readline

def findTomato(garage):
    tomatos = []
    for x in range(len(garage)):
        for y in range(len(garage[x])):
            if garage[x][y] == 1:
                tomatos.append((x, y))
    return tomatos

def checkEffectAble(tomato):
    x, y = tomato
    return [not (x-1<0 or garage[x-1][y] != 0), not (x+1>N-1 or garage[x+1][y] != 0), not (y-1<0 or garage[x][y-1] != 0), not (y+1>M-1 or garage[x][y+1] != 0)]

def checkAllEffected():
    for x in range(N):
        for y in range(M):
            if garage[x][y] == 0:
                return False
    return True

M, N = list(map(int,input().split()))
garage = [list(map(int, input().split())) for _ in range(N)]

effectQueue = deque()
for tomato in findTomato(garage):
    effectQueue.append((tomato,0))

while effectQueue:
    tomato, day = effectQueue.popleft()
    x, y = tomato
    moveAble = checkEffectAble(tomato)
    if moveAble[0] and garage[x-1][y] == 0:
        garage[x-1][y] = 1
        effectQueue.append(((x-1,y), day+1))
    if moveAble[1] and garage[x+1][y] == 0:
        garage[x+1][y] = 1
        effectQueue.append(((x+1,y), day+1))
    if moveAble[2] and garage[x][y-1] == 0:
        garage[x][y-1] = 1
        effectQueue.append(((x,y-1), day+1))
    if moveAble[3] and garage[x][y+1] == 0:
        garage[x][y+1] = 1
        effectQueue.append(((x,y+1), day+1))

if checkAllEffected():
    print(day)
else:
    print(-1)