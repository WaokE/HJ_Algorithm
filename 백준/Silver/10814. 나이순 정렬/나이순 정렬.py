import sys
input = sys.stdin.readline

N = int(input())
inputs = [input().split()for _ in range(N)]
clients = [[int(sublist[0]), sublist[1]] for sublist in inputs]

clients.sort(key = lambda x: x[0])

for i in clients:
    print(i[0], end = ' ')
    print(i[1])