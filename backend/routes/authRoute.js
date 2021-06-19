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
  //check if user in db
  const user = await User.findOne({ name: req.body.name });
  if (!user) {
    return res.status(400).send("Name not found.");
  }

  const result = await bcrypt.compare(req.body.password, user.password);
  if (!result) res.status(401).send("Wrong password");
  else { // if it's the right userename and password, sign cookie
    let token = jwt.sign(
      { 'exp': Math.floor(new Date().getTime() / 1000) + 7200, _id: user._id  },
      process.env.TOKEN_SECRET,
      { 'header': { 'alg': 'HS256', 'typ': 'JWT' } }
    );

    res.cookie('jwt', token, { httpOnly: false }).send("Authentication successful");
  }
});

// verify session
router.get("/verify", (req, res) => {
  if (!req.cookies.jwt) res.status(403).send("No jwt cookie");
  else
    jwt.verify(req.cookies.jwt, process.env.TOKEN_SECRET, function (err, decoded) {
      if (err) res.status(402).send(err);
      else res.status(200).send("Good session");
    })
});

// logout
router.post("/logout", async (req, res) => {
  res.clearCookie('jwt');
  if (req.body.page === "/blocks" || req.body.page === "/editmembers" ) {
    res.status(301).send("Goodbye");
  } else res.status(200).send("Goodbye");
})

module.exports = router;
