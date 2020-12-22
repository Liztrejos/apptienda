const { response } = require('express');
const Cliente = require('../models/Clientes');

//encuentra lista de clientes 
const findAll = (req, res) => {

    Cliente.find()
        .then(clientes => {
            res.status(200).send(clientes)
        }).catch(err => {
            res.status(500).send({
                "menssage": "ocurrio un problema" || err.menssage
            })
        })
}

const findOne = (req, res) => {

    var cod = parseInt(req.params.codigo);
    Cliente.find({ "codigo": cod })
        .then(cliente => {
            if (cliente.length == 0) {
                console.log("No encontro cliente");
                res.status(404).send({
                    "message": "No encontró el cliente"
                });
            } else {
                console.log("Encontro");
                res.status(200).send(cliente);
            }
        }).catch(err => {
            res.status(500).send({
                "menssage": "ocurrio un problema" || err.menssage
            })
        });
    
}

const create = (req, res) => {


    const cliente = new Cliente({
        codigo:req.body.codigo,
        nombre: req.body.nombre,
        cedula: req.body.cedula,
        telefono: req.body.telefono

    });
    cliente.save()
        .then(clientes => {
            res.status(200).send(clientes);

        }).catch(err => {
            res.status(500).send("Ocurrio un error");
        });

}

const update = (req, res) => {

    const cod = req.params.codigo;
    Cliente.update(
        { "codigo": cod },
        {
            $set: {
                nombre: req.body.nombre,
                cedula: req.body.cedula,
                telefono: req.body.telefono

            }

        }


    )
        .then(cliente => {

            res.status(200).send(cliente);

        }).catch(err => {
            res.status(500).send("Ocurrio un error");
        })

}

const deletes=(req,res)=>{

    var cod = parseInt(req.params.codigo);
    Cliente.remove({"codigo": cod})
        .then(cliente =>{

            if (cliente.deletedCount == 0){
                console.log("No se eliminó");
                res.status(404).send("No se encontró el cliente");
            }else{
                res.status(200).send("Se elimino cliente")
            }
        }).catch(err => {
            res.status(500).send("Ocurrio un error")
        })

};

module.exports={
    findAll,
    findOne,
    create,
    deletes,
    update
}