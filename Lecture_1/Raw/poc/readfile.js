

let fs = require("fs");
///cheerio bhi ek module h jo npm m s install kiya h
let cheerio = require("cheerio");
let html = fs.readFileSync("../facts/intro.html","utf-8");// utf-8 means plain text m dega
//console.log(html);

let a = cheerio.load(html);///element k liye simpe acesss ho skta h
let h1 = a("h1");
let h1kadata = h1.text();
console.log(h1kadata);

let classelement = a(".first-examp");// class k liye slash lgana hotaa h
console.log(classelement.text());

let id = a("#firstid");
console.log(id.text());
