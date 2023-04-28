import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

n = int(input())
memo = [0]*(n+1)
def fibTD(n, memo):
    if n == 0 or n == 1:
        return n
    if memo[n] != 0:
        return memo[n]
    else:
        memo[n] = fibTD(n-1, memo) + fibTD(n-2, memo)
        return memo[n]

print(fibTD(n, memo))