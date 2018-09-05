var http = require("http");
var urlLib = require("url");

http.createServer((req,res)=>{

    if (req.url == "/favicon.ico"){
        return;
    }
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    var pathname = urlLib.parse(req.url).pathname;
    var query = urlLib.parse(req.url,true).query;
    console.log(query);
    console.log(pathname);
    if (pathname == "/student"&&((query.id).length) == 4){
        res.end("介学生的ID为"+query.id);
    }
    if (pathname == "/teacher"&&((query.id).length) == 4){
        res.end("介老师的ID为"+query.id);
    }
    else {
        res.end("无此id");
    }
}).listen(3000,"127.0.0.1");