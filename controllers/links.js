var express = require('express');
var router = express.Router();
var db=require("../models");
var Hashids = require("hashids"),
    hashids = new Hashids("blahblah");



router.post("/", function(req,res){

  var longUrl = req.body.inputUrl;

  db.urls.findOrCreate({where: {longUrl:req.body.inputUrl}}).spread(function(foundUrl,created){
  console.log(foundUrl.get());
  console.log(created);

  var id = foundUrl.id;
  var hash = hashids.encode(id);

  foundUrl.shortUrl = hash;

  foundUrl.save().then(function(){
    res.redirect('/links/'+id);
  })


})

  // res.send(longUrl);
})

// })

router.get("/:id", function (req,res){
  db.urls.find(req.params.id).then (function(data){
    res.send(data.get())
    // res.render("links/show", data);
  })
  // res.send(req.params.id)
});



module.exports = router;