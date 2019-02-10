// Implement a function which accepts varible number of arguments, and checks whether there are any duplicates among the arguments passed in.

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

