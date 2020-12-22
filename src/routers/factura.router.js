const { Router } = require ('express');
const router = Router();

const { findAll , findOne, create, deletes ,update} = require('../controllers/factura.controller');

router.get('/api/facturas' , findAll);
router.get('/api/facturas/:codigo' , findOne);
router.post('/api/facturas' , create);
router.delete('/api/facturas/:codigo' , deletes);
router.put('/api/facturas/:codigo' , update);

module.exports = router;