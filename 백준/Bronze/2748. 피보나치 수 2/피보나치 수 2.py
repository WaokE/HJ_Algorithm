import sys
input = sys.stdin.readline

n = int(input())

# Top-Down
memo = [0]*(n+1)
def fib(n, memo):
    if n == 0 or n == 1:
        return n
    if memo[n] != 0:
        return memo[n]
    else:
        memo[n] = fib(n-1, memo) + fib(n-2, memo)
        return memo[n]

print(fib(n, memo))