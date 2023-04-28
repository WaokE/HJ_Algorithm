import sys
input = sys.stdin.readline

K = int(input())

def BABBA(num):
    memo = [0]*(num+1)
    memo[0] = (1, 0)
    for i in range(1, num +1):
        memo[i] = (memo[i-1][1],memo[i-1][0]+memo[i-1][1])
    print(*memo[K])

BABBA(K)