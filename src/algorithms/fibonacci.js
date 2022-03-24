function fibonacci(number) {
    if (isNaN(number)) {
        return "A entrada precisa ser um numero"
    }

    if (number < 1) {
        return "Indice invalido"
    }
    number = Number(number)

    // Memory that will store the values of fib sequece
    let fib1 = 0
    let fib2 = 1

    // First and second number of fibonacci sequence already known as 0 and 1
    if(number === 1) {
        return fib1        
    }

    if(number === 2) {
        return fib2
    }

    let fibNumbers = [fib1, fib2]
    // Calculate fibonacci numbers for n > 2
    for (let i = 0; i < number - 2; i++) {
        let nextFib = fib2 + fib1
        fib1 = fib2
        fib2 = nextFib
        fibNumbers.push(nextFib)
    }

    return fibNumbers

}

export default fibonacci