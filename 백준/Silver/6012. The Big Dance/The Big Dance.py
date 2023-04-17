import sys
input = sys.stdin.readline

N = int(input())
cows = []
for i in range(1, N+1):
    cows.append(i)

sum = 0

def dance(cows):
    global sum
    if len(cows) == 1:
        return
    elif len(cows) == 2:
        sum += cows[0]*cows[1]

    if len(cows)%2 == 1:
        mid = len(cows)//2 + 1
    else:
        mid = len(cows)//2
    leftCows = dance(cows[:mid])
    rightCows = dance(cows[mid:])


dance(cows)
print(sum)