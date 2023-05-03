import sys
from collections import deque
input = sys.stdin.readline

N, K = list(map(int, input().split()))
items = [list(map(int,input().split()))for _ in range(N)]
items.insert(0,[0,0])
dp = [[0]*100001 for _ in range(N+1)]

for i in range(1, len(items)):
    for j in range(1, 100001):
        if j >= items[i][0]:
            dp[i][j] = max(dp[i-1][j], dp[i-1][j-items[i][0]]+items[i][1])
        else:
            dp[i][j] = dp[i-1][j]


print(dp[N][K]) 