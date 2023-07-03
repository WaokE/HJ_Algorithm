from collections import deque
import sys
input = sys.stdin.readline

N, M = list(map(int, input().split()))
soldiers = [input().strip() for _ in range(M)]
checked = [[False]*N for _ in range (M)]

def check_alies(x, y, color):
    power = 0
    check_q = deque()
    check_q.append((x, y))

    while check_q:
        x, y = check_q.popleft()
        checked[x][y] = True
        power += 1
        for i in range(4):
            new_x = x + dx[i]
            new_y = y + dy[i]
            if 0 <= new_x < M and 0 <= new_y < N and not checked[new_x][new_y] and soldiers[new_x][new_y] == color and (new_x, new_y) not in check_q:
                check_q.append((new_x, new_y))
    return (power ** 2)
        
        
white_power = 0
blue_power = 0
for i in range(M):
    for j in range(N):
        if not checked[i][j]:
            dx = [0, 0, -1 ,1]
            dy = [-1, 1, 0, 0]
            
            color = soldiers[i][j]
            if color == 'W': white_power += check_alies(i, j, color)
            if color == 'B': blue_power += check_alies(i, j, color)

print(white_power, blue_power)
            