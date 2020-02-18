const Influx = require("influxdb-nodejs");
const express = require("express");
const bodyParser = require("body-parser");
const dataRoutes = require("./routes/data");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const socketIo = require("socket.io");
//auth:
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use("/data", dataRoutes);
app.use("/auth", authRoute);
app.use("/view/users", usersRoute);
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
  () => console.log("connected to db")
);

let interval;
io.on("connection", socket => {
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
