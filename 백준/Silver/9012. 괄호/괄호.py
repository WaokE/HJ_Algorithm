import sys

T = int(sys.stdin.readline())

for _ in range(T):
    string = sys.stdin.readline().strip()
    stack = []
    
    for par in string:
        if par == '(':
            stack.append('(')            
        elif par == ')':
            if stack:
                if stack[-1] == '(':
                    stack.pop()
            else:
                stack.append(')')
         
    if stack:
        print("NO")
    else:
        print("YES")