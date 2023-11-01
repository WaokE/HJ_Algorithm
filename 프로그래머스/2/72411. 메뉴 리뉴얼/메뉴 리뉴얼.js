function generateCombinationsOfLength(inputString, length) {
  const combinations = [];

  function combine(prefix, remaining, k) {
    if (k === 0) {
      const sorted = prefix.split('').sort().join('');
      combinations.push(sorted);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        const nextPrefix = prefix + remaining[i];
        const nextRemaining = remaining.substring(i + 1);
        combine(nextPrefix, nextRemaining, k - 1);
      }
    }
  }

  combine('', inputString, length);

  return combinations;
}

function solution(orders, course) {
    const result = [];
    const orderData = {};
    course.forEach((courseLength) => {
        orderData[courseLength] = {};
    })
    orders.forEach((order) => {
        course.forEach((orderLength) => {
            const combinations = generateCombinationsOfLength(order, orderLength);
            combinations.forEach((comb) => {
                orderData[comb.length][comb] ? orderData[comb.length][comb]++ : orderData[comb.length][comb] = 1;
            })
        })
    })
    
    for (let orderLength in orderData) {
        const courses = orderData[orderLength];
        const callCounts = Object.values(courses);
        const maxCall = Math.max(...callCounts);

        for (const key in courses) {
            if (courses.hasOwnProperty(key) && courses[key] === maxCall && courses[key] > 1) {
              result.push(key);
            }
        }
    }
    result.sort();
    return result;
}