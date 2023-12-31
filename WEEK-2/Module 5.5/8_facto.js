function calculateFactorial(num) {
    if (num < 0) {
        return "Factorial is not for negative numbers"
    }

    else if (num == 0 || num == 1) {
        return 1;
    }

    else{
        var fact = 1;
        for (var i = 2; i<=num; i++) {
            fact *= i;
        }
        return fact;
    }
}

var result = calculateFactorial(6);
console.log(result);