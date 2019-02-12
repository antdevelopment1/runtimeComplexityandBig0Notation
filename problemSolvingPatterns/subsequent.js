function isSubsequence(str1, str2) {
    // Create first counter
    var i = 0;
    // Create the second counter
    var j = 0;

    // Check if there is an empty string and consider that valid
    if (!str1) return true;

    // Run a while loop while our second pointer < length of the second string passed as an argument
    while (j < str2.length) {
      // Check to see any letters in  our second word are the same as in our first word and if so we increment by 1
      if (str2[j] === str1[i]) i++;
      // If we were able to increment i until the point where it equals the length of the first string then we return true because we
      //  were able to cylce through the whole word and if it's not true yet we just increment j++ 
      if (i === str1.length) return true;
     //   Increment j
      j++;
    }
    // If we don't return true under any circumstances than we return false as opposed to undefined
    return false;
}

console.log(isSubsequence("", "hello there"));