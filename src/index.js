const express = require ('express');
const cors = require('cors');
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');
const dbconexion = require('./config/database');

mongoose.connect(dbconexion.url, dbconexion.options)
    .then(() =>{
        console.log("Conexion exitosa");
    }).catch(err =>{
        console.log("Conexion fallo");
        process.exit();
    });

    


const app = express();


app.use(bodyParser.json());
app.use(cors());

app.use(require('./routers/cliente.router'));
app.use(require('./routers/factura.router'));
app.use(require('./routers/producto.router'));
app.use(require('./routers/venta.router'));
app.use(require('./routers/proveedores.router'));
app.use(require('./routers/vendedor.router'));

app.set('port',process.env.PORT || 3000);
app.listen(app.get('port'),() =>{
    console.log("Servidor corre por el puerto", app.get('port'));

})
