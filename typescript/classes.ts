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
  private numberOfLegs: number;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMiles: number = 0) {
    console.log("moved " + distanceInMiles + " miles");
  }
  setNumberOfLegs(numLegs: number) {
    this.numberOfLegs = numLegs;
  }
  getNumberOfLegs() {
    return this.numberOfLegs;
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

console.log(yeppi.getNumberOfLegs());
yeppi.setNumberOfLegs(4);
console.log(yeppi.getNumberOfLegs());
