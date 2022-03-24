function count(values, cut) {
    if (!Array.isArray(values)) {
        return "Input precisa ser um array"
    }

    if (isNaN(cut)) {
        return "A entrada precisa ser um numero"
    }

    let c = 0
    for(let i = 0; i < values.length; i++) {
        if (values[i] < cut) {
            c++
        }
    }

    return c
}

export default count