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