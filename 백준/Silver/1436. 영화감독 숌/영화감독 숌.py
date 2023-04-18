import sys
input = sys.stdin.readline

N = int(input())

count = 0
doomCount = 0 
while doomCount < N:
    count += 1
    if '666' in str(count):
        doomCount +=1
print(count)