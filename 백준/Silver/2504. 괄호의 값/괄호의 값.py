import sys

string = sys.stdin.readline().strip()
stack = []
temp = 1
result = 0
isOk = True

for i in range(len(string)):
    if i == 0:
        if string[i] == '(':
            temp *= 2
            stack.append('(')
        elif string[i] == '[':
            temp *= 3
            stack.append('[')
        else:
            isOk = False
            break
    else:
        if string[i] == '(':
            temp *= 2
            stack.append('(')
        elif string[i] == '[':
            temp *= 3
            stack.append('[')
        elif string[i] == ')':
            if stack and stack[-1] == '(':
                if string[i-1] == '(':
                    temp = temp//2
                    result += (2*temp)
                    stack.pop()
                else:
                    temp = temp//2
                    stack.pop()
            else:
                isOk = False
                break
        elif string[i] == ']':
            if stack and stack[-1] == '[':
                if string[i-1] == '[':
                    temp = temp//3
                    result += (3*temp)
                    stack.pop()
                else:
                    temp = temp//3
                    stack.pop()
            else:
                isOk = False
                break

if isOk and len(stack) == 0:
    print(result)
else:
    print(0)