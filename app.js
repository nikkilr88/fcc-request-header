var express = require("express"),
    app = express();

var whoAmIRoute = require("./routes/whoami"),
    prettyfiedRoute = require("./routes/prettyfied"),
    indexRoute = require("./routes/index");
 
app.use(express.static(__dirname+"/public")); 
app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);

app.use(indexRoute);
app.use(whoAmIRoute); 
app.use(prettyfiedRoute);

app.use(function(req, res, next){
    res.status(404).render('404-error.html');
});

app.listen(process.env.PORT, function(){
   console.log("Server started"); 
});
