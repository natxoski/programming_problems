function perfCheckPermutations(inputString){
  // Empty input strings or with only 1 letter are palindromes.
  // Don't waste processing power. 
  if (inputString<=1) return true;
  
  //Process input string.
  let letters={};
  for (const letter of inputString){
    (letters[letter]) ? letters[letter]++ : letters[letter]=1;
  }
  // We check for the letters that are left only.
  let left=0;
  for (const letter in letters){
    if ( (letters[letter]%2) === 1) left++;
    // More than 1 letter left means that any permutation of the inputString will not lead to a palindrome. 
    //Don't waste processing power.
    if (left>1) return false;
  }
  // If left is 0 or 1 there is at least one permutation of the inputString that will be a palindrome.
  return true; 
}
//We can check time performance with console.time
console.time('performance');
console.log(perfCheckPermutations('dabalearrozalazorraelabad'));
console.timeEnd('performance');

console.log(perfCheckPermutations('civic'));
console.log(perfCheckPermutations('civil'));
console.log(perfCheckPermutations('ivicc'));
