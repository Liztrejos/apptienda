const mongoose = require ('mongoose');
const VentasSchema = mongoose.Schema({
    codigo:{
        type:Number,
        min:1,
        unique:true
    },
    
   
     cod_factura:{
         type:Number,
         minlength :1,
         required: true
     }
 
 });

 module.exports =  mongoose.model('Ventas',VentasSchema);