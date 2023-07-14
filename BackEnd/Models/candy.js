const Sequelize = require("sequelize");
const sequelize = require("../Util/database");

const Candy = sequelize.define('candies', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

module.exports = Candy;