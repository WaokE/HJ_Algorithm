import sys
input = sys.stdin.readline

N = int(input())

if N % 5 == 0:
    print(N//5)
elif N % 5 == 1:
    print((N - 6)//5+2)
elif N % 5 == 2:
    if N == 7:
        print(-1)
    else:
        print((N-12)//5+4)
elif N % 5 == 3:
    if N == 3:
        print(1)
    else:
        print((N-3)//5+1)
elif N % 5 == 4:
    if N == 4:
        print(-1)
    else:
        print((N-9)//5+3)
