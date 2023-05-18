import sys
input = sys.stdin.readline

N, X = list(map(int, input().split()))
visitors = list(map(int, input().split()))

sum = 0
count = 1
for i in range(X):
    sum += visitors[i]
temp = visitors[0]
max = sum


for i in range(X, N):
    sum -= temp
    sum += visitors[i]
    temp = visitors[i-(X-1)]
    if sum > max:
        max = sum
        count = 1
    elif sum == max:
        count += 1

if max:
    print(max)
    print(count)
else:
    print('SAD')