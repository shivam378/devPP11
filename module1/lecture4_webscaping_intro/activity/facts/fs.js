//In Dev_PP11 folder
// npm init -y
//npm install cheerio

const fs= require("fs")
const cheerio = require("cheerio");

let htmlkadata = fs.readFileSync("index.html", "utf8");
//console.log(htmlkadata); // we have stringified html dile!!
 //html file os loaded in cheerio
 let myDocument = cheerio.load(htmlkadata)
 //document.queryselector("h1");
 //console.log(myDocument)
 let pTagsKaData = myDocument("p");
//  console.log(pTagsKaData)
 let h1kadata = myDocument("h1").text();
 //console.log(h1element); element=> cheerio => object form me data
 //console.log(h1kadata)
 let secondPTag = myDocument("p")["1"];
 //console.log((secondPTag).text());
 //console.log(myDocument(secondPTag).text());

 //selectors
//  console.log(myDocument(" ul p").text() ); //it will give all the p tags inside the ul

//  //a tags
//  console.log(myDocument("a").text());
// //it will give a tags of ul
//  console.log(myDocument("ul a").text());
// // you will get all a tags inside li 
//  console.log(myDocument("ul li a").text());

//  // only direct child
//  console.log(myDocument("ul>a").text());

//classes and Ids
//it will give classes which have only inside class
console.log(myDocument(".inside").text());
console.log(myDocument(".inside.main").text());

//id
////#
console.log(myDocument("#main-heading").text());








