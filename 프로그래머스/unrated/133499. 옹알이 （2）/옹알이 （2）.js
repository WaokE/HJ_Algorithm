function solution(babbling) {
    let result = 0;
    babbling.forEach((word) => {
        let babblingStack = [];
        let prevWord = '';
        for (let i=0;i<word.length;i++) {
            babblingStack.push(word[i]);
            
            if (babblingStack.length > 3) {
                break;
            }
            else if (babblingStack.length === 3) {
                if ((babblingStack.join('') === 'aya' ||
                    babblingStack.join('') === 'woo') &&
                    babblingStack.join('') !== prevWord) {
                    prevWord = babblingStack.join('');
                    babblingStack = [];
                }
            }
            else if (babblingStack.length === 2) {
                if ((babblingStack.join('') === 'ye' ||
                    babblingStack.join('') === 'ma') &&
                    babblingStack.join('') !== prevWord) {
                    prevWord = babblingStack.join('');
                    babblingStack = [];
                }
            }
        }
        if (babblingStack.length === 0) result++;
    })
    return result;
}