/**
 * Created by dell on 2016/5/10.
 */
var net=require("net");
var client=new net.Socket();
client.setEncoding('utf8');
client.connect(3000,'localhost',function(){
    console.log('客户端连接')
    client.write('你好');
    client.end("goodbye")
});
client.on('data',function(data){
    console.log(data)
})