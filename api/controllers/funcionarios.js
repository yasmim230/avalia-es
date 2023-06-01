const Funcionarios = require('../models/funcionarios');
const { Sequelize } = require('sequelize');

module.exports = {
    async getAll(req, res) {
        const sequelize = new Sequelize("crud_node", "root", "743478589Y", {

            host: "localhost",
            dialect: "mysql"

        });

        const funcionarios = await Funcionarios(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(funcionarios);
    },

    async create(req, res) {

        const sequelize = new Sequelize("crud_node", "root", "743478589Y", {

            host: "localhost",
            dialect: "mysql"

        });

        await Funcionarios(sequelize, Sequelize.DataTypes).create({
            funcionarios: req.body.funcionarios,
        })

        res.status(200).send({ mensagem: "worker added" });



    },
    async update(req, res) {

        const sequelize = new Sequelize("crud_node", "root", "743478589Y", {

            host: "localhost",
            dialect: "mysql"

        });

        await Funcionarios(sequelize, Sequelize.DataTypes).update({
            funcionarios: req.body.funcionarios,
        }, { where: { id: req.params.id } }
        );

        res.status(200).send({ mensagem: "edited sucess" });



    },
    async delete(req, res) {

        const sequelize = new Sequelize("crud_node", "root", "743478589Y", {

            host: "localhost",
            dialect: "mysql"

        });

        await Funcionarios(sequelize, Sequelize.DataTypes).destroy(
            { where: { id: req.params.id } }
        );

        res.status(200).send({ mensagem: "deleted" });



    },



};
