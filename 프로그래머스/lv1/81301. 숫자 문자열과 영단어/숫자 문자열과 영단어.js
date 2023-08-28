function solution(s) {
    const result = [];
    let word = '';
    
    [...s].forEach((char) => {
        if (!isNaN(char)) result.push(char);
        else {
            word += char;
            if (word === 'zero') {
                word = ''
                result.push(0);
            }
            else if (word === 'one') {
                word = ''
                result.push(1);
            }
            else if (word === 'two') {
                word = ''
                result.push(2);
            }else if (word === 'three') {
                word = ''
                result.push(3);
            }else if (word === 'four') {
                word = ''
                result.push(4);
            }else if (word === 'five') {
                word = ''
                result.push(5);
            }else if (word === 'six') {
                word = ''
                result.push(6);
            }else if (word === 'seven') {
                word = ''
                result.push(7);
            }else if (word === 'eight') {
                word = ''
                result.push(8);
            }else if (word === 'nine') {
                word = ''
                result.push(9);
            }
        }
    })
    return Number(result.join(''));
}