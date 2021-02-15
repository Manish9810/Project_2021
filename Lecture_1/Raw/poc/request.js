let request = require("request");

let fs = require("fs");
request("https://www.espncricinfo.com/series/icc-cricket-world-cup-2014-15-509587",datarecever);
let cheerio = require("cheerio");
function datarecever(err,res,html){
    if(err==null&& res.statusCode==200){
    //console.log(html);
    parse(html);
}
else if(res.statusCode==404){
    console.log("Page not found");
}
else{
    console.log(err);
    console.log(res);
}
}
function parse(html){
let $ = cheerio.load(html);
//let list = $("ul.list-unstyled.mb-0");
// fs.writeFileSync("list.html",html);

let a = $("li.widget-items.cta-link a").attr("href");
// console.log(a);

let fulllink  = "https://www.espncricinfo.com"+a;
// console.log(fulllink);
  request(fulllink , matchPageHandler)
  request( fulllink ,separate)
}

function separate(err,res,html){
    if(err==null&& res.statusCode==200){
        //console.log(html);
        parse2(html);
    }
    else if(res.statusCode==404){
        console.log("Page not found");
    }
    else{
        console.log(err);
        console.log(res);
    }

}

function parse2(html){
    let abc = cheerio.load(html);
    let list1 = abc("div.col-md-8.col-16");
    let txt = list1.toString();
    fs.writeFileSync("list1.html", txt);
}
function matchPageHandler(err,res,html){
    if(err==null&& res.statusCode==200){
        //console.log(html);
        parse1(html);
    }
    else if(res.statusCode==404){
        console.log("Page not found");
    }
    else{
        console.log(err);
        console.log(res);
    }
}

function parse1(html){
    fs.writeFileSync("allmathes.html",html)
}

