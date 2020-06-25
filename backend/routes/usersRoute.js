const router = require("express").Router();
const verify = require("../middleware/verifytoken");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// ENV VARIABLES
const dotenv = require("dotenv").config();

//give user info
router.get("/", verify, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    _id: user._id,
  });
});

//Return true or false based on authentication status
router.post("/tokenIsValid", async (req, res) => {
  console.log("tokenIsValid request receieved");
  try {
    const token = req.header("auth-token");
    if (!token) return res.json(false);

    var verified = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified._id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500);
  }
});

module.exports = router;
