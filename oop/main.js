// create a dog object

var dog = {
    name: 'george',
    numLegs: 4
  };

// printing both properties of said dog object

console.log(dog.name, dog.numLegs);

// create a method on an object

var dog = {
    name: 'george',
    numLegs: 4,
    sayLegs: function() {
        return "This dog has " + dog.numLegs + " legs."
    }
  };

dog.sayLegs();

// Make Code More Reusable with the this Keyword

var dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};
  
dog.sayLegs();

// Define a constructor function

function Dog() {
    this.name = 'george';
    this.color = 'brown';
    this.numLegs = 4;
}

// User a constructor to create objects

let hound = new Dog();

// Extend Constructors to Receive Arguments

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }

let terrier = new Dog("bob", "black")

// Verify an Object's Constructor with instanceof

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(4);

myHouse instanceof House

// Understand own properties

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];

for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

// Use Prototype Properties to Reduce Duplicate Code
Dog.prototype.numLegs = 4;