const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  //check if user in db
  const userExist = await User.findOne({ name: req.body.name });
  if (userExist) {
    return res.send("User already exists.");
  }

  //hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send("Registered!");
  } catch (err) {
    res.send(err);
  }
});

//login
router.post("/login", async (req, res) => {
  console.log("received request!");

  //check if user in db
  const user = await User.findOne({ name: req.body.name });
  if (!user) {
    return res.status(400).send("Name not found.");
  }

  //password is correct
  await bcrypt
    .compare(req.body.password, user.password)
    .then((result) => {
      if (!result) {
        return res.status(400).send("Password incorrect");
      }
    })
    .catch((err) => {
      console.log(err);
    });

  // //create and assign token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
});

module.exports = router;
