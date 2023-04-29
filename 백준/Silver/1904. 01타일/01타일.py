import sys
input = sys.stdin.readline

N = int(input())

memo = [0]*(N+2)
memo[1] = 1
memo[2] = 2
for i in range(3, N+1):
    new = memo[i-1] + memo[i-2]
    if new >= 15746:
        memo[i] = new%15746
    else:
        memo[i] = new

print(memo[N])