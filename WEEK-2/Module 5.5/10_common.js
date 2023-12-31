function findCommontElements (arr1, arr2) {
    var commonarr = [];

    for (var i = 0; i<arr1.length; i++) {
        if (arr2.includes(arr1[i]) ) {
            commonarr.push(arr1[i]);
        }
    }

    return commonarr;
}


var arr1 = [1,2,3,4,5];
var arr2 = [3,4,5,6,7];

var result_arr = findCommontElements(arr1,arr2);
console.log(result_arr);