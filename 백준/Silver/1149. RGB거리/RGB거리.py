import sys
input = sys.stdin.readline

N = int(input())
prices = [list(map(int, input().split()))for _ in range(N)]
dp = [[-1]*3 for _ in range(N)]

dp[0][0] = prices[0][0]
dp[0][1] = prices[0][1]
dp[0][2] = prices[0][2]
for i in range(1, N):
    dp[i][0] = min(dp[i-1][1], dp[i-1][2]) + prices[i][0]
    dp[i][1] = min(dp[i-1][0], dp[i-1][2]) + prices[i][1]
    dp[i][2] = min(dp[i-1][1], dp[i-1][0]) + prices[i][2]

print(min(dp[-1]))
