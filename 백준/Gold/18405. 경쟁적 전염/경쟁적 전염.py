
from heapq import heappush, heappop
import sys

n, k = map(int, sys.stdin.readline().split())

tubes = list(list(map(int, sys.stdin.readline().split())) for _ in range(n))

s, x, y = map(int, sys.stdin.readline().split())

visit_pq = []


################################################################
#
#   우선순위 큐에 [시간, 바이러스 번호] 순으로 시작 지점들을 넣어준다.
#
################################################################
for row in range(n):
    for col in range(n):
        if tubes[row][col]:
            heappush(visit_pq, [0, tubes[row][col], row, col])


while visit_pq:
    now_time, now_virus, now_row, now_col = heappop(visit_pq)

    if now_row > 0 and not tubes[now_row - 1][now_col] and now_time < s:
        tubes[now_row - 1][now_col] = now_virus
        heappush(visit_pq, [now_time + 1, now_virus, now_row - 1, now_col])
    if now_col > 0 and not tubes[now_row][now_col - 1] and now_time < s:
        tubes[now_row][now_col - 1] = now_virus
        heappush(visit_pq, [now_time + 1, now_virus, now_row, now_col - 1])
    if now_row < n - 1 and not tubes[now_row + 1][now_col] and now_time < s:
        tubes[now_row + 1][now_col] = now_virus
        heappush(visit_pq, [now_time + 1, now_virus, now_row + 1, now_col])
    if now_col < n - 1 and not tubes[now_row][now_col + 1] and now_time < s:
        tubes[now_row][now_col + 1] = now_virus
        heappush(visit_pq, [now_time + 1, now_virus, now_row, now_col + 1])


print(tubes[x - 1][y - 1])
