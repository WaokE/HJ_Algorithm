function solution(s) {
    let stack = [];
    let first = 0;
    let second = 0;
    let result = 0;
    
    [...s].forEach((alphabet) => {
        if (first === second && first !== 0) {
            result++;
            first = 0;
            second = 0;
            stack = [];
        }
        if (stack.length === 0) {
            stack.push(alphabet);
            first++;
        }
        else {
            if (stack[0] === alphabet) {
                stack.push(alphabet);
                first++;
            }
            else {
                stack.push(alphabet);
                second++;
            }
        }
    })
    if (stack !== []) {
        result++;
    }
    return result;
}