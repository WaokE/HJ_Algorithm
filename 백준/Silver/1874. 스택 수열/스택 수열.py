import sys
input = sys.stdin.readline

N = int(input())

stack = []
result = []
total = 1

for i in range(N):
    scope = int(input())
    while total <= scope:
        stack.append(total)
        result.append('+')
        total += 1
    if stack[-1] == scope:
        stack.pop()
        result.append('-')
    else:
        print('NO')
        exit(0)

for i in result:
    print(i)