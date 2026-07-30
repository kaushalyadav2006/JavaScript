
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
console.log(loginUserMessage());
