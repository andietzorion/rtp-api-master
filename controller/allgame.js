const model = require('../config/model/index');
const controller = {};
const { Op } = require("sequelize");

// Menampilkan seluruh Game yang ada di Database
controller.getAll = async function (req,res) {
    try {
        let data = await model.allgame.findAll({
            attributes: ['id','game_name','img_url','rtp_percentage','bet_start','bet_end','gacor_time_start','gacor_time_end'],
        })
        if (data.length > 0) {
            res.status(200).json({
                items: data,
                message: 'Menampilkan Semua Data Game'
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

controller.getOne = async function (req,res) {
    try {
        let data = await model.allgame.findAll({
            where: {
                id: req.params.id
            },
            attributes: ['provider_name','show_rtp','show_patterns','show_dc','game_name','img_url','rtp_percentage','bet_start','bet_end'],
            include: [
                { model: model.pattern}
            ]
        })
        if (data.length > 0) {
            res.status(200).json({
                items: data,
                message: 'detail game',
                status: 200
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

controller.post = async function (req,res){
    try {
        let data = await model.allgame.create({
            provider_name: req.body.provider_name,
            show_rtp: req.body.show_rtp,
            show_patterns: req.body.show_patterns,
            show_dc: req.body.show_dc,
            game_name: req.body.game_name,
            img_url: req.body.img_url,
            rtp_percentage: req.body.rtp_percentage,
            bet_start: req.body.bet_start,
            bet_end: req.body.bet_end,
            gacor_time_start: req.body.gacor_time_start,
            gacor_time_end: req.body.gacor_time_end
        })
        res.status(201).json({
            items: data,
            message: 'Berhasil Tambah Items'
        })
    } catch (error) {
        res.status(404).json({
           message: error
       })

    }
}

controller.put = async function (req,res){
    try {
        let data = await model.allgame.update({
            show_rtp: req.body.show_rtp,
            show_patterns: req.body.show_patterns,
            show_dc: req.body.show_dc,
            rtp_percentage: req.body.rtp_percentage,
            bet_start: req.body.bet_start,
            bet_end: req.body.bet_end,
            gacor_time_start: req.body.gacor_time_start,
            gacor_time_end: req.body.gacor_time_end
        },{
            where: {
                id: req.params.id
            }
        })
        res.status(201).json({
            items: data,
            message: 'Berhasil Edit Game'
        })
    } catch (error) {
        res.status(404).json({
           message: error
       })

    }
}

controller.delete = async function (req,res){
    try {
        let data = await model.allgame.destroy({
            where: {
                id: req.params.id
            }       
        })
        res.status(201).json({
            items: data,
            message: 'Berhasil Hapus Game'
        })
    } catch (error) {
        res.status(404).json({
           message: error
       })

    }
}

controller.getSearch = async function (req,res) {
    const search = req.query.keyword;
    try {
        let data = await model.allgame.findAll({
            where: {
                [Op.or]: [{
                    provider_name : {
                        [Op.like]: '%' +search+ ''
                    }
                },{
                    game_name : {
                        [Op.like]: '%' +search+ ''
                    }
                }]
            }
        })
        if (data.length > 0) {
            res.status(200).json({
                items: data,
                message: 'detail game',
                status: 200
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

controller.post = async function (req,res){
    try {
        let data = await model.allgame.bulkCreate(req.body)
        res.status(201).json({
            items: data,
            message: 'Berhasil Tambah Banyak Items'
        })
    } catch (error) {
        res.status(404).json({
           message: error
       })

    }
}

module.exports = controller;