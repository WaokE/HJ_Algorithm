import sys
from collections import deque

N = int(sys.stdin.readline())
queue = deque()

for _ in range(N):
    command = sys.stdin.readline().strip()
    if 'push' in command:
        queue.appendleft(int(command[5:]))
    elif command == 'pop':
        if queue:
            print(queue.pop())
        else:
            print(-1)
    elif command == 'size':
        print(len(queue))
    elif command == 'empty':
        if queue:
            print(0)
        else:
            print(1)
    elif command == 'front':
        if queue:
            print(queue[-1])
        else:
            print(-1)
    elif command == 'back':
        if queue:
            print(queue[0])
        else:
            print(-1)