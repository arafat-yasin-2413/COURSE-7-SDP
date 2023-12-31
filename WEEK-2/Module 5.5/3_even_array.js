function filterEven(num_array) {

    var even_arr = [];

    for (var i = 0; i<num_array.length; i++) {
        if (num_array[i] % 2 == 0) {
            even_arr.push(num_array[i])
        } 
    }

    return even_arr;
}



var arr = [1,2,3,4,5,6,7,8,9,10];
var result_arr = filterEven(arr);

console.log("Even Array: ", result_arr);