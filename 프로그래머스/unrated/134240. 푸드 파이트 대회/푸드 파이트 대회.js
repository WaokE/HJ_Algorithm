function solution(food) {
    const foodData = [];
    for (let i=1;i<food.length;i++) {
        const frequency = Math.floor(food[i] / 2);
        foodData.push(frequency);
    }
    
    const result = [];
    for (let i=0;i<foodData.length;i++) {
        for (let j=0;j<foodData[i];j++) {
            result.push(i + 1);
        }
    }
    result.push(0);
    for (let i=foodData.length - 1;i>=0;i--) {
        for (let j=0;j<foodData[i];j++) {
            result.push(i + 1);
        }
    }
    return result.join('');
}