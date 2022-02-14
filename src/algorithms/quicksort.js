function partition(items, left, right) {

    if (!Array.isArray(items)) {
        return Error("Input must be an array")
    }

    let pivot = items[Math.floor((right + left) / 2)]
    let i = left
    let j = right

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            
            let m = items[i]
            items[i] = items[j]
            items[j] = m

            i++;
            j--;
        }
    }

    return i;
}

function quickSort(items, left, right) {

    let index;

    if (items.length > 1) {

        index = partition(items, left, right);

        if (left < index - 1) { 
            quickSort(items, left, index - 1);
        }

        if (index < right) { 
            quickSort(items, index, right);
        }

    }

    return items;
}

export default quickSort