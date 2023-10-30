function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];
    if (current % 2 === 0) {
        answer.push(current + 1); 
    } 
    else {
        current = "0" + current.toString(2);
        let totalLength = current.length;
        for (let j = totalLength - 1; j >= 0; j--) {
        if (+current[j] === 0) {
          answer.push(
            parseInt(
              current.substring(0, j) +
                "10" +
                current.substring(j + 2, totalLength),
              2
            )
          );
          break;
    }
      }
    }
  }

  return answer;
}