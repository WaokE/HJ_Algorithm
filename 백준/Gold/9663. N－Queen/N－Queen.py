import sys

n = int(sys.stdin.readline())

ans = 0
row = [0] * n

def isOk(x):
    for i in range(x):
        if row[x] == row[i] or abs(row[x] - row[i]) == abs(x - i):
            return False
    
    return True

def nqueen(x):
    global ans
    if x == n:
        ans += 1
        return

    else:
        for i in range(n):
            # [x, i]에 퀸을 놓겠다.
            row[x] = i
            if isOk(x):
                nqueen(x+1)

nqueen(0)
print(ans)