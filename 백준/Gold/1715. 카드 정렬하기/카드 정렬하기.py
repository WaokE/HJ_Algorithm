import sys
import heapq

N = int(sys.stdin.readline())
cards = [int(sys.stdin.readline())for _ in range(N)]
cards.sort()
result = []

while len(cards) > 1:
    first = heapq.heappop(cards)
    second = heapq.heappop(cards)
    newDeck = first + second
    result.append(newDeck)
    heapq.heappush(cards, newDeck)

print(sum(result))