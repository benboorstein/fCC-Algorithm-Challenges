// Note: I've posted this on Dev

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

/*
Below are my solutions to the 16 challenges of freeCodeCamp's Basic Algorithm Scripting section and the first 3 challenges of freeCodeCamp's Intermediate Algorithm Scripting section.

(Full disclosure: This is certainly NOT the first time I've worked on these 19 challenges, but it is the first or second time I've been satisfied with my solutions.)
*/


// 1. Convert Celsius to Fahrenheit
function convertToF(celsius) {
    let fahrenheit = celsius * (9/5) + 32

    return fahrenheit
}

console.log(convertToF(30))


// 2. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('')
}

console.log(reverseString('hello'))


// 3. Factorialize a Number
function factorialize(num) {
    return num < 1 ? 1 : num * factorialize(num - 1)
}
  
console.log(factorialize(5))


// 4. Find the Longest Word in a String
function findLongestWordLength(str) {
    return Math.max(...str.split(' ').map(val => val.length))
}

console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'))


// 5. Return Largest Numbers in Arrays
function largestOfFour(arr) {
    return arr.map(subArr => Math.max(...subArr))
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))


// 6. Confirm the Ending
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target
}
  
console.log(confirmEnding('Bastian', 'an'))


// 7. Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    return num < 1 ? '' : str + repeatStringNumTimes(str, num - 1)
}
  
console.log(repeatStringNumTimes('abc', 3))


// 8. Truncate a String
function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + '...' : str
}
  
console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8))


// 9. Finders Keepers
function findElement(arr, func) {
    return arr.find(val => func(val))
}
  
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))


// 10. Boo who
function booWho(bool) {
    return typeof bool === 'boolean'
}
  
console.log(booWho(null))


// 11. Title Case a Sentence
function titleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(val => val.slice(0, 1).toUpperCase() + val.slice(1))
        .join(' ')
}
  
console.log(titleCase('I\'m a little tea pot'))


// 12. Slice and Splice
function frankenSplice(arr1, arr2, n) {
    return arr2.slice(0, n).concat(arr1).concat(arr2.slice(n))
}
  
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))


// 13. Falsy Bouncer
function bouncer(arr) {
    return arr.filter(val => Boolean(val))
}
  
console.log(bouncer([7, 'ate', '', false, 9]))


// 14. Where do I Belong
function getIndexToIns(arr, num) {
    return arr
        .concat(num)
        .sort((a, b) => a - b)
        .indexOf(num)
}
  
console.log(getIndexToIns([40, 90, 60], 50))


// 15. Mutations
function mutation(arr) {
    return arr[1]
        .toLowerCase()
        .split('')
        .every(val => arr[0].toLowerCase().split('').includes(val))
}
  
console.log(mutation(['HellO', 'oELLh']))


// 16. Chunky Monkey
function chunkArrayInGroups(arr, size) {
    let newArr = []
  
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size))
    }
  
    return newArr
}
  
console.log(chunkArrayInGroups(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3))


// 1. Sum All Numbers in a Range
function sumAll(arr) {
    // "The lowest number will not always come first."
    let lowerNum = Math.min(...arr)
    let higherNum = Math.max(...arr)
  
    // Getting the range of numbers, including the low number and the high number, and putting them in an array.
    let newArr = []
  
    for (let i = lowerNum; i <= higherNum; i++) {
        newArr.push(i)
    }
  
    // "...the sum of those two numbers plus the sum of all the numbers between them."
    return newArr.reduce((acc, cur) => acc += cur)
}
  
console.log(sumAll([7, 2]))


// 2. Diff Two Arrays
function diffArray(arr1, arr2) {
    let notInArr1 = arr2.filter(val => !arr1.includes(val)) // [ 4 ]
    let notInArr2 = arr1.filter(val => !arr2.includes(val)) // [ ]
    
    return notInArr1.concat(notInArr2)
}
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))


// 3. Seek and Destroy
function destroyer(arr) {
    let toRemove = Array.from(arguments).slice(1) // [ 2, 3 ]
  
    return arr.filter(val => !toRemove.includes(val))
}
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))