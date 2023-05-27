N = int(input())
F = int(input())

head = str(N)[:-2]
for i in range(100):
    if i < 10: tail = '0' +str(i)
    else: tail = str(i)
    result = int(head + tail)
    if result%F == 0: 
        print(tail)
        break