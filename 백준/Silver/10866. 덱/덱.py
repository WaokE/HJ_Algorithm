import sys
from collections import deque
input = sys.stdin.readline

class Deque():
    def __init__(self):
        self.deque = deque()

    def pushFront(self, value):
        self.deque.appendleft(value)
    
    def pushBack(self, value):
        self.deque.append(value)

    def popFront(self):
        if self.deque:
            print(self.deque.popleft())
        else:
            print(-1)        
    
    def popBack(self):
        if self.deque:
            print(self.deque.pop())
        else:
            print(-1)

    def size(self):
        print(len(self.deque))
    
    def empty(self):
        if len(self.deque) == 0:
            print(1)
        else:
            print(0)

    def front(self):
        if self.deque:
            print(self.deque[0])
        else:
            print(-1)

    def back(self):
        if self.deque:
            print(self.deque[-1])
        else:
            print(-1)

testDeque = Deque()
N = int(input())
for _ in range(N):
    command = input().strip()
    if 'push_front' in command:
        testDeque.pushFront(int(command[11:]))
    elif 'push_back' in command:
        testDeque.pushBack(int(command[10:]))
    elif 'pop_front' in command:
        testDeque.popFront()
    elif 'pop_back' in command:
        testDeque.popBack()
    elif 'size' in command:
        testDeque.size()
    elif 'empty' in command:
        testDeque.empty()
    elif 'front' in command:
        testDeque.front()
    elif 'back' in command:
        testDeque.back()