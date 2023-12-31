function sumOfArrayElements(arr){
    var sum = 0;
    for (var i = 0; i<arr.length; i++){
        sum += arr[i];
    }

    return sum;
}

var arr = [10,20,30,40];

var result = sumOfArrayElements(arr);

console.log("Sum of array elements", result);