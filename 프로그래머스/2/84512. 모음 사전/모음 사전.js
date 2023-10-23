function generateVowelDictionary() {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  const dictionary = [];

  function backtrack(currentWord) {
    if (currentWord.length > 5) {
      return;
    }

    dictionary.push(currentWord);

    for (let vowel of vowels) {
      backtrack(currentWord + vowel);
    }
  }

  backtrack('');

  return dictionary;
}

function solution(word) {
    const dict = generateVowelDictionary();
    return dict.indexOf(word)
}