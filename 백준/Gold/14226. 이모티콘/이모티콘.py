from collections import deque
import sys
input = sys.stdin.readline

S = int(input())
bfsq = deque()
bfsq.append((1, 0, 0))
visited = [[-1] * 1001 for _ in range(1001)]


while bfsq:
    screen, clipboard, sec = bfsq.popleft()
    if screen == S:
        print(sec)
        break
    if screen > S:
        continue
    if visited[screen][clipboard] != -1:
        continue
    visited[screen][clipboard] = sec

    if screen != clipboard:
        bfsq.append((screen, screen, sec+1))
    if clipboard != 0:
        bfsq.append((screen+clipboard, clipboard, sec+1))
    if screen > 0:
        bfsq.append((screen-1, clipboard, sec+1))
