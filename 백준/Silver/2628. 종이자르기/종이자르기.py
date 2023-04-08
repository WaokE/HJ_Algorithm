import sys

width, height = map(int, sys.stdin.readline().split())
cutCount = int(sys.stdin.readline())
cutData = [list(map(int, sys.stdin.readline().split())) for _ in range(cutCount)]
paper = [width, height]

horPoints = []
verPoints = []
for line in cutData:
    if line[0] == 0:
        horPoints.append(line[1])
    elif line[0] == 1:
        verPoints.append(line[1])
horPoints.sort()
verPoints.sort()

hor = []
if horPoints:
    hor.append(horPoints[0])
    for i in range(len(horPoints)-1):
        hor.append(abs(horPoints[i] - horPoints[i+1]))    
    hor.append(paper[1] - horPoints[-1])
else:
    hor.append(paper[1])

ver = []
if verPoints:
    ver.append(verPoints[0])
    for i in range(len(verPoints)-1):
        ver.append(abs(verPoints[i] - verPoints[i+1]))
    ver.append(paper[0] - verPoints[-1])
else:
    ver.append(paper[0])

print(max(hor) * max(ver))