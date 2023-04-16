import sys
input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))
longest = []

for i in range(len(A)):
    if i == 0:
        longest.append(1)
    elif i == 1:
        if A[i] > A[0]:
            longest.append(2)
        else:
            longest.append(1)
    else:
        temp = [0]
        for j in range(i):
            # 뒤에 붙을 수 있음
            if A[j] < A[i]:
                temp.append(longest[j])
        longest.append(max(temp)+1)

print(max(longest))