/**
 * Created by dell on 2016/5/6.
 */
var express=require("express");
var app=express();
app.use(express.static("./"));
var index=require("./router/router");
app.use(index)

var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection',function(socket){


    socket.on('message',function(data){
        console.log(data)
        socket.broadcast.emit('lyz',data);

    });
});


server.listen(3020,function(req,res){
    console.log("本地服务器搭建连接成功")
});
