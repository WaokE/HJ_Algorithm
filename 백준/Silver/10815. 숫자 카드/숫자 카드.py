import sys
input = sys.stdin.readline

def binary_search(arr, val):
    sta = 0
    end = len(arr)
    while sta < end:
        mid = (sta + end) // 2
        if arr[mid] == val:
            return 1
        if arr[mid] < val:
            sta = mid + 1
        else:
            end = mid
    return 0

ownCardNum = int(input())
ownCards = sorted(list(map(int, input().split())))
checkCardNum = int(input())
checkCards = list(map(int, input().split()))

result = []
for card in checkCards:
    result.append(binary_search(ownCards, card))
print(*result)