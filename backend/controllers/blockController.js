const Block = require('../models/blockModel');
const uploadBase64 = require('../aws/uploadBase64');

const { processFile, deleteFromS3 } = require('./s3Controller');

exports.block_details = (req, res) => {
	Block.find({}, (err, block) => {
		if (err) return err;
		res.send(block);
	});
};

//GET BY DB ID
exports.block_details_bydbid = (req, res) => {
	//send the block if found
	Block.findById(req.params.id, (err, block) => {
		if (err) return err;
		res.send(block);
	});
};

//GET BY ID
exports.block_details_byid = (req, res) => {
	Block.findOne({ page: req.params.page }, (err, block) => {
		if (err) return err;
		res.send(block);
	});
};

//GET BY PAGE NAME
exports.block_details_bypage = (req, res) => {
	Block.find({ page: req.params.page }, (err, block) => {
		if (err) return err;
		res.send(block);
	});
};

//GET BY TYPE
exports.block_details_bytype = (req, res) => {
	Block.findOne({ type: req.params.type }, (err, block) => {
		if (err) return err;
		res.send(block);
	});
};

//CREATE BLOCK
exports.block_create = async (req, res) => {
	//each images[i] corresponds to a titles[i]

	//for each base64 string in req.body.images
	//run upload base64 and add the result to images array

	const myFiles = req.files;

	const names = Object.keys(myFiles).map((fileName) => {
		return processFile(myFiles[fileName]);
	});

	const fileNames = await Promise.all(names);
	let block = new Block({ ...req.query, images: fileNames });

	block.save((err, info) => {
		if (err) return err;
		res.json(info._id);
	});
};

exports.block_edit = async (req, res) => {
	//each images[i] corresponds to a titles[i]

	//for each base64 string in req.body.images
	//run upload base64 and add the result to images array
	const { id } = req.query;
	console.log(req.query);

	Block.findById(id, async (err, block) => {
		if (err) return err;

		const { _id, blockData } = block;

		const myFiles = req.files;

		const filesAlreadyIncluded = Object.keys(myFiles).filter((file) =>
			block.images.includes(myFiles[file].name)
		);

		const filesAlreadyIncludedNames = filesAlreadyIncluded.map(
			(file) => myFiles[file].name
		);

		const filesNotAlreadyIncluded = Object.keys(myFiles).filter(
			(file) => !filesAlreadyIncluded.includes(file)
		);

		const filesToBeDeleted = blocks.images.filter(
			(file) => !filesAlreadyIncludedNames.includes(file)
		); //TODO: delete once merged with jessicas delete function

		const filesNotAlreadyIncludedNamesPromises = filesNotAlreadyIncluded.map(
			(fileName) => {
				console.log(myFiles[fileName]);
				return processFile(myFiles[fileName]);
			}
		);

		const filesNotAlreadyIncludedNames = await Promise.all(
			filesNotAlreadyIncludedNamesPromises
		);

		const fileNames = [
			...filesNotAlreadyIncludedNames,
			...filesAlreadyIncludedNames,
		];

		console.log(fileNames);

		const returnBlock = await Block.replaceOne(
			{ _id },
			{ ...blockData, images: fileNames }
		);

		console.log(returnBlock);
		res.json(returnBlock);

		// let block = new Block({ ...req.query, images: fileNames });

		// block.save((err, info) => {
		// 	if (err) return err;
		// 	res.json(info._id);
		// });
	});
};

//UPDATE BLOCK BY DB ID
exports.block_update_db_id = async (req, res) => {
	// if (req.body.images) {
	//   base64Array = req.body.images;
	//   titlesArray = req.body.titles;
	//   var images = [];
	//   for (var i = 0; i < base64Array.length; i++) {
	//     var url = await uploadBase64(base64Array[i], titlesArray[i]);
	//     images.push(url);
	//   }
	//   req.body.images = images;
	// }

	Block.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
		if (err) return err;
		res.send('Block updated!');
	});
};

//UPDATE BLOCK BY CUSTOM ID
// exports.block_update_id = async (req, res) => {
// 	//check if block exists
// 	const blockExists = await Block.findOne({ id: req.params.id });
// 	if (!blockExists) {
// 		res.send('Block does not exist.');
// 		console.log('Update was attempted on block id that does not exist.');
// 		return;
// 	}

// 	if (req.body.images) {
// 		base64Array = req.body.images;
// 		titlesArray = req.body.titles;
// 		var images = [];
// 		for (var i = 0; i < base64Array.length; i++) {
// 			var url = await uploadBase64(base64Array[i], titlesArray[i]);
// 			images.push(url);
// 		}

// 		req.body.images = images;
// 	}

// 	await Block.findOneAndUpdate({ id: req.params.id }, req.body, (err) => {
// 		if (err) return err;
// 		res.send('Block updated!');
// 	});
// };

//DELETE BLOCK BY DB ID
exports.block_delete = async (req, res) => {
	const block = await Block.findById(req.params.id);

	// if block exists, remove it
	if (block) {
		const s3Delete = block.images.map((fileLink) => {
			return deleteFromS3(fileLink);
		});
		const mongoDelete = Block.findByIdAndRemove(req.params.id);

		Promise.all([s3Delete, mongoDelete])
			.then(() => res.send('Block was deleted successfully!'))
			.catch((err) => console.log(err));
	} else {
		res.send('Block does not exist!');
	}
};

//DELETE BLOCK BY PARAMS
exports.block_delete_params = async (req, res) => {
	/*req.body example:

	{
	text: This is the text of the block,
	header: Header text,
	direction: right
	}

	*/
	const blockExists = await Block.findOne(req.body);
	if (blockExists) {
		Block.findOneAndDelete(req.body, (err) => {
			if (err) return err;
			res.send('Block deleted by params!');
		});
	} else {
		res.send('Block does not exist!');
	}
};
