import sys
input = sys.stdin.readline

N = int(input())

memo = [0]*(N+2)
memo[1] = 1
memo[2] = 1
for i in range(3,N+1):
    memo[i] = memo[i-1]+memo[i-2]

print((memo[N]*2)+((memo[N]+memo[N-1])*2))
