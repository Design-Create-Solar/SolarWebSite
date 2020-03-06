const router = require("express").Router();
const client = require("../config/influx.js");
const socketIO = require("socket.io");

// const io = require("../server");
const sockettest = async (data) => {
  try {
    const io = require("../server.js");
    // console.log(io)
    io.emit("FromAPI", data)
  } catch (error) {
    console.log("came in here")
    console.error(`Error ${error.code}`)
    console.log(io)
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

    .then((data) => {
      let type = "BMS";
      let reader = client.query(type);
      reader.then(data => {
        sockettest(JSON.stringify(data))
        console.log("router.get /query/type/time success!");
      })
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
    .then(() => {
      console.info("write BMS point success")
      //////
      let type = "BMS";
      let reader = client.query(type);
      // let stime = 100;
      // let etime = 0;
      // reader.end = "-" + etime + "h";
      // reader.start = "-" + stime + "h";
      reader
        .then(data => {
          // res.send(JSON.stringify(data));
          sockettest(JSON.stringify(data))
          console.log("router.get /query/type/time success!");
        })
        .catch(err => {
          console.error(err);
        });
  })
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
      sockettest(JSON.stringify(data))
      console.log("router.get /query/type/time success!");
    })
    .catch(err => {
      console.error(err);
    });
});

module.exports = router;