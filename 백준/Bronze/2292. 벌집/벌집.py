number = int(input())
space = 1
layer = 1
while True:
    if number <= space:
        print(layer)
        break

    space = space +(6*layer)
    layer = layer + 1