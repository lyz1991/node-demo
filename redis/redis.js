/**
 * Created by lyz on 2016/7/21.
 */
var redis = require('redis'),
client = redis.createClient();
client.publish('lyz','lyz love qll')