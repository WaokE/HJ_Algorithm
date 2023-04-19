import sys
input = sys.stdin.readline

N = int(input())
points = [list(map(int, input().split()))for _ in range(N)]

points.sort(key = lambda x: x[0])
points.sort(key = lambda x: x[1])

for point in points:
    print(point[0], end =' ')
    print(point[1])