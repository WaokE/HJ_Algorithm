import sys
input = sys.stdin.readline

N, M = list(map(int, input().split()))
inputs = [list(map(int, input().split()))for _ in range(M)]
heavierMarbles = [[]for _ in range(N+1)]
lighterMarbles = [[]for _ in range(N+1)]
for input in inputs:
    lighterMarbles[input[0]].append(input[1])
    heavierMarbles[input[1]].append(input[0])

result = []
for marble in range(1, N+1):
    isOk = True
    mid = (N+1)//2 
    count = 0
    lighterStack = []
    visited = [False] * (N+1)
    lighterStack.append(marble)
    while lighterStack:
        currentMarble = lighterStack.pop()
        count += 1
        if count > mid:
            isOk = False
            break 
        visited[currentMarble] = True
        for nextMarble in lighterMarbles[currentMarble]:
            if visited[nextMarble] == False and nextMarble not in lighterStack:
                lighterStack.append(nextMarble)
    
    if not isOk:
        result.append(marble)
        continue

    count = 0
    heavierStack = []
    visited = [False] * (N+1)
    heavierStack.append(marble)
    while heavierStack:
        currentMarble = heavierStack.pop()
        count += 1
        if count > mid:
            isOk = False
            break 
        visited[currentMarble] = True
        for nextMarble in heavierMarbles[currentMarble]:
            if visited[nextMarble] == False and nextMarble not in heavierStack:
                heavierStack.append(nextMarble)

    if not isOk:
        result.append(marble)
        continue

print(len(result))