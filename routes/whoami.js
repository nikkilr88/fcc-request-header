var express = require("express");
var router = express.Router();

router.get("/whoami", function(req, res) {
    
    var pattern = / \((.*?)\) /;
    
    var IP = req.headers["x-forwarded-for"];
    var lang = req.headers["accept-language"].split(",")[0];
    var OS = req.headers["user-agent"].match(pattern)[1];
    
    var obj = {
       "IP Address": IP,
       "Language": lang,
       "Software": OS
    };
   
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(obj, null, 4));
});

module.exports = router;