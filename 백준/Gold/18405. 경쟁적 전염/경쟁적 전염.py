from collections import deque
import heapq
import sys
input = sys.stdin.readline

N, K = list(map(int, input().split()))
flask = [list(map(int, input().split()))for _ in range(N)]
S, X, Y = list(map(int, input().split()))

def effectVirus(virusNum, x, y):
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    for i in range(4):
        if N-1 < x+dx[i] or x+dx[i] < 0 or N-1 < y+dy[i] or y+dy[i] < 0:
            continue
        if flask[x+dx[i]][y+dy[i]] == 0:
            flask[x+dx[i]][y+dy[i]] = virusNum

def checkVirus():
    result = []
    for i in range(N):
        for j in range(N):
            if flask[i][j] != 0:
                result.append((flask[i][j], i, j))
    return result

second = 0
while second < S:
    viruses = checkVirus()
    if len(viruses) == N**2:
        break
    heapq.heapify(viruses)
    while viruses:
        virusnum, x, y = heapq.heappop(viruses)
        effectVirus(virusnum, x, y)
    second += 1

print(flask[X-1][Y-1])
