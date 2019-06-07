const sequelize = require('../config/dbConfig');
const Sequelize = require('sequelize');

const User = sequelize.define('user',{
    userId : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement:true },
    emailId: { type: Sequelize.STRING, unique:true },
    contactNum: { type:Sequelize.STRING, unique:true },
    password: { type: Sequelize.STRING, }
});

module.exports = User;