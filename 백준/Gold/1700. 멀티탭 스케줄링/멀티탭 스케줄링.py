import sys
from collections import deque
input = sys.stdin.readline

N, K = list(map(int, input().split()))
elec = list(map(int, input().split()))

electronics = deque(elec)
multitab = []
unplugCount = 0

while len(multitab) < N:
    temp1 = electronics.popleft()
    if temp1 not in multitab:
        multitab.append(temp1)

while electronics:
    if electronics[0] in multitab:
        electronics.popleft()
        continue
    else:
        temp = []
        isOk = True
        for electronic in multitab:
            if electronic not in electronics:
                multitab.remove(electronic)
                multitab.append(electronics.popleft())                
                unplugCount += 1
                isOk = False
                break
            else:
                temp.append((electronic, electronics.index(electronic)))
                
        if isOk == True:
            multitab.remove(max(temp, key = lambda x : x[1])[0])
            multitab.append(electronics.popleft())
            unplugCount += 1

print(unplugCount)