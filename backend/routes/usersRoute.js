const router = require("express").Router();
const verify = require("../middleware/verifytoken");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// ENV VARIABLES
const dotenv = require("dotenv").config();

//give user info
router.get("/", verify, async (req, res) => {
  const user = await User.find({ "name": req.user.name });
  if (user.length > 0)
    res.json({
      _id: user[0]._id,
    });
});

//Return true or false based on authentication status
router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("auth-token");
    if (!token) return res.json(false);

    var verified = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!verified) return res.json(false);

    User.find({ "name": verified.name })
      .then((user) => {
        if (user.length > 0) return res.json(true)
        return res.json(false)
      })
      .catch((err) => console.log(err))
  } catch (err) {
    res.status(500);
  }
});

module.exports = router;
