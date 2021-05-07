let matchLink="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard"
const request = require("request");
const fs= require("fs");
const cheerio = require("cheerio");
// // request is a high order function 
// request(matchLink,cb);
// function cb(error, response, data){
//     console.log("got the data");
    //fs.writeFileSync("./match.html", data);
let htmlkadata= fs.readFileSync("./match.html","utf8");
let myDocument=cheerio.load(htmlkadata);
//let matchinfo=myDocument(".status-text span").text();
//console.log(matchinfo)
let bothbowlingtables=myDocument(".table.bowler");
fs.writeFileSync("./bowlingtables.html",bothbowlingtables+"");






