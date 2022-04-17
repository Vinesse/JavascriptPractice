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

// Question: Can Objects be Const?
// Answer: Const works with Objects and Arrays.
// This prevents Objects and Arrays from being overwriten entirely.
// However, this does not protect object keys. The same applies to arrays.

// Here we want to access and update properties nested within objects
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };

// To set the value of the online key to 45:
userActivity.data.online = 45;

// Accessing property names with Bracket Notation
// We've defined a function, checkInventory, which receives a scanned item as an argument.
// Return the current value of the scannedItem key in the foods object.
// You can assume that only valid keys will be provided as an argument to checkInventory.

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };

function checkInventory(scannedItem) {
    return foods[scannedItem];
// This takes the value of scanned item, and checks it against foods which returns the value of the key.
// Considering the console.log below, it would pass 'apples' and check for it against the foods objects
// Which would return the value 27.
}
console.log(checkInventory("apples"));
// Deleting properties from objects
// This removes the apples AND grapes properties from the above foods object.
delete foods.apples;
delete foods.grapes;

// Check if an object has a specific property
// There are two ways to do this:
// First: using the hasOwnProperty() method
// Second: using the 'in' keyword
// e.g:

users.hasOwnProperty('Alan');
'Alan' in users;

let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };

//  Write a function so that it returns true if the object passed to it contains all four names
// Alan, Jeff, Sarah and Ryan and returns false otherwise.

function isEveryoneHere(userObj) {
    return ['Alan', 'Jeff', 'Sarah', 'Ryan'].every(name => userObj.hasOwnProperty(name));
}

console.log(isEveryoneHere(users));