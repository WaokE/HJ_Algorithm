import sys
input = sys.stdin.readline

computerCount = int(input())
edgeCount = int(input())
inputs = [list(map(int,input().split()))for _ in range(edgeCount)]
edges = [[]for _ in range(computerCount + 1)]

for edge in inputs:
    edges[edge[0]].append(edge[1])
    edges[edge[1]].append(edge[0])
for edge in edges:
    edge.sort()

infected = [False]*(computerCount+1)
def virus(vertex):
    if infected[vertex] == True:
        return
    infected[vertex] = True
    computer = edges[vertex]
    for network in computer:
        virus(network)

virus(1)
print(infected[2:].count(True))