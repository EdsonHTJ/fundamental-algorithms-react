function prime(number) {
    if (isNaN(number)) {
        return "a entrada deve ser um numero"
    }

    number = Number(number)

    if (number < 0) {
        return "a entrada deve ser um numero natural"
    }

    // Prime check
    if (number === 1 || number === 0) {
        return false
    }

    for(let i = 2; i < number; i ++) {

        // The rest of division N / i must be != 0 for any case but 1 or N
        if ( number % i === 0 ) {
            return false
        }

    }

    return true
}

export default prime