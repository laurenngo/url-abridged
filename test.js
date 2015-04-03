var db=require("./models");


// db.urls.find({where: {longUrl: 'www.google.com'}}).then(function(links) {
//   console.log("hello");// you can now access the newly created task via the variable data
// })

// db.urls.findOrCreate({where: {longUrl:"Lenny.com"}}).spread(function(foundUrl,created){
//   console.log(foundUrl.get());
//   console.log(created);
// })

db.urls.find({where: {longUrl: "Lenny.com"}}).then(function(url){
  url.destroy().then(function(){
    console.log("BLAH");
  })
})

// db.user.create({firstName: "Anil"}).then(function(user){
//   console.log("This user was just created:", createdUser.get());
//   // createdUser.lastName="Bridgpal"
//   // createdUser.save();
//   // createdUser.set("lastName", "B").save();
//   // res.render("someTemplate", {user:user})
// })
