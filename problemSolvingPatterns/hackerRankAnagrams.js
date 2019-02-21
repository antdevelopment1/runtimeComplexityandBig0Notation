// Create a function called anagram that expects a string
function anagram(str) {
    let middle  = str.length / 2 - 1;
    let splitString = str.split("");
    let firstString = "";
    let secondString = "";

    // Checks if the length of the string even or odd
    if (str.length % 2 !== 0) {
        return -1;
    }

    // Set up a for loop that loops through the word
    for (let i = 0; i < splitString.length; i++) {
        // Check if index is less than or equal to the middle
        if (i <= middle) {
            firstString += splitString[i];
        } else if (i > middle) {
            secondString += splitString[i];
        }
    }

    // Create a first empty object
    let firstObj = {};
    // Create a second empty object
    let secondObj = {};
    // Create an empty count
    let count = 0;
    

    // Create a for loop that loops through first string
    for (let i = 0; i < firstString.length; i++) {
        // We check to see if the value we are currently looping over is in the object
        if (firstObj[firstString[i]]) {
            // If it is increment the keys value by 1
            firstObj[firstString[i]] += 1;
        } else {
            // Otherwise set it = to 1
            firstObj[firstString[i]] = 1;
        }
    }
    console.log(firstObj)
    // Create a for loop that loops through second string
    for (let i = 0; i < secondString.length; i++) {
        // We check to see if the value we are currently looping over is in the object
        if (secondObj[secondString[i]]) {
            secondObj[secondString[i]] += 1
            // If it is increment the keys value by 1
        } else {
        // Otherwise set it = to 1
        secondObj[secondString[i]] = 1;
        }
    }
    console.log(secondObj)

    // We loop through the object
    for (let key in firstObj) {
        console.log(key)
        // if (!(key in secondObj)) {
        //     count += 1;
        // }
        // If the current value is in the second object and the keys value is equal to 1 delete it from the other obejct
        // If the current value is in the object but the keys value is greater than 1 subtract 1 from the keys value
        // If the current value is not the second object we want to reassign that value to the value in the second object and remove it and increment count + 1
    }

    // Return count
    return count;
}
    
console.log(anagram('aaabbb'))
