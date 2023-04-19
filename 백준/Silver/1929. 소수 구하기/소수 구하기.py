import sys
input = sys.stdin.readline

M, N = list(map(int, input().split()))

def isPrime(num):
    if num == 1: return False
    if num == 2: return True
    if num % 2 == 0: return False

    for i in range(3, int(num**0.5)+1, 2):
        if num % i == 0:
            return False

    return True

for i in range(M, N+1):
    if isPrime(i):
        print(i)