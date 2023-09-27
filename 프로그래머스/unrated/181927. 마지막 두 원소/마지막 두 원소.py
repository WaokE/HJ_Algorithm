def solution(num_list):
    result = num_list;
    if num_list[-1] > num_list[-2]:
        result.append(num_list[-1] - num_list[-2])
    else:
        result.append(num_list[-1] * 2)
    return result;