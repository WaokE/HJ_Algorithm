function solution(friends, gifts) {
    const result = friends.reduce((acc, currentValue, index) => {
        acc[currentValue] = 0;
        return acc;
    }, {});
    
    const giftData = friends.reduce((acc, currentValue, index) => {
        acc[currentValue] = {};
        return acc;
    }, {});

    gifts.forEach((data) => {
        const [from, to] = data.split(" ");
        giftData[from][to] ? giftData[from][to]++ : (giftData[from][to] = 1);
        giftData[to][from] ? giftData[to][from]-- : (giftData[to][from] = -1);
    });

    for (let i=0;i<friends.length;i++) {
        for (let j=i+1;j<friends.length;j++) {
            const person1 = friends[i];
            const person2 = friends[j];
            if (giftData[person1][person2] === undefined || giftData[person1][person2] === 0) {
                const giftIndex1 = getGiftIndex(person1);
                const giftIndex2 = getGiftIndex(person2);
                
                if (giftIndex1 === giftIndex2) continue;
                if (giftIndex1 > giftIndex2) result[person1]++;
                else result[person2]++;
            }
            else {
                if (giftData[person1][person2] > 0) {
                    result[person1]++;
                }
                else {
                    result[person2]++;
                }
            }
        }
    }
    
    return Math.max(...Object.values(result))
    
    function getGiftIndex(userName) {
        let result = 0;
        for (let targetUser in giftData[userName]) {
            result += giftData[userName][targetUser];
        }
        return result;
    }
}
