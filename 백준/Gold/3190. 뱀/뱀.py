import sys
import itertools
from collections import deque
N = int(sys.stdin.readline())
K = int(sys.stdin.readline())
apples = [list(map(int, sys.stdin.readline().split())) for _ in range(K)]
L = int(sys.stdin.readline())
moves = [list(sys.stdin.readline().split()) for _ in range(L)]
direction = deque([1, 0, 0, 0])

def checkDirection():
    global sec, direction
    if moves:
        if sec == int(moves[0][0]):
            if moves[0][1] == 'L':
                temp = direction.popleft()
                direction.append(temp)
            elif moves[0][1] == 'D':
                temp = direction.pop()
                direction.appendleft(temp)
            del moves[0]

def moveSnake():
    global snake, direction
    if direction == deque([1, 0, 0, 0]):
        snake.appendleft([snake[0][0], snake[0][1]+1])
    elif direction == deque([0, 0, 0, 1]):
        snake.appendleft([snake[0][0]-1, snake[0][1]])
    elif direction == deque([0, 0, 1, 0]):
        snake.appendleft([snake[0][0], snake[0][1]-1])
    elif direction == deque([0, 1, 0, 0]):
        snake.appendleft([snake[0][0]+1, snake[0][1]])
        


def checkApple():
    global snake, apples
    if snake[0] in apples:
        apples.remove(snake[0])
    else:
        snake.pop()

sec = 0
snake = deque([[1,1]])
while True:
    sec += 1
    moveSnake()
    ## 몸에 닿는 경우와 벽에 닿는 경우 체크
    if len(snake) > 1:
        if snake[0] in list(itertools.islice(snake, 1, len(snake))):
            print(sec)
            break
    if snake[0][0] > N or snake[0][1] > N or snake[0][0] <= 0 or snake[0][1] <= 0:
        print(sec)
        break
    checkApple()
    checkDirection()