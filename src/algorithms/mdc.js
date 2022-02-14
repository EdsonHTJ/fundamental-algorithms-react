function mdc(num1, num2) {

    if (isNaN(num1) || isNaN(num2)) {
        return Error("both inputs must be numbers")
    }

    let rest = 0
    do {
        rest = num1 % num2;

        num1 = num2;
        num2 = rest;
        
    } while (num2 != 0);

    return num1
}

export default mdc