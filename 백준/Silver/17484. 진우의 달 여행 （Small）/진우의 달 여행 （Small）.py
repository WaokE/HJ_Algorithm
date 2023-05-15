N, M = list(map(int, input().split()))
fuelToMove = [list(map(int, input().split()))for _ in range(N)]
fuelToMove.append([0]*M)

min = float('inf')
def toMoon(x, y, fuel, moved):
    global min
    if x == N: 
        if min > fuel: min = fuel
        return
    if moved == 1:
        toMoon(x+1, y, fuel+fuelToMove[x+1][y], 2)
        if y+1< M: toMoon(x+1, y+1, fuel+fuelToMove[x+1][y+1], 3)
    elif moved == 2:
        if -1< y-1: toMoon(x+1, y-1, fuel+fuelToMove[x+1][y-1], 1)
        if y+1< M: toMoon(x+1, y+1, fuel+fuelToMove[x+1][y+1], 3)
    elif moved == 3:
        if -1< y-1: toMoon(x+1, y-1, fuel+fuelToMove[x+1][y-1], 1)
        toMoon(x+1, y, fuel+fuelToMove[x+1][y], 2)
    elif moved == 0:
        if -1< y-1: toMoon(x+1, y-1, fuel+fuelToMove[x+1][y-1], 1)
        toMoon(x+1, y, fuel+fuelToMove[x+1][y], 2)
        if y+1< M: toMoon(x+1, y+1, fuel+fuelToMove[x+1][y+1], 3)

for i in range(M): toMoon(0, i, fuelToMove[0][i], 0)

print(min)