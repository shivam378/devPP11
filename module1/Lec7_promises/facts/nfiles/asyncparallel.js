let files =["../f1.txt", "../f2.txt" , "../f3.txt"];

const fs= require("fs")

for(let i=0; i<files.length;i++){
    let fileKapromise=fs.promises.readFile(files[i])
    fileKapromise.then(function(data){
        console.log(data+"")
    })
}