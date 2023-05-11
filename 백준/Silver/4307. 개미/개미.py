import sys
input = sys.stdin.readline

testCount = int(input())
for _ in range(testCount):
    stick, ant = list(map(int, input().split()))
    ants = [int(input())for _ in range(ant)]
    middleOfStick = stick/2
    ants.sort()

    differFromMid = list(map(lambda x: abs(middleOfStick- x), ants))
    print(int(middleOfStick - min(differFromMid)), end = ' ')
    if stick - ants[0] > ants[-1]: print(stick - ants[0])
    else: print(ants[-1])