function solution(x) {
    let sum = 0;
    [...x.toString()].forEach((numb) => sum += Number(numb));
    
    if (x % sum === 0) return true;
    return false;
}