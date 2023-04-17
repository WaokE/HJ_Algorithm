import sys
input = sys.stdin.readline

N, K = map(int, input().split())
num = list(input().strip())
stack = []
popCount = 0

for i in range(len(num)):
    while stack and int(stack[-1]) < int(num[i]) and popCount < K:
        stack.pop()
        popCount += 1
    stack.append(num[i])

while popCount < K:
    stack.pop()
    popCount += 1

print(''.join(stack))    