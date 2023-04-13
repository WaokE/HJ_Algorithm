import sys  

N = int(sys.stdin.readline().strip())
count = 0

def cycle(n):
    global count
    if n == 0:
        return 1
    if n < 10:
        n = n*10
    N = n
    while 1:
        new = ''
        new = (n%10)*10+(n//10 + n%10)%10
        count +=1
        if new == N:
            return count
        else: n = new

print(cycle(N))