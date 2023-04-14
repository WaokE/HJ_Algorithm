import sys

N = int(sys.stdin.readline())
sticks = [int(sys.stdin.readline())for _ in range(N)]

stack = [sticks[-1]]
for i in range(len(sticks)-1, -1, -1):
    if sticks[i] > stack[-1]:
        stack.append(sticks[i])

print(len(stack))