function solution(r1, r2) {
    let result = 0;
    for(let x = 1;x<=r2;x++){
        let r2Height = Math.floor(Math.sqrt(r2**2 - x**2));
        let r1Height;
        if(r1>x){
            r1Height = Math.ceil(Math.sqrt(r1**2 - x**2));
        }
        else{
            r1Height = 0;
        }
        result+= (r2Height - r1Height + 1);
    }
    return result*4;
}