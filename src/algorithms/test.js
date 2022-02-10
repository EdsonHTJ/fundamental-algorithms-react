import fibonacci from "./fibonacci.js"
import prime from "./prime.js"
import sum from "./sum.js"

function fibonacciTest() {
    for (let i = 0; i < 10; i++) {
        console.log("fib of "+ i + " : " + fibonacci(i))
    }
}

function primeTest() {
    for (let i = 0; i < 100; i ++) {
        console.log("The number " + i + " is " + (prime(i) ? "prime" : "not prime"))
    }
}

function sumTest() {
    let i = [3, 4 , 5 , "aa"]
    console.log("The sum of List " + i + "  is : " + sum(i))
}

fibonacciTest()
primeTest()
sumTest()