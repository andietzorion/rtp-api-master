const express = require('express');
const router = express.Router();
const db = require('../config/database/mysql');
const controller = require('../controller/index');

router.get('/jili/game', controller.jili.getAll);


module.exports = router;