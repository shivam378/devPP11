const fs= require("fs")
const cheerio= require("cheerio")
let htmlkadata=fs.readFileSync("./index.html","utf8");
// console.log(htmlkadata) // we have stringified html file

//we have a html file

let myDocument= cheerio.load(htmlkadata);

//document.querryslector("h1") we can't use here because it's run on browser


let h1kadata=myDocument("h1").text();
//console.log(element) element=> cheerio=>object for of data
console.log(h1kadata);