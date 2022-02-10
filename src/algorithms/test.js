import fibonacci from "./fibonacci.js"
import prime from "./prime.js"

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

fibonacciTest()
primeTest()