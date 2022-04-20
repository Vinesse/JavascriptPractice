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