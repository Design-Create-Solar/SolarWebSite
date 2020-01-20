
const Influx = require('influxdb-nodejs')
const express = require("express")
const bodyParser = require("body-parser")
const dataRoutes = require("./routes/data")
const app = express()
const PORT = 5000
app.use(bodyParser.json())
app.use("/data", dataRoutes)
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(PORT, () => {
    console.log("Listening on " + PORT)
})


