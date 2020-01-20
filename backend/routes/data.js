const router = require("express").Router();
const client = require("../config/influx.js");

router.post("/add", (req, res) => {
  let sID = req.body.sID;
  let tempValue = req.body.tempValue;
  let deviceString = req.body.device;

  client
    .write("temperatureSensor")
    .tag({
      sensorID: sID
    })
    .field({
      temperature: tempValue,
      measureDevice: deviceString
    })
    .then(() => console.info("write point success"))
    .catch(console.error);

  res.json({
    test: "arbitrary response"
  });
});

router.post("/addBMS", (req, res) => {
  let sID = req.body.sID;
  let tempValue = req.body.tempValue;
  let voltage = req.body.voltage;
  client
    .write("BMS")
    .tag({
      sensorID: sID
    })
    .field({
      temperature: tempValue,
      voltage: voltage
    })
    .then(() => console.info("write BMS point success"))
    .catch(console.error);

  res.json({
    test: "arbitrary response"
  });
});

router.post("/addAcc", (req, res) => {
  let sID = req.body.sID;
  let Zenith = req.body.Zenith;
  let Azimuth = req.body.Azimuth;
  client
    .write("accelerometer")
    .tag({
      sensorID: sID
    })
    .field({
      Zenith: Zenith,
      Azimuth: Azimuth
    })
    .then(() => console.info("write point success"))
    .catch(console.error);

  res.json({
    test: "arbitrary response"
  });
});

module.exports = router;
