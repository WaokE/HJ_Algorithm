import sys
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    k = int(input())
    n = int(input())
    buildng = []
    for i in range(k+1):
        if i != 0:
            floor = []
            for j in range(n):
                floor.append(sum(buildng[-1][0:j+1]))
            buildng.append(floor)
        else:
            firstfloor = []
            for j in range(1, n + 1):
                firstfloor.append(j)
            buildng.append(firstfloor)
    
    print(buildng[k][n-1])