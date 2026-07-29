const name = "kaushal";
const repoCount = 19;

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

// const gameName = new String("Kaushal90");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('l'));

const gameName = new String("Kaushal-90-com");

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);

//Trip and replace method

const newStringOne = "     kaushal.     ";
// console.log(newStringOne);
// console.log(newStringOne.trim());
// console.log(newStringOne.trimStart());
// console.log(newStringOne.trimEnd());

const url = "https://kaushal.com/kaushal%20yadav"
// console.log(url.replace('%20', '-'));

// console.log(url.includes('kaushal'))
// console.log(url.includes('aman'))

//string to arry on the basis of '-'

console.log(gameName.split('-'))