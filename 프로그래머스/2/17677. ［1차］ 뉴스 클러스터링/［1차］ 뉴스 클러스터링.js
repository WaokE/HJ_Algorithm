function sliceToArr(str) {
    const string = str.toLowerCase();
    const result = [];
    for (let i=0;i<string.length - 1;i++) {
        if (string[i].charCodeAt() < 97 || 122 < string[i].charCodeAt() || string[i + 1].charCodeAt() < 97 || 122 < string[i + 1].charCodeAt()) continue;
        result.push(string[i] + string[i+1]);
    }
    return result;
}

function solution(str1, str2) {
    const multiSet1 = sliceToArr(str1);
    const multiSet2 = sliceToArr(str2);
    
    const union = [];
    const intersection = [];
    
    const data = {};
    multiSet1.forEach((elem) => {
        data[elem] ? data[elem]++ : data[elem] = 1;
        union.push(elem);
    })
    
    multiSet2.forEach((elem) => {
        if (data[elem] && data[elem] > 0) {
            intersection.push(elem);
            data[elem]--;
        } 
        else {
            union.push(elem);
        }
    })
    
    if (union.length === 0) return 65536;
    return Math.floor(intersection.length / union.length * 65536);
}