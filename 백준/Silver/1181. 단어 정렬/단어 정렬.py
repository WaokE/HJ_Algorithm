import sys

count = int(sys.stdin.readline())
words = [sys.stdin.readline().strip()for _ in range(count)]
words = list(set(words))

words.sort()
sorted = sorted(words, key = len)

for word in sorted:
    print(word)
