var express = require('express');
var router = express.Router();
var axios = require('axios');
var Forecast = require('../models/Forecast');

//"./locations/"

router.get('/get/:fullname', async function (req, res) {
	const forecast = await Forecast.find({ fullname: req.params.fullname });
	res.send(forecast);
});

router.post('/add', async function (req, res) {
	let returner = await axios({
		method: 'post',
		url: 'https://BestTime.app/api/v1/forecasts?',
		params: {
			api_key_private: process.env.BESTTIME_API_PRIVATE_KEY,
			venue_name: req.body.fullname,
			venue_address: req.body.address,
		},
	})
		.then((response) => {
			const forecast = new Forecast({
				fullname: req.body.fullname,
				data: response.data,
				headers: response.headers,
			});
			forecast.save();
			return forecast;
		})
		.catch((error) => {
			console.log(error);
			return error;
		});
	res.send(returner);
});

router.post('/update', async function (req, res) {
	let returner = await axios({
		method: 'post',
		url: 'https://BestTime.app/api/v1/forecasts?',
		params: {
			api_key_private: process.env.BESTTIME_API_PRIVATE_KEY,
			venue_name: req.body.fullname,
			venue_address: req.body.address,
		},
	})
		.then((response) => {
			Forecast.findOneAndUpdate(
				{ fullname: req.body.fullname },
				{ data: response.data, headers: response.headers },
				(err) => {
					if (err) return err;
					return 'updated';
				}
			);
		})
		.catch((error) => {
			console.log(error);
			return error;
			// res.send(error);
		});
	res.send(returner);
});

module.exports = router;
