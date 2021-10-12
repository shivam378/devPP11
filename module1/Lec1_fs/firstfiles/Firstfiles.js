let minimist = require("minimist");
let fs= require("fs");

let args = minimist(process.argv);
//node Firstfiles.js  --source=f1.txt --dest=f2.txt
// let stext = fs.readFileSync(args.source, "utf-8");
// console.log(stext)

// console.log(args.source);
// console.log(args.dest);

let stext = fs.readFileSync(args.source, "utf-8")
console.log(stext)


let dtext = stext.toUpperCase();

fs.writeFileSync(args.dest , dtext, "utf-8")

console.log(dtext)