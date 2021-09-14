// let js = "henry";
// console.log(30 + 20 + 60);
// console.log("henry");
// let firstName = "xavier";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// let henry = true;
// let x = 10;
// console.log(typeof x);
// console.log(typeof henry);
// firstName = "ferrao"; // changing the value of firstname=henry to ferrao
// console.log(firstName);
// let xyz = null;
// console.log(xyz);
// const h = 10;
// console.log(h);
// h = 20; cannto assign to const type
// console.log(h);
// let henryAge = 2021 - 1990;
// const vianyAge = 2021 - 1990;
// console.log(henryAge, vianyAge);
// const fname = "henry";
// const lname = "ferrao";
// console.log(fname + " " + lname);

// Assignment operators
// let x = 15 + 20;
// console.log(x);
// let x = 10;
// x += 10; // x=x+10 =20
// console.log(x);
// x++; //x=x+1 =21
// console.log(x);
// const a = 10;
// const b = 20;
// console.log(a > b);
// console.log(a < b);
// console.log(a == b);
// console.log(a >= b);
// console.log(a <= b);

// operator precedence
// console.log(25 - 5 - 5); //left to right
// let a, b;
// a = b = 10 - 5 - 2;
// console.log(a, b); //precedance right to left on assignment
// let a, b;
// a = 20;
// b = 30;
// // let result = a + b / 2;  //ouptput a=20,b=30 result=35 (/) had highest precedance than (+) so R to L
// let result = (a + b) / 2;
// console.log(a, b, result);
// challenge
// let markHeight, markWeight, johnHeight, johnWeight;
// markHeight = 1.69;
// markWeight = 78;
// johnHeight = 1.95;
// johnWeight = 92;
// markWeight = 95;
// markHeight = 1.88;
// johnHeight = 1.76;
// johnWeight = 85;

// let markBmi = markWeight / markHeight ** 2;
// let johnBmi = johnWeight / (johnHeight * johnHeight);
// console.log(markBmi, johnBmi);
// let markBMI = markBmi > johnBmi;
// console.log(markBMI);

// Strings and template literals

// const firstName = "henry";
// const job = "Developer";
// const birthYear = 1990;
// const year = 2020;

// const henry = "i'm " + firstName + " a " + (year - birthYear) + " age " + job; //normal string
// using string literals
// const henry = `i'm ${(firstName, job)},a ${year - birthYear},age ${job}`;
// console.log(henry);
//multi line string using literals
// console.log(`henry
// george
// ferrao`);

// IF ELSE

// const age = 15;
// const IsOldEnough = age >= 18;
// if (IsOldEnough) {
//   console.log("you are eligible to drive");
// } else {
//   const AgeLeft = 18 - age;
//   console.log(`Sorry you have ${AgeLeft} years left to be Eligible `);
// }

// Coding cahllenge

// const markHeight = 1.69;
// const markWeight = 78;
// const johnHeight = 1.95;
// const johnWeight = 92;
// const johnBmi = johnWeight / (johnHeight * johnHeight);
// const markBmi = markWeight / (markHeight * markHeight);
// console.log(johnBmi, markBmi);
// if (johnBmi > markBmi) {
//   console.log(`Jhon's BMI ${johnBmi} is greater than mark's BMI${markBmi}`);
// } else {
//   console.log(`Mark's BMI ${markBmi} is greater than Jhon's BMI ${johnBmi}`);
// }
// console.log("h e n r y ".length); //check the length of the string

// type conversion
// const a = "10";
// console.log(a + 20); //ouput is 1020 [ reason variable a="10" is string]

// console.log(Number(a) + 30);
// console.log(a + 30);
//trying to convert string which has charactors
// let MyName = "henry";
// console.log(Number(MyName)); //o/p is NaN= [not a number] but the type will be a number
// console.log(typeof NaN);

// console.log(String(23), 23);

// Type coersion [Auto coversion done by JS]
// console.log("23" + "33" + 10); //o/p is 233310 the[+] operator converts it into string
// console.log("23" - "33" - 50); //o/p is -60 the[-] operator converts it into number

// falsy values  0,"",undefined,NaN,null
// console.log(Boolean(""));
// console.log(Boolean(0)); //o/p is false

// equality operator  [==,===]
// ex ===
// const age = 18;
// if (age === 18) {
//   console.log("true");
// }
// const age = "18";
// if (age === 18) {
//   console.log("true");
// } else {
//   console.log("false");
// }

//Ex ==
// const age = "18";
// if (age == 18) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// const age = 18;
// if (age == 18) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// const age = Number(prompt("enter a number"));
// if (age === 23) {
//   console.log(" great the number is 23");
// }
// const age = prompt("enter a number");
// if (age == 23) {
//   console.log(" great the number is 23");
// }

//Boolean logic AND OR NOT
//AND EX
// const a = true;
// const b = true;
// console.log(a && b); //true
// const a = true;
// const b = false;
// console.log(a && b);
// const a = false;
// const b = false;
// console.log(a && b);

// OR EX
// const a = true;
// const b = true;
// // console.log(a || b);
// const a = true;
// const b = false;
// console.log(a || b);
// const a = false;
// const b = false;
// console.log(a || b);

// NOT ex
// const a = false;
// console.log(!a);
// const a = true;
// console.log(!a);

//Challenge
// const scoreDolphines = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphines, scoreDolphines);
// if (scoreDolphines > scoreKoalas) {
//   console.log("Dolphin win the trophy");
// }
// else if(scoreKoalas>scoreDolphines){
//   console.log("Koals win the trophy");
// }
// else if(scoreKoalas===scoreDolphines){
//   console.log("Match draw");
// }

// Switch

// const day = "monday";
// switch (day) {
//   case "monday":
//     console.log("hey its monday");
//     break;
//   case "tuesday":
//     console.log("hey its tuesday");
//     break;
//   case "wednesday":
//     console.log("hey its wednesday");
//     break;
//   case "thursday":
//     console.log("hey its thursday");
//     break;
//   case "friday":
//     console.log("hey its friday");
//     break;
//   case "saturday":
//     console.log("hey its saturday !! Enjoy weekend");
//     break;
//   case "Sunday":
//     console.log("hey its Sunday hope your enjoying the weekend");
//     break;
//   default:
//     console.log("not a valid day");
// }

// challenge
// const day = "saturday";
// if (day == "monday") {
//   console.log("Its Monday");
// } else if (day == "tuesday") {
//   console.log("Its tuesday");
// } else if (day == "wenesday") {
//   console.log("Its wenesday");
// } else if (day == "thursday" || day == "friday") {
//   console.log("Its thursday or friday");
// } else if (day == "saturday") {
//   console.log("Its saturday");
// } else if (day == "sunday") {
//   console.log("Its sunday");
// } else {
//   console.log("Its wrong day");
// }

// Ternary Operator
// const age = 30;
// age >= 18
//   ? console.log("you can drive")
//   : console.log("you not eligible to drive"); // shoud compulsory have else block after colon[:]
//

// const age = 30;
// const drink = age >= 18 ? "Drink" : "dont drink";
// console.log(drink);

//Challenge
const bill = 430;
const tipValue = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill value is ${bill}, please give tip of ${bill + tipValue}`);
