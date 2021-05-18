//let=> blocked scoped variable
//const=> blocked scoped variable

// let a;
// console.log(a)
// a=20;

// console.log(a)
// let a;
// a=20;

console.log(a)
var a= "steve"
console.log(a)


//Hoisting => mechanism of accesing the variables before initialization.
//Hoisting happens in var.
// do you think hoisting happens in let and const
console.log(a)
let a = "steve"
console.log(a)
//Hoisting happens in let and const but we  can't access them.But let and const gone in temporal deadzone so we can't access tehm w/o innitialization
//We can't see temporal deadzone on node JS


//Below things which throws specifics errors
// undefined
console.log(a);
var a = "Steve";
console.log(a);

// not defined
console.log(c);

// cannot access a before initialization
console.log(b);
let b = "Steve";
console.log(b);