function solution(numbers, hand) {
    const phone = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
    let leftFingerPos = [3, 0];
    let rightFingerPos = [3, 2];
    const result = [];
    
    numbers.forEach((number) => {
        if (number === 0) number = 11;
        
        const target = [Math.floor((number - 1) / 3), (number - 1) % 3];
        
        const [leftRow, leftCol] = leftFingerPos;
        const [rightRow, rightCol] = rightFingerPos;
        
        const leftDistance = Math.abs(leftRow - target[0]) + Math.abs(leftCol - target[1]);
        const rightDistance = Math.abs(rightRow - target[0]) + Math.abs(rightCol - target[1]);
        
        if (target[1] === 0 || target[1] === 2) {
            if (target[1] === 0) {
                result.push('L');
                leftFingerPos = [target[0], target[1]];
            }
            else {
                result.push('R');
                rightFingerPos = [target[0], target[1]];
            }
        }
        else if (leftDistance === rightDistance) {
            if (hand === 'right') {
                result.push('R');
                rightFingerPos = [target[0], target[1]];
            }
            else {
                result.push('L');
                leftFingerPos = [target[0], target[1]];
            }
        } 
        else if (leftDistance > rightDistance) {
            result.push('R');
            rightFingerPos = [target[0], target[1]];
        }
        else if (leftDistance < rightDistance) {
            result.push('L');
            leftFingerPos = [target[0], target[1]];
        }
    })
    return result.join('');
}