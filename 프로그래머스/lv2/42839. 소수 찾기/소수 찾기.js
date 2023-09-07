function isPrime(num) {
  if(num <= 1) { 
    return false;
  }

  if( num % 2 === 0) { 
    return num === 2 ? true : false;
  }
 
  const sqrt = parseInt(Math.sqrt(num));

  for( let divider = 3; divider <= sqrt; divider += 2) {

    if(num % divider === 0) {
      return false;
    }
    
  }
  
  return true;


}

function getPermutation (arr, numb) {
    const result = [];
    
    function permu (picked, left) {
        if (picked.length === numb)         {
            result.push(picked);
            return;
        }
        
        for (let i=0;i<left.length;i++) {
            const newPicked = [...picked]
            newPicked.push(left[i]);
            const newLeft = [...left]
            newLeft.splice(i, 1);
            permu (newPicked, newLeft)
        }
    }
    
    for (let i=0;i<arr.length;i++) {
        const picked = [arr[i]];
        const left = [...arr];
        left.splice(i, 1);
        permu(picked, left);
    }
    
    return result;
}

function solution(numbers) {
    let result = 0;
    const possible = new Set();
    for (let i=1;i<=numbers.length;i++) {
    const permus = getPermutation(numbers, i);
        
        permus.forEach((numb) => {
            if (isPrime(Number(numb.join('')))) possible.add(Number(numb.join('')))
        })
    }
    return possible.size
}
