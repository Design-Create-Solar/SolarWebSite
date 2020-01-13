const router = require("express").Router()
const client = require("../config/influx.js")

var voltage = 35443
var zen = 3453
var azi = 45

router.post("/add", (req, res) => {
    let sID = req.body.sID
    let tempValue = req.body.value
    let deviceString = req.body.device

    client.write('temperatureSensor')
        .tag({
            sensorID: sID,
        })
        .field({
            temperature: tempValue,
            measureDevice: deviceString,
        })
        .then(() => console.info('write point success'))
        .catch(console.error);

    res.json({
        hello: "4"
    })

})

router.post("/addBMS", (req, res) => {
    client.write('BMS')
        .tag({
            sensorID: sID,
        })
        .field({
            temperature: tempValue,
            voltage: voltage,
        })
        .then(() => console.info('write BMS point success'))
        .catch(console.error);
})

router.post("/addAcc", (req, res) => {
    client.write('accelerometer')
        .tag({
            sensorID: sID,
        })
        .field({
            Zenith: zen,
            Azimuth: azi,
        })
        .then(() => console.info('write point success'))
        .catch(console.error);
})

module.exports = router;