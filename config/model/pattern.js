const Sequelize = require('sequelize');
const db = require('../database/mysql');

var pattern = db.define('patterns',
{
    game_name: {
        type: Sequelize.STRING,
        allowNull: false, primaryKey: true
    },
    no_autospin: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dc_value: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    pattern_01: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    pattern_02: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    pattern_03: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
    
},{
    freezTableName: true,
    timestamps: false
});

pattern.removeAttribute('id');
module.exports = pattern;
