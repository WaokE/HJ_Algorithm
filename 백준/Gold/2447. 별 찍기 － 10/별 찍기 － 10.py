N = int(input())


def makeStar(n, x, y):
    if n == 1:
        return

    for i in range(x + n//3, x + 2 * n//3):
        for j in range(y + n//3, y + 2 * n//3):
            box[i][j] = ' '

    for i in range(3):
        for j in range(3):
            makeStar(n//3, x + n//3 * i, y + n//3 * j)


box = [['*'] * N for _ in range(N)]
makeStar(N, 0, 0)

for i in box:
    print(* i, sep='')
