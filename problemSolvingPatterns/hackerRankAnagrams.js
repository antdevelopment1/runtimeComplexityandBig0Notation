// Create a function called anagram that expects a string
function anagram(str) {
    let middle  = str.length / 2 - 1;
    let splitString = str.split("");
    let firstString = "";
    let secondString = "";
    let pointerOne = 0;
    let pointerTwo = splitString.length - 1;
    let count = 0;

    // Checks if the length of the string even or odd
    if (str.length % 2 !== 0) {
        return -1;
    }

    let obj = {};

    // Set up a for loop that loops through the word and saves them into two seperate words
    for (let i = 0; i < splitString.length; i++) {
        // Check if index is less than or equal to the middle
        if (i <= middle) {
            firstString += splitString[i];
        } else if (i > middle) {
            secondString += splitString[i];
        }
    }

    // Loops through the first word to check if each character is in the object
    for (let  i = 0; i < firstString.length; i++) {
        let letter = firstString[i];
        // If it is we increment it plus 1
        if (obj[letter]) {
            obj[letter] += 1;
        // Otherwise we set it equal to 1
        } else {
            obj[letter] = 1;
        }
    }

    // Loops through the second word in the string and checks if that is in the string. If it is we subtract 1
    // If it isnt we we do nothing only because of the nature of this problem. For a traditional anagram solution
    // We would return false because not find the letter in the first world mean the two words dont match and are not anagrams
    // of one another. But this problem asks us to return the value of changed letters needed to make the two words 
    // anagrams of one another.
    for (let  i = 0; i < secondString.length; i++) {
        let letter = secondString[i];
        if (!obj[letter]) {}
        else {
            obj[letter] -= 1;
        }
    }

    // We loop through the object after we decrement from it the found letter. The remain vlaues of the keys
    // are the number of changes that will need to be made and we accumulate the total into a varable and return the value
    for (let key in obj) {
        count += obj[key];
    }
    // console.log(obj)
   
    // We return the count for the number of different characters that will be needed to get them to anagrams of each other
    return count;
}
    
console.log(anagram('aaabbb'))
