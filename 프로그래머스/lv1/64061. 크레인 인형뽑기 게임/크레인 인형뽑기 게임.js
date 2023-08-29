let result = 0;

function popStack (stack) {
    if ((stack.length > 1) && (stack[stack.length - 1] === stack[stack.length - 2])) {
        stack.pop();
        stack.pop();
        result += 2;
        popStack(stack);
    }
}

function solution(board, moves) {
    const lines = [];
    for (let i=0;i<board[0].length;i++) lines.push([]);
    for (let i=board.length - 1;i>=0;i--) {
        const current = board[i];
        for (let j=0;j<current.length;j++) {
            if (current[j] !== 0) lines[j].push(current[j]);
        }
    }

    const prizeStack = [];
    moves.forEach((move) => {
        if (lines[move - 1].length>0) prizeStack.push(lines[move - 1].pop());
        popStack(prizeStack);
    })
    
    return result;
}