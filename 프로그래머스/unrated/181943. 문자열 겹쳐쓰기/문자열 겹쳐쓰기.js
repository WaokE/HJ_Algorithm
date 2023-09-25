function solution(my_string, overwrite_string, s) {
    const result = [...my_string];
    for (let i=0;i<overwrite_string.length;i++) {
        result[s + i] = overwrite_string[i];
    }
    return result.join('')
}