import sys
input = sys.stdin.readline

K, N = list(map(int, input().split()))
cables = [int(input())for _ in range(K)]
maxCable = max(cables)

start = 1
end = maxCable
while start <= end:
    mid = (start+end)//2
    totalCable = []
    for cable in cables:
        divideInto = cable//mid
        totalCable.append(divideInto)

    if sum(totalCable) > N:
        start = mid + 1
    elif sum(totalCable) < N:
        end = mid - 1
    else:
        start = mid + 1

print(end)