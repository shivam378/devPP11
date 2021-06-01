
const cheerio= require("cheerio");
const request= require("request");
const fs= require("fs");
let matchLink = "https://www.imdb.com/chart/top/?ref_=login";
function getMatchdetails(matchLink){
    request(matchLink,function(error, response , data){

        processdata(data);
    })
}

function processdata(html){
    let myDocument=cheerio.load(html);
    let bothinings= myDocument(".chart.full-width .lister-list tr");

    // for(let i=0;i<bothinings.length;i++){
    //     let oneInings = myDocument(bothinings[i]);
    //     let teamname= oneInings.find("h5").text();
    //     teamname= teamname.split("INNINGS")[0].trim();
    //     //console.log(teamname);
    //     let allTrs = oneInings.find(".table.batsman tbody tr")
    //     for(let j=0; j<allTrs.length-1; j++){
    //         let allTds= myDocument(allTrs[j]).find("td");
    //         if(allTds.length>1){
    //             let batsman=myDocument(allTds[0]).text().trim();
    //             let runs =myDocument(allTds[2]).text().trim();
    //             let balls= myDocument(allTds[3]).text().trim();
    //             let fours= myDocument(allTds[5]).text().trim();
    //             let sixes= myDocument(allTds[6]).text().trim();
    //             let strikerate= myDocument(allTds[7]).text().trim();
    //             //console.log(`Batsman = ${batsman} runs = ${runs} balls=${balls} fours=${fours} sixes=${sixes} strikerate=${strikerate}`);
    //             processdetails(teamname , batsman , runs , balls , fours , sixes, strikerate);
    //         }
    //     }
    // }
}
console.log(bothinings);
