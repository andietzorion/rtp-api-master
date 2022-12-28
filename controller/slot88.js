const model = require('../config/model/index');
const controller = {};
const { Op } = require("sequelize");

// Menampilkan seluruh Game yang ada di Database
controller.getAll= async function (req,res) {
    try {
        let data = await model.slot88.findAll({
            // Menampilkan Database berdasarkan Nama Provider Game
            where: {provider_name: 'Slot88'},
            // Menampilkan Database Berdasarkan yang ingin di munculkan
            attributes: ['id','game_name','img_url','rtp_percentage','bet_start','bet_end','gacor_time_start','gacor_time_end'],
            // Mengurutkan urutan Game Berdasarkan Abjad
            // order: [['game_name','asc']],
            limit: 50
        })
        if (data.length > 0) {
            res.status(200).json({
                items: data,
                message: 'Menampilkan Data Game Slot88',
                gameTotal : 50,
                status : 200
            })
        }else{
            res.status(200).json({
                items: [],
                message: 'Data Game Tidak Ada'
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
}

module.exports = controller;