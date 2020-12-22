const { response } = require('express');
const Proveedores = require('../models/Proveedores');


//encuentra lista de Proveedoress 
const findAll = (req, res) => {

    Proveedores.find()
        .then(proveedores => {
            res.status(200).send(proveedores)
        }).catch(err => {
            res.status(500).send({
                "menssage": "ocurrio un problema" || err.menssage
            })
        })
}

const findOne = (req, res) => {

    var cod = parseInt(req.params.codigo);
    Proveedores.find({ "codigo": cod })
        .then(proveedores => {
            if (proveedores.length == 0) {
                console.log("No encontro producto");
                res.status(404).send({
                    "message": "No encontró el producto"
                });
            } else {
                console.log("Encontrado");
                res.status(200).send(proveedores);
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