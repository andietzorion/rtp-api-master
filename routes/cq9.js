const express = require('express');
const router = express.Router();
const db = require('../config/database/mysql');
const controller = require('../controller/index');

router.get('/cq9/game', controller.cq9.getAll);


module.exports = router;