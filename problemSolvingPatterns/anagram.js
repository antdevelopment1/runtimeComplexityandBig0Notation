// function validAnagram(first, second) {

//     // Checks if words are the same length
//     if (first.length !== second.length) {
//         return false;
//     }

//     // Creates an emoty object to store letter count as key value pairs
//     const lookup = {};

//     // Loops through first word to create letter count inside an object
//     for (let i = 0; i < first.length; i++) {
//         let letter = first[i];
//         // If the letter exsists, increment by 1 otherwise set to 1
//         lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }

//     // Loops through second word to decrement matching letters
//     for (let i = 0; i < second.length; i++) {
//         let letter = second[i];
//         // If we can't find the letter or the letter is 0 than our input is not an anagram
//         if (!lookup[letter]) {
//             return false;
//         } else {
//             lookup[letter] -= 1;
//         }
       
//     }
//     // return true;
// }

// validAnagram('racecar', 'carfact');


// Given a string, return the character that is most
// commonly used in the string.
// function charCount(str) {

//     // Create an empty object
//     const obj = {};
//     // Create a temp variable
//     let temp = 0;
//     let currentLetter = '';

//     // Loop of the string
//     for (let i = 0; i < str.length; i++) {
//         let letter = str[i].toLowerCase();
//         // Check if the current value is inside the object
//         if (obj[letter]) {
//             // If it is add 1
//             obj[letter] += 1;
//         } else {
//             // Else set it equal to 1
//             obj[letter] = 1;
//         }
//         // obj[' '] = 0;
//     }

//     // Loop through the object
//     for (let keys in obj) {
//         // Check if the current value we are looping over is greater than out temp value

//         if (obj[keys] > temp) {
//             // If it is then reassign the the temp variable
//             temp = obj[keys]
//             currentLetter = keys;
//         }

//         returnValue = `${currentLetter}:${temp}`
//     }

//     return returnValue;

// }

// console.log(charCount("hello there how are you"));


// Helper Function Anagram Solution
function anagram(stringA, stringB) {
    let obj1 = charObj(stringA);
    let obj2 = charObj(stringB);

    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(anagram("racecar", "carrace"))

function charObj(str) {
    const obj = {};

    for (let char of str.replace(/[^\w]/g, ''.toLowerCase())) {
        obj[char] = obj[char] + 1 || 1;
    }

    return obj;
}

// Another alternative for solving an anagram using a helper function
function anagram(stringA, stringB) {
    let string1 = helperFunction(stringA);
    let string2 = helperFunction(stringB);
    console.log(string1)
    console.log(string2)

    return string1 === string2;
}

function helperFunction(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split("").sort().join("");
}


console.log(anagram("racecar", "carrace"))
