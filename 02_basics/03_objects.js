// singleton
//object.create

//object literals
const mySym = Symbol("key1");

const JsUser = {
  name: "kaushal",
  "full name": "Kaushal Yadav",
  [mySym]: "mykey1",
  age: 18,
  location: "maharajganj",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "saturday"],
};
// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "kaushal@chatgpt.com";
// Object.freeze(JsUser);

JsUser.email = "kaushal@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function (){
    console.log("hello JS User, How are you");
}


JsUser.greeting2 = function (){
    console.log(`hello JS User, How are you, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());