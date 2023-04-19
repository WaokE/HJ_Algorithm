import sys
input = sys.stdin.readline

N = int(input())
for i in range(1, N+1):
    case = list(input().split())
    case.reverse()
    print(f'Case #{i}: ',end = '')
    for word in case:print(word, end=' ')
    print()
