import sys

snail = list(map(int, sys.stdin.readline().split()))
onDay = snail[0]
onNight = snail[1]
stickHeight = snail[2]

heightPerDay = onDay - onNight
tempHeight = stickHeight - onDay
tempDay = 0

if tempHeight % heightPerDay != 0:
    tempDay= (tempHeight//heightPerDay + 1)
else:
    tempDay = (tempHeight//heightPerDay)

print(tempDay + 1)