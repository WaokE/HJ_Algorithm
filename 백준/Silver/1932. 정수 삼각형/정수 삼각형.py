import sys
input = sys.stdin.readline

n = int(input())
intTri = [list(map(int, input().split()))for _ in range(n)]
dp = [[-1]*(n)for _ in range(n)]

dp[0][0] = intTri[0][0]
for i in range(1, n):
    for j in range(len(intTri[i])):
        if j == 0: 
            dp[i][j] = dp[i-1][j] + intTri[i][j]
        elif j == len(intTri[i])-1: 
            dp[i][j] = dp[i-1][j-1] + intTri[i][j]
        else: 
            dp[i][j] = max(dp[i-1][j], dp[i-1][j-1]) + intTri[i][j]

print(max(dp[-1]))