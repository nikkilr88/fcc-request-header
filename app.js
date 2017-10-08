var express = require("express"),
    app = express();
 
app.use(express.static(__dirname+"/public")); 
 
app.get("/", function(req, res){
   res.render("index.html");
}); 
    
app.get("/whoami", function(req, res) {
    
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

app.listen(process.env.PORT, function(){
   console.log("Server started"); 
});
