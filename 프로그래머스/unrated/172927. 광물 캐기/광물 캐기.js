function solution(picks, minerals) {
    const DFSStack = [[picks, minerals, 0]];
    let minTired = Infinity;
    while (DFSStack.length > 0) {
        const [picks, minerals, tired] = DFSStack.pop();
        if (picks.reduce(((sum, prev) => sum + prev), 0) === 0 || minerals.length === 0) {
            if (minTired > tired) minTired = tired; 
            continue;
        }
        
        if (tired > minTired) continue;
        
        if (picks[0] > 0) {
            const newPick = [...picks];
            const newMinerals = [...minerals];
            newPick[0]--;
            let tire = 0;
            for (let i=0;i<5;i++) {
                if (newMinerals.length > 0) {
                    newMinerals.shift();
                    tire++;
                }
            }
            DFSStack.push([newPick, newMinerals, tired + tire])
        }
        if (picks[1] > 0) {
            const newPick = [...picks];
            const newMinerals = [...minerals];
            newPick[1]--;
            let tire = 0;
            for (let i=0;i<5;i++) {
                if (newMinerals.length > 0) {
                    const mined = newMinerals.shift();
                    switch (mined) {
                        case 'diamond':
                            tire += 5;
                            break;
                        case 'iron':
                            tire += 1;
                            break;
                        case 'stone':
                            tire += 1;
                    }
                }
            }
            DFSStack.push([newPick, newMinerals, tired + tire])
        }
        if (picks[2] > 0) {
            const newPick = [...picks];
            const newMinerals = [...minerals];
            newPick[2]--;
            let tire = 0;
            for (let i=0;i<5;i++) {
                if (newMinerals.length > 0) {
                    const mined = newMinerals.shift();
                    switch (mined) {
                        case 'diamond':
                            tire += 25;
                            break;
                        case 'iron':
                            tire += 5;
                            break;
                        case 'stone':
                            tire += 1;
                    }
                }
            }
            DFSStack.push([newPick, newMinerals, tired + tire])
        }
    }
    return minTired;
}