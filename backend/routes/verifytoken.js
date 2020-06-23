const jwt = require("jsonwebtoken");

//will verify that the request's "auth-token" header is valid, used as a middleware function
//use this on pages that require login
//example:

// const verify = require("./verifyToken");

// router.get("/", verify, (req, res) => {
//   res.send("restricted access");
// });

module.exports = function auth(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
