/*const score=400;
console.log(score);//--------------------OUTPUT=400
const balance=new Number(100);
console.log(balance);//------------------OUTPUT=[NUMBER:100]BCZ OF NUMBER KEY WORD
//
//CONVERTING NUMBER TO STRING AND MANY MORE
//
console.log(balance.toString());
console.log(balance.toString().length);
//
//
const oneMoreNumber=243.5558;
console.log(oneMoreNumber.toFixed(2));//-----------------------243.56
console.log(oneMoreNumber.toFixed(3));//-----------------------243.556
//
//
const otherNumber=23.8966
console.log(otherNumber.toPrecision(3));//----------------------23.9
//
//
const hundreds=1000000;
console.log(hundreds.toLocaleString());//-----------------------1,000,000(VALUE IS ACCORDING TO US STANDARDS)
console.log(hundreds.toLocaleString('en-IN'));//----------------10,00,000(VALUE IS ACCORDING TO INDIAN STANDARDS)

//-----------------------------NUMBERS---------------------------------------------------------------------------------
//
console.log(Math.abs(-4));//------------abs CONVERTS NEGATIVE VALUE TO POSSITIVE
console.log(Math.round(4.3));//--------round REMOVED DEVCIMAL AND ROUNDS OFF
console.log(Math.ceil(4.2));//---------ceil 
console.log(Math.floor(4.9));//--------AND floor CONTROLS UPPER VALUE AND LOWER VALUE

console.log(Math.max(9,8,4,2));
console.log(Math.min(7,4,7,2));
*/
//
console.log(Math.random());//----------------------random WILL ALWAYS GIVE VALUE BETWEEN 0 AND 1 AND IT CAN ALSO BE 0.047487488
                           //----------------------AND IF WE MULTIPLY IT BY 10 THEN ALSO IT WILL BE 0.47487488 SO WE EILL-
console.log((Math.random()*10)+1);
//--------NOW IF WE WANT TO SET A MAXIMUM OR MINIMUM RANGE THEN WE WILL---
console.log(Math.floor(Math.random()*10)+1);
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min));
