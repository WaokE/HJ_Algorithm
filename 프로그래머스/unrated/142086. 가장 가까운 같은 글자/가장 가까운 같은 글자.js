function solution(s) {
    const positions = {};
    const result = [];
    for (let i=0;i<s.length;i++) {
        if (positions[s[i]] !== undefined) {
            result.push(i - positions[s[i]]);
            positions[s[i]] = i;
        }
        else {
            result.push(-1);
            positions[s[i]] = i;
        }
    }
    return result;
}
