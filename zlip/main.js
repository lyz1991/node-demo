/**
 * Created by lyz on 2016/5/15.
 */
var zlip=require("zlib");
var gzip=zlip.createGunzip();
var fs=require("fs");
var infs=fs.createReadStream("../test.txt").pipe(gzip).pipe(fs.createWriteStream('../test.gz'))
