import sys

N, C = list(map(int, sys.stdin.readline().split()))
houses = [int(sys.stdin.readline())for _ in range(N)]
houses.sort()

start = 0
end = max(houses)
totalLength = max(houses) - min(houses)
while start <= end:
    mid = (start + end)//2
    currentLength = 0
    canPlace = 0 
    howManyPlaced = C
    for house in houses:
        if howManyPlaced > 0:
            if house >= canPlace:
                canPlace = house + mid
                howManyPlaced -= 1

    if howManyPlaced > 0:
        end = mid - 1
    else:
        start = mid + 1

print(end)    