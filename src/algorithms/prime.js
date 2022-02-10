function prime(number) {
    if (isNaN(number)) {
        return Error("the input must be a number")
    }

    // Prime check
    for(let i = 2; i < number; i ++) {

        // The rest of division N / i must be != 0 for any case but 1 or N
        if ( number % i == 0 ) {
            return false
        }

    }

    return true
}

export default prime