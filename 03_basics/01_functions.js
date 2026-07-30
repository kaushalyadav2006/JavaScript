function sayMyName() {
  console.log("K");
  console.log("A");
  console.log("U");
  console.log("S");
  console.log("H");
  console.log("A");
  console.log("L");
}

// sayMyName();

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}
// const reuslt = addTwoNumbers(3, 4);
// console.log("Result: ", reuslt)

// console.log("\n");

function addTwoNumbers2(number1, number2) {
  // let result =  number1 + number2;
  // return result;
  return number1 + number2;
}
const res = addTwoNumbers2(4, 5);
// console.log("Result: ", res);

// function loginUserMessage(username) {
//   if (username === undefined) {
//     console.log("please enter a user name");
//     return;
//   }
//   return `${username} just logged in`;
// }

// function loginUserMessage(username) {
//   if (!username) {
//     console.log("please enter a user name");
//     return;
//   }
//   return `${username} just logged in`;
// }

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("please enter a user name");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Kaushal"));
// console.log(loginUserMessage());

//--------rest operator

// function calculateCartPrice(...num1){
//     return num1;
// }

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200));
// console.log(calculateCartPrice(200, 400,500, 2000));

const user = {
  username: "kaushal",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`,
  );
}

// handleObject(user);
handleObject({
  username: "vivek",
  price: 399,
});



const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([900, 599, 1000, 434]));