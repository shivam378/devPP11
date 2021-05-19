//let is  block scoped
//const is block scoped

//var => function scope
//var scope
var a =20
console.log(a)
if(true){
    var a= 50
    console.log(a)
}
console.log(a)
function callme(){
    var a= 100;
    console.log("inside call me")
    console.log(a)
}
callme();
console.log(a);

//let scope
let a =20
console.log(a)
if(true){
    let a= 50
    console.log(a)
}
console.log(a)
function callme(){
    console.log("inside call me")
    console.log(a)
    let a= 100;
    console.log(a)
}
callme();
console.log(a);