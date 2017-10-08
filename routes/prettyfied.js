var express = require("express"),
    router = express.Router(),
    whois = require('whois-json'),
    parser = require("ua-parser-js");

router.get("/pretty-ip", function(req, res){
    var IP = req.headers["x-forwarded-for"];
    var ua = parser(req.headers['user-agent']);
    whois(IP, function(err, data){
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            res.render("pretty-ip", {ip: IP, ua: ua, data: data});
        }
    });
});

module.exports = router;