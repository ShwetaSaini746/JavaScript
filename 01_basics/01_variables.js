const accountId = 144553
let accountEmail = "shweta@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai" // this way is not advisable to use.
let accountState;

/* let and var both are used for declaring 
Prefer not to use var 
because of issue in block scope and functional scope
*/

//accountId = 1

accountEmail = "shweta1@gmail.com"
accountPassword = "23456"
accountCity = "Chennai"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);