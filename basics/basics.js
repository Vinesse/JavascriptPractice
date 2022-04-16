// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

function addTwoNumbers(a, b) {
    return a + b;
}

// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

function myFunction(a, b) {
    return a == b && typeof a == typeof b;
    // alternatively,
    // return a === b; 
    // would have worked.
    // three 'equals' === checked for strict equality including type
}

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

function myFunction(a) {
    return a.slice(3);
}

// Write a function that takes a value as argument
// Return the type of the value

function myFunction(a) {
    return typeof a;
}

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

function myFunction(str) {
    return str.slice(-3);
}

// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

function myFunction(str) {
    return str.slice(0, 3);
}

