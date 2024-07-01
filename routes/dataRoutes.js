const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.post('/send-data', dataController.sendData);

module.exports = router;
