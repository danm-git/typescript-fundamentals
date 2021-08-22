console.log("Hey hey world");

let myString: string = "Hello Blockchain Engineers!!!";
console.log(myString);

let myNum: number = 42;
console.log(myNum);

let myBool: boolean = true;
console.log(myBool);

let myAny: any = "Should I hire Dan....? = ";

console.log(myAny + myBool);

let strArr: string[] = [myAny, myBool, myNum];

let numArr: number[] = [1, 2, 3];

let boolArr: boolean[] = [true, false, true];

let strNumTuple: [string, string, number, boolean] = [
  "hey ",
  "hey",
  myNum,
  myBool,
];

let myUnion: string | number;
myUnion = myString;
console.log(myUnion);
myUnion = myNum;
console.log(myUnion);
