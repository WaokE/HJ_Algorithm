function solution(weights) {
    let result = 0;
    const weightData = {}; 
    const possibleWeights = [1, 3/2, 2, 4/3]; 

    weights.sort((a,b)=> b - a).forEach((w) => { 
        let s;
        possibleWeights.forEach((i)=>{
            if( s = w * i, weightData[s] ){ 
              result += weightData[s];
            }
        });
        if (!weightData[w]) weightData[w] = 1;
        else weightData[w]++;
    });
    return result;
}