N = int(input())
M = int(input())
lightsPos = list(map(int, input().split()))
lightsPos.insert(0,0)
lightsPos.append(N)
distanceEachLight =[]

for i in range(1, len(lightsPos)):
    if i == 1 or i == len(lightsPos)-1:
        distanceEachLight.append(lightsPos[i] - lightsPos[i-1])
    else:
        temp = lightsPos[i] - lightsPos[i-1]
        if temp % 2 == 0:
            dist = temp//2
        else:
            dist = temp//2 + 1
        distanceEachLight.append(dist)

print(max(distanceEachLight))
