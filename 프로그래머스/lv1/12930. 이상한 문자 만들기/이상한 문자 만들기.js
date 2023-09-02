function solution(s) {
    const result = [];
    let index = 0;
    [...s].forEach((char) => {
        if (char === ' ') {
            result.push(char);
            index = 0;
        }
        else {
            index % 2 === 0 ? result.push(char.toUpperCase()) : result.push(char.toLowerCase());
            index++;
        }
    })
    return result.join('');
}