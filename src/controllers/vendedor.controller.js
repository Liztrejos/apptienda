const { response } = require('express');
const Vendedores = require('../models/Vendedores');

//encuentra lista de Vendedorss 
const findAll = (req, res) => {

    Vendedores.find()
        .then(vendedores => {
            res.status(200).send(vendedores)
        }).catch(err => {
            res.status(500).send({
                "menssage": "ocurrio un problema" || err.menssage
            })
        })
}

const findOne = (req, res) => {
    var cod = parseInt(req.params.codigo);
    Vendedores.find({ "codigo": cod })
        .then(vendedor => {
            if (vendedor.length == 0) {
                console.log("No encontro vendedor");
                res.status(404).send({
                    "message": "No encontró el vendedor"
                });
            } else {
                console.log("Encontro");
                res.status(200).send(vendedor);
            }
        }).catch(err => {
            res.status(500).send({
                "menssage": "ocurrio un problema" || err.menssage
            })
        })
}

module.exports={
    findAll,
    findOne
}