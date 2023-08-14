function solution(players, callings) {
    let ranking = new Map();
    for (let i = 0; i < players.length; i++) {
        ranking[players[i]] = i  ;
    }
    let result = players
    for (let i=0;i<callings.length;i++) {
        const calledPlayer = callings[i];
        const calledPlayerCurrentOn = ranking[calledPlayer];
        
        ranking[calledPlayer] = calledPlayerCurrentOn - 1;
        ranking[result[calledPlayerCurrentOn - 1]] = calledPlayerCurrentOn 
        
        result[calledPlayerCurrentOn] = result[calledPlayerCurrentOn - 1];
        result[calledPlayerCurrentOn - 1] = calledPlayer;
    }
    return result
}