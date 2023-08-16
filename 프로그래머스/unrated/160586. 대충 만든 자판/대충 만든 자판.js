function solution(keymap, targets) {
    const keyData = {};
    for (let i=0;i<keymap.length;i++) {
        for (let j=0;j<keymap[i].length;j++) {
            if (keymap[i][j] in keyData) {
                if (keyData[keymap[i][j]] > j + 1) {
                    keyData[keymap[i][j]] = j + 1
                }
            }
            else {keyData[keymap[i][j]] = j + 1}
        }
    }
    
    
    let result = [];
    targets.forEach((target) => {
        let pushCount = 0;
        for (let i=0;i<target.length;i++) {
            if (target[i] in keyData) {
                pushCount += keyData[target[i]]
            }
            else {
                pushCount = -1;
                break
            }
        }
        result.push(pushCount)        
    })
    return result
}