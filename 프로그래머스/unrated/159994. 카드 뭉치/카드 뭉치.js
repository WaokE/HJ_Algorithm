function solution(cards1, cards2, goal) {
    let cards1Pointer = 0;
    let cards2Pointer = 0;
    
    for (let i=0; i<goal.length; i++) {
        const word = goal[i];
        const leftCards1 = cards1.slice(cards1Pointer);
        const leftCards2 = cards2.slice(cards2Pointer);
        
        if (leftCards1[0] === word) {
            cards1Pointer = cards1.indexOf(word) + 1;
        }
        else if (leftCards2[0] === word) {
            cards2Pointer = cards2.indexOf(word) + 1;
        }
        else {
            return "No"
        }
    }
    return "Yes"
}
