// ENV VARIABLES
const dotenv = require("dotenv").config();
const fileUpload = require("express-fileupload");
var cookieParser = require("cookie-parser");

//Databases
const mongoose = require("mongoose");

const express = require("express"),
  app = express(),
  PORT = 5000;
const cors = require("cors");
app.use(
  cors({
    credentials: true,
    origin:
      process.env.ENV === "production"
        ? "http://designcreatesolar.org"
        : "http://localhost:3000",
  })
);
app.use(cookieParser());

// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload({ createParentPath: true }));

//ROUTES
app.use("/data", require("./routes/dataRoute"));
app.use("/auth", require("./routes/authRoute"));
app.use("/block", require("./routes/blockRoute"));
app.use("/sheets", require("./routes/sheetRoute"));

//connect to mongodb
mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) console.log(err);
    else console.log("Connected");
  }
);

app.listen(PORT, () => console.log("Server listening on port " + PORT + "."));
