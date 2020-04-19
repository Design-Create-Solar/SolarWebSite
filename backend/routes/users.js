const router = require("express").Router();
const verify = require("./verifytoken");

//this is to test JWT verification
router.get("/", verify, (req, res) => {
  res.send(req.user);
});

module.exports = router;
