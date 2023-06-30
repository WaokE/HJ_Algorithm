import sys

a_num, b_num = list(map(int, input().split()))
a_set = set(map(int, input().split()))
b_set = set(map(int, input().split()))

a_minus_b = b_set - a_set
b_minus_a = a_set - b_set

print(len(b_minus_a)+len(a_minus_b))