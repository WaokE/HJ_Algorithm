import sys
input = sys.stdin.readline

N = int(input())
numbers = [int(input())for _ in range(N)]
numbers.sort()
modeIndex = [0]*8001
for number in numbers:
    if number > 0:
        modeIndex[number] += 1
    elif number < 0:
        modeIndex[-number + 4000] += 1
    else:
        modeIndex[number] += 1
modenumbers = []
for i in range(len(modeIndex)):
    if modeIndex[i] == max(modeIndex):
        if i > 4000:
            modenumbers.append(-(i-4000))
        else:
            modenumbers.append(i)
modenumbers.sort()

# TODO: aver 출력시 소수점 첫자리에서 반올림(정수로 출력)
aver = sum(numbers)/len(numbers)
center = numbers[len(numbers)//2]
if len(modenumbers) > 1:
    mode= modenumbers[1]
else:
    mode = modenumbers[0]
range = abs(max(numbers) - min(numbers))

print(round(aver))
print(center)
print(mode)
print(range)