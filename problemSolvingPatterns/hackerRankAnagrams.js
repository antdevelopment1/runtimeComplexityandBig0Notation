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
        if ((secondString.includes(letter))) {
            let splitString = secondString.split("");
            console.log(splitString)
            // console.log(secondString.indexOf(letter))
            let result = splitString.splice(secondString.indexOf(letter), 1)
            console.log(splitString)
        }
        console.log(splitString)

        // for (let j = 0; j < secondString.length; j++) {
        //     let letter = secondString[j];
        // }
    }
   

    return count;
}
    
console.log(anagram('fdhlvosfpafhalll'))
