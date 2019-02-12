// Write a function which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
function maxSubArraySum(arr, num) {

    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 3));

function maxSubarraySum(arr, num){
    // If the length of the array is less than the number passed we will return null because all conditions will be all fail if we can't check anything else
    if (arr.length < num) return null;
    
    // We set the total to 0
    let total = 0;

    // We loop n number of times and accumlicate the index values and save them in total value
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    // We temporarily set the current toal to the collected total from our first for loop
    let currentTotal = total;

    // We set i equal to the number passed and run the loop starting from that the number passed until it is greater thsn the length of the array
    for (let i = num; i < arr.length; i++) {
       
        // we add the value of the next seated number in the array and substract the previous number seated in the array
       currentTotal += arr[i] - arr[i-num];
        // Then we check the max values between the total and current total and set it equal to total using a built in JavaScript method
       total = Math.max(total, currentTotal);
    }

    // We return the total
    return total;
}