import sys
input = sys.stdin.readline

n, k = list(map(int, input().split()))


def pascal(n, k):
    if n == 1 or n == 2 or k == 1 or k == n:
        return 1
    return pascal(n-1, k) + pascal(n-1, k-1)

print(pascal(n, k))