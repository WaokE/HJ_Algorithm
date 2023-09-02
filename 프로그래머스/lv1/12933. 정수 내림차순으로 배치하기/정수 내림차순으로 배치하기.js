function solution(n) {
    const result = [...n.toString()]
    result.sort((a, b) => Number(b) - Number(a));
    
    return Number(result.join(''))
}