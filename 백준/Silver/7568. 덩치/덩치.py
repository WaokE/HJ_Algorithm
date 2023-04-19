import sys
input = sys.stdin.readline

N = int(input())
people = [list(map(int, input().split()))for _ in range(N)]
for i in range(len(people)): people[i].append(i)
people.sort(reverse=True)

stack = []

for person in people:
    if stack:
        rankCount = 1
        for i in stack:
            if i[0] > person[0] and i[1] > person[1]:
                rankCount += 1 
        person.append(rankCount)
        stack.append(person)
    else:
        stack.append(person)
        person.append(1)

people.sort(key = lambda x:x[2])
for person in people: print(person[3], end= ' ')