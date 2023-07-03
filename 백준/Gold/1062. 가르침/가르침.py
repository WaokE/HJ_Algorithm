from itertools import combinations
import sys
input = sys.stdin.readline

N, K = list(map(int, input().split()))
words = [input().strip() for _ in range(N)]

if K < 5:
    print(0)
    exit()

for i in range(len(words)):
    temp = []
    for char in words[i]:
        if char not in ['a', 'n', 't', 'i', 'c']:
            temp.append(char)
    temp = set(temp)
    words[i] = ''.join(temp)

if K == 5:
    temp = 0
    for word in words:
        if word == '': temp += 1
    print(temp)
    exit()

characters = set()
for word in words:
    for char in word:
        characters.add(char)

if len(characters) < K - 5: 
    print(N)
    exit()

combs = list(combinations(characters, K - 5))
result = 0
for comb in combs:
    possible_word = 0
    for i in range(len(words)): 
        # if possible_word + len(characters) - (i+1) < result: break
        possible = True
        for j in range(len(words[i])):
            if words[i][j] not in comb:
                possible = False
                break
        if possible: possible_word += 1
    if possible_word > result: result = possible_word

print(result)