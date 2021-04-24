const Block = require('../models/blockModel');
const mongoose = require('mongoose');

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
	const myFiles = req.files;

	const names = Object.keys(myFiles).map((fileName) => {
		return processFile(myFiles[fileName]);
	});

	const fileNames = await Promise.all(names);
	let block = new Block({ ...req.query, images: fileNames });

	block.save((err, info) => {
		if (err) return err;
		res.json({newId: info._id, fileNames});
	});
};

exports.block_edit = async (req, res) => {
	const { _id } = req.query;
	Block.findById(mongoose.Types.ObjectId(_id), async (err, oldData) => {
		if (err) return err;

		const newData = req.files ? req.files : {};

		// figure out which images to delete
		// 1. get files that remained untouched by user
		// 2. get those files' names
		// 3. the files in oldData that don't have those file names must've been deleted
		const filesAlreadyIncluded = Object.values(newData).filter((file) => 
			oldData.images.includes(`myapp/${file.name}`)
		);
		const filesAlreadyIncludedNames = filesAlreadyIncluded.map(
			(file) => `myapp/${file.name}`
		);
		const toDelete = oldData.images.filter(
			(name) => !filesAlreadyIncludedNames.includes(name)
		);
		const s3Delete = toDelete.map((fileLink) => {
			return deleteFromS3(fileLink);
		});

		// figure out which images to add
		const filesExcluded = Object.values(newData).filter((file) => 
			!oldData.images.includes(`myapp/${file.name}`)
		);
		const filesAdded = Object.keys(filesExcluded).map((fileName) => {
			return processFile(filesExcluded[fileName]);
		});	

		Promise.all(filesAdded)
		.then((namesToAdd) => {
			req.query.images = [...namesToAdd, ...filesAlreadyIncludedNames];
			const updateBlock = Block.findByIdAndUpdate(_id, { $set: req.query });

			Promise.all([s3Delete, updateBlock])
			.then(() => {
				console.log('DONE!');
				res.send('Block updated!');
			})
		})
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
