const cheerio = require("cheerio");
const request = require("request");
const fs= require("fs");

// high order function + async function !!!
request("https://github.com/topics" , function(err , res , data){
    // console.log(data);
    processData(data);
})
let githubtopic=[];
function processData(html){
    let myDocument =cheerio.load(html);
    let alltopicsDiv = myDocument(".topic-box");
    // console.log(alltopicsDiv); 
    for(let i=0;i< alltopicsDiv.length;i++){
        let topicatags= myDocument(alltopicsDiv[i]).find("a");
        let topicLink= "https://github.com" + topicatags.attr("href");
        let topicname =topicatags.find(".f3").text().split("\n")[1].trim();
        //githubtopic.push( {topicName : topicname , Link : topicLink });
        let topicFolderPath=`./Topics/${topicname}`;
        fs.mkdirSync(topicFolderPath);
        getTopicProjects(topicname, topicLink);

    }
    // console.log(githubtopic)

    // console.log(html);
    // let atags=
}