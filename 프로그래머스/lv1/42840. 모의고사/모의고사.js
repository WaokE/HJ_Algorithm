function solution(answers) {
    const pattern1 = [1,2,3,4,5];
    const pattern2 = [2,1,2,3,2,4,2,5];
    const pattern3 = [3,3,1,1,2,2,4,4,5,5];
    
    let first = 0;
    let firstIndex = 0;
    let second = 0;
    let secondIndex = 0;
    let third = 0;
    let thirdIndex = 0;
    answers.forEach((number) => {
        if (number === pattern1[firstIndex]) first++;
        firstIndex === pattern1.length - 1 ? firstIndex = 0 : firstIndex++;
        if (number === pattern2[secondIndex]) second++;
        secondIndex === pattern2.length - 1 ? secondIndex = 0 : secondIndex++;
        if (number === pattern3[thirdIndex]) third++;
        thirdIndex === pattern3.length - 1 ? thirdIndex = 0 : thirdIndex++;
    })
    
    const maxScore = Math.max(first, second, third);
    const result = [];
    first === maxScore && result.push(1);
    second === maxScore && result.push(2);
    third === maxScore && result.push(3);
    
    return result;
}