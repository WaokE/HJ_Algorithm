from collections import deque
import sys
input = sys.stdin.readline

N, K = list(map(int, input().split()))

q = deque()
q.append((N, 0))
unVisited = [True]*200001
while q:
    current, sec = q.popleft()
    unVisited[current] = False
    if current == K:
        print(sec)
        break
    if 0 <= current < K:
            if unVisited[current-1]: q.append((current-1,sec+1))
            if unVisited[current+1]: q.append((current+1,sec+1))
            if unVisited[current*2]: q.append((current*2,sec+1))

    else:
        if unVisited[current-1]: q.append((current-1,sec+1))