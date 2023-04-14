import sys

N = int(sys.stdin.readline())
stack = []

for i in range(N):
    command = sys.stdin.readline().strip()
    
    if 'push' in command:
        stack.append(int(command[5:]))
    
    elif command == 'pop':
        if stack:
            num = stack[-1]
            del stack[-1]
            print(num)
        else:
            print(-1)
    
    elif command == 'size':
        print(len(stack))
    
    elif command == 'empty':
        if stack:
            print(0)
        else:
            print(1)
    
    elif command == 'top':
        if stack:
            print(stack[-1])
        else:
            print(-1)