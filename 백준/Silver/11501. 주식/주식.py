import heapq
import sys
input = sys.stdin.readline

T = int(input())
for _ in range(T):
    N = int(input())
    prices = list(map(int, input().split()))
    maxPrice = 0
    surplus = 0

    for i in range(N-1,-1,-1):
        if maxPrice:
            if prices[i] > maxPrice:
                maxPrice = prices[i]
            if prices[i] < maxPrice:
                surplus += (maxPrice - prices[i])
        else:
            maxPrice = prices[i]

    print(surplus)
