import sys
input = sys.stdin.readline

N = int(input())
time_each_person = list(map(int, input().split()))
time_each_person.sort(reverse=True)

result = 0
time = 0
while time_each_person:
    temp = time_each_person.pop()
    result += (time + temp)
    time += temp

print(result)