const twosDifference = (arr) => {
    arr.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i] + 2) {
                result.push([arr[i], arr[j]]);
            }
        }
    }

    return result;
}

console.log(twosDifference([1, 3, 5, 6, 8, 10, 12, 14]))