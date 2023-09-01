from itertools import combinations

def is_prime_number(x):
    for i in range(2, x):
        if x % i == 0:
            return False 
    return True 

def solution(nums):
    combinationList = list(combinations(nums, 3));
    result = 0;
    
    for comb in combinationList:
        if is_prime_number(sum(comb)): result += 1;
    return result;
    
    