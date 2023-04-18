import sys
import heapq

N = int(sys.stdin.readline())

minHeap = []
maxHeap = []

for i in range(N):
    num = int(sys.stdin.readline())
    if i == 0:
        heapq.heappush(maxHeap, -num)
        print(num)
    else:
        if -maxHeap[0] == num:
            heapq.heappush(maxHeap, -num)
            if len(maxHeap) > len(minHeap) + 1:
                heapq.heappush(minHeap, -heapq.heappop(maxHeap))
            print(num)
        elif -maxHeap[0] < num:
            heapq.heappush(minHeap, num)
            if len(minHeap) > len(maxHeap):
                heapq.heappush(maxHeap, -heapq.heappop(minHeap))
            print(-maxHeap[0])
        elif -maxHeap[0] > num:
            heapq.heappush(maxHeap, -num)
            if len(maxHeap) > len(minHeap) + 1:
                heapq.heappush(minHeap, -heapq.heappop(maxHeap))
            print(-maxHeap[0])