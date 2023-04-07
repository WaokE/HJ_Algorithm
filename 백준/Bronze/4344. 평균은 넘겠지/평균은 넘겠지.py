import sys
caseNumb = int(sys.stdin.readline())
inputs = [list(map(int, sys.stdin.readline().split())) for _ in range(caseNumb)]

for case in inputs:
    studentNumb = case[0]
    avr = 0
    for i in range(1, studentNumb+1):
        avr = avr + case[i]
    avr = avr/studentNumb
    overAvrCount = 0
    for i in range(studentNumb):
        if case[i+1]>avr:
            overAvrCount = overAvrCount + 1
    print("{:.3f}".format(overAvrCount/studentNumb*100)+"%")
