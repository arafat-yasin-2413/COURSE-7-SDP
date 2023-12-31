function reverseString(str) {
    var new_str = "";
    
    for (var i = str.length-1; i>= 0; i--) {
        new_str += str[i];
    }

    return new_str;
}



var st1 = "Hello World";
var result_str = reverseString(st1);

console.log("Reversed String: ", result_str);