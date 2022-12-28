const express = require('express');
const router = express.Router();
const db = require('../config/database/mysql');
const controller = require('../controller/index');

router.get('/slot88/game', controller.slot88.getAll);


module.exports = router;