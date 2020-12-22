const { Router } = require ('express');
const router = Router();

const { findAll , findOne} = require('../controllers/proveedores.controller');

router.get('/api/proveedores' , findAll);
router.get('/api/proveedores/:codigo' , findOne);

module.exports = router;