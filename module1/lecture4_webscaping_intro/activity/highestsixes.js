let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");
request(matchLink,cb);
function cb (error, response, data){
    gethighestsixes(data);
}
function gethighestsixes(data){
    let highestsixes;
    let batsmanName;
    let strikerate;
    let myDocument=cheerio.load(data);
    let bothbatsmantable = myDocument(".table.batsman");
    //console.log(bothbatsmantable);
    for(let i=0; i< bothbatsmantable.length ; i++){
        let onebatsmantable = myDocument(bothbatsmantable[i]);
        let allTrs =onebatsmantable.find("tbody tr");
        for(let j=0 ; j<allTrs.length ;j++){
            let allTDS= myDocument(allTrs[j]).find("td");
            if(allTDS.length>1){
                //inside valid tr
                if(i==0 && j==0){``
                    batsmanName=myDocument(allTDS[0]).text();
                    highestsixes= myDocument(allTDS[6]).text();
                    strikerate=myDocument(allTDS[7]).text();
                }
                else{
                    let currentstrikerate= myDocument(allTDS[7]).text();
                    let currentsixes=myDocument(allTDS[6]).text();
                    if(currentsixes>highestsixes || (currentsixes== highestsixes && currentstrikerate> strikerate)){
                        batsmanName=myDocument(allTDS[0]).text();
                        highestsixes= currentsixes;
                        strikerate=currentstrikerate;
                    }
                }
            }
        }
    }
    console.log("BAtsmanNAme = " + batsmanName);
    console.log("Total Sixes = " + highestsixes);
    console.log("StrikeRate = " + strikerate);
}
//let htmlkadata=fs.readFileSync("./match1.html", "utf8");