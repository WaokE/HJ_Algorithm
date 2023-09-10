function solution(s) {
    const result = [];
    let wordFlag = false;
    [...s].forEach((char) => {
        result.push(wordFlag ? char.toLowerCase() : char.toUpperCase());
        
        if (char !== ' ') wordFlag = true;
        if (char === ' ') wordFlag = false;
     })
    
    return result.join('');
}