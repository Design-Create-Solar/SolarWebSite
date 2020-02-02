const router = require("express").Router();
const client = require("../config/influx.js");
const socketIO = require("socket.io");
const sockettest = async (socket, data) => {
  try {
    socket.emit("FromAPI", data)
  } catch (error) {
    console.error('Error ${error.code}')
  }
}

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
    .then(() => {
      sockettest("teststring")
      console.info("write point success")
    })
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

router.get("/query/:type/all", (req, res) => {
  let type = req.params.type;
  let reader = client.query(type);
  reader
    .then(data => {
      res.send(JSON.stringify(data));
    })
    .catch(err => {
      console.error(err);
    });
});

router.get("/query/:type/:number", (req, res) => {
  let type = req.params.type;
  let number = req.params.number;
  let reader = client.query(type);
  reader.limit = number;
  reader
    .then(data => {
      res.send(JSON.stringify(data));
      console.log("GET success!");
    })
    .catch(err => {
      console.error(err);
    });
});

router.get("/query/:type/start/:stime/end/:etime", (req, res) => {
  let type = req.params.type;
  let reader = client.query(type);
  let stime = req.params.stime;
  let etime = req.params.etime;
  reader.end = "-" + etime + "h";
  reader.start = "-" + stime + "h";
  reader
    .then(data => {
      res.send(JSON.stringify(data));
      console.log("router.get /query/type/time success!");
    })
    .catch(err => {
      console.error(err);
    });
});

module.exports = router;
