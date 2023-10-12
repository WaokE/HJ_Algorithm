function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}


function solution(want, number, discount) {
    let result = 0;
    const wantData = {};
    for (let i=0;i<want.length;i++) wantData[want[i]] = number[i];
    
    const checkData = {};
    for (let i=0;i<10;i++) checkData[discount[i]] ? checkData[discount[i]]++ : checkData[discount[i]] = 1;
    for (let i=10;i<=discount.length;i++) {
        if (areObjectsEqual(checkData, wantData)) result++;
        
        checkData[discount[i - 10]] === 1 ? delete checkData[discount[i - 10]] : checkData[discount[i - 10]]--;
        checkData[discount[i]] ? checkData[discount[i]]++ : checkData[discount[i]] = 1;
    }
    return result
}