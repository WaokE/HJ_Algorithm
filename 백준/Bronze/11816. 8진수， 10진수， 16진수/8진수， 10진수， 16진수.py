X = input()

if X[0] == '0':
    if X[1] == 'x':
        num = int(X[2:], 16)
    else:
        num = int(X[1:], 8)
else:
    num = int(X)

print(num)
