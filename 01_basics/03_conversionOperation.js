let score = "33"

//console.log(typeof score);
//console.log(typeof (score));

let value = "33abc"
let valueInNumber = Number(value); // this Number only converts the type of value present in the variable
//console.log(typeof valueInNumber); 

//console.log(valueInNumber); // here actual value is NaN as value variable was not a number 

/*
"33abc" => NaN
null => 0
undefined => NaN
true => 1
false => 0
*/

let isLoggedIn = 1

let booleanIsloggedIn = Boolean(isLoggedIn)
console.log(booleanIsloggedIn);

/*
1 => true
"" => false
"Shweta" => true
*/

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
