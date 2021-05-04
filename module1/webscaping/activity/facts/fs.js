//In Dev_PP11 folder
// npm init -y
//npm install cheerio

const fs= require("fs")
const cheerio = require("cheerio");

let htmlkadata = fs.readFileSync("index.html", "utf8");
//console.log(htmlkadata); // we have stringified html dile!!
 //html file os loaded in cheerio
 let myDocument = cheerio.load(htmlkadata)
 