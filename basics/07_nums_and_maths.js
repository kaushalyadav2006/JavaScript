const score = 400;
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000

// console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++++++ Maths ++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.abs(4));

// console.log(Math.round(4.3)); //***
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));



// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random()); // give value in 0 or 1
console.log((Math.random()*10) + 1);  // adding 1 to give output above 1
console.log(Math.floor((Math.random()*10) + 1)); //here math.floor is used to  gives the nearest value

// const dice = (Math.random()*10 )+ 1;
// console.log(Math.floor(dice));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()* (max - min + 1)) + min)


