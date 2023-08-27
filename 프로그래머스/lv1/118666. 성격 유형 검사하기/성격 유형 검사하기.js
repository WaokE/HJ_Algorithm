function solution(survey, choices) {
    const responseResult = {
        R : 0,
        T : 0,
        C : 0,
        F : 0,
        J : 0,
        M : 0,
        A : 0,
        N : 0,
    };
    
    for (let i=0;i<survey.length;i++) {
        const negativeSurvey = survey[i][0];
        const positiveSurvey = survey[i][1];
        const currentChoice = 4 - choices[i];
        
        if (currentChoice === 0) continue;
        currentChoice > 0 ? responseResult[negativeSurvey] += currentChoice : responseResult[positiveSurvey] -= currentChoice;
    }
    
    console.log(responseResult);
    
    const result = [];
    if (responseResult['R'] >= responseResult['T']) {result.push('R')}
    else {result.push('T')}
    
    if (responseResult['C'] >= responseResult['F']) {result.push('C')}
    else {result.push('F')}
    
    if (responseResult['J'] >= responseResult['M']) {result.push('J')}
    else {result.push('M')}
    
    if (responseResult['A'] >= responseResult['N']) {result.push('A')}
    else {result.push('N')}
    
    return result.join('');
}