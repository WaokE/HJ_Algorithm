import sys
plate = int(sys.stdin.readline())

def hanoi(num, start, end, other):
    if num == 1:
        print(start, end)
        return
    elif num > 1:
        hanoi(num - 1, start, other, end)
        print(start, end)
        hanoi(num -1 , other, end, start)

print(2**plate-1)
if plate <= 20:
    hanoi(plate ,1, 3, 2)
