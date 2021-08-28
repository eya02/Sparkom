const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    //* if we don't have a token replace("Bearer ", "") will throw an error
    const token = req.header("Authorization").replace("Bearer ", "");
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    // return data sent & iat(issued at): timestamp
    const user = await User.findOne({
      //! verify _id and token exist in DB
      _id: decodedToken._id,
      "tokens.token": token,
    });
    if (!user) throw new Error();
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Access Denied" });
  }
};

module.exports = auth;
