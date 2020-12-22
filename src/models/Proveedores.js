const mongoose = require ('mongoose');
const ProveedoresSchema = mongoose.Schema({
    codigo:{
        type:Number,
        min:1,
        unique:true
    },
    
   
     vendedor:{
         type:Number,
         minlength :1,
         required: true
     },
 
     cliente:{
         type:Number,
         minlength :1,
         required: true
         
     },
 
     producto:{
        type:Number,
        minlength :1,
        required: true
        
    },
     
    cliente:{
        type:Number,
        minlength :1,
        required: true
        
    },

    cantidad:{
        type:String,
        minlength :1,
        required: true
        
    },
    
    valor_total:{
        type:String,
        minlength :4,
        required: true
        
    }

 
 
 });

 module.exports =  mongoose.model('Proveedores',ProveedoresSchema);