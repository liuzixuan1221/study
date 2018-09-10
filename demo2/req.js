<<<<<<< HEAD
var http = require("http");
var urlLib = require("url");
http.createServer((req,res)=>{
    var query = urlLib.parse(req.url,true).query;
    console.log(query);
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.end("用户："+query.username+"密码："+query.password);
=======
var http = require("http");
var urlLib = require("url");
http.createServer((req,res)=>{
    var query = urlLib.parse(req.url,true).query;
    console.log(query);
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.end("用户："+query.username+"密码："+query.password);
>>>>>>> 76592da2cfb7668198e37fb6f09d3f758697680c
}).listen(3000,"127.0.0.1");