count = int(input())
for i in range(count):
    result = 0
    temp = []
    ox = input()
    for j in range(len(ox)):
        if ox[j] == 'O':
            temp.append(j)
    
    tempCount = 1

    for k in range(len(temp)):
        try:
            if temp[k] + 1 == temp[k+1]:
                result = result + tempCount
                tempCount = tempCount +1
            else:
                if ox[temp[k]] == 'O':
                    result = result + tempCount
                tempCount = 1
        except:
            if ox[temp[k]] == 'O':
                result = result + tempCount
            break

    print(result)