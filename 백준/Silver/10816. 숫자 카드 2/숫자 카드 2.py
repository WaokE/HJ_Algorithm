import sys
input = sys.stdin.readline

N = int(input())
cards = list(map(int, input().split()))
M = int(input())
numToFind = list(map(int, input().split()))
cardDict = {}

for card in cards:
    if card in cardDict:
        cardDict[card] += 1
    else:
        cardDict[card] = 1

for num in numToFind:
    if num in cardDict:
        print(cardDict[num], end= ' ')
    else:
        print(0, end=' ')