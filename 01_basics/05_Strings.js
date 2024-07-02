/*const name ="Devesh"
const repoCount=50
//console.log(name)----------------
//console.log(repoCount)//---------ONE WAY TO DECLARE STRING
//THERE IS ONE MORE WAY WHICH IS LITTLE BIT MORE READABLE

const name="Devesh"
const repoCount=50
console.log(`my name is ${name} & my repoCount is ${repoCount}`) //THIS IS BETTER WAY TO DO SAME

const gameName=new String('deveshfc')
console.log(gameName[0]);
console.log(gameName.__proto__);   //THIS IS A WAY TO FIND OBJECT 
console.log(gameName.length);      //TO FIND LENGTH
console.log(gameName.toUpperCase());//TO TURN THIS INTO UPPER CASE
console.log(gameName.charAt('2'));  //TO FIND WHICH CHARACTER IS AT THAT PLACE
console.log(gameName.indexOf('s')); //TO FIND AT WHICH PLACE THIS CHARACTER IS

const gameName= new String('devesh-fc')
const newString = gameName.substring(0,4)
console.log(newString)                   //DIVIDING INTO SUB STRINGS(cannot take negative values)

const anotherString=gameName.slice(-8,4)//(CAN EVEN TAKE NEGATIVE VALUES)
console.log(anotherString)


const newStringOne="  Devesh  "
console.log(newStringOne);
console.log(newStringOne.trim());//----------TRIM REMOVES EXTRA SPACES

const newStringTwo="   hello devesh    ";
console.log(newStringTwo);
console.log(newStringTwo.trimStart())
console.log(newStringTwo.trimEnd())

const url="https://devesh.com/devesh%20chauhan"
console.log(url.replace('%20','-')) //---------WE WANT TO REPLACE %20 WITH -
//
console.log(url.includes('devesh'))
*/
//----------------SPLIT----------------------//
//I WANT TO CONVERT A STRING INTO AN ARRAY
const name=string('Devesh-fc-com');
console.log(name.split('-'));