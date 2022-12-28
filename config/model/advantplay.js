const Sequelize = require('sequelize');
const db = require('../database/mysql');
const pattern = require ('./pattern');

var advantplay = db.define('items',
{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    provider_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    show_rtp: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    show_patterns: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    show_dc: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    game_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img_url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rtp_percentage: {
        type: Sequelize.INTEGER,
    },
    bet_start: {
        type: Sequelize.INTEGER,
    },
    bet_end: {
        type: Sequelize.INTEGER,
    },
    gacor_time_start: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gacor_time_end: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    freezTableName: true,
    timestamps: false
});

advantplay.hasOne(pattern, { foreignKey: 'game_name'});
advantplay.belongsTo(pattern, { foreignKey: 'game_name'});
module.exports = advantplay;