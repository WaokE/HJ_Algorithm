count = int(input())

for i in range(count):
    repeat, strings = input().split()

    result = []
    for j in range(len(strings)):
        for k in range(int(repeat)):
            result.append(strings[j])

    print(''.join(result))