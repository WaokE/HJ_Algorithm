import sys

N = int(sys.stdin.readline())
inputs = [list(map(int,(sys.stdin.readline().split())))for _ in range(N)]

# 도시의 비용을 저장하는 2차원 배열
costTable = [[float('inf')] * N for _ in range(1<<N)]

def tsp(visited, current):
    # 모든 도시를 방문한 경우
    if visited == (1<<N)-1:
        # 현재 도시에서 시작 도시로 돌아가는 비용이 0인 경우만 유효한 경로
        if inputs[current][0] != 0:
            return inputs[current][0]
        else:
            return float('inf')
    
    # 이미 계산한 적이 있는 경우, 저장된 값을 사용
    if costTable[visited][current] != float('inf'):
        return costTable[visited][current]
    
    # 현재 도시에서 방문하지 않은 도시들을 순회하며 최소 비용 계산
    for i in range(N):
        if not (visited >> i) & 1 and inputs[current][i] != 0:
            cost = tsp(visited | (1<<i), i) + inputs[current][i]
            costTable[visited][current] = min(costTable[visited][current], cost)
    
    return costTable[visited][current]

# 시작 도시는 0으로 고정
min_cost = tsp(1, 0)
print(min_cost)