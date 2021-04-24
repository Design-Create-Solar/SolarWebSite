const fs = require('fs');
const AWS = require('aws-sdk');
const {promisify} = require('util');
const rm = promisify(fs.unlink);

// require('dotenv').config()
const BUCKET_NAME = process.env.S3_BUCKET;
const IAM_USER_KEY = process.env.ACCESS_KEY_ID;
const IAM_USER_SECRET = process.env.SECRET_ACCESS_KEY;
const s3bucket = new AWS.S3({
	accessKeyId: IAM_USER_KEY,
	secretAccessKey: IAM_USER_SECRET,
});

function deleteFromS3(fileName) {
	const params = {
		Bucket: BUCKET_NAME,
		Key: fileName,
	};

	return new Promise((resolve, reject) => {
		s3bucket.deleteObject(params, function (err, data) {
			if (err) return reject(err);
			console.log("s3 deleted");
			return resolve(data);
		});
	});
}

function uploadToS3(fileName) {
	const readStream = fs.createReadStream(`public/${fileName}`);
	readStream.pause();
	const params = {
		Bucket: BUCKET_NAME,
		Key: fileName,
		Body: readStream,
		ContentType: 'image/*',
	};

	return new Promise((resolve, reject) => {
		s3bucket.upload(params, function (err, data) {
			readStream.destroy();
			if (err) return reject(err);
			return resolve(data);
		});
	});
}

function processFile(myFile) {
	const fileName = myFile.name;
	const spaceForUnderscore = fileName.split(' ').join('_');
	const finalFileName = `myapp/${Date.now()}${spaceForUnderscore}`;
	
	return myFile.mv(`public/${finalFileName}`)
	.then((err) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log("File Added");
	})
	.then(() => uploadToS3(finalFileName))
	.then(() => console.log('uploaded'))
	.then(() => rm(`public/${finalFileName}`))
	.then((err) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log("File Deleted");

		return finalFileName;
	})
	.catch((err) => {
		console.log(err);
	});
}

module.exports = {
	processFile,
	deleteFromS3,
};
