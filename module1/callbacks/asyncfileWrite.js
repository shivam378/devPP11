const fs= require('fs');

function callBack(i){
    console.log(i, "file written successfully")
}
// for(let i=1;i<4;i++){
//     fs.writeFileSync(i+".txt" , "hello" + i , callBack.bind(this, i));
// }
for(let i =1;i<=8;i++){
    let numberOfLines= generateRandomNumber();
    let string= "";
    for(let j=0;j< numberOfLines;j++){
        string += generateRandomNumber()+(j != numberOfLines -1 ? "\n" : "");
    }
}


function generateRandomNumber(){
    return Math.ceil(Math.random())
}