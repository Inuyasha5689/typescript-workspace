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

let myColor: Color = Color.Green;
console.log(myColor);
