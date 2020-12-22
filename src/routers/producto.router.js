const { Router } = require ('express');
const router = Router();

const { findAll , findOne, create, deletes ,update} = require('../controllers/producto.controller');

router.get('/api/productos' , findAll);
router.get('/api/productos/:codigo' , findOne);
router.post('/api/productos' , create);
router.delete('/api/productos/:codigo' , deletes);
router.put('/api/productos/:codigo' , update);

module.exports = router;