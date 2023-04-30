import sys
input = sys.stdin.readline

N, K = list(map(int, input().split()))
coins = [int(input()) for _ in range(N)]

def checkAppropriateCoin(leftMoney):
    global coins
    for i in range(len(coins)-1, -1, -1):
        if coins[i] <= leftMoney:
            newcoin = coins[i]
            coins = coins[:i]
            return newcoin

currentCoin = coins[-1]
coinCount = 0
while K > 0:
    if currentCoin > K:
        currentCoin = checkAppropriateCoin(K)
    K -= currentCoin
    coinCount += 1

print(coinCount)