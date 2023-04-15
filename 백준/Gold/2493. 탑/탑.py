import sys

N = int(sys.stdin.readline())
towers = list(map(int, sys.stdin.readline().split()))
stack = []
result = []

for i in range(N):
    while stack:
        if stack[-1][1] > towers[i]:
            result.append(stack[-1][0] + 1)
            break
        else:
            stack.pop()
    if stack == []:
        result.append(0)
    stack.append([i, towers[i]])
for i in range(len(result)):print(result[i], end=' ')