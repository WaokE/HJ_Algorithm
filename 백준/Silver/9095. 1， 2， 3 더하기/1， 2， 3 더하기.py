import sys

T = int(sys.stdin.readline())
inputs = [int(sys.stdin.readline())for _ in range(T)]

count = 0
def plus(n):
    global count
    if n == 0:
        count += 1
    elif n < 0:
        return
    else:
        for i in range(1, 4):
            plus(n - i)
        

for n in inputs:
    plus(n)
    print(count)
    count = 0
