function isPrime(number){
    if (number <= 1) {
        return false;
    }

    for (var i = 2; i<= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }

    return true;
}



var num = 23;

var is_num_prime = isPrime(num);
console.log(num + " Prime status : ", is_num_prime);
