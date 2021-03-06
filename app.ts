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

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} ={
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// type alias

type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex ={
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// union types
let myRealRealAge: number | string = 20;
myRealRealAge = "20";
// myRealRealAge = true;

//check types
let finalValue = "A string";
if (typeof finalValue == "string") {
    console.log("Final value is a number");
}

// never
function neverReturns(): never {
    throw new Error('An error!');
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
// canThisBeAny = 12;