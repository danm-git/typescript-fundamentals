"use strict";
var sum = function (num, num2) {
    return num + num2;
};
console.log(sum(42, 41));
var sum2 = function (num, num2) {
    typeof num == "string" ? (num = parseInt(num)) : null;
    typeof num2 == "string" ? (num2 = parseInt(num2)) : null;
    return num + num2;
};
console.log(sum2(42, "42"));
