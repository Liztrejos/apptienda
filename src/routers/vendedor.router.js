const { Router } = require ('express');
const router = Router();

const { findAll , findOne} = require('../controllers/vendedor.controller');

router.get('/api/vendedores' , findAll);
router.get('/api/vendedores/:codigo' , findOne);


module.exports = router;