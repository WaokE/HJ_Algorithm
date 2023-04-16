import sys

N, M = map(int, sys.stdin.readline().split())
trees = list(map(int, sys.stdin.readline().split()))
trees.sort()

start = 0
end = sum(trees)
while start <= end:
    mid = (start + end)//2
    sum = 0
    for tree in trees:
        if tree > mid:
            sum += (tree - mid)
    if sum < M:
        end = mid - 1
    elif sum >= M:
        start = mid + 1
        
print(end)