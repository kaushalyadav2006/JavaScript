// const tinderUser = new Object(); //---->singleton object

const tinderUser = {}; // non singleton object

tinderUser.id = "123abc";
tinderUser.name = "Jimmy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "judy@gmail.com",
  fullName: {
    userfullname: {
      firstname: "judy",
      lastname: "vietnam",
    },
  },
};

// console.log(regularUser.fullName.userfullname.firstname)
// console.log(regularUser.fullName.userfullname.lastname)

//how to combine objects

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};
const obj4 = {
  5: "e",
  6: "f",
};

// const obj3 = {obj1 , obj2};
const obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj3);

const obj5 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj5);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  }
];

// console.log(users[1].email);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));


//destructuring

const course = {
    coursename : "JS in Hindi",
    price : "999",
    courseInstructure : "hitesh sir"
}
// course.courseInstructure

// const {courseInstructure} = course
// console.log(courseInstructure);

const {courseInstructure : instructor} = course
console.log(instructor);

// {
//   "name":"kaushal",
//   "coursename" : "JS in hindi",
//   "price": "free",
// }

[
  {},
  {},
  {},
]