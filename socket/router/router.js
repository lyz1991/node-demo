/**
 * Created by dell on 2016/5/7.
 */
var exprss=require("express");
var bodyParser = require('body-parser');

var router=exprss.Router();


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.get("/app/test",function(req,res){
    res.send("2")
})

module.exports=router;
