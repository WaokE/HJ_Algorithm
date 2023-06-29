n = int(input())
word = input()

result = 0
num = ''
for i in range(n):
    if word[i].isdigit():
        num += word[i]
    else:
        if num != '':
            result += int(num)
            num = ''
if num != '':
    result += int(num)

print(result)