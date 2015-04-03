var express = require('express');
var linksCtrl = require('./controllers/links')
var router = express.Router();
var app = express();
var bodyParser = require('body-parser')
var db=require("./models");


app.use(bodyParser.urlencoded({extended:false}))
app.set("view engine", "ejs");
app.use("/links", linksCtrl);

app.get("/", function(req,res){
  res.render('index');
})


app.get("/:hash", function(req,res){
  console.log(req.params.hash);
  var shorten= parseInt(hashids.decode(req.params.hash));
  db.links.find(decoder).then(function(decoded){
    console.log(decoded)
    res.redirect(decoded.url);
  })
})







app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000!")
})