const { response } = require('express');
const Facturas = require('../models/Facturas');


//encuentra lista de Facturas
const findAll = (req, res) => {

    Facturas.find()
        .then(factura => {
            res.status(200).send(factura)
        }).catch(err => {
            res.status(500).send({
                "menssage": "ocurrio un problema" || err.menssage
            })
        })
}

const findOne = (req, res) => {

    var cod = parseInt(req.params.codigo);
    Facturas.find({ "codigo": cod })
        .then(facturas => {
            if (facturas.length == 0) {
                console.log("No encontro producto");
                res.status(404).send({
                    "message": "No encontró el facturas"
                });
            } else {
                console.log("Encontrado");
                res.status(200).send(facturas);
            }
        }).catch(err => {
            res.status(500).send({
                "menssage": "ocurrio un problema" || err.menssage
            })
        })
}

const create = (req, res) => {


    const facturas = new Facturas({
        codigo:req.body.codigo,
        vendedor: req.body.vendedor,
        cliente: req.body.cliente,
        producto: req.body.proveedor,
        cantidad:req.body.cantidad,
        valor_total: req.body.valor_total
    });

    facturas.save()
        .then(factura => {

            res.status(200).send(factura);

        }).catch(err => {
            res.status(500).send("Ocurrio un error");
        })

}

const update = (req, res) => {

    const cod = req.params.codigo;
    Facturas.update(
        { "codigo": cod },
        {
            $set: {
                vendedor: req.body.vendedor,
                cliente: req.body.cliente,
                producto: req.body.proveedor,
                cantidad:req.body.cantidad,
                valor_total: req.body.valor_total


            }

        }


    )
        .then(facturas => {

            res.status(200).send(facturas);

        }).catch(err => {
            res.status(500).send("Ocurrio un error");
        })

}

const deletes=(req,res)=>{

    var cod = parseInt(req.params.codigo);
    Facturas.remove({"codigo": cod})
        .then(factura =>{

            if (factura.deletedCount == 0){
                console.log("No se eliminó");
                res.status(404).send("No se encontró el factura");
            }else{
                res.status(200).send("Se elimino factura")
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