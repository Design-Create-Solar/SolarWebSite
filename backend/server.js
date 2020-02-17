
const Influx = require('influxdb-nodejs')
//const client = new Influx('http://127.0.0.1:8086/testdb') //no auth
const express = require("express")
const bodyParser = require("body-parser")
const dataRoutes = require("./routes/data")
const app = express()
const PORT = 5001
app.use(bodyParser.json())
app.use("/data", dataRoutes)

app.use('/static', express.static('media'))

app.use(bodyParser.urlencoded({ extended: true }))
app.listen(PORT, () => {
    console.log("Listening on " + PORT)
})

