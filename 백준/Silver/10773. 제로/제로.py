import sys

K = int(sys.stdin.readline())

money = []
for i in range(K):
    num = int(sys.stdin.readline())
    if num == 0:
        del money[-1]
    else:
        money.append(num)
        
print(sum(money))