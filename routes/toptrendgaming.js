const express = require('express');
const router = express.Router();
const db = require('../config/database/mysql');
const controller = require('../controller/index');

router.get('/toptrendgaming/game', controller.toptrendgaming.getAll);


module.exports = router;