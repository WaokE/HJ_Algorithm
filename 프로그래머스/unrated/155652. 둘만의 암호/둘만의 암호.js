function solution(s, skip, index) {
    const originCode = [...s];
    const skipList = [...skip];
    let result = "";
  
  originCode.forEach((alphabet) => {
      let ascii = alphabet.charCodeAt(0);
      let count = 0;
      
      while (count < index) {
          ascii += 1;
          (ascii > 122) && (ascii = 97);
          
          !(skip.includes(String.fromCharCode(ascii))) && (count++);
      }
      result += String.fromCharCode(ascii);
  })
    return result;
}