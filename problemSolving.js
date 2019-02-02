// Techniques to solving problems
// Write a function that takes two numbers and returns their sum
// =================================
// Understanding the Problem Step 1:
// =================================
// Can I restate the problem into my won words

// What are the input that go into the problem

// What are the outputs that should come from the solution of the problem

// Can the outputs be determined from the inputs? In other words do I have enough infornmation to solve thr problem

// How should I label the important pieces of data that are part of the problem

// ==========================
// Concrete Examples Step 2:
// ==========================

// Write a function that takes a string and returns counts of each character in the string

// Start with simple examples

// Progress to more complex examples

// Explore examples with empty inputs

// Explore examples with invalid inputs



// =====================
// Break It Down Step 3:
// =====================

// Write a function that takes a string and returns counts of each character in the string

// function charCount(str) {

    // Make an object to return to the end

    // Lower case input

    // Evalute each letter inside of string
        // If the character is a number/letter and is a key in object, add one to count
        // If the character is a number/letter and is not a key in the object, add it to the object and set its value to 1
        // If the character is something else  (space, period, ...etc) don't do anything

    // Return an object with each letter and the correct count as the output
// }


function charCount(str) {

    var object = {};

    for (var char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            object[char] = ++object[char] || 1;
        }
    }

    console.log(object);

}

function isAlphaNumeric(char) {

    var code = char.charCodeAt(0);

    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code >96 && code < 123)) {
            return false;
        } else {
            return true;
        }
}

charCount('hello how are you there I\'m doing really well. How about you?');