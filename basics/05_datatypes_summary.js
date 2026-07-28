// #Primitive datat types
    //  7 types : String, Number, Boolean, null, 
    // undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 42383474973433232373n



//Non - Primitive data types (Reference type)
    //  Arrays, Objects, Functions, 

    const heros = ["shaktiman", "naagraj", "doga"]

    let obj = {
        name:"kaushal",
        age : 22,
        Gender: "male"
    }

    const myFunction = function(){
        console.log("hello world");
    }

    // console.log(typeof bigNumber);
    // console.log(typeof outsideTemp);
    // console.log(typeof scoreValue);
    console.log(typeof myFunction);

    /**
    Return type of variables in JavaScript
    1) Primitive Datatypes
        Number => number
        String  => string
        Boolean  => boolean
        null  => object
        undefined  =>  undefined
        Symbol  =>  symbol
        BigInt  =>  bigint

    2) Non-primitive Datatypes
        Arrays  =>  object
       Function  =>  function
       Object  =>  object
     */