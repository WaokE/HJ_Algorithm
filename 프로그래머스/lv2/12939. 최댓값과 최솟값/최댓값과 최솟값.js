function solution(s) {
    const arr = s.split(' ').map((numb) => Number(numb));
    const result = [];
    result.push(Math.min(...arr));
    result.push(Math.max(...arr));
    
    return result.join(' ');
}