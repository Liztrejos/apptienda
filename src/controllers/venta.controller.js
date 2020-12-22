const { response } = require('express');
const Ventas = require('../models/Ventas');

//encuentra lista de Ventass 
const findAll = (req, res) => {

    Ventas.find()
        .then(ventas => {
            res.status(200).send(ventas)
        }).catch(err => {
            res.status(500).send({
                "menssage": "ocurrio un problema" || err.menssage
            })
        })
}

const findOne = (req, res) => {
    var cod = parseInt(req.params.codigo);
    Ventas.find({ "codigo": cod })
        .then(venta => {
            if (venta.length == 0) {
                console.log("No encontro venta");
                res.status(404).send({
                    "message": "No encontró el venta"
                });
            } else {
                console.log("Encontro");
                res.status(200).send(venta);
            }
        }).catch(err => {
            res.status(500).send({
                "menssage": "ocurrio un problema" || err.menssage
            })
        })
}

const create = (req, res) => {


    const ventas = new Ventas({
        codigo:req.body.codigo,
        cod_factura: req.body.cod_factura

    });

    ventas.save()
        .then(ventas => {

            res.status(200).send(ventas);

        }).catch(err => {
            res.status(500).send("Ocurrio un error");
        })

}

const update = (req, res) => {

    const cod = req.params.codigo;
    Ventas.update(
        { "codigo": cod },
        {
            $set: {
                cod_factura: req.body.cod_factura   

            }

        }


    )
        .then(venta => {

            res.status(200).send(venta);

        }).catch(err => {
            res.status(500).send("Ocurrio un error");
        })

}

const deletes=(req,res)=>{

    var cod = parseInt(req.params.codigo);
    Ventas.remove({"codigo": cod})
        .then(venta =>{

            if (venta.deletedCount == 0){
                console.log("No se eliminó");
                res.status(404).send("No se encontró el venta");
            }else{
                res.status(200).send("Se elimino venta")
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