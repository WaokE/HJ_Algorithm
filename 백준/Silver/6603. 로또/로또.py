from itertools import combinations

second = False
while True:
    lotto = list(map(int, input().split()))
    if lotto == [0]: break
    if second: print()

    count = lotto[0]
    numbers = lotto [1:]

    result = combinations(numbers, 6)
    for i in result: print(*i)
    print()
    