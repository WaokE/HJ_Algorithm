# 재귀로 풀어보자
import sys

input = int(sys.stdin.readline())

def factorial(num):
    if num > 1:
        return num*factorial(num-1)
    else:
        return 1

print(factorial(input))

# no 재귀 풀이
# number = int(input())
# result = 1

# for i in range(1,number+1):
#     result = result*i

# print(result)
