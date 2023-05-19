from collections import deque

cows = list(input())

checked = []
result = 0
for i in range(52):
    if cows[i] not in checked:
        checked.append(cows[i])
        temp = []
        for j in range(i+1,52):
            if cows[j] == cows[i]:
                result += len(temp)
                break      
            if cows[j] in temp:
                temp.remove(cows[j])
            else: temp.append(cows[j])

print(result//2)