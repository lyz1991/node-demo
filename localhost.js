var fs = require('fs');
var request = require("request");
var cheerio = require("cheerio");
var mkdirp = require('mkdirp');

//目标网址
var url = 'abc';

//本地存储目录e
var dir = './images';

//创建目录
mkdirp(dir, function(err) {
    if(err){
        console.log(err);
    }
});

//发送请求
request(url, function(error, response, body) {
    if(error) throw error
    if(!error && response.statusCode == 200) {
        console.log(body)
        var $ = cheerio.load(body);
        $('img').each(function() {
            var src = $(this).attr('src');
            console.log(src)
            download(src, dir, Math.floor(Math.random()*100000) + '.jpg');
        });
    }
});

//下载方法
var download = function(url, dir, filename){
    request.head(url, function(err, res, body){
        request(url).pipe(fs.createWriteStream(dir + "/" + filename));
    });
};
