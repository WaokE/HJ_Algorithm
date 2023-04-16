import sys

N = int(sys.stdin.readline())
Ns = list(map(int, sys.stdin.readline().split()))
M = int(sys.stdin.readline())
Ms = list(map(int, sys.stdin.readline().split()))


Ns.sort()
result = []
for num in Ms:
    start = 0
    end = len(Ns) - 1
    while True:
        if start > end:
            result.append(0)
            break
        middle = (start + end)//2
        if num == Ns[middle]:
            result.append(1)
            break
        elif num < Ns[middle]:
            end = middle - 1
        elif num > Ns[middle]:
            start = middle + 1

for i in result: print(i)