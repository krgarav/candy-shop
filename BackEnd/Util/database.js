const Sequelize = require('sequelize');
const sequelize = new Sequelize('candy_stock', 'root', '123456789', {
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize;