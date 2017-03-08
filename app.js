/**
 * Created by dasco on 3/7/2017.
 */
//String
var myName = 'Drake';
// myName = 20;
//number
var myAge = 20.5;
// myAge = 'Drake';
//boolean
var hasHobbies = true;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
//array
var hobbies = ["Cooking", "Soccer"];
hobbies = [100];
// hobbies = 100;
// tuples
var address = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
//any
var car = "BMW";
console.log(car);
car = { brand: "bmw", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("hello!");
    // return myName has an error
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'Drake'));
console.log(multiply(2, 5));
//function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: 'Drake',
    age: 20
};
// userData = {
//     a: 'Hello',
//     b: 22
// }; 
