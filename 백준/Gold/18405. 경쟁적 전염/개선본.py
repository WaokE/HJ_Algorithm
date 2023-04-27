from collections import deque
import heapq
import sys
input = sys.stdin.readline

N, K = list(map(int, input().split()))
flask = [list(map(int, input().split()))for _ in range(N)]
S, X, Y = list(map(int, input().split()))



virusQ = []
for i in range(N):
    for j in range(N):
        if flask[i][j]:
            heapq.heappush(virusQ, (0,flask[i][j],i,j))

dx = [-1,1,0,0]
dy = [0,0,-1,1]

while virusQ:
    sec, virusNum, x, y = heapq.heappop(virusQ)
    for i in range(4):
        xx = x + dx[i]
        yy = y + dy[i]
        if 0<=xx<=N-1 and 0<=yy<=N-1 and flask[xx][yy] == 0 and sec<S:
            flask[xx][yy] = virusNum
            heapq.heappush(virusQ, (sec+1,virusNum,xx,yy))


print(flask[X-1][Y-1])
