function solution(str1, str2) {
    const result = [];
    for (let i=0;i<str1.length;i++) {
        result.push(str1[i]);
        result.push(str2[i]);
    }
    return result.join('')
}