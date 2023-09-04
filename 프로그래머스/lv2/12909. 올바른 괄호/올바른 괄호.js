function solution(s){
    const stack = [];
    [...s].forEach((char) => {
        stack.push(char);
        if (stack[stack.length - 1] === ')' && stack[stack.length - 2] === '(') {
            stack.pop();
            stack.pop();
        }
    })
    
    return stack.length === 0 ? true : false;
}