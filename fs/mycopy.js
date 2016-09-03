/**
 * Created by wxh-user on 2016/4/1.
 */
/**
 * Created by wxh-user on 2016/4/1.
 */
var fs=require("fs");
/* fs.writeFileSync('3.mp3',fs.readFileSync("1.mp3"))
fs.unlink('3.mp3') */
var readStream = fs.createReadStream('./1.f4v');
var writeStream = fs.createWriteStream('./img/1.f4v');
readStream.pipe(writeStream)
fs.unlink('./1.f4v')

