function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]));


// Implement a function that accepts a sorted array and counts the unique values in the array. There can be negative values in the array, but it will always be sorted
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
        var i = 0;
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] !== arr[j]) {
                i++;
                arr[i] = arr[j];
            }
        }

    return i + 1;
}

console.log(countUniqueValues([1,1,1,2,2,2,2,3,4,5]));

