function solution(s)
{
    const stack = [];
    for (let i=0;i<s.length;i++) {
        const char = s[i];
        stack.push(char);
        while (stack.length > 0 && stack[stack.length - 1] === stack[stack.length - 2]) {
            stack.pop();
            stack.pop();
        }
    }
    return stack.length === 0 ? 1 : 0;
}