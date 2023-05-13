N = int(input())

def factorial(num):
    result = 1
    for i in range(1, num+1):
        result *= i
    return result

def checkZero(num):
    num = str(num)
    count = 0
    for i in range(len(num)-1, -1, -1):
        if num[i] != '0':
            return count
        count += 1

print(checkZero((factorial(N))))
