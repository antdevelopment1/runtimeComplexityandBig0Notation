// Given a sorted array of integers and a target average determine if there is a pair of values in the array where the average of array
// equals the target average. There may be more than one pair that matches the average target

function averagePair(arr, target){
    // Save first index value
    let first = 0;
    // Save second index value
    let second = arr.length-1;

    while (first < second) {
        let avg = (arr[first] + arr[second]) / 2;
        if (avg === target) {
            return true;
        } else if (avg < target) {
            first++;
        } else {
            second--;
        }
    }
    return false;
}

function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      else if(avg < num) start++
      else end--
    }
    return false;
  }
console.log(averagePair([1,2,3,4,4,5], 2));