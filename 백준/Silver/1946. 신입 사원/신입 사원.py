import sys
input = sys.stdin.readline

T = int(input())
for _ in range(T):
    N = int(input())
    applicants = [list(map(int, input().split()))for _ in range(N)]
    applicants.sort(key = lambda x: x[1])
    applicants.sort(key = lambda x: x[0])
    count = 0
    min = float('inf')
    for i in range(len(applicants)):
        if i == 0:
            min = applicants[i][1]
            count += 1
            continue
        else:
            if min < applicants[i][1]:
                continue
            else:
                min = applicants[i][1]
                count += 1

    print(count)