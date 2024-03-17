// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1); // true different datatypes can create problem
// console.log("02" > 1); //true


// console.log(null > 0) // false it will treat null as 0 or NaN (that is not sure)
// console.log(null == 0) //false The reason is that equality check (==) and comparisons < > <= >= works differently.
// console.log(null >= 0) //true Comparison converts null to a number, treating it as 0. That's why this is true 0 >= 0

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0); // we should avoid null or undefined comparisons.

console.log("2" === 2) // === strict check checks value along with datatype
