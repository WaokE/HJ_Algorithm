import sys

N = int(sys.stdin.readline())
cities = [list(map(int,(sys.stdin.readline().split())))for _ in range(N)]
temp = [0]*N
cost = 0
result = []

def TSP(visitedCity, currentCity, first):
    global cost
    global result
    if visitedCity.count(1) == N:
        if currentCity[first] != 0:
            result.append(cost + currentCity[first])
            return
        return
    else:
        for i in range(N):
            if visitedCity[i] != 1:
                if currentCity[i] != 0:
                    visitedCity[i] = 1
                    cost += currentCity[i]
                    TSP(visitedCity, cities[i], first)
                    visitedCity[i] = 0
                    cost -= currentCity[i]
                

for i in range(N):
    temp[i]=1
    TSP(temp, cities[i], i)
    temp[i]=0
print(min(result))
