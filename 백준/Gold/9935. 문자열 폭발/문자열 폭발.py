def remove_bomb(string, bomb):
    stack = []
    last_char = bomb[-1]
    for char in string:
        stack.append(char)
        if char == last_char and ''.join(stack[-len(bomb):]) == bomb:
            # 폭발 문자열이 발견되면 해당 부분 제거
            del stack[-len(bomb):]
    return ''.join(stack)



string = input()
bomb_arr = input()
result = remove_bomb(string, bomb_arr)

if result == "":
    print("FRULA")
else:
    print(result)