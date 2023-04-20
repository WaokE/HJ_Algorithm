import sys
input = sys.stdin.readline

PPAP = input().strip()
stack = []
temp = True
isOk = True

for i in range(len(PPAP)):
    if temp == False:
        temp = True
    elif PPAP[i:i+2] == 'AP':
        if stack[-2:] == ['P','P']:
            stack.pop()
            stack.pop()
            stack.append('P')
        else:
            isOk = False
        temp = False
    else:
        if temp == True:
            stack.append(PPAP[i])

if isOk == True and stack == ['P']:
    print('PPAP')
else:
    print('NP')