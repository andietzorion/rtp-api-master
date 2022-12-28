const express = require('express');
const router = express.Router();
const db = require('../config/database/mysql');
const controller = require('../controller/index');

router.get('/habanero/game', controller.habanero.getAll);


module.exports = router;