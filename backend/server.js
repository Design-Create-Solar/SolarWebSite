
const Influx = require('influxdb-nodejs')
//const client = new Influx('http://127.0.0.1:8086/testdb') //no auth
const mongoDbUrl = require("./config/mongodb")
const mongoose = require("mongoose")
const express = require("express")
const bodyParser = require("body-parser")
const dataRoutes = require("./routes/data")
const fmlRoutes = require("./routes/fml")
const app = express()
const PORT = 5000
app.use(bodyParser.json())
app.use("/data", dataRoutes)

mongoose.connect(mongoDbUrl.toString(), () => {
    console.log("connected to mongo db");
})
app.use("/fml", fmlRoutes)
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(PORT, () => {
    console.log("Listening on " + PORT)
})


