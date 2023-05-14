N = int(input())

dp = {
    1:0,
    2:1
}

def pizza(n):
    if n in dp: return dp[n]
    a = n//2
    b = n-a
    dp[n] = pizza(a) + pizza(b) + (a*b)
    return dp[n]

pizza(N)
print(dp[N])