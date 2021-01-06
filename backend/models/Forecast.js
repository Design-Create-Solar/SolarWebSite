const mongoose = require('mongoose');

const schema = mongoose.Schema({
	fullname: String,
	data: {},
	headers: {},
});

module.exports = mongoose.model('Forecast', schema);
