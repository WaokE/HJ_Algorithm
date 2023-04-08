import sys

N = int(sys.stdin.readline())

def isHan (num):
    result = []
    for i in range(1 , num+1):
        if 1<= i < 100:
            result.append(i)
            pass
        else:
            strN = str(i)
            differOfFirstSecond = int(strN[0]) - int(strN[1])
            for j in range(1, len(strN)-1):
                if int(strN[j]) - int(strN[j+1]) == differOfFirstSecond:
                    pass
                else:
                    break
                if j == len(strN)-2:
                    result.append(i)
    return result

print(len(isHan(N)))