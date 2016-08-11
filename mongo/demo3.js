/**
 * Created by lyz on 2016/7/17.
 */
var mongo =require('mongodb')
var util = require('util')
var host = 'localhost'
var port = 27017;
var server = new mongo.Server(host, port, {auto_reconnect: true});
var db = new mongo.Db('example', server, {safe: true});
db.open(function(err,db){
    if(err) throw err;
    else {
        console.log('success');
        db.collection('user', function(err,collection) {
            collection.insert({name:'账单', lover: '乔乐乐', age:12})
            collection.createIndex({age:1})
        })
        db.collection('user',function(err,collection){
            collection.find({name:'刘云钊'},{fields:{_id:0},hint:{age:1},max:{age:13}}).toArray(function(err,docs){
                if(err) throw err
                //console.log(docs)
            })


        })
        db.collection('user',function(err,collection){
            collection.remove({},function(err,result){
                if(err) throw err
                else {
                    collection.find({}).toArray(function(err,docs){
                        console.log(docs.length)
                    })
                }
            })
        })
    }
})
