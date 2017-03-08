/**
 * Created by dasco on 3/7/2017.
 */
//String
let myName = 'Drake';
// myName = 20;

//number
let myAge : number= 20.5;
// myAge = 'Drake';

//boolean
let hasHobbies: boolean = true;
// hasHobbies = 1;

// assign types

let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

//array
let hobbies: any[] = ["Cooking", "Soccer"];
hobbies = [100];
// hobbies = 100;

// tuples
let address: [string, number] = ["Superstreet", 99];

// enum
enum Color {
    Gray, // 0
    Green = 100, // 100
    Blue = 2// 2
}

let myColor: Color = Color.Blue;
console.log(myColor);

//any
let car: any = "BMW";
console.log(car);
car = { brand: "bmw", series: 3};
console.log(car);

// functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
    console.log("hello!");
    // return myName has an error
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

// console.log(multiply(2, 'Drake'));
console.log(multiply(2, 5));

//function types
let myMultiply: (val1: number, vale2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData: { name: string, age: number } = {
    name: 'Drake',
    age: 20
};
// userData = {
//     a: 'Hello',
//     b: 22
// };