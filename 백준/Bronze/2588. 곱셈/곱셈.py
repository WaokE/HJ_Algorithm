import sys   

inputs = [sys.stdin.readline().strip() for i in range(2)]
numb1 = (inputs[0])
numb2 = (inputs[1])

result1 = int(numb1)*int(numb2[2])
result2 = int(numb1)*int(numb2[1])
result3 = int(numb1)*int(numb2[0])

print(result1)
print(result2)
print(result3)
print(int(numb1)*int(numb2))