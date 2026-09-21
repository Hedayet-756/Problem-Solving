// Day 1 — Variables, Data Types & Operators

/**  Problem 1: Swap Two Variables  [Easy]
Description: Write a function that swaps the values of two variables without using a third variable.
Example:
Input: a = 5, b = 10Output: a = 10, b = 5
Hint: Try using destructuring or arithmetic operators
*/
const a = 5;
const b = 50;

function swap(a, b) {
    const swapped = [b, a];
    return swapped;
}
// console.log(swap(a, b));

/**  Problem 2: Check Even or Odd  [Easy]
Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
Example:
Input: 4  → Output: trueInput: 7  → Output: false
Hint: Use the modulus (%) operator.
*/
function isEven(n) {
    return n % 2 === 0;
}

// console.log(isEven(7));

/**
Problem 3: Find the Largest of Three Numbers  [Easy]
Description: Write a function largest(a, b, c) that returns the largest of three numbers.
Example:
Input: 3, 7, 5  → Output: 7
Hint: Use Math.max() or if-else conditions.

 */
function largest(a, b, c) {
    return Math.max(a, b, c);
}

// console.log(largest(3, 9, 11));

/**  Problem 4: Celsius to Fahrenheit  [Easy]
Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
Example:
Input: 0   → Output: 32Input: 100 → Output: 212
Hint: Formula: (C × 9/5) + 32
*/
function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}
// console.log(toFahrenheit(110));

/** Problem 5: Check Positive, Negative or Zero  [Easy]
Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
Example:
Input: -5  → Output: 'negative'Input: 0   → Output: 'zero'
Hint: Use if-else if-else statements.
*/
function checkSign(n) {
    if (n > 0) {
        return 'positive';
    } else if (n < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
// console.log(checkSign(-5));

// Day 2 — Strings & String Methods

/** 
Problem 6: Reverse a String  [Easy]
Description: Write a function reverseString(str) that returns the reverse of a given string.
Example:
Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
Hint: Use split(''), reverse(), and join('').
*/
function reverseString(str) {
    return str.split('').reverse().join('');
}
// console.log(reverseString('hello'));

/**
Problem 7: Count Vowels in a String  [Easy]
Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.
Example:
Input: 'hello'   → Output: 2Input: 'javascript' → Output: 3
Hint: Use a loop or match() with a regular expression.
*/
function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count++;
        }
    }
    return count;
}

// console.log(countVowels('How many vowels are in this sentence?'));

/**
Problem 8: Check Palindrome  [Easy]
Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
Example:
Input: 'racecar'  → Output: trueInput: 'hello'    → Output: false
Hint: Compare the string to its reverse.
*/
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
// console.log(isPalindrome('Hello'));

/**
Problem 9: Capitalize First Letter of Each Word  [Easy]
Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string.
Example:
Input: 'hello world'  → Output: 'Hello World'
Hint: Use split(' '), map(), and join(' ').
*/
function titleCase(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
// console.log(titleCase('how is it going'));

/**
Problem 10: Count Occurrences of a Character  [Easy]
Description: Write a function countChar(str, char) that returns how many times a character appears in a string.
Example:
Input: 'banana', 'a'  → Output: 3
Hint: Use split(char).length - 1 or a loop.
*/
function countChar(str, char) { // split(char).length - 1
    return str.split(char).length - 1;
}
// console.log(countChar('bananahandkjfkdjfk', 'h'));

// Day 3 — Arrays & Array Methods

/** 
Problem 11: Find the Sum of an Array  [Easy]
Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
Example:
Input: [1, 2, 3, 4, 5]  → Output: 15
Hint: Use reduce() or a for loop.
*/
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
// console.log(sumArray([1, 2, 3, 4, 5]));
const sumArray2 = (a, b, c, d, e) => a + b + c + d + e;
// console.log(sumArray2(1, 2, 3, 4, 5));

/**
Problem 12: Find Maximum Value in Array  [Easy]
Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().
Example:
Input: [3, 1, 7, 2, 9]  → Output: 9
Hint: Loop through and track the largest value found.
*/
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
// console.log(findMax([3, 1, 7, 2, 9, 13]));

/**
Problem 13: Remove Duplicates from Array  [Easy]
Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
Example:
Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
Hint: Use Set or filter() with indexOf().
*/
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
// console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));
const removeDuplicates2 = function (arr) {
    if (arr.length === 0) return [];
    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

// console.log(removeDuplicates2([1, 2, 2, 3, 3, 4]));

/**
Problem 14: Flatten a Nested Array  [Medium]
Description: Write a function flattenArray(arr) that flattens one level of a nested array.
Example:
Input: [1, [2, 3], [4, 5]]  → Output: [1, 2, 3, 4, 5]
Hint: Use flat() or reduce() with concat().
*/
function flattenArray(arr) {
    return arr.flat();
}
//false
// console.log(flattenArray([1, [2, [4, 3]], [4, 5]]));

function flattenArray2(arr) {
    const flattendArray = arr.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flattenArray2(curr) : curr), []);
    return [...new Set(flattendArray)];
}
// console.log(flattenArray2([1, [2, [4, 6]], [4, 5]]));


/**
Problem 15: Chunk an Array  [Medium]
Description: Write a function chunkArray(arr, size) that splits an array into chunks of a given size.
Example:
Input: [1,2,3,4,5], 2  → Output: [[1,2],[3,4],[5]]
*/
function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}
console.log(chunkArray([1, 2, 3, 4, 5], 3));



