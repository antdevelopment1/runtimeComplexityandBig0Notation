// Quadratic Solution O(N*2)

// function same(arr1, arr2) {

//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     for (var i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if (correctIndex === -1) {
//             console.log(false);
//             return false;
//         }
//         console.log(arr2);
//         arr2.splice(correctIndex, 1);
//     }

//    return true;
// }

// same([1,2,3,4], [1,4,9,16]);


// Refactored Code O(N) Linear as opposed to the quadratic one above Runtime Complexity
function same(arr1, arr2) {

    if (arr1.length !== arr1.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key**2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true;

}

same([1,2,3,4], [1,4,9,16]);