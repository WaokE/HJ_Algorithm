N, M = list(map(int, input().split()))
arr_a = input()
arr_b = input()

temp = arr_a + ' ' + arr_b
print(*sorted(list(map(int, temp.split()))))