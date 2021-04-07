const express = require('express');

const router = express.Router();

const s3Controller = require('../controllers/s3Controller');

router.post('/saveImage', s3Controller.saveImage)

module.exports = router