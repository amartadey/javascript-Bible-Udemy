// Example 1

// var a;
// console.log(a);
// //console.log(b); //script.js:5 Uncaught ReferenceError: b is not defined
// let c;
// console.log(c);
// // const d;
// // console.log(d) Uncaught SyntaxError: Missing initializer in const declaration

/**
 * Example 2 -"let"
 */
// let myNumber = 10;
// console.log(myNumber);
// let myString;
// console.log(myString);
// myString = "Amarta Dey";
// console.log(myString);
// myString = "This is a changed value";
// console.log(myString);


/**
 * Example 3 -"var"
 */
// var myNumber = 10;
// console.log(myNumber);
// var myString;
// console.log(myString);
// myString = "Amarta Dey";
// console.log(myString);
// myString = "This is a changed value";
// console.log(myString);


/**
 * Const
 */
// const myBoolean = true;
// console.log(myBoolean);

// const myObject = {a:"Amarta", b:2, c:true};
// console.log(myObject);


var x = 10;
var y  = true;
var myObject = {a:x, b:y};
console.log(x);
console.log(y);
console.log(myObject);
var anotherObject;
anotherObject = {newA: 20, b:myObject.b, c:myObject};
console.log(anotherObject);
