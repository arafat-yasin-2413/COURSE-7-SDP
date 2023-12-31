function checkPalindrome(str) {
    var cleanword = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    for (var i = 0; i< cleanword.length/2 ; i++) {
        if (cleanword[i] != cleanword[cleanword.length -1 - i]) {
            return false;
        }
    }

    return true;

}


var st = "Madam";
var result = checkPalindrome(st);
console.log(result);