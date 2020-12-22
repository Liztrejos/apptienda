const mongoose = require ('mongoose');
const ProductoSchema = mongoose.Schema({
    codigo:{
        type:Number,
        min:1,
        unique:true
    },
    
   
     nom_producto:{
         type:String,
         minlength :4,
         required: true
     },
 
     precio:{
         type:String,
         minlength :4,
         required: true
         
     },
 
     fecha_entrada:{
        type:String,
        minlength :7,
        required: true
        
    },
     
    proveedor:{
        type:String,
        minlength :1,
        required: true
        
    }

    

 
 
 });

 module.exports =  mongoose.model('Producto',ProductoSchema);
