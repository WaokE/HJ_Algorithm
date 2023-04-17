import sys
input = sys.stdin.readline
 
def cantor(string):
    if len(string) == 1:
        return string
    divide = len(string)//3
    first = ['-']*divide
    second = [' ']*divide
    third = ['-']*divide

    left = cantor(first)
    middle = second
    right = cantor(third)
    return left + middle + right

while True:
    try:
        N = int(input())
        result = ['-']*(3**N)
        cantorResult = cantor(result)
        for i in cantorResult: print(i, end='')
        print()
        
    except:
        break