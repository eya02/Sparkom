var express = require("express");
var router = express.Router();
var List = require("../Models/lists");
var Card = require("../Models/cards");
/*router.get("/show", function (req, res, next) {
    List.find(function (err, data) {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  });*/

router.get("/", function (req, res, next) {
  List.find(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});
router.get("/:id", function (req, res, next) {
  List.find({board_id: req.params.id },function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});
router.post("/", function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const newgroup = {
    List_name: obj.list_name, 
    Order: obj.order
  };
  List.create(newgroup, function (err) {
    if (err) {
      res.render("/");
    } else {
      res.redirect("/lists/");
    }
  });
});
router.post("/", function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const newgroup = {
    List_name: obj.list_name, 
    Order: obj.order
  };
  List.create(newgroup, function (err) {
    if (err) {
      res.render("/");
    } else {
      res.redirect("/lists/");
    }
  });
});
router.post("/add/:id", function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const newgroup = {
    List_name: obj.list_name, 
    Order: obj.order,
    board_id: req.params.id

  };
  List.create(newgroup, function (err) {
    if (err) {
      res.render("/");
    } else {
      res.redirect("/lists/");
    }
  });
});



/*router.post("/", function (req, res, next) {
  var user = new List({
    list_name: "todo",
    order: 1
  });
  user.save();
  res.send("Added");
});*/
router.get("/delete/:id", function (req, res, next) {
  Card.deleteMany({list_id: req.params.id }, function (err, docs) {
    if (err) console.log(err);
  });
  List.findByIdAndRemove(req.params.id, function (err, docs) {
    if (err) console.log(err);
    res.redirect("/lists/");
  });
});
router.get("/detail/list/:id", function (req, res, next) {
  List.findById(req.params.id, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});
module.exports = router;
