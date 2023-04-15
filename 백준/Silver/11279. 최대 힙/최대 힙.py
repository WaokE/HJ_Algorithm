import sys


N = int(sys.stdin.readline())
heap = []

def heapAdd(value):
    global heap
    heap.append(value)
    elem = len(heap)-1
    while True:
        if elem == 0:
            break
        try:
            if heap[elem] >= heap[(elem-1)//2]:
                heap[elem], heap[(elem-1)//2] = heap[(elem-1)//2], heap[elem]
                elem = (elem-1)//2
            else:
                break
        except:
            break
def heapDelete():
    global heap
    if len(heap) == 0:
        return 0
    root = heap[0]
    heap[0] = heap[-1]
    heap.pop()
    elem = 0
    while True:
        left = 2 * elem + 1
        right = 2 * elem + 2
        largest = elem
        if left < len(heap) and heap[left] > heap[largest]:
            largest = left
        if right < len(heap) and heap[right] > heap[largest]:
            largest = right
        if largest == elem:
            break
        heap[elem], heap[largest] = heap[largest], heap[elem]
        elem = largest
    return root


result = []
for _ in range(N):
    command = int(sys.stdin.readline())
    if command == 0:
        print(heapDelete())
    else:
        heapAdd(command)


            
            