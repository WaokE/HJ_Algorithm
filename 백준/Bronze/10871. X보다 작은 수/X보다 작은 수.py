inputs = [input() for _ in range(2)]

n, x = (inputs[0].split())
a = (inputs[1].split())

for i in a:
    if(int(i)<int(x)):
        print(i, end = " ")