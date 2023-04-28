import sys
input = sys.stdin.readline

n = int(input())

def fibBU(n):
    memo = [0]*(n+1)
    for i in range(1, n+1):
        if i == 0 or i == 1:
            memo[i] = i
        else:
            memo[i] = memo[i-1] + memo[i-2]
    return memo[n]

print(fibBU(n))
