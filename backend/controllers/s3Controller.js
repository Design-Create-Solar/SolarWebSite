const fs = require('fs');
const AWS = require('aws-sdk');
// require('dotenv').config()
const BUCKET_NAME = process.env.S3_BUCKET;
const IAM_USER_KEY = process.env.ACCESS_KEY_ID
const IAM_USER_SECRET = process.env.SECRET_ACCESS_KEY
const s3bucket = new AWS.S3({
  accessKeyId: IAM_USER_KEY,
  secretAccessKey: IAM_USER_SECRET
})

function deleteFromS3(fileName) {
  const params = {
    Bucket: BUCKET_NAME,
    Key: fileName,
  };

  return new Promise((resolve, reject) => {
    s3bucket.deleteObject(params, function (err, data) {
      if (err) return reject(err);
      return resolve(data);
    })
  })
}

function uploadToS3(fileName) {
  const readStream = fs.createReadStream(`public/${fileName}`);

  const params = {
    Bucket: BUCKET_NAME,
    Key: "myapp" + "/" + fileName.split('/')[fileName.split('/').length - 1],
    Body: readStream
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
      console.log(err)
      return "Error occured"
    }
    // returing the response with file path and name
    return ('File Saved');
  });

  await uploadToS3(`${myFile.name}`).then(() => ('uploaded')).catch((err) => ('err: ' + err))

  return "myapp" + "/" + myFile.name.split('/')[myFile.name.split('/').length - 1]

}

const saveImage = (req, res) => {
  const myFiles = req.files.file;

  const names = myFiles.map(file => {
    return processFile(file)
  })

  res.json(names)
}


module.exports = {
  saveImage, processFile, deleteFromS3
}