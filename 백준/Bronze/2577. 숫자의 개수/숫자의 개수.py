one = int(input())
two = int(input())
three = int(input())

mul = one*two*three
for i in range(10):
    print(list(str(mul)).count(str(i)))