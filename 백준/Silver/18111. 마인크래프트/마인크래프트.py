import sys
input = input

N, M, B = map(int,input().split())
block = []
for _ in range(N):
    block.append([int(x) for x in input().rstrip().split()])

sec = int(1e9)
height = 0

for i in range(257):
    use_block = 0
    take_block = 0
    for x in range(N):
        for y in range(M):
            if block[x][y] > i:
                take_block += block[x][y] - i
            else:
                use_block += i - block[x][y]

    if use_block > take_block + B:
        continue

    count = take_block * 2 + use_block

    if count <= sec:
        sec = count
        height = i

print(sec, height)