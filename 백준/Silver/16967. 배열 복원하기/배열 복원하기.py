H, W, X, Y = list(map(int, input().split()))
B = [list(map(int, input().split()))for _ in range(H+X)]

ans = []

for i in range(H):
    ans.append(B[i][:W])

for i in range(H):
    for j in range(W):
        if i+X < H and j+Y < W:
            ans[i+X][j+Y] -= ans[i][j]

for i in ans: print(*i)