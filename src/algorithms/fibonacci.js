function fibonacci(number) {
    if (isNaN(number)) {
        return Error("the input must be a number")
    }
    if (number < 1) {
        return Error("Invalid number")
    }

    // Memory that will store the values of fib sequece
    let fib1 = 0
    let fib2 = 1

    // First and second number of fibbonacci sequence already known as 0 and 1
    if(number == 1) {
        return fib1        
    }

    if(number == 2) {
        return fib2
    }

    // Calculate fibbonacci numbers for n > 2
    for (let i = 0; i < number - 2; i++) {
        let nextFib = fib2 + fib1
        fib1 = fib2
        fib2 = nextFib
    }

    return fib2

}


for (let i = 0; i < 10; i++) {
    console.log("fib of "+ i + " : " + fibonacci(i))
}