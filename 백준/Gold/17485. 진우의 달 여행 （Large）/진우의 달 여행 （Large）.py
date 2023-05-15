N, M = list(map(int, input().split()))
fuelToMove = [list(map(int, input().split()))for _ in range(N)]
fuelToMove.append([0]*M)

dp = [[[0]*3 for _ in range(M)]for _ in range(N)]

for i in range(N):
    for j in range(M):
        if j-1 < 0:
            dp[i][j][0] = dp[i-1][j][1]+fuelToMove[i][j]
            dp[i][j][1] = dp[i-1][j+1][0]+fuelToMove[i][j]
            dp[i][j][2] = min(dp[i-1][j][1]+fuelToMove[i][j], dp[i-1][j+1][0]+fuelToMove[i][j])
        elif j+1 > M-1:
            dp[i][j][0] = min(dp[i-1][j-1][2]+fuelToMove[i][j], dp[i-1][j][1]+fuelToMove[i][j])
            dp[i][j][1] = dp[i-1][j-1][2]+fuelToMove[i][j]
            dp[i][j][2] = dp[i-1][j][1]+fuelToMove[i][j]
        else:
            dp[i][j][0] = min(dp[i-1][j-1][2]+fuelToMove[i][j], dp[i-1][j][1]+fuelToMove[i][j])
            dp[i][j][1] = min(dp[i-1][j-1][2]+fuelToMove[i][j], dp[i-1][j+1][0]+fuelToMove[i][j])
            dp[i][j][2] = min(dp[i-1][j][1]+fuelToMove[i][j], dp[i-1][j+1][0]+fuelToMove[i][j])

print(min(map(min, dp[-1])))