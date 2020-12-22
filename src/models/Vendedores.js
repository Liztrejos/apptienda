const mongoose = require ('mongoose');
const VendoresSchema = mongoose.Schema({
    codigo:{
        type:Number,
        min:1,
        unique:true
    },
    
   
     nombre:{
         type:String,
         minlength :3,
         required: true
     },
 
     cedula:{
         type:String,
         minlength :10,
         required: true
         
     },
 
     telefono:{
        type:String,
        minlength :10,
        
        
    },
     
    cod_proveedor:{
        type:Number,
        minlength :1,
        required: true
        
    }

    

 
 
 });

 module.exports =  mongoose.model('Vendedores',VendoresSchema);