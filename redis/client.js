/**
 * Created by lyz on 2016/7/21.
 */
var redis = require('redis'),
    client = redis.createClient();
client.subscribe('lyz')
client.on('message', function(channel, msg){
    console.log(msg)
})