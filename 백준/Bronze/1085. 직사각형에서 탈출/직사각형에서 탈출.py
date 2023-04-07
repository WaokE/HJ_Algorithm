x, y, w, h = map(int, input().split())

toX = w - x
toY = h - y

print(min(x, y, toX, toY))