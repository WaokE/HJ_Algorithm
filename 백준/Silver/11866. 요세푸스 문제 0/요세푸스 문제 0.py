import sys
from collections import deque

N, K = list(map(int, sys.stdin.readline().split()))
josephus = []

people = deque()
for i in range(1, N+1):
    people.appendleft(i)

count = 0
print('<',end='')
while len(people) > 0:
    if count < K-1:
        people.appendleft(people[-1])
        people.pop()
        count += 1
    elif len(people) == 1:
        print(people.pop() ,end='')
        count = 0

    else:
        print(f'{people.pop()}, ',end='')
        count = 0
print('>',end='')
