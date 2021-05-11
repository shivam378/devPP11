const fs= require("fs");
fs.readFile("./f1.txt" , getdata);

function getdata(error, data){
    console.log(data + "");
}
console.log("end");