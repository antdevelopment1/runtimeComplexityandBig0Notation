function same(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (var i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            console.log(false);
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex, 1);
    }

   return true;
}

same([1,2,3,4], [1,4,9,16]);