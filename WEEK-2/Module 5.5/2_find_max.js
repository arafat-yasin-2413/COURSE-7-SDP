function findMaximum(arr){
    var element = arr[0];
    for (var i = 0; i<arr.length; i++){
        if(arr[i] > element){
            element=arr[i]
        }  
    }

    return element;
}

var arr = [10,20,30,40];

var maxval = findMaximum(arr);

console.log("Maximum of array elements", maxval);

