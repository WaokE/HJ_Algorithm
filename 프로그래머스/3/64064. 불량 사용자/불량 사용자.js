function checkBannable(userId, banPattern) {
    if (userId.length !== banPattern.length) return false;
    const length = userId.length;
    for (let i=0;i<length;i++) {
        if (banPattern[i] === '*' || banPattern[i] === userId[i]) continue;
        return false;
    }
    return true;
}

function solution(user_id, banned_id) {
    const seenList = new Set();
    const selected = new Array(user_id.length).fill(false);
    const searchQ = [[0, selected]];
    while (searchQ.length > 0) {
        const [targetIndex, selected] = searchQ.pop();
        if (targetIndex === banned_id.length) {
            if (seenList.add(JSON.stringify(selected)));
            continue;
        }
        const banPattern = banned_id[targetIndex];
        for (let i=0;i<user_id.length;i++) {
            if (selected[i]) continue;
            const userId = user_id[i];
            if (checkBannable(userId, banPattern)) {
                const newSelected = [...selected];
                newSelected[i] = true;
                searchQ.push([targetIndex + 1, newSelected])
            }
        }
    }
    return seenList.size;
}