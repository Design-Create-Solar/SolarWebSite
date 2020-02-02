
const Influx = require('influxdb-nodejs')
const express = require("express")
const bodyParser = require("body-parser")
const dataRoutes = require("./routes/data")
const socketIo = require('socket.io')

const app = express()
const PORT = 5000
app.use(bodyParser.json())
app.use("/data", dataRoutes)
app.use(bodyParser.urlencoded({ extended: true }))
const server = socketIo[app]
app.listen(PORT, () => {
    console.log("Listening on " + PORT)
})

let interval;
io.on("connection", socket => {
    console.log("New client connected");
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => console.log("still connected"), 10000);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

