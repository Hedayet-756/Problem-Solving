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
// console.log(chunkArray([1, 2, 3, 4, 5], 3));

// Day 4 — Objects & Loops
/**
Problem 16: Count Object Properties  [Easy]
Description: Write a function countProperties(obj) that returns the number of properties in an object.
Example:
Input: {a: 1, b: 2, c: 3}  → Output: 3
Hint: Use Object.keys().length.
*/
function countProperties(obj) {
    return Object.keys(obj).length;
}
// console.log(countProperties({ a: 1, b: 2, c: 3 }));

/**
Problem 17: Merge Two Objects  [Easy]
Description: Write a function mergeObjects(obj1, obj2) that merges two objects into one. If keys conflict, the second object's values win.
Example:
Input: {a:1}, {b:2}  → Output: {a:1, b:2}
Hint: Use the spread operator or Object.assign().
*/
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
// console.log(mergeObjects({ a: 1 }, { b: 2 }));

/**
Problem 18: FizzBuzz  [Easy]
Description: Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', multiples of both print 'FizzBuzz'.
Example:
Input: 15Output: 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz
Hint: Check divisibility with the % operator in the right order.
*/
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
// fizzBuzz(15);

/**
 Problem 19: Invert an Object  [Easy]
Description: Write a function invertObject(obj) that swaps the keys and values of an object.
Example:
Input: {a: 1, b: 2}  → Output: {1: 'a', 2: 'b'}
Hint: Use Object.entries() and reduce().
*/
function invertObject(obj) {
    return Object.entries(obj).reduce((result, [key, value]) => {
        result[value] = key;
        return result;
    }, {});
}
// console.log(invertObject({ a: 4, b: 2, c: 1 }));
function invertObject2(obj) {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [value, key])
    );
}
// console.log(invertObject2({ a: 4, b: 2, c: 3 }));

/**
Problem 20: Find Duplicate Values in Array of Objects  [Medium]
Description: Given an array of objects, write a function findDuplicateNames(arr) that returns names that appear more than once.
Example:
Input: [{name:'Ali'},{name:'Sara'},{name:'Ali'}]Output: ['Ali']
Hint: Use a frequency map (object) to count occurrences.
*/
function findDuplicateNames(arr) {
    const frequency = {};
    const duplicates = [];
    arr.forEach(item => {
        if (frequency[item.name]) {
            if (!duplicates.includes(item.name)) {
                duplicates.push(item.name);
            }
        } else {
            frequency[item.name] = 1;
        }
    });

    return duplicates;
}
// const input = [{ name: 'Ali' }, { name: 'Sara' }, { name: 'Ali' }, { name: 'Ali' }];
// console.log(findDuplicateNames(input));

function findDuplicateNames2(arr) {
    const frequency = new Set();
    const duplicates = new Set();

    arr.forEach(item => {
        if (frequency.has(item.name)) {
            duplicates.add(item.name);
        } else {
            frequency.add(item.name);
        }
    });

    return Array.from(duplicates);
};
// console.log(findDuplicateNames2([{ name: 'Ali' }, { name: 'Sara' }, { name: 'Ali' }]));

// Day 5 — Functions & Scope

/**Problem 21: Factorial (Recursive)  [Easy]
Description: Write a recursive function factorial(n) that returns the factorial of a non-negative integer n.
Example:
Input: 5  → Output: 120 (5×4×3×2×1)Input: 0  → Output: 1
Hint: Base case: factorial(0) = 1. Recursive case: n * factorial(n-1).
*/
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
// console.log(factorial(4));

/**
Problem 22: Fibonacci Sequence  [Easy]
Description: Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence.
Example:
Input: 6  → Output: 8 (0,1,1,2,3,5,8...)
Hint: Try both iterative and recursive approaches
*/
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
// console.log(fibonacci(8));
function fibonacciIterative(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let previous = 0;
    let current = 1;
    for (let i = 2; i <= n; i++) {
        const next = current;
        current = previous + current;
        previous = next;
    }
    return current;
}
// console.log(fibonacciIterative(8));

/**Problem 23: Create a Counter with Closure  [Medium]
Description: Write a function makeCounter() that returns an object with increment, decrement, and getCount methods using closure.
Example:
const c = makeCounter();c.increment(); c.increment();c.getCount(); // 2
Hint: Use a variable inside the outer function that inner functions can access.
*/

function makeCounter() {
    let count = 0;
    return {
        increment: () => {
            count++;
        },
        decrement: () => {
            count--;
        },
        getCount: () => {
            return count;
        }
    };
}

const counter = makeCounter();
counter.increment();
counter.increment();
counter.increment();
// console.log(counter.getCount());


/** Problem 24: Curry a Function  [Medium]
Description: Write a function curry(fn) that converts a function of two arguments into a curried version.
Example:
const add = curry((a,b) => a+b);add(2)(3); // 5
Hint: Return a function from inside a function.
*/
function curry(fn) {
    return function curried(...argus) {
        if (argus.length >= fn.length) {
            return fn(...argus);
        } else {
            return function (...nextArgs) {
                return curried(...argus, ...nextArgs);
            };
        }
    }
}
// const add = curry((a, b) => a + b);
// console.log(add(2)(3));

// const sum = curry((a, b, c) => a + b + c);
// console.log(sum(6)(2)(3));

/**
 * Problem 25: Memoize a Function  [Medium]
Description: Write a function memoize(fn) that caches the results of a function so repeated calls with the same input return the cached result.
Example:
const memoAdd = memoize(n => n + 10);memoAdd(5); // 15 (computed)memoAdd(5); // 15 (from cache)
Hint: Use an object as a cache inside the outer function.
 */

function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        } else {
            const result = fn(...args);
            cache[args] = result;
            return result;
        }
    }
}
const memoAdd = memoize(n => n + 16);
// console.log(memoAdd(15));

// Day 6 — ES6+ Featuresn

/**
 Problem 26: Destructure and Rename  [Easy]
Description: Given a user object, use destructuring to extract firstName, lastName, and age, renaming firstName to name.
Example:
const user = {firstName:'Sara', lastName:'Khan', age:25};// Extract: name='Sara', lastName='Khan', age=25
Hint: Use: const { firstName: name, lastName, age } = user;
 */

const user = { firstName: 'Sara', lastName: 'Khan', age: 25 };
const { firstName: name, lastName: last, age } = user;
// console.log(name);
// console.log(last);
/**
Problem 27: Merge Arrays with Spread  [Easy]
Description: Write a function mergeArrays(...arrays) that accepts any number of arrays and merges them into one using the spread operator.
Example:
Input: [1,2], [3,4], [5]Output: [1,2,3,4,5]
Hint: Use rest parameters and spread inside reduce or flat.
*/
function mergeArrays(...arrays) {
    return [].concat(...arrays);
}
// console.log(mergeArrays([1, 2], [3, 4], [5]));

/**
 * Problem 28: Promise Chain  [Medium]
Description: Write a function delay(ms) that returns a Promise that resolves after ms milliseconds. Then chain two delays: first 1 second, then 2 seconds, logging a message after each.
Example:
delay(1000).then(() => { console.log('1 sec'); return delay(2000); }).then(() => console.log('3 sec total'));
Hint: Use new Promise with setTimeout inside.
 */

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runDelay() {
    await delay(1000);
    console.log('1 sec');
    await delay(2000);
    console.log('3 sec total');
}
// return runDelay();

/**
Problem 29: Async/Await Fetch Simulation  [Medium]
Description: Write an async function getUserData(id) that simulates fetching user data by awaiting a Promise that resolves after 500ms with a mock user object.
Example:
await getUserData(1);// returns {id:1, name:'Test User'}
Hint: Use async/await with a Promise that wraps setTimeout.
*/
async function getUserData(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id, name: 'Test User' });
        }, 500);
    });
}
const testUser = await getUserData(1);
// console.log(testUser);

/**
 Problem 30: Optional Chaining & Nullish Coalescing  [Easy]
Description: Given a nested object that may have missing properties, safely access a deeply nested value using optional chaining (?.) and provide a default using nullish coalescing (??).
Example:
const user = {profile: null};const city = user?.profile?.address?.city ?? 'Unknown';// Output: 'Unknown'
Hint: Chain ?. for each level; use ?? for the fallback.
 */

const user2 = { profile: null, city: 'New York' };
const isUnknown = user2?.profile?.address?.city ?? true;
console.log(isUnknown);

// Day 7 — DOM & Events (Conceptual/Logic)
/**
Problem 31: Debounce Function  [Medium]
Description: Write a debounce(fn, delay) function that delays invoking fn until after delay milliseconds have elapsed since the last time it was called.
Example:
const debouncedSearch = debounce(search, 300);// Fires only once after user stops typing for 300ms
Hint: Use clearTimeout and setTimeout.
*/
function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

function search(text) {
    console.log('Searching for ' + text);
}
const debouncedSearch = debounce(search, 3000);
// debouncedSearch('hello');
// debouncedSearch('world');
