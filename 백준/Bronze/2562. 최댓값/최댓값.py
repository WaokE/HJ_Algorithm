numbers = [input() for _ in range(9)]

intList = list(map(int, numbers))

print(max(intList))
print(intList.index(max(intList))+1)