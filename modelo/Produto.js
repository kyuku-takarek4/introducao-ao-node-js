const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Produto extends Model {}

Produto.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(255)
    },
    descricao: {
        type: DataTypes.TEXT
    },
    preco: {
        type: DataTypes.DECIMAL(10,2)
    }
}, {
    sequelize,
    modelName: 'produto',
    timestamps: false
});

module.exports = Produto;