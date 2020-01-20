const Influx = require('influxdb-nodejs')
const client = new Influx('http://127.0.0.1:8086/testdb') //no auth

// i --> integer
// s --> string
// f --> float
// b --> boolean
const tempFieldSchema = {
    temperature: 'f',
    measureDevice: 's',
};
const tempTagSchema = {
    sensorID: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']
};
client.schema('temperatureSensor', tempFieldSchema, tempTagSchema, {
    stripUnknown: true,
});



const bmsFieldSchema = {
    temperature: 'f',
    voltage: 'f',
};
const bmsTagSchema = {
    sensorID: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']
};
client.schema('BMS', bmsFieldSchema, bmsTagSchema, {
    stripUnknown: true,
});


const accFieldSchema = {
    Zenith: 'f',
    Azimuth: 'f',
};
const accTagSchema = {
    sensorID: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']
};
client.schema('accelerometer', accFieldSchema, accTagSchema, {
    stripUnknown: true,
});



module.exports = client;