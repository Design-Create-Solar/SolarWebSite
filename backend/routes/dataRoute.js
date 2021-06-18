const {InfluxDB, Point} = require('@influxdata/influxdb-client')
const router = require('express').Router();

// You can generate a Token from the "Tokens Tab" in the UI
const org = process.env.INFLUX_ORG
const bucket = process.env.INFLUX_BUCKET

const client = new InfluxDB({url: process.env.INFLUX_URL, token: process.env.INFLUX_TOKEN})

router.post('/addTemp', (req, res) => {
  const writeApi = client.getWriteApi(org, bucket)
  const {SID, temp} = req.body

  const point = new Point('temperatureSensor')
  .tag('sensorID', SID)
  .floatField('temperature', temp)
  .timestamp(new Date())
  writeApi.writePoint(point)
  writeApi
      .close()
      .then(() => console.log('Successfully wrote temperature point'))
      .catch(e => {
          console.error(e)
          console.log('\\Temperature point write ERROR')
      })
  res.json(point);
})

router.post('/addBMS', (req, res) => {
  const writeApi = client.getWriteApi(org, bucket)
  const {SID, temp, volt} = req.body;
  const point = new Point('BMS')
  .tag('sensorID', SID)
  .floatField('temperature', temp)
  .floatField('voltage', volt)
  .timestamp(new Date())
  writeApi.writePoint(point)
  writeApi
      .close()
      .then(() => console.log('Successfully wrote BMS point'))
      .catch(e => {
          console.error(e)
          console.log('\\BMS point write ERROR')
      })
  res.json(point);
})

router.post('/addAcc', (req, res) => {
  const writeApi = client.getWriteApi(org, bucket)
  const {SID, zenith, azimuth} = req.body;
  const point = new Point('accelerometer')
  .tag('sensorID', SID)
  .floatField('zenith', zenith)
  .floatField('azimuth', azimuth)
  .timestamp(new Date())
  writeApi.writePoint(point)
  writeApi
      .close()
      .then(() => console.log('Successfully wrote accelerometer point'))
      .catch(e => {
          console.error(e)
          console.log('\\accelerometer point write ERROR')
      })
  res.json(point);
})

// e.g. localhost:5000/data/query/last24hr?type=BMS
router.get("/query/last24hr", (req, res) => {
  const queryApi = client.getQueryApi(org)
  const fluxQuery =
  `from(bucket: "${process.env.INFLUX_BUCKET}")
  |> range(start: -24h)
  |> filter(fn: (r) => r["_measurement"] == "${req.query.type}")`

  // for dummy data segment: 
  //   |> range(start: 2021-06-17T04:00:00.505Z, stop: 2021-06-17T07:00:00.505Z)
  // note: UTC time I think...

  // Execute query and receive table metadata and rows.
  // https://v2.docs.influxdata.com/v2.0/reference/syntax/annotated-csv/

  let results = []
  queryApi.queryRows(fluxQuery, {
    next(row, tableMeta) {
      const o = tableMeta.toObject(row)
      // console.log(JSON.stringify(o, null, 2))
      // console.log(
      //   `${o._time} ${o._measurement}: ${o._field}=${o._value}, sensorID=${o.sensorID}`
      // )
      let entry = {
        time: o._time,
        collection: o._measurement,
        sensorID: o.sensorID,
      }
      entry[o._field] = o._value
      results.push(entry)
    },
    error(error) {
      console.error(error)
      console.log(`\ERROR: 24 Hr ${req.query.type} Query`)
    },
    complete() {
      console.log(`\nSUCCESS: 24 Hr ${req.query.type} Query`)
      res.json(results)
    },
  })
})

// e.g. localhost:5000/data/query?type=temperatureSensor&start=2021-06-17T04:00:00.505Z&end=2021-06-17T07:00:00.505Z
router.get("/query", (req, res) => {
  const queryApi = client.getQueryApi(org)
  const fluxQuery =
  `from(bucket: "${process.env.INFLUX_BUCKET}")
  |> range(start: ${new Date(req.query.start).toISOString()}, stop: ${new Date(req.query.end).toISOString()})
  |> filter(fn: (r) => r["_measurement"] == "${req.query.type}")`

  // for dummy data segment: 
  //   |> range(start: 2021-06-17T04:00:00.505Z, stop: 2021-06-17T07:00:00.505Z)
  // note: UTC time I think...

  // Execute query and receive table metadata and rows.
  // https://v2.docs.influxdata.com/v2.0/reference/syntax/annotated-csv/

  let results = []
  queryApi.queryRows(fluxQuery, {
    next(row, tableMeta) {
      const o = tableMeta.toObject(row)
      // console.log(
      //   `${o._time} ${o._measurement}: ${o._field}=${o._value}, sensorID=${o.sensorID}`
      // )
      let entry = {
        time: o._time,
        collection: o._measurement,
        sensorID: o.sensorID,
      }
      entry[o._field] = o._value
      results.push(entry)
    },
    error(error) {
      console.error(error)
      console.log(`\ERROR: Custom Time Range ${req.query.type} Query`)
    },
    complete() {
      console.log(`\nSUCCESS: Custom Time Range ${req.query.type} Query`)
      res.json(results)
    },
  })
})

module.exports = router;
