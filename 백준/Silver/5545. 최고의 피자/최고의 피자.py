import sys
input = sys.stdin.readline

N = int(input())
A, B = list(map(int, input().split()))
C = int(input())
D = [int(input())for _ in range(N)]
D.sort(reverse=True)

pizza = (C, A)
for topping in D:
    cal, price = pizza
    if topping/B > cal/price:
        pizza = (pizza[0]+topping, pizza[1]+B)

print(pizza[0]//pizza[1])