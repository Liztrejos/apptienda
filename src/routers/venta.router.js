const { Router } = require ('express');
const router = Router();

const { findAll , findOne, create, deletes ,update} = require('../controllers/venta.controller');

router.get('/api/ventas' , findAll);
router.get('/api/ventas/:codigo' , findOne);
router.post('/api/ventas' , create);
router.delete('/api/ventas/:codigo' , deletes);
router.put('/api/ventas/:codigo' , update);

module.exports = router;