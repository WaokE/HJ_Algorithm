import sys

n, r, c = map(int, sys.stdin.readline().split())
count = 0

def Z(N, r, c):
    global count
    half = 2**(N-1)
    block = half**2

    if N == 0:
        return
    else:
        if r < half and c < half:
            # print("1사분면")
            return Z(N-1, r, c)
        if r < half and c >= half:
            # print("2사분면")
            count += block
            return Z(N-1, r, c - half)
        if r >= half and c < half:
            # print("3사분면")
            count += block*2
            return Z(N-1, r - half, c)
        else:
            # print("4사분면")
            count += block*3
            return Z(N-1, r - half, c - half)

Z(n, r, c)
print(count)