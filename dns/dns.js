/**
 * Created by lyz on 2016/5/23.
 */
var dns=require("dns");
dns.lookup('baidu.com',4,function(err,address){
    console.log(address)
})
dns.resolve('www.baidu.com','A',function(e,r){
    console.log(r)
})
dns.reverse('111.13.101.208',function(e,r){
    console.log(r)
})