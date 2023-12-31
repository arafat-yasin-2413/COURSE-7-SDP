function removeDuplicate(arr){
    var new_arr = [];

    for (var i = 0 ; i < arr.length; i++) {
        if (new_arr.indexOf(arr[i]) == -1) {
            new_arr.push(arr[i]);
        }
    }

    return new_arr;
}



var arr1 = [1,2,3,4,1,2,3,3,5,6,7,7];
var result_arr = removeDuplicate(arr1);

console.log(result_arr);