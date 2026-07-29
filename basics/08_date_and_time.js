//Dates

let myDate = new Date();
// console.log(typeof myDate);

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate = new Date(2026, 0, 23);
// let myCreatedDate = new Date(2026, 0, 23,5,3);
// let myCreatedDate = new Date("2026-01-14");
let myCreatedDate = new Date("01-14-2023");

// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth()+1);

let info = `Today is ${newDate.toLocaleDateString()}, and the time is ${newDate.toLocaleTimeString()}.`;

console.log(info);

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
  }),
);
