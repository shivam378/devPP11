let files = ["../f1.txt", "../f2.txt" , "../f3.txt"];
const fs = require("fs");
console.log("start");
for(let i=0 ; i<files.length ;i++){
    fs.readFile(files[i],function(err, data){
        console.log(data + " ");
    })
}
console.log("end")


const fs = require("fs");
console.log("start");

fs.readFile("./f1.txt" , function(err, data){
    console.log(data + "");
})

fs.readFile("./f2.txt" , function(err, data){
    console.log(data + "");
})


fs.readFile("./f3.txt" , function(err, data){
    console.log(data + "");
})