"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("how are you?");
console.log(greeter.greet());
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
        this.numberOfLegs = 0;
    }
    Animal.prototype.move = function (distanceInMiles) {
        if (distanceInMiles === void 0) { distanceInMiles = 0; }
        console.log("moved " + distanceInMiles + " miles");
    };
    Animal.prototype.setNumberOfLegs = function (numLegs) {
        this.numberOfLegs = numLegs;
    };
    Animal.prototype.getNumberOfLegs = function () {
        return this.numberOfLegs;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.move = function (distanceInMiles) {
        if (distanceInMiles === void 0) { distanceInMiles = 5; }
        _super.prototype.move.call(this, distanceInMiles);
    };
    return Dog;
}(Animal));
var yeppi = new Dog("Yeppi");
console.log(yeppi);
console.log(yeppi.move());
console.log(yeppi.getNumberOfLegs());
yeppi.setNumberOfLegs(4);
console.log(yeppi.getNumberOfLegs());
