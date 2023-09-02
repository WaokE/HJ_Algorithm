function solution(s){
    let p_count = 0;
    let y_count = 0;
    
    [...s].forEach((char) => {
        if (char === 'p' || char === 'P') p_count++;
        if (char === 'y' || char === 'Y') y_count++;
    })
    
    return p_count === y_count ? true : false;
}