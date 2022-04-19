// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

function myFunction(obj) {
    return obj.country;
}

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

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

// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

function myObj(obj, key) {
    return obj[key];
}

// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

function myFunction(a) {
    const myObj = new Object();
    myObj['key'] = a;
    return myObj;
    // Alternatively, we may solve like so:
    // function myFunction(a) {
    //     return { key: a };
    // }
}

// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

function myFunction(a, b) {
    return a.hasOwnProperty(b);
    // alternatively,
    // return b in a;
}

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

function myFunction(a) {
    if (a.length % 2 == 0) {
        return a.substring(0, a.length / 2)
    }
    else return a.substring(0, a.length / 2 - 1 );
    // alternatively, simply
    // return a.slice(0, a.length / 2);
    // remember, slice also works on strings
}

// Iterate Through the Keys of an Object with a for...in Statement
const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    let result = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result;
  }
  
  console.log(countOnline(users));

// Return an array containing all the properties in the object it receives as an argument.

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function myFunction(obj) {
  return Object.keys(obj);
}

console.log(myFunction(users));

// Modify an Array Stored in an Object
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriends(obj, friend) {
  obj.data.friends.push(friend);
  return obj.data.friends;  
}
