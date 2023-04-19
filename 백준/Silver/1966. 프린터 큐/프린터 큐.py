import sys
from collections import deque
input = sys.stdin.readline

T = int(input())
for _ in range(T):
    N, M = list(map(int, input().split()))
    inputs = list(map(int, input().split()))
    priority = deque()
    printCount = 0

    # 순서 찾을 문서 마킹
    for i in range(len(inputs)):
        if i == M:
            priority.append([inputs[i], 1])
        else:
            priority.append([inputs[i], 0])
    while priority:
        # 중요도가 더 높은 문서가 있다면 순서 미루기    
        if priority[0][0] != max(priority)[0]:
            priority.append(priority.popleft())
        # 아니라면 인쇄
        else:
            printCount += 1
            if priority.popleft()[1] == 1:
                print(printCount)