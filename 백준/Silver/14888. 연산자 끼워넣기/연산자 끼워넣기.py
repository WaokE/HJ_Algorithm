import sys
from itertools import permutations, combinations
input = sys.stdin.readline

N = int(input())
A = list(map(int,input().split()))
add, sub, mul, div = list(map(int, input().split()))

max = -float('inf')
min = float('inf')
def oper(i, value):
    global add, sub, mul, div, max, min
    if i == N:
        if value > max:
            max = value
        if value < min:
            min = value
        return
    if add > 0:
        add -= 1
        oper(i+1, (value+A[i]))
        add += 1
    if sub > 0:
        sub -= 1
        oper(i+1, (value-A[i]))
        sub += 1
    if mul > 0:
        mul -= 1
        oper(i+1, (value*A[i]))
        mul += 1
    if div > 0:
        div -= 1
        if value < 0:
            divided = -(-value // A[i])
        else:
            divided = value // A[i]
        oper(i+1, divided)
        div += 1

oper(1, A[0])
print(max, min)
