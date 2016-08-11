/**
 * Created by lyz on 2016/5/15.
 */
var zlip=require("zlib");
var gzip=zlip.createGunzip();
var fs=require("fs");
var inp=fs.createReadStream('../test.gz').pipe(gzip).pipe(fs.createWriteStream('../abc.txt'))