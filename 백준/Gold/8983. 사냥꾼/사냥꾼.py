import sys
input = sys.stdin.readline

M, N, L = list(map(int, input().split()))
hunters = list(map(int, input().split()))
animals = [list(map(int, input().split()))for _ in range(N)]
huntedAnimals = 0
hunters.sort()

for animal in animals:
    start = 0
    end = len(hunters) - 1
    while start <= end:
        shootPoint = (start + end)//2
        shooter = hunters[shootPoint]
        if abs(shooter - animal[0]) + animal[1] <= L:
            huntedAnimals += 1
            break
        else:
            if shooter - animal[0] == 0:
                break
            elif shooter - animal[0] > 0:
                end = shootPoint - 1
            elif shooter - animal[0] < 0:
                start = shootPoint + 1

print(huntedAnimals)