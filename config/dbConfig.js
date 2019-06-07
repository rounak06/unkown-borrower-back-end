const DB_NAME = 'UnknownBorrowers';
const DB_USERNAME = 'UBAdmin';
const DB_PASSWORD = 'adminpassword';


const Sequelize = require('sequelize');
const sequelize = new Sequelize(DB_NAME,DB_USERNAME,DB_PASSWORD,{
    host:'unknownborrowers.ca3toreibndq.us-east-1.rds.amazonaws.com',
    port: 3306,
    logging: console.log,
    maxConcurrentQueries: 100,
    dialect: 'mysql',
    dialectOptions: {
        ssl:'Amazon RDS'
    },
    pool: { maxConnections: 5, maxIdleTime: 30},
    language: 'en',
    operatorsAliases: false
});

module.exports = sequelize;