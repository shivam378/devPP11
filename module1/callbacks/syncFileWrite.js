const fs = require("fs");
function callBack(filenumber){
    console.log(filenumber , "file written succesfully")
    if(filenumber==3){
        return;
    }
    writeFile(filenumber+1);
}

function writeFile(filenumber){
    fs.writeFile(filenumber+ ".txt", "hello" + filenumber, callBack.bind(this, filenumber) )
    
}

writeFile(1);