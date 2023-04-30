import sys
input = sys.stdin.readline

inputs = list(input().strip().split('-'))
for i in range(len(inputs)):
    inputs[i] = sum(list(map(int, (inputs[i].split('+')))))
    
result = inputs[0]
del inputs[0]

for num in inputs:
    result -= num

print(result)