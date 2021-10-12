const fs = require("fs");




function callBack(filenumber, err , data){
    console.log(filenumber, " file read successfully");
    let numbersArray = data.split("\n");
    for(let number of numbersArray){
        answers+= parseInt(number);
    }

    if(filenumber==8){
        console.log(answers);
        return;
    }
}
function 



