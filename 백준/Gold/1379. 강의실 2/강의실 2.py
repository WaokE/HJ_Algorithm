import heapq
import sys
input = sys.stdin.readline

N = int(input())
instructions = [list(map(int, input().split()))for _ in range(N)]
memorooms = [-1]*(N+1)
endTime = []

for i in range(len(instructions)):
    instructions[i] = [ instructions[i][1], instructions[i][2] - instructions[i][1], instructions[i][0]]
heapq.heapify(instructions)

maxroom = 1
while instructions:
    current = heapq.heappop(instructions)
    if endTime:
        if endTime[0][0] <= current[0]:
            memorooms[current[2]] = heapq.heappop(endTime)[1]
            heapq.heappush(endTime, [current[0]+current[1], memorooms[current[2]]])
        else:
            maxroom += 1
            memorooms[current[2]] = maxroom
            heapq.heappush(endTime, [current[0]+current[1], maxroom])

    else:
        memorooms[current[2]] = 1
        heapq.heappush(endTime, [current[0]+current[1], 1])


print(maxroom)
for i in range(1, N+1):
    print(memorooms[i])