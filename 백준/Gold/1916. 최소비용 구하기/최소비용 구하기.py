# 다익스트라 최적 틀 알아두자
import heapq
import sys
input = sys.stdin.readline

N = int(input())
M = int(input())
inputs = [list(map(int, input().split()))for _ in range(M)]
start, end = list(map(int, input().split()))
buses = [[]for _ in range(N+1)]
for bus in inputs:
    heapq.heappush(buses[bus[0]],((bus[2], bus[1])))

visitList = []
costs = [float('inf')]*(N+1)
costs[start] = 0
heapq.heappush(visitList, (costs[start], start))

while visitList:
    cost, position = heapq.heappop(visitList)

    if cost > costs[position]:
        continue

    for bus in buses[position]:
        if costs[bus[1]] > cost + bus[0]:
            costs[bus[1]] = cost + bus[0]
            heapq.heappush(visitList, (costs[bus[1]], bus[1]))

print(costs[end])