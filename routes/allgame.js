const express = require('express');
const router = express.Router();
const db = require('../config/database/mysql');
const controller = require('../controller/index');

router.get('/game/all', controller.allgame.getAll);
router.get('/search', controller.allgame.getSearch);
router.get('/game/detail/:id', controller.allgame.getOne);
router.post('/game/add/all', controller.allgame.post);
router.post('/game/add', controller.allgame.post);
router.put('/game/update/:id', controller.allgame.put);
router.delete('/game/delete/:id', controller.allgame.delete);

module.exports = router;