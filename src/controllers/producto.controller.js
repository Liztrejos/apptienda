const { response } = require('express');
const Productos = require('../models/Productos');


//encuentra lista de Productoss 
const findAll = (req, res) => {

    Productos.find()
        .then(productos => {
            res.status(200).send(productos)
        }).catch(err => {
            res.status(500).send({
                "menssage": "ocurrio un problema" || err.menssage
            })
        })
}

const findOne = (req, res) => {

    var cod = parseInt(req.params.codigo);
    Productos.find({ "codigo": cod })
        .then(productos => {
            if (productos.length == 0) {
                console.log("No encontro producto");
                res.status(404).send({
                    "message": "No encontró el producto"
                });
            } else {
                console.log("Encontrado");
                res.status(200).send(productos);
            }
        }).catch(err => {
            res.status(500).send({
                "menssage": "ocurrio un problema" || err.menssage
            })
        })
}

const create = (req, res) => {


    const productos = new Productos({
        codigo:req.body.codigo,
        nom_producto: req.body.nom_producto,
        precio: req.body.precio,
        proveedor: req.body.proveedor,
        fecha_entrada:req.body.fecha_entrada

    });

    productos.save()
        .then(productos => {

            res.status(200).send(productos);

        }).catch(err => {
            res.status(500).send("Ocurrio un error");
        })

}

const update = (req, res) => {

    const cod = req.params.codigo;
    Productos.update(
        { "codigo": cod },
        {
            $set: {
                nom_producto: req.body.nom_producto,
                precio: req.body.precio,
                proveedor: req.body.proveedor,
                fecha_entrada:req.body.fecha_entrada


            }

        }


    )
        .then(productos => {

            res.status(200).send(productos);

        }).catch(err => {
            res.status(500).send("Ocurrio un error");
        })

}

const deletes=(req,res)=>{

    var cod = parseInt(req.params.codigo);
    Productos.remove({"codigo": cod})
        .then(productos =>{

            if (productos.deletedCount == 0){
                console.log("No se eliminó");
                res.status(404).send("No se encontró el productos");
            }else{
                res.status(200).send("Se elimino productos")
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