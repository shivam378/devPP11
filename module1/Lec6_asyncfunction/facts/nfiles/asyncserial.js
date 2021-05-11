let files = ["../f1.txt", "../f2.txt" , "../f3.txt"];
const fs = require("fs");
let i=0;

while(i<files.length){
    fs.readFile(files[i],function(err, data){
        console.log(data+ " ")
        
    })
    i++;
}