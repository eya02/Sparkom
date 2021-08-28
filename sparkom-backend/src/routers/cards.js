var express = require("express");
var router = express.Router();
var Card = require("../Models/cards");
var List = require("../Models/lists");
const {
  AddDescription,
  AddDueDate,
  AddMembers,
  DeleteMember,
  UpdateList
} = require("../controllers/card.controller");

router.put("/AddDescription/:card_id", AddDescription);
router.put("/AddDueDate/:card_id", AddDueDate);
router.put("/AddMembers/card", AddMembers);
router.put("/deleteMembers/card", DeleteMember);
router.put("/UpdateList/card", UpdateList);

router.get("/", function (req, res, next) {
  Card.find(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});
router.get("/:id", function (req, res, next) {
  Card.find({list_id: req.params.id },function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});
router.get("/board/:id", function (req, res, next) {
  Card.find({list_id: req.params.id },function (err, data) {
    if (err) {
      console.log(err);
    } else {
      List.findById(req.params.id, function (err, dataa) {
        if (err) {
          console.log(err);
        } else {
          res.json(dataa);
        }
      });

    }
  });
});
router.get("/detail/:id", function (req, res, next) {
  Card.findById(req.params.id,function (err, data) {
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
    Card_name: obj.card_name,
    Description: obj.list_name, 
    Order: obj.order
  };
  Card.create(newgroup, function (err) {
    if (err) {
      res.render("/");
    } else {
      res.redirect("/cards/");
    }
  });
});
router.post("/add/:id", function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const newgroup = {
    list_id: req.params.id,
    Card_name: obj.card_name,
    Description: obj.list_name, 
    Order: obj.order,
   

  };
  Card.create(newgroup, function (err) {
    if (err) {
      res.render("/");
    } else {
      res.redirect("/lists/");
    }
  });
});
/*router.post("/", function (req, res, next) {
  var user = new Card({
    description: "descriptionnn",
    order: 1
  });
  user.save();
  res.send("Added");
});*/
router.get("/delete/:id", function (req, res, next) {
  Card.findByIdAndRemove(req.params.id, function (err, docs) {
    if (err) console.log(err);
    res.redirect("/cards/");
  });
});
module.exports = router;
