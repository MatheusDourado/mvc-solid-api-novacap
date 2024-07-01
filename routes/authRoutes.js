const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/get-token', authController.getToken);

module.exports = router;
