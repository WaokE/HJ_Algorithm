import sys
inputs = [int(sys.stdin.readline())for _ in range(9)]

def searchDwarf(dwarfs):
    for i in range(len(dwarfs)):
        for j in range(len(dwarfs)-1):
            selected = list(dwarfs)
            del selected[i]
            del selected[j]
            if sum(selected) == 100:
                selected.sort()
                for k in range(len(selected)):
                    print(selected[k])
                return    
                
searchDwarf(inputs)