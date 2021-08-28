var express = require("express");
var router = express.Router();
var path = require("path");
var Board = require("../Models/boards");
var List = require("../Models/lists");
var Card = require("../Models/cards");


/*router.get("/show", function (req, res, next) {
  Board.find(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render("board", { boards: data });
    }
  });
});*/
const {
  getAllUsers
} = require("../controllers/user.controller");

const {
  
  AddMember,
  LeaveBoard,
  IsAMember
 
} = require("../controllers/board.controller");
router.put("/AddMember", AddMember);
router.put("/LeaveBoard",  LeaveBoard);

router.get("/", function (req, res, next) {
  Board.find(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});
router.get("/:id", function (req, res, next) {
  Board.find({creator_id: req.params.id},function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});
router.get("/detail/:id", function (req, res, next) {
  Board.findById(req.params.id,function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});
router.get("/get/Allusers",  getAllUsers);
router.get("/get/members/all/:board_id/:userId",  IsAMember);
router.get("/get/boards/name", function (req, res, next) {
  const search = req.body.board_name;
  Board.find({Board_name:{$regex: `${search}`,$options: '$i'} })
  .then(data=>{
    res.send(data);
  });
});
/*router.get("/findMember/:id", function (req, res, next) {
  Board.find({_id:req.params.id,function (err, data) {
    if (err) {
      console.log(err);
    } else {

      res.json(data);
    }
  });
});*/
/*router.get("/add/board", function (req, res, next) {
  res.render("addboard");
});*/
router.post("/", function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const newgroup = {
    Board_name: obj.board_name, 
    Is_public: obj.is_public
  };
  Board.create(newgroup, function (err) {
    if (err) {
      res.render("/");
    } else {
      res.redirect("/boards/");
    }
  });
});
router.post("/add/:id", function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const newgroup = {
    Board_name: obj.board_name, 
    Is_public: obj.is_public,
    creator_id: req.params.id
  };
  Board.create(newgroup, function (err) {
    if (err) {
      res.render("/");
    } else {
      res.redirect("/boards/");
    }
  });
});

/*router.post("/add/board", function (req, res, next) {
  console.log(req.body);
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const mynewboard = {
    board_name: obj.board_name,
    is_public: obj.is_public,
  };
  Board.create(mynewboard, function (err) {
    if (err) {
      res.render("/add/board");
    } else {
      res.redirect("/boards/show");
    }
  });
});*/


/*
router.get("/:id", function (req, res, next) {
  Board.findById(req.params.id, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render("boarddetail", {user: data });
  

    }
  });
  
});*/


router.get("/delete/:id", function (req, res, next) {
  List.find({board_id: req.params.id },function (err, data) {
    if (err) {
      console.log(err);
    } else {
      const obj = JSON.parse(JSON.stringify(data));
      if(obj[0]!=null)
     {
      Card.find({list_id: obj[0]["_id"]},function (err, data) {
        if (err) {
          console.log(err);
        } else {
          Card.deleteMany({list_id: obj[0]["_id"]}, function (err, docs) {
            if (err) console.log(err);
          });
         }
      });
    }
      List.deleteMany({board_id: req.params.id }, function (err, docs) {
        if (err) console.log(err);
      });
    }
  });
  
  Board.findByIdAndRemove(req.params.id, function (err, docs) {
    if (err) console.log(err);
    res.redirect("/boards/");
  });
});
router.post("/edit/:id", function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const mynewboard = {
    board_name: obj.board_name,
  };
  Board.findByIdAndUpdate(req.params.id, mynewboard, function (err) {
    if (err) {
      res.render("/edit/" + req.params.id);
    } else {
      res.redirect("/boards/show");
    }
  });
});
router.get("/edit/board/:id", function (req, res, next) {
  Board.findById(req.params.id, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render("editBoard", { board: data });
    }
  });
});

module.exports = router;
