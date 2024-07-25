"use strict";
let num = +prompt("Enter a number: ");

function isPrime(n) {
    if (n < 2)
        return `${n} is NOT prime number`;
    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            return `${n} is NOT prime number`;
        }
    } 
    return `${n} is A prime number`;
}

alert(isPrime(num));