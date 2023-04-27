
import sys
input = sys.stdin.readline

N, M = list(map(int, input().split()))
floor = [list(input().strip()) for _ in range(N)]

def checkFloor(x,y):
    if floor[x][y] == '-':
        floor[x][y] = 1	    
        for _y in [1,-1]:   
            Y = y + _y
            if (Y > 0 and Y < M) and floor[x][Y] == '-':
                checkFloor(x,Y)
    if floor[x][y] == '|':
        floor[x][y] = 1	   
        for _x in [1,-1]:   
            X = x + _x  
            if (X > 0 and X < N) and floor[X][y] == '|':
                checkFloor(X,y)
 
plankCount = 0
for i in range(N):
    for j in range(M):
        if floor[i][j] == '-' or floor[i][j] == '|':
            checkFloor(i,j) 
            plankCount += 1
 
print(plankCount)
