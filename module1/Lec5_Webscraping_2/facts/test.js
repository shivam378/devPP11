let fs = require("fs");
let obj ={
    runs : "10",
    balls : "2"
}
// let jsonObj = JSON.stringify(obj);
// fs.writeFileSync("./a.json" , jsonObj+"");
// console.log(jsonObj+ "");

let Obj = JSON.parse(fs.readFileSync("./a.json"));
console.log(Obj);