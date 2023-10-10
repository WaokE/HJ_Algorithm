function checkBracketRight(bracket) {
  const checkStack = [];
  
  for (const char of bracket) {
    if (char === ']' || char === '}' || char === ')') {
      if (checkStack.length === 0) {
        return false; // 닫는 괄호가 먼저 나오는 경우
      }

      const lastOpenBracket = checkStack.pop();

      if (
        (char === ']' && lastOpenBracket !== '[') ||
        (char === '}' && lastOpenBracket !== '{') ||
        (char === ')' && lastOpenBracket !== '(')
      ) {
        return false; // 괄호 쌍이 아닌 경우
      }
    } else {
      checkStack.push(char);
    }
  }

  return checkStack.length === 0; // 여는 괄호와 닫는 괄호의 쌍이 모두 맞아야 true
}

function solution(s) {
    let result = 0;
    for (let i=0;i<s.length;i++) {
        const rotatedbrackets = s.slice(i) + s.slice(0, i);
        if (checkBracketRight(rotatedbrackets)) result++;
    }
    return result;
}