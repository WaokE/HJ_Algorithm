import sys; input = sys.stdin.readline

N = int(input())
a = sorted(map(int, input().split()))

result = odd = 0
for i in range(N - 1, -1, -1): 
    if a[i] & 1: 
        if odd:
            result += odd + a[i]
            odd = 0
        else:
            odd = a[i]
    else: 
        result += a[i]

print(result)