import sys

numCount = int(sys.stdin.readline())
numbs = [int(sys.stdin.readline())for _ in range(numCount)]

result = []
for i in range(len(numbs)):
    result.append(min(numbs))
    numbs.remove(min(numbs))

for i in range(len(result)):
    print(result[i])