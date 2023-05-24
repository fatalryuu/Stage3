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

const isReallyNaN = (val) => {
    return Number.isNaN(val);
};

// File Finder (14)

const checkFolder = (files, path) => {
    for (let folder in files) {
        let newPath = path;
        if (folder.indexOf(".") !== -1 && (folder.indexOf(".") === folder.lastIndexOf("."))) {
            return newPath + folder;
        } else {
            newPath += folder + "/";
            newPath = checkFolder(files[folder], newPath);
            if (newPath !== "") {
                return newPath;
            }
        }
    }
    return "";
}

function search(files) {
    const path = checkFolder(files, "");
    if (path) {
        return path
    } else {
        throw new Error('No files!');
    }
}

// Building a mini search engine (15)

function searchEng(string, searchWord, searchMethod, newWord) {
    if (!string || !searchWord || !searchMethod) {
        return 'No valid input'
    }
    if (searchMethod < 1 || searchMethod > 2) {
        return 'No valid input'
    }
    const pattern = /^[a-zA-Z0-9]+$/;
    if (!pattern.test(searchWord) || !pattern.test(newWord)) {
        return 'No valid input'
    }

    const regex = new RegExp('\\b' + searchWord + '\\b', 'g');
    const matches = string.match(regex);

    if (searchMethod === 1) {
        return {matches: matches ? matches.length : 0, newString: ''};
    } else {
        return {matches: matches ? matches.length : 0, newString: string.replace(regex, newWord)};
    }
}

// Search for letters (16)

function change(string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return Array.from(alphabet, letter => string.toLowerCase().includes(letter) ? '1' : '0').join('');
}

// Largest Elements (17)

function largest(n, array) {
    let result = [];
    for (let i = 0; i < n; i++) {
        const max = Math.max(...array);
        result.push(max);
        array.splice(array.indexOf(max), 1);
    }
    return result.reverse();
}

// Countdown - Longest Word (18)

words = ["VAMPIRE", "SLICE", "GRAVE", "PADDLE", "CAVE"]

function longestWord(letters) {
    let result = [];
    letters = letters.split("");
    let savedWords = [...words];

    letters.forEach(letter => {
        words.forEach((word, i) => {
            if (savedWords[i].indexOf(letter) !== -1) {
                let arr = savedWords[i].split("");
                arr.splice(savedWords[i].indexOf(letter), 1);
                savedWords[i] = arr.join("");
            }
            if (savedWords[i].length === 0) {
                result.push(words[i]);
            }
        })
    })

    result = [...new Set(result)];
    result.sort((a, b) => b.length - a.length);
    result = result.filter(w => w.length === result[0].length);
    result.sort();

    return result.length === 0 ? null : result;
}

// Compound Nouns, Common Nouns, and Adjectives Test (19)

const nouns = ['123'];
const adjectives = ['123'];

function part(word) {
    const states = ["common", "adjective", "compound", "neither"];
    if (nouns.includes(word)) {
        return states[0];
    }
    if (adjectives.includes(word)) {
        return states[1];
    }

    for (let i = 0; i < nouns.length; i++) {
        for (let j = 0; j < adjectives.length; j++) {
            if (nouns[i] + nouns[j] === word) {
                return states[2];
            }
            if (adjectives[j] + nouns[i] === word) {
                return states[2];
            }
        }
    }

    return states[3];
}

// Correct the time-string (20)

function timeCorrect(time) {
    if (!time) {
        return time;
    }
    let parts = time.split(":");
    let hours = Number(parts[0]);
    let minutes = Number(parts[1]);
    let seconds = Number(parts[2]);

    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        return null;
    }

    if (seconds > 59) {
        minutes += Math.floor(seconds / 60);
        seconds %= 60;
    }
    if (minutes > 59) {
        hours += Math.floor(minutes / 60);
        minutes %= 60;
    }
    if (hours > 23) {
        hours %= 24;
    }
    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}

const addZero = (num) => {
    return num.toString().length === 1 ? "0" + num : num;
}

// Extract Values and Units (21)

function valAndUnits(s) {
    let index = 0;
    s = s.split("");
    s.map(n => /[-0-9.]/.test(n.toString()) ? index++ : 0);
    return {val: Number(s.splice(0, index).join("")), units: s.join("").trim()}
}

// Remove the time (22)

function shortenToDate(longDate) {
    return longDate.split("").splice(0, longDate.indexOf(",")).join("");
}

// Defend your castle (23)

function defendable(attacker, defender) {
    const powerLevels = {
        archer: 8,
        footSoldier: 10,
        cavalry: 14,
        artillery: 30
    }

    let battleValueForAttackers = attacker.archer * powerLevels["archer"] +
        attacker.footSoldier * powerLevels["footSoldier"] +
        attacker.cavalry * powerLevels["cavalry"] +
        attacker.artillery * powerLevels["artillery"] +
        attacker.armyHp;
    let battleValueForDefenders = defender.archer * powerLevels["archer"] +
        defender.footSoldier * powerLevels["footSoldier"] +
        defender.artillery * powerLevels["artillery"] +
        defender.armyHp;

    let morale = 1;
    if (attacker.strategy === "siege") {
        if (defender.resources === "low") {
            morale *= 0.5;
        } else if (defender.resources === "medium") {
            morale *= 0.75;
        }
    }
    let arrivedInTime = false;
    if (defender.reinforcements) {
        if (defender.reinforcements.inTime) {
            arrivedInTime = true;
            morale *= 1.5;
        } else {
            morale *= 0.75;
        }
    } else {
        morale *= 0.9;
    }
    battleValueForDefenders *= morale;
    if (arrivedInTime) {
        battleValueForDefenders += defender.reinforcements.battleValue;
    }
    return battleValueForAttackers < battleValueForDefenders;
}

// Count strings in objects (24)

function strCount(obj) {
    let counter = 0;
    for (let key in obj) {
        if (typeof obj[key] === "string") {
            counter++;
        }
        if (typeof obj[key] === "object") {
            counter += strCount(obj[key]);
        }
    }
    return counter;
}

// Back to the Future? (25)

function backToTheFuture (str) {
    const months = {
        'January': { to: 'October', days: 31},
        'April': { to: 'July', days: 31},
        'September': { to: 'December', days: 31},
        'February': { to: 'March', days: 31},
        'March': { to: 'November', days: 30},
    }
    str = str.split(' ')
    const match = months[str[2]]

    if (match && str[1] <= match.days) {
        return `I'm leaving here on ${str[0]} ${str[1]} ${match.to}!`
    }

    return "Doc, I can't get back to the future!"
}

// Welcome! (26)

function greet(language) {
    const languages = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }
    if (languages[language]) {
        return languages[language]
    } else {
        return languages["english"];
    }
}

// Give me the k first digits. Odd digits. (27)

function findOddDigits(n, k) {
    n = n.toString().split("");
    if (k === 0 || k > n.length) {
        return 0;
    }
    let odd = [];
    n.forEach(el => el % 2 !== 0 ? odd.push(el) : 0);
    if (!odd || k > odd.length) {
        return 0;
    }
    return Number(odd.splice(0, k).join(""));
}

// Sorting Arrays ... wait, what?! (28)

Array.prototype.sort = function () {
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] > this[j]) {
                [this[i], this[j]] = [this[j], this[i]];
            }
        }
    }
    return this;
}

// Find the Difference in Age between Oldest and Youngest Family Members (29)

function differenceInAges(ages) {
    return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]
}

// Blood-Alcohol Content (30)

function bloodAlcoholContent(drinks, weight, sex, time){
    return Number(((drinks.ounces * drinks.abv * 5.14 / weight * (sex === 'male' ? 0.73 : 0.66)) - 0.015 * time).toFixed(4));
}

// Generate An Array of Unique Strings (31)

function uniqStrings(size, validPct, strSize) {
    const validAmount = Math.floor(size * validPct);
    const invalidAmount = size - validAmount;
    const strings = [];

    const generateValidString = () => {
        const validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';
        let validString = '';
        const n = Math.round(Math.random() * (strSize[1] - strSize[0]) + strSize[0]);
        for (let i = 0; i < n; i++) {
            const randomChar = validChars[Math.floor(Math.random() * validChars.length)];
            validString += randomChar;
        }
        return validString;
    }

    const generateInvalidString = () => {
        const invalidChars = '`\'"~!@#$%^&*()[]{}:;<>?|/\\';
        let invalidString = '';
        const n = Math.round(Math.random() * (strSize[1] - strSize[0]) + strSize[0]);
        for (let i = 0; i < n; i++) {
            const randomChar = invalidChars[Math.floor(Math.random() * invalidChars.length)];
            invalidString += randomChar;
        }
        return invalidString;
    }

    for (let i = 0; i < validAmount; i++) {
        strings.push(generateValidString());
    }

    for (let i = 0; i < invalidAmount; i++) {
        strings.push(generateInvalidString());
    }

    return strings;
}

// Length of the longest sequence of consecutive integers (32)

function maxConsecutiveSequenceLength(array) {
    if (array.length === 0)
        return 0;
    const dp = Array(array.length).fill(1);
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] - array[j] <= 1 && array[i] >= array[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return  Math.max(...dp);
}

// Implementing a Queue (33)

let Queue = function() {
    this.queue = []; // Массив для хранения элементов очереди
};

Queue.prototype.enqueue = function(item) {
    this.queue.push(item); // Добавление элемента в конец очереди
};

Queue.prototype.dequeue = function() {
    return this.queue.shift(); // Удаление элемента из начала очереди и возвращение его значения
};

Queue.prototype.size = function() {
    return this.queue.length; // Возвращает количество элементов в очереди
};

// Playing with Sets : Equal or Not ? (34)

function areEqual(s1, s2) {
    return s1.size === s2.size && [...s1].every(e => s2.has(e));
}

function notEqual(s1, s2) {
    return !areEqual(s1, s2)
}

// Playing with Sets : Intersection (35)

function inter(s1, s2){
    return new Set([...s1].filter(e => s2.has(e)))
}

// Logical calculator (36)

function logicalCalc(array, op){
    switch (op) {
        case "OR":
            return array.reduce((acc, el) => acc || el);
        case "AND":
            return array.reduce((acc, el) => acc && el);
        case "XOR":
            return array.reduce((acc, el) => acc != el);
    }
}

// Sum of differences in array (37)

function sumOfDifferences(arr) {
    if (arr.length === 0) {
        return 0;
    }

    arr.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i] - arr[i + 1];
    }
    return sum;
}

// Additive Numbers (38)

function findAdditiveNumbers(num) {

}

// dataTypes String to Array (39)

function dataTypes (string) {

}

// Captcha parser (40)



// My Aunt Sally (41)



// Podcast Speed Listening Calculator (42)



// Timmy Time (43)



// Parsing Commandline Arguments (44)



// ES6 string addition (45)



// L1: Bartender, drinks! (46)



// Well of Ideas - Easy Version (47)



// Power .bind() (48)

