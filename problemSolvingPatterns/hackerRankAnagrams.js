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
    let obj2 = {};

    // Set up a for loop that loops through the word
    for (let i = 0; i < splitString.length; i++) {
        // Check if index is less than or equal to the middle
        if (i <= middle) {
            firstString += splitString[i];
        } else if (i > middle) {
            secondString += splitString[i];
        }
    }

    for (let i = 0; i < firstString.length; i++) {
        let letter = firstString[i];
        if (!(secondString.includes(letter))) {
            count++;
        }   
    }

    for (let  i = 0; i < firstString.length; i++) {
        let letter = firstString[i];
        if (obj[letter]) {
            obj[letter] += 1;
        } else {
            obj[letter] = 1;
        }
    }

    for (let  i = 0; i < secondString.length; i++) {
        let letter = secondString[i];
        if (obj2[letter]) {
            obj2[letter] += 1;
        } else {
            obj2[letter] = 1;
        }
    }
    // Create an object out of the first string instead of the second string
    // If any keys values in the onject are greater than 1 and inside the second string
    for (let key in obj) {
        if (obj[key] > 1 && secondString.includes(key) && (!(obj[key] === obj2[key]))) {
            obj[key] -= 1;
            count += obj[key];
        }
    }
    
    return count;
}
    
console.log(anagram(''))
