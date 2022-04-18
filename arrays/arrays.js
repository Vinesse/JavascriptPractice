// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

// the .slice() method accepts 2 parameters and they denote starting index and ending index.
// in this case, it will start at index 0 and stop before index 3 which results in
// a returned array including 3 elements
function myFunction(a) {
    return a.slice(0, 3);
}