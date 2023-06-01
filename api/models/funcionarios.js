"use strict";
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
class funcionarios extends Model{}

funcionarios.init({
        funcionarios: DataTypes.STRING,
},
{
sequelize,
modelName:'funcionarios',
timestamps: false,

}
);

return funcionarios

}