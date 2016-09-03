/**
 * Created by lyz on 2016-09-03.
 */
const fs = require('fs');
fs.writeFile('./demo','窗前明月光，疑是地上霜，举头望明月，低头思故乡', function(){
 fs.readFile('./demo' ,function(err, data) {
        console.log(data.toString())
    })

});
