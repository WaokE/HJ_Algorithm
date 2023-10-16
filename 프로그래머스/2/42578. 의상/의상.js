function solution(clothes) {
    var answer = 1;
    
    const obj = {};
    
    clothes.map(clothe => {
        if (obj[clothe[1]]) return obj[clothe[1]] += 1;
        return obj[clothe[1]] = 1;
    });
    
    const keys = Object.keys(obj);
    keys.forEach(key => {
        answer *= obj[key] + 1;
    })
    return answer - 1;
}