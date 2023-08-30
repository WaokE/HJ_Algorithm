function solution(participant, completion) {
    const onMarathon = {};
    
    participant.forEach((player) => {
        onMarathon[player] ? onMarathon[player]++ : onMarathon[player] = 1;
    })
    
    completion.forEach((player) => {
        onMarathon[player] === 1 ? delete onMarathon[player] : onMarathon[player]--;
    })
    
    return Object.keys(onMarathon)[0];
}