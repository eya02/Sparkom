var express = require("express");
var router = express.Router();
var event = require("../models/event");

/* GET event DB. */
/* router.get('/', function(req, res, next) {
    event.find(function(err,data){
            res.json(data);
    });
  });*/
router.get("/", function (req, res, next) {
  event.find(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render("showevent", { events: data });
    }
  });
});



router.post('/delete/:id', function(req,res,next){
	event.findByIdAndRemove(req.params.id, 
    	function (err, docs) {
      
        res.send("event deleted");
    })
})



/*direction add*/
router.get("/addevent", function (req, res, next) {
  res.render("addev");
});

/*Details*/


/*EDITTTTTTTTTTTTTTTTTT*/
router.post("/edit/:id", function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const newevent = {
    name: obj.name,
    name: obj.Topic,
    description: obj.description,
    adresse: obj.adresse,
    Date: obj.Date,
    Image: obj.Image,
  };
  event.findByIdAndUpdate(req.params.id, newevent, function (err) {
    if (err) {
      res.render("/event/edit/" + req.params.id);
    } else {
      res.redirect("/event");
    }
  });
});

/* Delete event*/

router.get("/delete/:id", function (req, res, next) {
  event.findByIdAndRemove(req.params.id, function (err, docs) {
    if (err) console.log(err);
    res.redirect("/event");
  });
});

/*direction edit*/
router.get("/edit/event/:id", function (req, res, next) {
  event.findById(req.params.id, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render("editevent", { event: data });
    }
  });
});

module.exports = router;