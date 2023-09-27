def solution(num_list):
    odd = '';
    even = '';
    for numb in num_list:
        if (numb % 2 == 0): even += str(numb)
        else: odd += str(numb)
        
    return int(odd) + int(even)