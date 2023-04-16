import sys

N = int(sys.stdin.readline())
portions = list(map(int, sys.stdin.readline().split()))
portions.sort()

lp = 0
rp = len(portions)-1
min = float('inf')
while lp < rp:
    value = portions[lp] + portions[rp]
    if abs(value) < min:
        min = abs(value)
        result = [portions[lp], portions[rp]]
    else: 
        if value < 0:
            lp += 1        
        elif value > 0:
            rp -= 1
        else:
            break
print(result[0], end= ' ')
print(result[1])