var express = require("express");

var router = express.Router();

router.get("/", function(req,res){
    console.log("Page online");
    res.render("index");
});
module.exports = router;