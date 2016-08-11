/**
 * Created by dell on 2016/5/10.
 */
/*udp协议无需创建连接*/
var dgram=require('dgram');
var server=dgram.createSocket('udp4');
server.on('message',function(meg,info){
    console.log('服务端接受'+meg)
});
server.on('listening',function(){
    console.log('开始接听')
})

server.bind(3000,'localhost')