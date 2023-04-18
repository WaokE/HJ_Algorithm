import sys
input = sys.stdin.readline

queue = []
N = int(input())
for _ in range(N):
    command = input().strip()
    if 'push' in command:
        queue.append(int(command[5:]))
    elif 'pop' in command:
        if queue:
            print(queue[0])
            queue = queue[1:]
        else:
            print(-1)
    elif 'size' in command:
        print(len(queue))
    elif 'empty' in command:
        if queue:
            print(0)
        else:
            print(1)
    elif 'front' in command:
        if queue:
            print(queue[0])
        else:
            print(-1)
    elif 'back' in command:
        if queue:
            print(queue[-1])
        else:
            print(-1)