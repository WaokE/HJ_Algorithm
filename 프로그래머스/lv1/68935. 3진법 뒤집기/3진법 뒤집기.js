function decimalToTernary(decimal) {
  if (decimal === 0) {
    return '0';
  }

  let result = '';

  while (decimal > 0) {
    const remainder = decimal % 3;
    result = remainder + result;
    decimal = Math.floor(decimal / 3);
  }

  return result;
}

function solution(n) {
    const ternary = decimalToTernary(n);
    const reversedTernary = [...ternary].reverse();
    let result = 0;
    
    for (let i=0;i<reversedTernary.length;i++) {
        result += reversedTernary[i] * (3**(reversedTernary.length - i - 1))   
    }
    return result;
}