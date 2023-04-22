import sys
input = sys.stdin.readline

V, E = list(map(int, input().split()))
edges = [list(map(int, input().split()))for _ in range(E)]
edges.sort(key = lambda x: x[2])

parent = list(range(V+1))  # 노드의 부모를 나타내는 리스트
rank = [0] * (V+1)  # 노드의 랭크(트리의 높이)를 나타내는 리스트

# 노드의 부모를 찾는 함수
def find(u):
    if parent[u] != u:
        parent[u] = find(parent[u])
    return parent[u]

# 두 노드를 합치는 함수 (Union)
def union(u, v):
    u = find(u)
    v = find(v)
    if u == v:
        return False

    # 랭크(트리의 높이)가 작은 쪽의 루트를 큰 쪽의 루트에 붙임
    if rank[u] > rank[v]:
        parent[v] = u
    else:
        parent[u] = v
        if rank[u] == rank[v]:
            rank[v] += 1
    return True

visited = set()
choosedEdges = []
for edge in edges:
    u, v, w = edge
    if find(u) != find(v):
        union(u, v)
        visited.add(u)
        visited.add(v)
        choosedEdges.append(edge)

print(sum(list(map(lambda x: x[2], choosedEdges))))