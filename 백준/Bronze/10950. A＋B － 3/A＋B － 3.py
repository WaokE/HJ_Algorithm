count = int(input())
lists = [input() for _ in range(count)]

for i in range(count):
    a , b = lists[i].split()
    print (int(a)+int(b))