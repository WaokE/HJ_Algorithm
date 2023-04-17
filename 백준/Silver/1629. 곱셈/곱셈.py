import sys
input = sys.stdin.readline

A, B, C = list(map(int, input().split()))

def dac(a, b, c):
    if b == 1:
        return a % c
    elif b % 2 == 0:
        return (dac(a,b//2,c)**2)%c
    else:
        return ((dac(a,b//2,c)**2)*a)%c

print(dac(A, B, C))