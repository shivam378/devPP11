const fs= require("fs");
let count= 0;
let ans=0;

function callBack(i,err, data){
    console.log(i, "file read successfully")
    count++;
    let numbersArray= data.split("\n")
    for(let number of numbersArray){
        ans+= parseInt(number);
    }
    if(count==8){
        console.log(ans)
    }
}