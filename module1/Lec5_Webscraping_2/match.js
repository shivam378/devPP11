const cheerio= require("cheerio");
const request= require("request");
const fs= require("fs");
//let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
function getMatchdetails(matchLink){
    request(matchLink,function(error, response , data){

        processdata(data);
    })
}
function processdata(html){
    let myDocument=cheerio.load(html);
    let bothinings= myDocument(".card.content-block.match-scorecard-table .Collapsible");

    for(let i=0;i<bothinings.length;i++){
        let oneInings = myDocument(bothinings[i]);
        let teamname= oneInings.find("h5").text();
        teamname= teamname.split("INNINGS")[0].trim();
        //console.log(teamname);
        let allTrs = oneInings.find(".table.batsman tbody tr")
        for(let j=0; j<allTrs.length-1; j++){
            let allTds= myDocument(allTrs[j]).find("td");
            if(allTds.length>1){
                let batsman=myDocument(allTds[0]).text().trim();
                let runs =myDocument(allTds[2]).text().trim();
                let balls= myDocument(allTds[3]).text().trim();
                let fours= myDocument(allTds[5]).text().trim();
                let sixes= myDocument(allTds[6]).text().trim();
                let strikerate= myDocument(allTds[7]).text().trim();
                //console.log(`Batsman = ${batsman} runs = ${runs} balls=${balls} fours=${fours} sixes=${sixes} strikerate=${strikerate}`);
                processdetails(teamname , batsman , runs , balls , fours , sixes, strikerate);
            }
        }
    }
}
function checkTeamFolder(teamname){
    //teamfolderPath = "./IPL/Delhi Capitals"
    let teamfolderPath = `./IPL/${teamname}`;
    return fs.existsSync(teamfolderPath);
}
function checkbatsmanfile(teamname, batsman){
}
function updateBatsmanfile(teamname, batsman , runs, balls, fours, sixes, strikerate){
}
function creatbatsmanfile(teamname, batsman , runs, balls, fours, sixes, strikerate){

}
function createTeamFolder(teamname){
    let teamfolderPath= `./IPL/${teamname}`;
    fs.mkdirSync(teamfolderPath);

}
function processdetails(teamname , batsman , runs , balls , fours , sixes, strikerate){

    let isTeamfoler=checkTeamFolder(teamname);
    if(isTeamfoler){
        let isBatsmanPresent =checkbatsmanfile(teamname, batsman);
        if(isBatsmanPresent){
            updateBatsmanfile(teamname, batsman , runs, balls , fours , sixes , strikerate)
        }
        else{
            creatbatsmanfile(teamname, batsman , runs, balls, fours, sixes, strikerate);
        }
    }
    else{
        createTeamFolder(teamname);
        creatbatsmanfile(teamname, batsman , runs, balls, fours, sixes, strikerate);
    }
}
module.exports = getMatchdetails;