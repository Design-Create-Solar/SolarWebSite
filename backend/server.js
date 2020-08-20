const Influx = require("influxdb-nodejs");
const express = require("express");
const bodyParser = require("body-parser");
const dataRoutes = require("./routes/data");
const socketIo = require("socket.io");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
dotenv.config();

// let dev_db_url = process.env.LOCATIONS_DB_URL;

// mongoose.connect(
//   dev_db_url,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   },
//   () => console.log("connection to mongoDB successful")
// );
// let db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
//end mongoose setup

//routes
const documents = require("./routes/documents");
app.use("/documents", documents);

const locations = require("./routes/locations");
app.use("/locations", locations);

app.use("/data", dataRoutes);

app.use("/static", express.static("media"));

app.use(bodyParser.urlencoded({ extended: true }));
const server = require("http").Server(app);
const io = socketIo(server);
// app.listen(4000, () => {
//     console.log("App listening on " + 4000)
// })
server.listen(PORT, () => {
  console.log("Listening on " + PORT);
});

// let interval;
// io.on("connection", (socket) => {
//   console.log("New client connected");
//   module.exports = socket;
//   if (interval) {
//     clearInterval(interval);
//   }
//   interval = setInterval(
//     () => /* insert get request here? */ console.log("still connected"),
//     10000
//   );
//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//   });
// });
