let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard"
const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");
// request is a high order function 
let data = fs.readFileSync("match.html", "utf8");

request(matchLink,cb);
function cb(error, response, data){
    console.log("got the data");
}
fs.writeFileSync("./match.html", data);
let htmlkadata = fs.readFileSync("./match.html", "utf8");
let myDocument = cheerio.load(htmlkadata);
let matchinfo=myDocument(".status-text span").text();
console.log(matchinfo)
let bothbowlingtables = myDocument(".table.bowler");
fs.writeFileSync("./bowlingtables.html",bothbowlingtables+"");
// {
//     "0" : {bowling table},
//     "1" : {bowling table}
// }
let highestwickettakenName;
let highestwickettaken;
let economyofhighestwickettaker;
for (let i = 0; i < bothbowlingtables.length; i++) {
    let bowlingtables = myDocument(bothbowlingtables[i]);
    let allTableRows = bowlingtables.find("tbody tr");
    // {
    //     "0" : {tr},
    //     "1" : {tr},
    //     "2" : {tr
    // }
    for (let j = 0; j < allTableRows.length; j++) {
        let allTDS = myDocument(allTableRows[j]).find("td");
        // {0:{} ,1:{} , 2:{} , 3:{} }
        //wicket "4"
        //name "0"
        //economy "5"
        if (i == 0 && j == 0) {
            highestwickettakenName = myDocument(allTDS[0]).find("a").text();
            highestwickettaken = myDocument(allTDS[4]).text();
            economyofhighestwickettaker = myDocument(allTDS[5]).text();
        }
        // {0:{} ,1:{} , 2:{} , 3:{} }
        //wicket "4"
        //name "0"
        //economy "5"
        else {
            let currentwickets = myDocument(allTDS[4]).text();
            let currenteconomy = myDocument(allTDS[5]).text();
            if (currentwickets > highestwickettaken) {
                //update if current bowler have high wicket!! 
                highestwickettakenName = myDocument(allTDS[0]).find("a").text();
                highestwickettaken = currentwickets;
                economyofhighestwickettaker = myDocument(allTDS[5]).text();
            }
            else if (currentwickets == highestwickettaken && currenteconomy > economyofhighestwickettaker) {
                highestwickettakenName = myDocument(allTDS[0]).find("a").text();
                highestwickettaken = currentwickets;
                economyofhighestwickettaker = myDocument(allTDS[5]).text();
            }
        }
    }
}
console.log("highest wicket taken Name = " + highestwickettakenName);
console.log("total wickets = " + highestwickettaken);
console.log("economy of highest wicket taker = " + economyofhighestwickettaker);


