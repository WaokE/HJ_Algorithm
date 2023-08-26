function solution(ingredient) {
    const hamburgerStack = [];
    const completeHamburger = [0,1,3,2,1];
    let result = 0;
    
    ingredient.forEach((ingredient) => {
        hamburgerStack.push(ingredient);
        if (hamburgerStack.length > 3) {
            let isHamburger = true;
            for (let i=1;i<=4;i++) {
                if (!(hamburgerStack[hamburgerStack.length - i] === completeHamburger[i])) {
                    isHamburger = false;
                    break;
                }
            }
            if (isHamburger) {
                for (let i=0;i<4;i++) {
                    hamburgerStack.pop();
                }
                result++;
            }
        }
    })
    return result;
}