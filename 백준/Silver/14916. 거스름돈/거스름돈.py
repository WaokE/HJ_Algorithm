import sys
input = sys.stdin.readline

n = int(input())

memo = [0]*(100001)
memo[1] = -1
memo[2] = 1
memo[3] = -1
for i in range(4, n+1):
    if i%5 == 0:
        memo[i] = i//5
    else:
        memo[i] = memo[i-2] + 1

print(memo[n])