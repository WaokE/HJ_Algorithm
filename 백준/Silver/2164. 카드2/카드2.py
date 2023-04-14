import sys
from collections import deque

N = int(sys.stdin.readline())

cards = deque()
for i in range(1, N+1):
    cards.appendleft(i)

while len(cards) > 1:
    cards.pop()
    cards.appendleft(cards.pop())

print(cards[0])