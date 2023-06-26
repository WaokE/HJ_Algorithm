import sys
input = sys.stdin.readline

M = int(input())

def add_arr(arr, num):
    arr.add(num)

def remove_arr(arr, num):
    arr.discard(num)

def check_arr(arr, num):
    if num in arr:
        print(1)
    else:
        print(0)

def toggle_arr(arr, num):
    if num in arr:
        arr.discard(num)
    else:
        arr.add(num)

arr = set()

for _ in range(M):
    command = input().strip()
    if command == 'all':
        arr = set([i for i in range(1, 21)])
    elif command == 'empty':
        arr = set()
    else:
        command, num = command.split()
        num = int(num)
        if command == 'add':
            add_arr(arr, num)
        elif command == 'remove':
            remove_arr(arr, num)
        elif command == 'check':
            check_arr(arr, num)
        elif command == 'toggle':
            toggle_arr(arr, num)