def is_bipartite(graph):
    n = len(graph)
    visited = [0] * n  # 방문 여부 체크 배열
    stack = []

    for start in range(n):
        if visited[start] == 0:
            stack.append((start, 1))  # 시작 노드와 색깔(1 또는 -1)을 스택에 추가

            while stack:
                node, color = stack.pop()

                if visited[node] != 0:
                    if visited[node] != color:
                        return False
                    continue

                visited[node] = color

                for neighbor in graph[node]:
                    stack.append((neighbor, -color))  # 인접한 노드와 현재 노드와 다른 색깔을 스택에 추가

    return True


K = int(input())
for _ in range(K):
    V, E = list(map(int, input().split()))
    inputs = [list(map(int, input().split())) for _ in range(E)]
    edgesEachNode = [[] for _ in range(V + 1)]

    for edge in inputs:
        edgesEachNode[edge[0]].append(edge[1])
        edgesEachNode[edge[1]].append(edge[0])

    if is_bipartite(edgesEachNode):
        print('YES')
    else:
        print('NO')
