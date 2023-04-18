import sys
import heapq

N = int(sys.stdin.readline())

minHeap = []
maxHeap = []

def checkHeapDifer(min, max):
    if len(max) - len(min) == 0 or len(max) - len(min) == 1:
        pass
    else:
        if len(max) > len(min):
            # 요기 음수 처리 안해서 틀렸었음... 개어이없네
            heapq.heappush(min, -heapq.heappop(max))
        elif len(max) < len(min):
            heapq.heappush(max, -heapq.heappop(min))

        


for i in range(N):
    num = int(sys.stdin.readline())
    if i == 0:
        heapq.heappush(maxHeap, -num)
        print(num)
    else:
        if -maxHeap[0] == num:
            heapq.heappush(maxHeap, -num)
            checkHeapDifer(minHeap, maxHeap)
            print(num)
        elif -maxHeap[0] < num:
            heapq.heappush(minHeap, num)
            checkHeapDifer(minHeap, maxHeap)
            print(-maxHeap[0])
        elif -maxHeap[0] > num:
            heapq.heappush(maxHeap, -num)
            checkHeapDifer(minHeap, maxHeap)
            print(-maxHeap[0])
