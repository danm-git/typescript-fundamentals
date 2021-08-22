"use strict";
var showState = function (person) {
    return person.name + " is " + (person.isHungry ? "hungry" : "not hungry");
};
var danTheMan = {
    name: "Dan The Man",
    isHungry: true,
};
console.log(showState(danTheMan));
