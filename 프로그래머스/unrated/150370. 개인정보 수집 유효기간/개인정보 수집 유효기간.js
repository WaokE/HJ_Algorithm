function calculateDays (date) {
    const dateArr = date.split('.');
    const year = dateArr[0];
    const month = dateArr[1];
    const day = dateArr[2];
    
    return Number(Number(day) + (Number(month)*28) + (Number(year)*28*12))
}

function solution(today, terms, privacies) {
    const termsObj = {};
    terms.forEach((term) => {
        const termArray = term.split(' ');
        termsObj[termArray[0]] = Number(termArray[1]);
    })
    
    const result = [];
    const todayDays = calculateDays(today);
    for (let i=0; i<privacies.length; i++) {
        const data = privacies[i];
        const dataArray = data.split(' ');
        const enterDay = dataArray[0];
        const termsType = dataArray[1];
        
        const expireDay = calculateDays(enterDay) + (termsObj[termsType]*28)
        if (expireDay <= todayDays) result.push(i + 1)
    }
    return result;
}