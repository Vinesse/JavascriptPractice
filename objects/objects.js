// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

function myFunction(obj) {
    return obj.country;
}

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor

function myFunction(obj) {
    return obj['prop-2'];
}

// If we have an object who we want to assign a new property
// we do it by assigning the property to the object like so:

const fictionalCharacter = {
    name: 'spongebob',
    type: 'sponge'
}

// You can use dot notation to add a property
fictionalCharacter.age = 20;

// Alternatively, you can use bracket notation if your
// property name has a space in it
fictionalCharacter['best friend'] = 'patrick star';

// Otherwise, bracket notation without quotes will be understood as
// a variable name. You need to give the variable a value, ofc.

const home = 'home location';

fictionalCharacter[home] = 'bikini bottom';

// After all these examples, our object will look like this:

const fictionalCharacter = {
    name: 'spongebob',
    type: 'sponge',
    age: 20,
    'best friend': 'patrick star',
    'home location': 'bikini bottom'

}

// question: can objects be consts????