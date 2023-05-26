from collections import deque
import sys
input = sys.stdin.readline

A, B = list(map(int, input().split()))
N, M = list(map(int, input().split()))
robots = [input().split()for _ in range(N)]
commands = [input().split()for _ in range(M)]
robotStatus = []

def checkCrash (robotNum):
    x = robotStatus[robotNum][0]
    y = robotStatus[robotNum][1]
    if x < 1 or A < x or y < 1 or B < y:
        print(f'Robot {robotNum} crashes into the wall')
        exit()
    for i in range(len(robotStatus)):
        if i == robotNum: continue
        if robotStatus[i][0] == x and robotStatus[i][1] == y:
            print(f'Robot {robotNum} crashes into robot {i}')
            exit()




for i in range(len(robots)):
    x, y, dir = robots[i]
    x = int(x)
    y = int(y)
    robotStatus.append([x, y, dir])
robotStatus.insert(0, [-1, -1, -1])

for command in commands:
    robotNum, command, repeat = command
    robotNum = int(robotNum)
    repeat = int(repeat)
    if command == 'L':
        temp = repeat%4
        for _ in range(temp):
            if robotStatus[robotNum][2] == 'E': robotStatus[robotNum][2] = 'N'
            elif robotStatus[robotNum][2] == 'W': robotStatus[robotNum][2] = 'S'
            elif robotStatus[robotNum][2] == 'S': robotStatus[robotNum][2] = 'E'
            else: robotStatus[robotNum][2] = 'W'
    if command == 'R':
        temp = repeat%4
        for _ in range(temp):
            if robotStatus[robotNum][2] == 'E': robotStatus[robotNum][2] = 'S'
            elif robotStatus[robotNum][2] == 'W': robotStatus[robotNum][2] = 'N'
            elif robotStatus[robotNum][2] == 'S': robotStatus[robotNum][2] = 'W'
            else: robotStatus[robotNum][2] = 'E'
    if command == 'F':
        for _ in range(repeat):
            if robotStatus[robotNum][2] == 'E':
                robotStatus[robotNum][0] += 1
                checkCrash(robotNum)
            elif robotStatus[robotNum][2] == 'W':
                robotStatus[robotNum][0] += -1
                checkCrash(robotNum)
            elif robotStatus[robotNum][2] == 'S':
                robotStatus[robotNum][1] += -1
                checkCrash(robotNum)
            else: 
                robotStatus[robotNum][1] += 1
                checkCrash(robotNum)

print('OK')