def solution(num_list):
    sums = 0;
    muls = 1;
    for numb in num_list:
        sums += numb;
        muls *= numb;

    if (sums ** 2 > muls): return 1
    return 0;