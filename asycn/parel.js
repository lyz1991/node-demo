const async = require('async');
const fs = require('fs')
async.parallel([
    (callback) => {
        fs.readFile('../abc.txt', 'utf-8', callback)
    }, (callback) => {
        fs.readFile('../demo1', 'utf-8', callback)
    }
], (err, result) => {
    console.log(result)
})
