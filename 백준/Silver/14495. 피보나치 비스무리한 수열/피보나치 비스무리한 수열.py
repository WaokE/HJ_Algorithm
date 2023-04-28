import sys
input = sys.stdin.readline

n = int(input())

# Bottom-Top
memo = [0]*(n+3)
for i in range(1, 4): memo[i] = 1
for i in range(4, n+1):
    memo[i] = memo[i-3] + memo[i-1]

print(memo[n])