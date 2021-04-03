var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlockSchema = new Schema({
	// id: {
	//   type: Number,
	//   required: [true, "id is required"],
	// },
	page: {
		type: String,
		required: [true, 'page is required'],
	},
	// type: {
	//   type: String,
	//   required: [true, "type of block is required"],
	// },
	text: {
		type: String,
		max: 20000,
	},
	images: {
		type: [String],
	},
	align: {
		type: String,
	},
	header: {
		type: String,
	},
	color: {
		type: String,
	},
});

module.exports = mongoose.model('Block', BlockSchema);
