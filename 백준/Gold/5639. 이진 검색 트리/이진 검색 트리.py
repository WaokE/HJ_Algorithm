import sys
sys.setrecursionlimit(10 ** 9)
input = sys.stdin.readline

inputs = []
while True:
    try:
        inputs.append(int(input()))
    except:
        break

def preToPost(start, end):
    if start > end:
        return
        
    root = inputs[start]
    
    mid = end + 1
    for i in range(start+1, end+1):
        if root < inputs[i]:
            mid = i
            break

    preToPost(start + 1, mid - 1)
    preToPost(mid, end)
    print(root)

preToPost(0, len(inputs) - 1)
