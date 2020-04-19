const Influx = require("influxdb-nodejs");
const express = require("express"),
  app = express(),
  PORT = 5000;
const bodyParser = require("body-parser");
const socketIo = require("socket.io");
const cors = require("cors");
app.use(cors());
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

//ROUTES
const dataRoutes = require("./routes/data"); //for time series db
app.use("/data", dataRoutes);
const authRoute = require("./routes/auth"); //contains register and login endpoints eg: /auth/register, /auth/login
app.use("/auth", authRoute);
const usersRoute = require("./routes/users");
app.use("/view/users", usersRoute);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = require("http").Server(app);
const io = socketIo(server);
server.listen(PORT, () => {
  console.log("Listening on " + PORT);
});

//connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to mongodb")
);

let interval;
io.on("connection", (socket) => {
  console.log("New client connected");
  module.exports = socket;
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(
    () => /* insert get request here? */ console.log("still connected"),
    10000
  );
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
