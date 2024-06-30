//primitive datatypes

//Strings,number,boolean,symbol,big Int,null,undefined

/*const score=100
const scorevalue=100.3 //both are in number catogory

const isLoggedIn=false //boolean
const outsideTemp=null //null
let userEmail;         //undefined
const id=Symbol('123') //symbol 

//Reference type non premitive
//arrays,objects and function

//const heroes=["Shaktiman","doga","Hatim"]      //Arrays

{
    ame:"devesh";
    age: 22;
}                                                //object

const myFunction=function(){
    console.log("hello world")                  //function
}

const scorevalue=100.3
console.log(typeof scorevalue)                // typeof is use to know the type of data type


//STACK MEMORY- is used in primitive data types
//HEAP MEMORY - is used in non primitive data types

let myYoutubename="Devesh";
//primitive data type so will store in stack
let anothername=myYoutubename;
console.log(anothername)
//
//
let myYoutubename="Devesh";

let anothername=myYoutubename;
anothername="chaiaurcode";
console.log(myYoutubename)
console.log(anothername)*/

let userOne={
    email:"user@gmail.com"
}   

let userTwo=userOne
userTwo.email="devesh@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)


