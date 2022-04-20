// The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius.
// Use the variable fahrenheit already defined and assign it the Fahrenheit
// temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help
// convert the Celsius temperature to Fahrenheit.

function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}

// Reverse a String

function reverseString(str) {
// note: if the separator is an empty string (""), str is converted to an array of each of its UTF-16 "characters".
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    return str.split('')
        .reverse()
        .join('');
}

// Factorialize a number
// (This means we want the product of all positive integers less than or equal to the num)

function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
        product *= i;
    }
    return product;
}

factorialize(5);