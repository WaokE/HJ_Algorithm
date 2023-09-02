function solution(s, n) {
    const result = [];
    
    [...s].forEach((char) => {
        const ASCII = char.charCodeAt();
        if (65 <= ASCII && ASCII <= 90) {
            ASCII + n > 90 ? result.push(String.fromCharCode(ASCII + n - 26)) : result.push(String.fromCharCode(ASCII + n))
        }
        else if (97 <= ASCII && ASCII <= 122) {
            ASCII + n > 122 ? result.push(String.fromCharCode(ASCII + n - 26)) : result.push(String.fromCharCode(ASCII + n))
        }
        else {
            result.push(' ')
        }
    })
    
    return result.join('')
}