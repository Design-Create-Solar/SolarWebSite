const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  //check if user in db
  User.findOne({ name: req.body.name })
    .then(console.log, res.status(400).send("Username already exists"))
    .catch(console.error);

  //hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    password: req.body.password, //change to hashedPassword to store the hashed pass
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//login
router.post("/login", async (req, res) => {
  console.log("received request!");
  //check if user in db

  User.findOne({ name: req.body.name })
    .exec()
    .then(console.log)
    .then(res.status(400).send("Name not found"))
    .then(
      bcrypt.compare(
        req.body.password
        //insert bcrpt compare 2nd arg !!! problem
      )
    )
    .catch(console.error);
  //password is correct
  // const validPass = await bcrypt.compare(req.body.password, user.password);
  // if (!validPass) return res.status(400).send("Password incorrect");

  // //create and assign token
  // const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  // res.header("auth-token", token).send(token);
});

module.exports = router;
