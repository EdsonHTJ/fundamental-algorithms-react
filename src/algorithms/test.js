import fibonacci from "./fibonacci.js"
import mdc from "./mdc.js"
import prime from "./prime.js"
import sum from "./sum.js"
import quickSort from "./quicksort.js"

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

function mdcTest() {
    let a = 133231
    let b = 21
    console.log("the mdc of " + a + " and " + b + " is : " + mdc(a,b))
}

function quickTest() {
    let arr = [9, 8, 7, 6, 5 , 4, 3, 2, 1 , -1]
    arr = quickSort(arr, 0 , arr.length - 1)
    console.log(arr)
}

fibonacciTest()
primeTest()
sumTest()
mdcTest()
quickTest()