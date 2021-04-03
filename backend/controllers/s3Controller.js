const fs = require('fs');
const AWS = require('aws-sdk');
// const env = require('env');
// require('dotenv').config()
const BUCKET_NAME = process.env.BUCKET_NAME;
const IAM_USER_KEY = process.env.IAM_USER_KEY;
const IAM_USER_SECRET = process.env.IAM_USER_SECRET;
const s3bucket = new AWS.S3({
	accessKeyId: IAM_USER_KEY,
	secretAccessKey: IAM_USER_SECRET,
});

function uploadToS3(fileName) {
	const readStream = fs.createReadStream(`public/${fileName}`);
	console.log(fileName.split('/'));
	console.log(readStream);

	const params = {
		Bucket: BUCKET_NAME,
		Key:
			'myapp' + '/' + fileName.split('/')[fileName.split('/').length - 1],
		Body: readStream,
	};

	return new Promise((resolve, reject) => {
		s3bucket.upload(params, function (err, data) {
			readStream.destroy();

			if (err) {
				return reject(err);
			}

			return resolve(data);
		});
	});
}

async function processFile(myFile) {
	await myFile.mv(`public/${myFile.name}`, function (err) {
		if (err) {
			console.log(err);
			return 'Error occured';
		}
		// returing the response with file path and name
		return 'File Saved';
	});

	await uploadToS3(`${myFile.name}`)
		.then(() => 'uploaded')
		.catch((err) => 'err: ' + err);
	// https://elasticbeanstalk-us-west-2-127661128201.s3-us-west-2.amazonaws.com/myapp/clementyo.jpg

	return (
		'https://elasticbeanstalk-us-west-2-127661128201.s3-us-west-2.amazonaws.com/myapp' +
		'/' +
		myFile.name.split('/')[myFile.name.split('/').length - 1]
	);
}

const saveImage = (req, res) => {
	const myFiles = req.files.file;

	const names = myFiles.map((file) => {
		return processFile(file);
	});

	console.log(names);

	res.json(names);
};

module.exports = {
	saveImage,
	processFile,
};
