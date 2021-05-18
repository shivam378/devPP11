//let is  block scoped
//const is block scoped

//var => function scope

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