
/**
 * Created by dell on 2016/5/9.
 */
var net=require("net"),fs=require("fs");
var file=fs.createWriteStream("./test.txt")
var server=net.createServer(function(socket){
    /*server.getConnections(function(err,num){
        console.log('%d',num)
    })*/
    /*server.close(function(){
        console.log("已结拒绝")
    })*/

});
server.on("connection",function(socket){
    //socket.pause();
    /*setTimeout(function(){
        socket.resume();
        socket.pipe(file)
    },3000)*/
    socket.on('data',function(data){
        console.log("收到"+data)
    });
    socket.on('end',function(){
        console.log('end')
    })
    socket.on('close',function(){
        console.log('close!');
        server.unref()
    })

        //socket.pipe(file)

    /*socket.on("end",function(){
        file.end("123");
        console.log('2222')
    })*/
    /*socket.on("data",function(data){
        console.log(data.toString())
    })*/
})
//server.close()
server.listen(3000,'localhost',function(){
console.log(server.address());

})
//end事件表示客户端关闭与服务端的连接
//unref表示关闭时退出程序