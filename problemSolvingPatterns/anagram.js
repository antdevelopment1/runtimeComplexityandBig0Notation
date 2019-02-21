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
