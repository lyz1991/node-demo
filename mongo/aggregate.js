var mongo =require('mongodb')
var util = require('util')
var host = 'localhost'
var port = 27017;
var server = new mongo.Server(host, port, {auto_reconnect: true});
var db = new mongo.Db('example', server, {safe: true});
var data =[{name:'lyz',age:'23'},{name:'lyz',age:'21'},{name:'lyz',age:'22'}];
db.open(function(err, db){
    db.collection('users', function(err, collection){
        collection.insert(data, function (err,docs){
            collection.find().count()
            collection.find({}).toArray(function(err,docs){

            })
            collection.aggregate([{$unwind:'$subject'},{$group:{_id:'$name',total:{$avg:'$subject.age'}}}],function(err,c){
                console.log(c)

            })

        })
    })
})