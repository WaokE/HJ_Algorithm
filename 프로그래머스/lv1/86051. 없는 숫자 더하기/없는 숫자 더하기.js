function solution(numbers) {
    const numberData = new Array(10).fill(0);
    for (let i=0;i<numbers.length;i++) {
        numberData[numbers[i]]++;
    }
    
    let result = 0;
    for (let i=0;i<numberData.length;i++) {
        if (numberData[i] === 0) result += i;
    }
    
    return result;
}