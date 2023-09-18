function solution(brown, yellow) {
  const total = brown + yellow;
  let result;  
  
  for (let width = 1; width <= Math.sqrt(total); width++) {
    if (total % width === 0) {
      const height = total / width;
      if ((width - 2) * (height - 2) === yellow) {
        const result = [width, height];
        result.sort((a, b) => b- a);
        return result
      }
    }
  }
}
