import sys
input = sys.stdin.readline

class Editter:
    def __init__(self):
        self.head = Character(None)
        self.tail = Character(None)
        self.head.next = self.tail
        self.tail.prev = self.head
        self.cursor = self.tail
    
    def move_cursorl(self):
        if self.cursor.prev.value is not None:
            self.cursor = self.cursor.prev
    
    def move_cursorr(self):
        if self.cursor.value is not None:
            self.cursor = self.cursor.next


    def add_value(self, value):
        char = Character(value)
        char.prev = self.cursor.prev
        char.next = self.cursor
        (self.cursor.prev).next = char
        self.cursor.prev = char

    def del_value(self):
        if self.cursor.prev.value != None:
            self.cursor.prev.prev.next = self.cursor
            self.cursor.prev = self.cursor.prev.prev
        

class Character:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None
        
start_str = input().strip()
N = int(input())
editter = Editter()

for i in range(len(start_str)):
    editter.add_value(start_str[i])

for _ in range(N):
    command = input()
    if command[0] == 'L':
        editter.move_cursorl()
    elif command[0] == 'D':
        editter.move_cursorr()
    elif command[0] == 'B':
        editter.del_value()
    elif command[0] == 'P':
        editter.add_value(command[2])

start = editter.head.next
while start.value != None:
    print(start.value, end = '')
    start = start.next