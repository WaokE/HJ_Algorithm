import sys

countNumb = int(sys.stdin.readline())
numbers = list(map(int, sys.stdin.readline().split()))

def isPrime(num):
    if num == 1 :return False
    for i in range(2,num):
        if num%i == 0:return False
    return True

count = 0
for number in numbers:
    if isPrime(number) == True:
        count = count + 1

print(count)