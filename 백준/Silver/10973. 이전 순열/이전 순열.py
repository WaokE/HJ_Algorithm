N = int(input())
a = list(map(int, input().split()))

for i in range(N-1, 0, -1):
    if a[i] < a[i-1]:
        point = i-1
        for j in range(N-1, 0, -1):
            if a[j] < a[point]:
                a[j], a[point] = a[point], a[j]
                a = a[:i] + sorted(a[i:], reverse=True)
                print(*a)
                exit(0)
print(-1)