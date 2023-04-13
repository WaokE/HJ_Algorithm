import sys

N, S = list(map(int, sys.stdin.readline().split()))
sequence = list(map(int, sys.stdin.readline().split()))
count = 0
ans = []

def solve(start):
    global count
    if sum(ans) == S  and len(ans) >0:
        count += 1
        
    for i in range(start, N):
        ans.append(sequence[i])
        solve(i+1)
        ans.pop()

solve(0)
print(count)