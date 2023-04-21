import sys
input = sys.stdin.readline

N = int(input())
tree= [list(input().split())for _ in range(N)]

def findNode(tree, nodeName):
    for elem in tree:
        if elem[0] == nodeName:
            return elem
    raise

def preorder(node):
    # 노드 방문시 노드명 출력
    print(node[0], end='')
    # 더이상 방문할 자식이 없다면 돌아감
    if node[1] == '.' and node[2] == '.':
        return
    # 자식들이 있는지 확인하고, 계속하여 탐색함
    if node[1] != '.':
        preorder(findNode(tree, node[1]))
    if node[2] != '.':
        preorder(findNode(tree, node[2]))

def inorder(node):
    # 왼쪽 자식 있는지 체크 후 방문
    if node[1] != '.':
        inorder(findNode(tree, node[1]))
    # 두 자식 모두 없는 곳까지 내려왔다면 출력 후 올라감
    if node[1] == '.' and node[2] == '.':
        print(node[0], end='')
        return
    # 루트로 올라왔으니 출력해주고
    print(node[0], end='')
    # 오른쪽 자식이 없다면 돌아감
    if node[2] == '.':
        return
    # 오른쪽 자식만 있음 -> 오른쪽 자식으로 넘어가 반복
    inorder(findNode(tree, node[2]))

def postorder(node):
    # 왼쪽 자식 있는지 체크 후 방문
    if node[1] != '.':
        postorder(findNode(tree, node[1]))
    # 두 자식 모두 없는 곳까지 내려왔다면 출력 후 올라감
    if node[1] == '.' and node[2] == '.':
        print(node[0], end='')
        return
    # 올라와서 오른쪽 자식 있는지 체크 후 있다면 오른쪽으로 쭉~ 내려감
    if node[2] != '.':
        postorder(findNode(tree, node[2]))
    # 두 자식 모두 없는 곳까지 내려왔다면 출력 후 올라감
    if node[1] == '.' and node[2] == '.':
        print(node[0], end='')
        return
    print(node[0], end='')
    return

preorder(tree[0])
print()
inorder(tree[0])
print()
postorder(tree[0])