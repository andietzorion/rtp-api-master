const axios = require('axios');
const controller = {};
controller.getAll = async function (req,res){
    axios.get('https://rtp-game.one/rtp/prgmtc/games')
    .then(function(response) {
        res.status(200).json({
            message: 'Data dari Public API',
            data: response.data
        })
    })
    .catch(function (error) {
        res.status(404).json({
            message: error.message
        })
    })
}
module.exports = controller;