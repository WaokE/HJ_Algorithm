# import sys
# inputs = [int(sys.stdin.readline())for _ in range(9)]

# def searchDwarf(dwarfs):
#     for i in range(len(dwarfs)):
#         for j in range(len(dwarfs)-1):
#             selected = list(dwarfs)
#             del selected[i]
#             del selected[j]
#             if sum(selected) == 100:
#                 selected.sort()
#                 for k in range(len(selected)):
#                     print(selected[k])
#                 return    
                
# searchDwarf(inputs)

재귀로 풀이
import sys
inputs = [int(sys.stdin.readline())for _ in range(9)]

def searchDwarf(choosed:list) :
    if len(choosed) == 7:
        if sum(choosed) == 100:
            choosed.sort()
            for i in choosed:
                print(i)
            exit()
        return
    else:
        left = list(set(inputs) - set(choosed))
        for i in range(len(left)):
            choosenOne = left[i]
            choosed.append(choosenOne)
            searchDwarf(choosed)
            choosed.pop()

searchDwarf([])
