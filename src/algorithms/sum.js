function sum(arr) {
    if (!Array.isArray(arr)) {
        return Error("Input must be an array")
    }

    let sum = 0 
    for(let i = 0; i < arr.length; i++)
    {
        if(isNaN(arr[i])) {
            return Error("Input must be a list of numbers")
        }

        sum += arr[i]
    }

    return sum
}

export default sum