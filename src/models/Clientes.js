const mongoose = require ('mongoose');
const ClientesSchema = mongoose.Schema({
    codigo:{
        type:Number,
        min:1, 
        unique: true
    },
    
   
     nombre:{
         type:String,
         minlength :3,
         required: true
     },
 
     cedula:{
         type:String,
         minlength :4,
         
     },
 
     telefono:{
         type:String,
         minlength :7,
         
     },

    
 
 
 });

 module.exports =  mongoose.model('cliente',ClientesSchema);