function permutations(inputString) {
    
    if (inputString.length <= 1) {
        return true;
    }
    //We create an object that will hold letters and the number of each in the inputString
    var letters={};
    for (var i = 0; i < inputString.length; i++) 
    /* If the letter doesn't exist (undefined) we setup to 1 otherwise we increment the letter count*/
        (!letters[inputString[i]]) ? letters[inputString[i]] = 1 : letters[inputString[i]]++; 
    
    //Variable to check if there is a letter left
    var left = 0; 

    // inputString with even number of letter 
    if ( (inputString.length % 2) == 0) {
        for (var letter in letters) {
          if ((letters[letter] % 2) != 0) 
            return false;    
        }
    }
    else {
      // inputString with odd number of letters 
        for (var letter in letters) {
            if ((letters[letter] % 2) != 0) 
                left++;
        }
    }
  
    /* If there is more than one letter left, any permutation of the inputString will not lead to a palindrome */
    if (left != 1){
      return false;
    }
    /* Otherwise there is a permutation that will be a palindrome */
    return true;
}
