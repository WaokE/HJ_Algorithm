while True:
    string = input()
    if string == '.':
        break
    
    stack = []

    for i in range(len(string)):
        if string[i] == '(' or string[i] == '[':
            stack.append(string[i])
        if string[i] == ')' or string[i] == ']':
            if string[i] == ')':
                if stack:
                    if stack[-1] == '(':
                        stack.pop()
                    else:
                        print('no')
                        break
                else:
                    print('no')
                    break
            if string[i] == ']':
                if stack:
                    if stack[-1] == '[':
                        stack.pop()
                    else:
                        print('no')
                        break
                else:
                    print('no')
                    break
        if i == len(string) - 1:
            if stack:
                print('no')
                break
            else:
                print('yes')
                break