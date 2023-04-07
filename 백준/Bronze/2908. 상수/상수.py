first, second = input().split()

def makeSangSoo (number):
    result = ''
    result = result + number[2]
    result = result + number[1]
    result = result + number[0]
    return result

print(max(makeSangSoo(first), makeSangSoo(second)))