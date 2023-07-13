from collections import deque


def prime_lists(n):
    # 에라토스테네스의 체 초기화: n개 요소에 True 설정(소수로 간주)
    sieve = [True] * n

    # n의 최대 약수가 sqrt(n) 이하이므로 i=sqrt(n)까지 검사
    m = int(n ** 0.5)
    for i in range(2, m + 1):
        if sieve[i] == True:           # i가 소수인 경우
            for j in range(i+i, n, i):  # i이후 i의 배수들을 False 판정
                sieve[j] = False

    # 소수 목록 산출
    return [i for i in range(2, n) if sieve[i] == True]


def bfs(start, end):
    q = deque()
    q.append((start, 0))
    while q:
        curr, jump = q.popleft()
        if curr == end:
            return jump
        for i in range(4):
            for j in range(10):
                temp = str(curr)
                temp = int(temp[:i] + str(j) + temp[i+1:])
                if temp in prime_list and temp > 999:
                    q.append((temp, jump + 1))
                    prime_list[prime_list.index(temp)] = float('inf')


T = int(input())

for _ in range(T):
    prime_list = prime_lists(10000)
    start, end = list(map(int, input().split()))
    print(bfs(start, end))
