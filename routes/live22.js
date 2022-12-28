const express = require('express');
const router = express.Router();
const db = require('../config/database/mysql');
const controller = require('../controller/index');

router.get('/live22/game', controller.live22.getAll);


module.exports = router;