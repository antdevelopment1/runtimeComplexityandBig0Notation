// Implement a function which accepts varible number of arguments, and checks whether there are any duplicates among the arguments passed in.

// Frequency Counter Pattern
function areThereDuplicates() {
    // We initialize an empty object
    let collection = {};

    // We loop through the number of arguments passed in when we invoke the functions by using the arguments object created by javascript
    for (let val in arguments) {
        // We save the value for each key to equal +1 if it is already inside the object or set it to 0 plus one if is not inside the object
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }

    // We loop through each key in the collection
    for (let key in collection) {
        // If the keys value is larger than 1 than we return true
        if (collection[key] > 1) {
            return true;
        }
    }

    // Otherwise return false
    return false;
}

console.log(areThereDuplicates(1,2,2,5,6,7,7));

// Mutilple Pointer Pattern
//  function areThereDuplicates(...args) {
//         // Two pointers
//     args.sort((a,b) => a > b);
//     let start = 0;
//     let next = 1;
//     while(next < args.length){
//         if(args[start] === args[next]){
//             return true
//         }
//         start++
//         next++
//     }
//     return false
// }

function areThereDuplicates(...args) {
    //   Write a sorted function that sorts the arguments
    args.sort(function(a, b) {
        return a + b;
    }) 
    // Save first pointer in varible and set it to 0 to hold the value that will target the fisrt spot in the array.
    let first = 0;
    // Save second pointer in variable and set it to 1 to hold the value that will target the second spot in the array.
    let second  = 1;
    
    // Create a while loop that keeps looping while the value of second is less than the length of the args array
    while (second < args.length) {
        // Checks to see if the first index is the same as the second index
        if (args[first] === args[second]) {
            // If so return true
            return true;
        } else {
            // Otherwise we increment the first and second variables by one and do it all again until the full length of the array or we find a match
            first++;
            second++;
        }
    }
    return false;
}

console.log(areThereDuplicates(1,2,5,6,7));

