import sys
input = sys.stdin.readline

N, M = list(map(int, input().split()))
no_listened = {}
no_listened_and_seen = []
for _ in range(N):
    person = (input().strip())
    no_listened[person] = True
for _ in range(M):
    person = (input().strip())
    try:
        if no_listened[person]:
            no_listened_and_seen.append(person)
    except:
        continue
no_listened_and_seen.sort()

print(len(no_listened_and_seen))
for person in no_listened_and_seen: print(person)
