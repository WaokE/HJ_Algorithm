function solution(order) {
    let result = 0;
    let currentBox = 1;
    const subBelt = [];
    for (let i=0;i<order.length;i++) {
        const orderBox = order[i];
        if (currentBox < orderBox) {
            while (currentBox < orderBox) {
                subBelt.push(currentBox);
                currentBox++;
            }
            result++;
            currentBox++;
        } 
        else if (currentBox > orderBox) {
            const boxOnSubBelt = subBelt[subBelt.length-1];
            if (boxOnSubBelt === orderBox) {
                subBelt.pop();
                result++;
            }
            else {
                return result;
            }
        }
        else {
            result++;
            currentBox++;
        }
    }
    return result;
}