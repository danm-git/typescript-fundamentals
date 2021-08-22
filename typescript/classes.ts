class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello " + this.greeting;
  }
}

let greeter = new Greeter("how are you?");
console.log(greeter.greet());

class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMiles: number = 0) {
    console.log("moved " + distanceInMiles + " miles");
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(distanceInMiles = 5) {
    super.move(distanceInMiles);
  }
}

let yeppi = new Dog("Yeppi");
console.log(yeppi);
console.log(yeppi.move());
