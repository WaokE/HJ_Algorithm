function solution(new_id) {
    let result = new_id;
    
    result = result.toLowerCase();
    result = result.replace(/[^a-z0-9-_.]/g, '');
    let temp = [];
    for (let i=0;i<result.length;i++) {
        if (!(temp[temp.length - 1] === '.' && result[i] === '.')) temp.push(result[i]);
    }
    if (temp[0] === '.') temp.shift();
    if (temp[temp.length - 1] === '.') temp.pop();
    if (temp.length === 0) temp = ['a'];
    if (temp.length > 15) temp = temp.slice(0, 15);
    if (temp[temp.length - 1] === '.') temp.pop();
    if (temp.length < 3) {
        while (temp.length < 3) {
            temp.push(temp[temp.length -1]);
        }
    }
    
    result = temp.join('');
     
    
    return result;
}