import sys
input = sys.stdin.readline

N = int(input())
paper = [list(map(int, input().split()))for _ in range(N)]
blueCount = 0
whiteCount = 0

def findBlue(paper):
    global blueCount
    global whiteCount
    isBlue = True
    isWhite = True
    for line in paper:
        if isBlue == False and isWhite == False:
            break
        if 0 in line:
            isBlue = False
        if 1 in line:
            isWhite = False
    if isBlue == True:
        blueCount += 1
        return
    elif isWhite == True:
        whiteCount += 1
        return
    else:
        one = []
        two = []
        three = []
        four = []
        for i in range(len(paper)):
            if i < len(paper)//2:
                one.append(paper[i][:len(paper)//2])
                two.append(paper[i][len(paper)//2:])
            else:
                three.append(paper[i][:len(paper)//2])
                four.append(paper[i][len(paper)//2:])
        
        findBlue(one)
        findBlue(two)
        findBlue(three)
        findBlue(four)

findBlue(paper)
print(whiteCount)
print(blueCount)