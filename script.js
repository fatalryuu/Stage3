// Difference of 2 (1)
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

// Shuffle an Array (2)

function shuffle(arr) {
    arr.forEach((_, i) => {
        const j = Math.floor(Math.random() * arr.length);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    });
    return arr;
}

// Sum of Array Averages (3)

const sumAverage = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i].reduce((acc, el) => acc + el, 0) / arr[i].length;
    }
    return Math.floor(result);
}

// If you can't sleep, just count sheep!! (4)

