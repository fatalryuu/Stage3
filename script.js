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

const countSheep = (num) => {
    const sheep = "sheep...";
    let result = "";

    for (let i = 0; i < num; i++) {
        result += (i + 1) + " " + sheep;
    }

    return result;
}

// Do you speak "English"? (5)

function spEng(sentence) {
    return sentence.toLowerCase().includes("english");
}

// Jubilee Year (6)

function isJubilee(year) {
    const date = new Date(year, 6, 25);
    return date.getDay() === 0;
}

// Day of The Week (7)

function getDayOfTheWeek(date) {
    const day = new Date(date).getDay();
    switch (day) {
        case 0: return "Sunday"
        case 1: return "Monday"
        case 2: return "Tuesday"
        case 3: return "Wednesday"
        case 4: return "Thursday"
        case 5: return "Friday"
        case 6: return "Saturday"
    }
}

// Is the date today (8)

function isToday(date) {
    const today = new Date();
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}` === `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`;
}

// Days in the year (9)

function yearDays(year) {
    if (year === 0) {
        return `${year} has 366 days`;
    }
    return `${year} has ${year % 4 === 0  && year % 100 !== 0 ? 366 : 365} days`;
}

// Count word occurrences (10)

const wordCounter = function(text) {
    const wordCounts = Object.create(null);

    const countWords = (text) => {
        const words = text.split(/[.,\s]+/);
        for (let word of words) {
            if (word !== '') {
                wordCounts[word] = (wordCounts[word] || 0) + 1;
            }
        }
    };

    countWords(text);

    return {
        count: (word) => wordCounts[word] || 0
    };
};

// Print Fixed Size Two Dimensional Table (11)

function buildTableText(row, column, character) {
    const dashes = "---------\n";
    let matrix = "";
    for (let i = 0; i < 4; i++) {
        matrix += dashes;
        matrix += "|";
        for (let j = 0; j < 4; j++) {
            if (row === i && column === j) {
                matrix += character + "|";
            } else {
                matrix += " |";
            }
        }
        matrix += "\n";
    }
    return matrix + dashes;
}

// Check the exam (12)

function checkExam(arr1, arr2) {
    let grade = 0;
    arr1.forEach((answer, i) => answer === arr2[i] ? grade += 4 : arr2[i] === "" ? 0 : grade--);
    return grade < 0 ? 0 : grade;
}

// isReallyNaN (13)



// File Finder (14)



// Building a mini search engine (15)



// Search for letters (16)



// Largest Elements (17)



// Countdown - Longest Word (18)



// Compound Nouns, Common Nouns, and Adjectives Test (19)



// Correct the time-string (20)



// Extract Values and Units (21)



// Remove the time (22)



// Defend your castle (23)



// Count strings in objects (24)



// Back to the Future? (25)



// Welcome! (26)



// Give me the k first digits. Odd digits. (27)



// Sorting Arrays ... wait, what?! (28)



// Find the Difference in Age between Oldest and Youngest Family Members (29)



// Blood-Alcohol Content (30)



// Generate An Array of Unique Strings (31)



// Length of the longest sequence of consecutive integers (32)



// Implementing a Queue (33)



// Playing with Sets : Equal or Not ? (34)



// Playing with Sets : Intersection (35)



// Logical calculator (36)



// Sum of differences in array (37)



// Additive Numbers (38)



// dataTypes String to Array (39)



// Captcha parser (40)



// My Aunt Sally (41)



// Podcast Speed Listening Calculator (42)



// Timmy Time (43)



// Parsing Commandline Arguments (44)



// ES6 string addition (45)



// L1: Bartender, drinks! (46)



// Well of Ideas - Easy Version (47)



// Power .bind() (48)

