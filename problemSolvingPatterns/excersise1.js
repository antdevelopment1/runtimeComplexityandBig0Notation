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
//         }l
//         console.log(arr2);
//         arr2.splice(correctIndex, 1);
//     }

//    return true;
// }

// same([1,2,3,4], [1,4,9,16]);

// Refactored Code O(N) Linear as opposed to the quadratic one above Runtime Complexity
// function same(arr1, arr2) {
//   // We check to see
//   if (arr1.length !== arr1.length) {
//     return false;
//   }

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (let val of arr1) {
//     // Set equal to itself  plus one if it already exsists or booleans to 0 and increments to 1
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }

//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }

//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }

//   // console.log(frequencyCounter1);
//   // console.log(frequencyCounter2);
//   return true;
// }

// console.log(same([1, 2, 3, 4], [1, 4, 9, 16]));

// Given two positive integers write a function to find out if two numbers have the same frequency of digits
// The solution must have the folowing complexities - Time O(N)
// function sameFrequency(int1, int2){
//     // good luck. Add any arguments you deem necessary.

//     // Convert to strings
//     let number1 = int1.toString();
//     let number2 = int2.toString();

// //    Evalue
//     if (int1.length !== int2.length) {
//         return false;
//     }

//     const lookup = {};

//     for (let i = 0; i < number1.length; i++) {
//         let digit = number1[i];
//         if (lookup[[digit]]) {
//             lookup[digit] += 1;
//         } else {
//             lookup[digit] = 1;
//         }
//     }

//     for (let i = 0; i < number2.length; i++) {
//         let digit = [number2[i]];
//         if (!lookup[digit]) {
//             return false;
//         } else {
//             lookup[digit] -= 1;
//         }
//     }

//     return true;

//   }

//   console.log(sameFrequency(123, 231));

function sameFrequency(arr1, arr2) {
  let getLengthOne = arr1.toString();
  let getLengthTwo = arr2.toString();

  if (getLengthOne.length !== getLengthTwo.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < getLengthOne.length; i++) {
    let digit = getLengthOne[i];
    if (lookup[digit]) {
      lookup[digit] += 1;
    } else {
      lookup[digit] = 1;
    }
  }

  for (let i = 0; i < getLengthTwo.length; i++) {
    let digit = getLengthTwo[i];
    if (!lookup[digit]) {
      return false;
    } else {
      lookup[digit] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(123, 312));
