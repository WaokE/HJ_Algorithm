import sys
count = int(sys.stdin.readline())
distribute = [0]*10001

for i in range(count):
    num = int(sys.stdin.readline())
    distribute[num] += 1

for i in range(len(distribute)):
    if distribute[i] == 0:
        pass
    else:
        for _ in range(distribute[i]):
            print(i)