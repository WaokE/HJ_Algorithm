import sys
input = sys.stdin.readline

n = int(input())




'''
# Bottom-Up
def fibBU(n):
    memo = [0]*(n+1)
    for i in range(1, n+1):
        if i == 0 or i == 1:
            memo[i] = i
        else:
            memo[i] = memo[i-1] + memo[i-2]
    return memo[n]

print(fibBU(n))
'''

countRecur = 0
def justRecursion(n):
    global countRecur
    if n == 2 or n == 1:
        countRecur += 1
        return 1
    else:
        return justRecursion(n-1) + justRecursion(n-2)

justRecursion(n)
print(countRecur, end =' ')

# Top-Down
TDCount = 1
memo = [0]*(n+1)
def fibTD(n, memo):
    global TDCount
    if n == 0 or n == 1:
        return n
    if memo[n] != 0:
        TDCount += 1
        return memo[n]
    else:
        memo[n] = fibTD(n-1, memo) + fibTD(n-2, memo)
        return memo[n]

fibTD(n,memo)
print(TDCount)
