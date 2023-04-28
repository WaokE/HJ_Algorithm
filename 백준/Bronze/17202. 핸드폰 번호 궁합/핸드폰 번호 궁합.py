import sys
input = sys.stdin.readline

A = input().strip()
B = input().strip()
phone = []
for i in range(8):
    phone.append(int(A[i]))
    phone.append(int(B[i]))

memo = [[0]*10 for _ in range(10)]

for i in range(10):
    for j in range(10):
        memo[i][j] = (i+j)%10

while len(phone) > 2:
    newPhone = []
    for i in range(len(phone)-1):
        newPhone.append(memo[phone[i]][phone[i+1]])
    phone = newPhone

for i in phone: print(i,end='')