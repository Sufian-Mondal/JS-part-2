"use strict";
/*
function jname() {
  console.log("my name is jarif");
}

//calling,invoking

jname();
jname();
jname();

function bookPrinter(chart,table) {
  console.log(chart,table);
  const book = `Book with ${chart} chart and ${table} table`;
  return book;
}

const chartBook = bookPrinter(2,0);
console.log(chartBook);

const chartTableBook= bookPrinter(4,6);
console.log(chartTableBook);


// function declaration

function calcAge1(birthYeah){
    return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// function expression

const calcAge2 = function (birthYeah){
    return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


//arrow function

//function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};

//arrow function

const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, fristName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  //return retiremnt;
  return `${fristName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/


//coding challenge

const calcAvg = (a, b, c) => (a + b + c)/3;
console.log(calcAvg(4, 5, 6));

//test data 1

let scoreDolphins = calcAvg(44, 23, 71);
let scoreKoalas = calcAvg(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas){
   if (avgDolphins >= 2 * avgKoalas){
     console.log(`Dolphins wins ${avgDolphins} VS. ${avgKoalas}`);
   } else if (avgKoalas >= 2 * avgDolphins){
    console.log(`Koalas wins ${avgKoalas} VS. ${avgDolphins}`);
   } else {
        console.log('No one wins');
   }
   
} 

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(766, 200);


//test data 2
scoreDolphins = calcAvg(85, 54, 41);
scoreKoalas = calcAvg(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);




 