
/*udp协议无需创建连接*/
var dgram=require('dgram');
var buf=new Buffer('您好');
var client=dgram.createSocket('udp4');
client.send(buf,0,buf.length,3000,'localhost',function(err){

})


