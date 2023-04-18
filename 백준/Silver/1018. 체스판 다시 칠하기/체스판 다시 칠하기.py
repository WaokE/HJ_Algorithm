import sys
input = sys.stdin.readline
N, M = list(map(int, input().split()))
board = [input()for _ in range(N)]
result = []

def checkCase(case):
    count = 0
    for i in range(8):
        for j in range(8):
            if i%2 == 0:
                if j%2 == 0:
                    if case[i][j] == 'W':
                        count += 1
                else:
                    if case[i][j] == 'B':
                        count += 1
            else:
                if j%2 == 0:
                    if case[i][j] == 'B':
                        count += 1
                else:
                    if case[i][j] == 'W':
                        count += 1
    return min([count, 64-count])

                


for i in range(N - 7):
    for j in range(M - 7):
        case = board[i:i+8]
        for k in range(8):
            case[k] = case[k][j:j+8]
        result.append(checkCase(case))

print(min(result))