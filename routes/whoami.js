var express = require("express");
var router = express.Router();

router.get("/whoami", function(req, res) {
    
    var pattern = / \((.*?)\) /;
    
    var IP = req.headers["x-forwarded-for"];
    var lang = req.headers["accept-language"].split(",")[0];
    var OS = req.headers["user-agent"].match(pattern)[1];
    
    res.json({
       "IP Address": IP,
       "Language": lang,
       "Software": OS
    }); 
});

module.exports = router;