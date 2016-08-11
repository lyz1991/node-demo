var mongo =require('mongodb')
var util = require('util')
var host = 'localhost'
var port = 27017;
var server = new mongo.Server(host, port, {auto_reconnect: true});
var db = new mongo.Db('example', server, {safe: true});
db.open(function(err,db){
    if(err) throw err;
    else {
        db.collection('user',function(err,collection){
            collection.update({},{$set:{name:'lyz',lover:'乔乐乐'}},{multi:true},function(err,result) {
                if(err){
                    throw err
                } else{
                    collection.find({},{fields:{_id:0}}).toArray(function(err,docs){
                        if(err){
                            throw err
                        }
                        console.log(docs)
                        db.close()
                    })
                }
            })
        })
    }

})
db.on('close', function(err,db){

})