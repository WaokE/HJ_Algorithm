function solution(prices) {
    const result = new Array(prices.length);
    const stack = [];
    
    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            const prevTime = stack.pop();
            result[prevTime] = i - prevTime;
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        const prevTime = stack.pop();
        result[prevTime] = prices.length - 1 - prevTime;
    }
    
    return result;
}
